"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const personalInfo = [
    { label: "Name", value: "Ansa Asghar" },
    { label: "Date of birth", value: "January 03, 2004" },
    { label: "Address", value: "Bahria Town, Lahore" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "ansaasgar710@gmail.com" },
    { label: "Phone", value: "+92 301 8950901" },
  ];

  return (
    <section
      id='about'
      className='relative py-24 bg-white px-6 lg:px-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* LEFT SIDE - IMAGE WITH BACKGROUND BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'>
            {/* The decorative background block like Clyde */}
            <div className='absolute -bottom-10 -left-10 w-full h-full bg-[#B5BFA1] -z-10 hidden md:block'></div>

            <div className='relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl overflow-hidden'>
              <Image
                src='/profile.jpg' // Replace with your actual image path
                alt='Ansa Asghar'
                fill
                className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter'>
              About <span className='text-[#B5BFA1]'>Me</span>
            </h2>

            <p className='text-gray-500 text-lg leading-relaxed mb-10'>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>

            {/* Personal Info List - Clyde Style */}
            <ul className='space-y-4 mb-10'>
              {personalInfo.map((info, idx) => (
                <li
                  key={idx}
                  className='flex items-start'>
                  <span className='w-32 font-bold text-black uppercase text-xs tracking-widest pt-1'>
                    {info.label}:
                  </span>
                  <span className='flex-1 text-gray-500 font-medium'>
                    {info.value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats / Call to Action */}
            <div className='pt-4'>
              <h3 className='text-xl font-bold text-black mb-4'>
                <span className='text-[#B5BFA1]'>120</span> Project complete
              </h3>
              <a
                href='/cv.pdf'
                className='inline-block px-10 py-4 bg-[#B5BFA1] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all shadow-lg'>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
