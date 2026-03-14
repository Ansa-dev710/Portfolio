"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import InteractiveDotField from "./InteractiveDotField";

export default function Hero() {
	const [step, setStep] = useState(1);
	const primaryBtnClasses =
		"relative inline-flex items-center justify-center px-10 py-4 text-[12px] font-semibold uppercase tracking-[2px] rounded-full bg-gradient-to-r from-[#B5BFA1] via-[#d4e0ba] to-[#9fb394] text-black shadow-[0_10px_40px_rgba(181,191,161,0.4)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_14px_50px_rgba(181,191,161,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5BFA1]";
	const ghostBtnClasses =
		"relative inline-flex items-center justify-center px-10 py-4 text-[12px] font-semibold uppercase tracking-[2px] rounded-full border border-[#3a3a3a] text-[#d5d5d5] bg-[#111]/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#B5BFA1] hover:text-white hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5BFA1]";

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prev) => (prev === 1 ? 2 : 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const textVariants: Variants = {
		initial: { opacity: 0, x: -20 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 20 },
	};

	return (
		<section
			id="home"
			className="relative h-screen w-full flex items-center bg-[#0a0a0a] overflow-hidden">
			<div
				className="absolute inset-0 bg-[#111111] z-10 hidden lg:block"
				style={{ clipPath: "polygon(0 0, 42% 0, 32% 100%, 0% 100%)" }}
			/>

			<div className="absolute top-0 right-0 w-full lg:w-[68%] h-full z-0 bg-black">
				<AnimatePresence mode="wait">
					<motion.div
						key={step}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className="relative w-full h-full">
						<Image
							src={step === 1 ? "/hero1.png" : "/hero-2.png"}
							alt="Ansa Portfolio"
							fill
							priority
							className="object-cover object-center lg:object-right grayscale opacity-80"
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Pointer-reactive dot layer */}
			<InteractiveDotField colorRGB="181,191,161" influence={220} />

			<div className="container mx-auto px-6 lg:px-24 z-20 relative flex justify-center text-center items-center">
				<AnimatePresence mode="wait">
					{step === 1 ? (
						<motion.div
							key="step1"
							variants={textVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="w-full lg:w-[45%] mx-auto">
							<span className="uppercase tracking-[4px] text-[11px] font-bold text-[#B5BFA1] block mb-6">
								Hello! I am Ansa
							</span>
							<h1 className="text-[32px] md:text-[45px] lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tighter">
								Creative <span className="text-[#B5BFA1]">Web</span> <br />
								Developer & Designer
							</h1>

							<div className="flex flex-wrap justify-center mt-10 gap-4">
								<a
									href="mailto:ansaasgar710@gmail.com?subject=Hiring Inquiry&body=Hi Ansa, I would like to discuss a project with you."
									className={primaryBtnClasses}>
									Hire me
								</a>
								<a href="/cv.pdf" className={ghostBtnClasses}>
									Download CV
								</a>
							</div>
						</motion.div>
					) : (
						<motion.div
							key="step2"
							variants={textVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="w-full lg:w-[45%] mx-auto">
							<span className="uppercase tracking-[4px] text-[11px] font-bold text-[#B5BFA1] block mb-6">
								We Design & Build Brands
							</span>

							<h1 className="text-[32px] md:text-[45px] lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tighter">
								Hi, I am <span className="text-[#B5BFA1]">Ansa</span> This is my
								favorite work
							</h1>

							<div className="flex flex-wrap justify-center  gap-4 mt-10">
								<a
									href="mailto:ansaasgar710@gmail.com?subject=Hiring Inquiry"
									className={primaryBtnClasses}>
									Hire me
								</a>
								<a href="/cv.pdf" className={ghostBtnClasses}>
									Download CV
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
