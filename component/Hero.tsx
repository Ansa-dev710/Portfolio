"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [step, setStep] = useState(1);

  // Continuous Loop every 5 seconds
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
      id='home'
      className='relative h-screen w-full flex items-center bg-[#f2f2f2] overflow-hidden'>
      {/* Diagonal Background Split */}
      <div
        className='absolute inset-0 bg-white z-10 hidden lg:block'
        style={{ clipPath: "polygon(0 0, 45% 0, 35% 100%, 0% 100%)" }}
      />

      <div className='container mx-auto px-6 lg:px-24 z-20'>
        <AnimatePresence mode='wait'>
          {step === 1 ? (
            /* --- SECTION 1: CREATIVE WEB DEVELOPER --- */
            <motion.div
              key='step1'
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='w-full lg:w-[55%]'>
              <span className='uppercase tracking-[3px] text-[10px] font-bold text-[#B5BFA1] block mb-4'>
                Hello! I am Ansa
              </span>
              <h1 className='text-[28px] md:text-[40px] lg:text-[48px] font-black text-[#1a1a1a] leading-[1.1] tracking-tighter'>
                Creative <span className='text-[#B5BFA1]'>Web</span> <br />
                Developer & Designer
              </h1>

              <div className='flex gap-3 mt-8'>
                <a
                  href='mailto:your-email@example.com'
                  className='px-8 py-3.5 bg-[#B5BFA1] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md transition-all hover:bg-black'>
                  Hire me
                </a>
                <a
                  href='/cv.pdf'
                  download
                  className='px-8 py-3.5 border border-[#e2e2e2] bg-white text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:border-[#B5BFA1]'>
                  Download CV
                </a>
              </div>
            </motion.div>
          ) : (
            /* --- SECTION 2: HI I AM ANSA (TWO LINES) --- */
            <motion.div
              key='step2'
              className='flex flex-col lg:flex-row items-center justify-between w-full'>
              <motion.div
                variants={textVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className='w-full lg:w-[50%]'>
                <span className='uppercase tracking-[3px] text-[10px] font-bold text-[#B5BFA1] block mb-4'>
                  We Design & Build Brands
                </span>
                {/* Text forced into 2 lines with smaller size */}
                <h1 className='text-[28px] md:text-[40px] lg:text-[48px] font-black text-[#1a1a1a] leading-[1.1] tracking-tighter'>
                  Hi, I am <span className='text-[#B5BFA1]'>Ansa</span> This is{" "}
                  <br />
                  my favorite work.
                </h1>

                <div className='flex gap-3 mt-8'>
                  <button className='px-8 py-3.5 bg-[#B5BFA1] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md transition-all hover:bg-black'>
                    Hire me
                  </button>
                  <button className='px-8 py-3.5 border border-[#e2e2e2] bg-white text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-sm'>
                    Download CV
                  </button>
                </div>
              </motion.div>

              {/* Image Animation */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className='w-full lg:w-[45%] relative h-[350px] md:h-[500px] lg:h-[80vh] flex items-end justify-center lg:justify-end mt-12 lg:mt-0'>
                <div className='relative w-full h-full max-w-[480px]'>
                  <Image
                    src='/hero-man.png'
                    alt='Ansa Portfolio'
                    fill
                    priority
                    className='object-contain object-bottom' // Anchored to bottom
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
