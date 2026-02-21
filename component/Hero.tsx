"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center bg-[#f8f9fa] px-6 lg:px-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-4 text-center lg:text-left'>
          <span className='uppercase tracking-[4px] text-xs font-bold text-[#B5BFA1] block mb-2'>
            Hello! I'm
          </span>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.1]'>
            Ansa <span className='text-[#B5BFA1]'>Asghar</span>
          </h1>

          <h2 className='text-xl md:text-2xl font-medium text-[#333] tracking-tight'>
            A Freelance Frontend Developer
          </h2>

          <p className='text-gray-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed pt-2'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-8'>
            <a
              href='#portfolio'
              className='px-10 py-4 bg-[#B5BFA1] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-black transition duration-300'>
              Hire Me
            </a>

            <a
              href='#portfolio'
              className='px-10 py-4 border-2 border-[#eeeeee] bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:border-black transition duration-300'>
              My Works
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE - Offset style like Clyde */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='relative flex justify-center lg:justify-end'>
          {/* Background Decorative Circle (Optional but matches template vibes) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B5BFA1] opacity-5 rounded-full blur-3xl -z-10'></div>

          <img
            src='/hero-illustration.png' // Make sure this image is transparent (PNG)
            alt='Ansa Asghar'
            className='w-full max-w-md lg:max-w-xl object-contain drop-shadow-2xl'
          />
        </motion.div>
      </div>
    </section>
  );
}
