"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    image: "/avatar1.jpg",
    quote:
      "Working with this team was an absolute pleasure. They understood our requirements perfectly and delivered beyond expectations.",
  },
  {
    id: 2,
    name: "Daniel Roberts",
    role: "Startup Founder",
    image: "/avatar2.jpg",
    quote:
      "The quality of work and attention to detail was impressive. Communication was smooth throughout the project.",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "HR Consultant",
    image: "/avatar3.jpg",
    quote:
      "Professional, reliable, and creative. I would highly recommend their services to anyone looking for quality results.",
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Product Manager",
    image: "/avatar4.jpg",
    quote:
      "They delivered exactly what we needed, on time and with excellent quality. Truly a great experience.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setAnimate(false);
        setCurrent(0);
      }, 700);
    } else {
      setAnimate(true);
    }
  }, [current, slides.length]);

  return (
    <section className='py-24 px-6 bg-[#f8f9fa] overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center text-gray-900 mb-16'>
          What Our Clients Say
        </h2>

        <div className='relative overflow-hidden'>
          <div
            className={`flex ${
              animate ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}>
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className='min-w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-1'>
                {slide.map((t) => (
                  <div
                    key={t.id}
                    className='bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='relative w-14 h-14'>
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className='rounded-full object-cover border-4 border-white shadow'
                        />
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-800'>
                          {t.name}
                        </p>
                        <p className='text-xs text-gray-500'>{t.role}</p>
                      </div>
                    </div>

                    <p className='text-gray-500 italic text-sm leading-relaxed'>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center gap-3 mt-10'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current % slides.length === index
                  ? "bg-[#96bb7c]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
