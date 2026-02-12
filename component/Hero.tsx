"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center bg-gray-50 px-6 lg:px-12'>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        className='text-center max-w-3xl'>
        <h1 className='text-5xl lg:text-7xl font-bold mb-4'>
          Hi, I'm <span className='text-indigo-600'>Ansa Asghar</span>
        </h1>
        <p className='text-gray-600 text-lg lg:text-xl mb-8'>
          I build modern, responsive, and scalable web applications with passion
          and creativity.
        </p>
        <div className='flex justify-center gap-4'>
          <a
            href='#portfolio'
            className='px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition'>
            Portfolio
          </a>
          <a
            href='#contact'
            className='px-8 py-4 border border-indigo-600 text-indigo-600 rounded-lg font-bold hover:bg-indigo-50 transition'>
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
