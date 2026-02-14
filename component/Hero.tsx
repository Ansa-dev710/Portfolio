"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  // Controls for scroll animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Fade-in-up variant for text
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center bg-gray-50 px-6 lg:px-12'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={fadeInUp}
        className='flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full gap-12'>
        {/* Left: Text Content */}
        <div className='text-center lg:text-left max-w-xl'>
          <h1 className='text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight'>
            Hi, I'm <span className='text-gray-700 font-bold'>Ansa Asghar</span>
          </h1>
          <p className='text-gray-600 text-lg lg:text-xl mb-10 leading-relaxed'>
            I build modern, responsive, and scalable web applications. My focus
            is clean design, smooth performance, and excellent user experience.
          </p>

          <div className='flex justify-center lg:justify-start gap-6'>
            {/* Portfolio Button */}
            <a
              href='#portfolio'
              className='relative px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold overflow-hidden group hover:-translate-y-1 transition-transform duration-300'>
              Portfolio
              <span className='absolute left-1/2 -bottom-1 w-0 h-[0.5] bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-full'></span>
            </a>

            {/* Contact Button */}
            <a
              href='#contact'
              className='relative px-8 py-4 border border-gray-900 text-gray-900 rounded-lg font-semibold overflow-hidden group hover:-translate-y-1 transition-transform duration-300'>
              Contact
              <span className='absolute left-1/2 -bottom-1 w-0 h-[0.5] bg-gray-900 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full'></span>
            </a>
          </div>
        </div>

        {/* Right: Hero Illustration with floating animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <img
            src='/hero-illustration.png'
            alt='Hero Illustration'
            className='w-80 lg:w-full max-w-md object-contain'
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
