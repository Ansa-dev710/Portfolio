"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiUser, FiCoffee, FiClock } from "react-icons/fi";

const funFacts = [
  { number: 750, label: "Project Complete", icon: <FiBriefcase /> },
  { number: 568, label: "Happy Clients", icon: <FiUser /> },
  { number: 10, label: "Years Experience", icon: <FiClock /> },
  { number: 478, label: "Cups of Coffee", icon: <FiCoffee /> },
];

export default function FunFacts() {
  const [counts, setCounts] = useState(funFacts.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return; // Jab tak view mein na aaye, count shuru na ho

    const timers: number[] = [];

    funFacts.forEach((fact, idx) => {
      let start = 0;
      const end = fact.number;
      const duration = 2000;
      const stepTime = Math.ceil(duration / end);

      const timer = window.setInterval(() => {
        start += 1;
        if (start > end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = start;
          return newCounts;
        });
      }, stepTime);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, [isVisible]); // Trigger when section becomes visible

  return (
    <section className='py-24 bg-[#F9F9F9] px-6 lg:px-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12'>
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.label}
            // Clyde Style Animation: Niche se upar slide hona aur fade hona
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={() => setIsVisible(true)} // Animation aur Counting sync karne ke liye
            transition={{
              duration: 0.8,
              delay: index * 0.1, // Har item thora gap se aaye (Stagger effect)
              ease: [0.45, 0.05, 0.55, 0.95], // Smooth cubic-bezier transition
            }}
            className='flex flex-row items-center justify-start gap-5'>
            {/* Icon Animation: Scale up effect */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#B5BFA1] flex items-center justify-center text-white text-2xl md:text-4xl shadow-sm'>
              {fact.icon}
            </motion.div>

            {/* Text Side */}
            <div className='flex flex-col items-start text-left'>
              <h3 className='text-3xl md:text-4xl font-extrabold text-[#333333] leading-none'>
                {counts[index]}
              </h3>
              <p className='text-[10px] md:text-xs font-bold uppercase tracking-[2px] text-[#B5BFA1] mt-2'>
                {fact.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
