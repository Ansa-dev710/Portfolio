"use client";

import { useEffect, useRef } from "react";

type Dot = {
	originX: number;
	originY: number;
	x: number;
	y: number;
};

/**
 * Grid of dots that gently follow the pointer.
 * Drawn on a canvas for perf so it can sit behind hero content.
 */
export default function InteractiveDotField({
	colorRGB = "255,255,255",
	background = "transparent",
	spacing = 36,
	influence = 180,
}: {
	colorRGB?: string;
	background?: string;
	spacing?: number;
	influence?: number;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const dotsRef = useRef<Dot[]>([]);
	const pointerRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });
	const rafRef = useRef<number | null>(null);

	// Build grid on mount + resize
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const createGrid = () => {
			const { innerWidth, innerHeight } = window;
			canvas.width = innerWidth;
			canvas.height = innerHeight;
			const cols = Math.ceil(innerWidth / spacing);
			const rows = Math.ceil(innerHeight / spacing);
			const dots: Dot[] = [];
			for (let y = 0; y <= rows; y++) {
				for (let x = 0; x <= cols; x++) {
					const px = x * spacing + (y % 2 === 0 ? spacing / 2 : 0); // slight offset per row
					const py = y * spacing;
					dots.push({ originX: px, originY: py, x: px, y: py });
				}
			}
			dotsRef.current = dots;
		};

		createGrid();
		window.addEventListener("resize", createGrid);
		return () => window.removeEventListener("resize", createGrid);
	}, [spacing]);

	// Pointer tracking
	useEffect(() => {
		const updatePointer = (event: PointerEvent) => {
			pointerRef.current = { x: event.clientX, y: event.clientY };
		};
		const hidePointer = () => {
			pointerRef.current = { x: -9999, y: -9999 };
		};
		window.addEventListener("pointermove", updatePointer);
		window.addEventListener("pointerdown", updatePointer);
		window.addEventListener("pointerleave", hidePointer);
		return () => {
			window.removeEventListener("pointermove", updatePointer);
			window.removeEventListener("pointerdown", updatePointer);
			window.removeEventListener("pointerleave", hidePointer);
		};
	}, []);

	// Render loop
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (background !== "transparent") {
				ctx.fillStyle = background;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}

			const { x: px, y: py } = pointerRef.current;
			for (const dot of dotsRef.current) {
				// spring back to origin
				dot.x += (dot.originX - dot.x) * 0.08;
				dot.y += (dot.originY - dot.y) * 0.08;

				const dx = px - dot.originX;
				const dy = py - dot.originY;
				const dist = Math.hypot(dx, dy);

				if (dist < influence) {
					const push = (1 - dist / influence) * 10; // max displacement
					dot.x -= (dx / (dist || 1)) * push;
					dot.y -= (dy / (dist || 1)) * push;
				}

				const radius = 1.4 + Math.max(0, (influence - dist) / influence) * 1.3;
				const alpha = 0.35 + Math.max(0, (influence - dist) / influence) * 0.35;
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${colorRGB},${alpha.toFixed(2)})`;
				ctx.fill();
			}

			rafRef.current = requestAnimationFrame(draw);
		};

		rafRef.current = requestAnimationFrame(draw);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [background, colorRGB, influence]);

	return (
		<div className="absolute inset-0 pointer-events-none z-10">
			<canvas ref={canvasRef} className="w-full h-full" />
		</div>
	);
}
