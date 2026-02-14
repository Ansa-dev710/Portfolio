"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

export default function About() {
  return (
    <section
      id='about'
      className='py-20 bg-gray-50 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-gray-900'>About Me</h2>
        <p className='text-gray-600 mb-12 text-lg'>
          I am a Full Stack Developer with expertise in React, Next.js, Node.js,
          and Tailwind CSS. I craft scalable, high-performance web applications
          with clean, minimal design.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300'>
              <h3 className='text-gray-800 font-semibold text-lg'>
                {skill.name}
              </h3>
              <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className='h-3 rounded-full bg-gray-800'></motion.div>
              </div>
              <span className='text-sm text-gray-600'>{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
