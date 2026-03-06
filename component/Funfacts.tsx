"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FiBriefcase, FiUser, FiCoffee, FiClock } from "react-icons/fi";

const funFacts = [
  { number: 120, label: "Project Complete", icon: <FiBriefcase /> },
  { number: 85, label: "Happy Clients", icon: <FiUser /> },
  { number: 3, label: "Years Experience", icon: <FiClock /> },
  { number: 250, label: "Cups of Coffee", icon: <FiCoffee /> },
];

export default function FunFacts() {
  const [counts, setCounts] = useState(funFacts.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timers: number[] = [];

    funFacts.forEach((fact, idx) => {
      let start = 0;
      const end = fact.number;
      const duration = 2000;
      const totalFrames = 60;
      const increment = end / totalFrames;
      
      let currentFrame = 0;
      const timer = window.setInterval(() => {
        currentFrame++;
        start += increment;
        
        if (currentFrame >= totalFrames) {
          start = end;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.floor(start);
          return newCounts;
        });
      }, duration / totalFrames);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, [isInView]);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section ref={sectionRef} className='py-28 bg-white px-6 lg:px-16 overflow-hidden relative'>
      {/* Subtle Sage Accent Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B5BFA1]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10'>
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.label}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-6 group cursor-default'
          >
            {/* Minimalist Icon Box */}
            <motion.div
              whileHover={{ y: -5 }}
              className='shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#F9F9F9] border border-gray-100 flex items-center justify-center text-[#B5BFA1] text-2xl md:text-3xl transition-all duration-500 group-hover:bg-[#B5BFA1] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#B5BFA1]/20'
            >
              {fact.icon}
            </motion.div>

            {/* Content Side */}
            <div className='flex flex-col items-start'>
              <div className='flex items-baseline'>
                <h3 className='text-4xl md:text-5xl font-black text-[#1a1a1a] leading-none tracking-tighter'>
                  {counts[index]}
                </h3>
                <span className="text-[#B5BFA1] text-2xl font-bold ml-1">+</span>
              </div>
              
              <p className='text-[10px] md:text-[11px] font-bold uppercase tracking-[3px] text-gray-400 mt-2 transition-colors duration-300 group-hover:text-[#B5BFA1]'>
                {fact.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}