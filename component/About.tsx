"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Music, Plane, Camera, Gamepad2 } from "lucide-react";

export default function About() {
  const personalInfo = [
    { label: "Name", value: "Ansa Asghar" },
    { label: "Date of birth", value: "January 03, 2004" },
    { label: "Address", value: "Bahria Town, Lahore" },
    { label: "Zip code", value: "1000" },
    { label: "Email", value: "ansaasgar710@gmail.com" },
    { label: "Phone", value: "+92 301 8950901" },
  ];

  const interests = [
    { icon: <Music size={20} />, label: "Music" },
    { icon: <Plane size={20} />, label: "Travel" },
    { icon: <Camera size={20} />, label: "Photos" },
    { icon: <Gamepad2 size={20} />, label: "Gaming" },
  ];

  return (
    <section
      id='about'
      className='relative py-24 bg-white px-6 lg:px-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'>
            <div className='absolute -bottom-10 -left-10 w-full h-full bg-[#B5BFA1] -z-10 hidden md:block'></div>
            <div className='relative aspect-3/4 w-full max-w-md mx-auto shadow-2xl overflow-hidden'>
              <Image
                src='/profile.jpg'
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

            {/* INTERESTS SECTION (Music, Travel, etc.) */}
            <div className='mb-10'>
              <h3 className='text-sm font-bold text-black uppercase tracking-[0.2em] mb-6'>
                My Interests
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {interests.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow'>
                    <div className='text-[#B5BFA1] mb-2'>{item.icon}</div>
                    <span className='text-[10px] font-bold uppercase tracking-widest text-gray-400'>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DOWNLOAD CV BUTTON */}
            <div className='pt-4'>
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
