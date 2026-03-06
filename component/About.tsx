"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music, Plane, Camera, Gamepad2 } from "lucide-react";

export default function About() {
  const personalInfo = [
    { label: "Name", value: "Ansa Asghar" },
    { label: "Birth", value: "January 03, 2004" },
    { label: "Address", value: "Bahria Town, Lahore" },
    { label: "Email", value: "ansasgar710@gmail.com" },
    { label: "Phone", value: "+92 301 8950901" },
  ];

  const interests = [
    { icon: <Music size={22} />, label: "Music" },
    { icon: <Plane size={22} />, label: "Travel" },
    { icon: <Camera size={22} />, label: "Photos" },
    { icon: <Gamepad2 size={22} />, label: "Gaming" },
  ];

  return (
    <section
      id='about'
      className='relative py-32 bg-[#0a0a0a] px-6 lg:px-16 overflow-hidden'
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#B5BFA1]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          
          {/* Left Side: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className='relative'
          >
            {/* Sage Green Accent Frame */}
            <div className='absolute -bottom-6 -right-6 w-full h-full border-2 border-[#B5BFA1]/30 -z-10 hidden md:block rounded-2xl'></div>
            <div className='relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl overflow-hidden rounded-2xl border-4 border-white/5'>
              <Image
                src='/profile.jpg'
                alt='Ansa Asghar'
                fill
                priority
                className='object-cover grayscale hover:grayscale-0 transition-all duration-1000'
              />
            </div>
          </motion.div>

          {/* Right Side: Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.5em] mb-4 block'>Expertise & Biography</span>
            <h2 className='text-5xl md:text-6xl font-black mb-8 uppercase tracking-tighter text-white leading-none'>
              About <span className='text-[#B5BFA1] italic font-light'>Me</span>
            </h2>

            <p className='text-gray-400 text-lg leading-relaxed mb-10'>
              I am a specialized <span className='text-white font-semibold'>Full Stack Web Developer</span> with professional experience at <span className='text-white font-semibold'>Heapware</span>. I focus on creating <span className='text-[#B5BFA1] font-bold'>scalable architectures</span> and smooth UI/UX using modern technologies like Next.js and Tailwind CSS.
            </p>

            {/* Personal Info - Highlighted List */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
              {personalInfo.map((info, idx) => (
                <div key={idx} className='flex flex-col space-y-1'>
                  <span className='text-[#B5BFA1] text-[9px] font-black uppercase tracking-widest opacity-80'>
                    {info.label}
                  </span>
                  <span className='text-white font-medium text-sm'>
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Interests Section */}
            <div className='mb-12'>
              <h3 className='text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6 border-l-2 border-[#B5BFA1] pl-4'>
                Personal Interests
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {interests.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, backgroundColor: "#B5BFA1", color: "#000" }}
                    className='flex flex-col items-center p-5 border border-white/5 rounded-2xl bg-white/5 transition-all duration-300 group cursor-default shadow-xl'
                  >
                    <div className='text-[#B5BFA1] group-hover:text-black mb-2 transition-colors duration-300'>
                      {item.icon}
                    </div>
                    <span className='text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300'>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href='/cv.pdf'
                className='inline-flex items-center gap-4 px-12 py-5 bg-[#B5BFA1] text-black text-[11px] font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-[#B5BFA1]/20 hover:bg-white hover:shadow-white/10'
              >
                Download Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}