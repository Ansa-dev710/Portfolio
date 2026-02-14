"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id='contact'
      className='relative py-20 bg-gray-50 px-6 lg:px-12 overflow-hidden'>
      {/* Background Accent */}
      <div className='absolute top-0 -left-32 w-[125] h-[125] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 -right-32 w-[150] h-[150] bg-pink-100/30 rounded-full blur-3xl pointer-events-none'></div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className='max-w-3xl mx-auto text-center mb-12 relative z-10'>
        <h2 className='text-4xl font-bold mb-6 text-gray-900'>Contact Me</h2>
        <p className='text-gray-600 mb-8 text-lg'>
          Want to work together? Send me a message!
        </p>
      </motion.div>

      <form className='max-w-2xl mx-auto grid grid-cols-1 gap-6 relative z-10'>
        <motion.input
          type='text'
          placeholder='Your Name'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition'
        />
        <motion.input
          type='email'
          placeholder='Your Email'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className='border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition'
        />
        <motion.textarea
          placeholder='Your Message'
          rows={5}
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className='border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition'></motion.textarea>
        <motion.button
          type='submit'
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          className='px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-transform transform hover:-translate-y-1'>
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
