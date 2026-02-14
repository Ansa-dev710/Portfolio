"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const funFacts = [
  { number: 50, label: "Projects" },
  { number: 10, label: "Years Experience" },
  { number: 100, label: "Happy Clients" },
  { number: 25, label: "Awards" },
];

export default function FunFacts() {
  const [counts, setCounts] = useState(funFacts.map(() => 0));

  useEffect(() => {
    const timers: number[] = [];

    funFacts.forEach((fact, idx) => {
      let start = 0;
      const end = fact.number;
      const duration = 1500;
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

    // Cleanup on unmount
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className='py-20 bg-gray-50 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className='flex flex-col items-center'>
            <h3 className='text-4xl font-bold text-gray-900 mb-2'>
              {counts[index]}+
            </h3>
            <p className='text-gray-600 text-sm md:text-base'>{fact.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
