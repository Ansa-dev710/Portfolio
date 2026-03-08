"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [step, setStep] = useState(1);

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
      className='relative h-screen w-full flex items-center bg-[#0a0a0a] overflow-hidden'
    >
      <div
        className='absolute inset-0 bg-[#111111] z-10 hidden lg:block'
        style={{ clipPath: "polygon(0 0, 42% 0, 32% 100%, 0% 100%)" }}
      />

      <div className='absolute top-0 right-0 w-full lg:w-[68%] h-full z-0 bg-black'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='relative w-full h-full'>
            <Image
              src={step === 1 ? "/hero1.png" : "/hero-2.png"}
              alt='Ansa Portfolio'
              fill
              priority
              className='object-cover object-center lg:object-right grayscale opacity-80' 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='container mx-auto px-6 lg:px-24 z-20 relative'>
        <AnimatePresence mode='wait'>
          {step === 1 ? (
            <motion.div
              key='step1'
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='w-full lg:w-[45%]'>
              <span className='uppercase tracking-[4px] text-[11px] font-bold text-[#B5BFA1] block mb-6'>
                Hello! I am Ansa
              </span>
              <h1 className='text-[32px] md:text-[45px] lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tighter'>
                Creative <span className='text-[#B5BFA1]'>Web</span> <br />
                Developer & Designer
              </h1>

              <div className='flex gap-4 mt-10'>
        
                <a
                  href='mailto:ansaasgar710@gmail.com?subject=Hiring Inquiry&body=Hi Ansa, I would like to discuss a project with you.'
                  className='px-10 py-4 bg-[#B5BFA1] text-black text-[11px] font-bold uppercase tracking-[2px] rounded-sm transition-all hover:bg-white hover:scale-105 inline-block text-center'>
                  Hire me
                </a>
                <a
                  href='/cv.pdf'
                  className='px-10 py-4 border border-[#333] bg-transparent text-[#999] text-[11px] font-bold uppercase tracking-[2px] rounded-sm hover:border-[#B5BFA1] hover:text-white transition-all inline-block text-center'>
                  Download CV
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key='step2'
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className='w-full lg:w-[45%]'>
              <span className='uppercase tracking-[4px] text-[11px] font-bold text-[#B5BFA1] block mb-6'>
                We Design & Build Brands
              </span>

              <h1 className='text-[32px] md:text-[45px] lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tighter'>
                Hi, I am <span className='text-[#B5BFA1]'>Ansa</span> This is my
                favorite work
              </h1>

              <div className='flex gap-4 mt-10'>
              
                <a 
                  href='mailto:ansaasgar710@gmail.com?subject=Hiring Inquiry'
                  className='px-10 py-4 bg-[#B5BFA1] text-black text-[11px] font-bold uppercase tracking-[2px] rounded-sm transition-all hover:bg-white inline-block text-center'>
                  Hire me
                </a>
                <button className='px-10 py-4 border border-[#333] bg-transparent text-[#999] text-[11px] font-bold uppercase tracking-[2px] rounded-sm hover:border-[#B5BFA1] hover:text-white'>
                  Download CV
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}