"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client A",
    role: "CEO, Company",
    text: "Ansa delivered amazing work!",
  },
  {
    name: "Client B",
    role: "Product Manager",
    text: "Highly professional and creative.",
  },
  {
    name: "Client C",
    role: "CTO",
    text: "Excellent skills and communication.",
  },
];

export default function Testimonials() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id='testimonials'
      className='py-20 bg-gray-50 px-6 lg:px-12'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-900'>Testimonials</h2>
      </motion.div>

      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-6'>
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
            className='bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300'>
            <p className='text-gray-600 mb-4 text-sm md:text-base'>
              "{t.text}"
            </p>
            <h4 className='font-semibold text-gray-900'>{t.name}</h4>
            <span className='text-gray-500 text-sm'>{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
