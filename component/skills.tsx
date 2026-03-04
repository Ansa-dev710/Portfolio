"use client";
import { motion } from "framer-motion";

// Updated Skills array with your actual tech stack
const skills = [
  {
    name: "Next.js / React",
    percentage: 95,
    lastWeek: "28%",
    lastMonth: "60%",
  },
  { name: "TypeScript", percentage: 90, lastWeek: "15%", lastMonth: "45%" },
  { name: "Tailwind CSS", percentage: 98, lastWeek: "32%", lastMonth: "70%" },
  { name: "Node.js", percentage: 80, lastWeek: "10%", lastMonth: "35%" },
  { name: "UI/UX Design", percentage: 85, lastWeek: "20%", lastMonth: "50%" },
  {
    name: "PostgreSQL/Auth",
    percentage: 75,
    lastWeek: "12%",
    lastMonth: "30%",
  },
];

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className='relative flex items-center justify-center w-40 h-40 mx-auto'>
      <svg className='w-full h-full transform -rotate-90'>
        <circle
          cx='80'
          cy='80'
          r={radius}
          stroke='#f2f2f2'
          strokeWidth='8'
          fill='transparent'
        />
        <motion.circle
          cx='80'
          cy='80'
          r={radius}
          stroke='#B5BFA1'
          strokeWidth='8'
          fill='transparent'
          strokeDasharray={dashArray}
          initial={{ strokeDashoffset: dashArray }}
          whileInView={{ strokeDashoffset: dashOffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap='round'
        />
      </svg>
      <div className='absolute flex flex-col items-center'>
        <span className='text-3xl font-black text-[#1a1a1a]'>
          {percentage}
          <sup className='text-sm ml-0.5'>%</sup>
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id='skills'
      className='py-24 bg-[#F9F9F9] px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <span className='text-[#B5BFA1] text-xs font-bold uppercase tracking-[0.4em] mb-4 block'>
            Expertise
          </span>
          <h2 className='text-5xl md:text-6xl font-black text-[#1a1a1a] mb-8 tracking-tighter'>
            Technical <span className='text-[#B5BFA1]'>Skills</span>
          </h2>
          <div className='max-w-2xl mx-auto'>
            {/* Professional description integrated with Heapware & Ideoversity experience */}
            <p className='text-gray-400 text-lg leading-relaxed'>
              My technical journey, sharpened at{" "}
              <span className='text-black font-semibold italic'>
                Ideoversity
              </span>{" "}
              and refined through professional projects at{" "}
              <span className='text-black font-semibold italic'>Heapware</span>,
              focuses on building scalable, performant, and user-centric web
              solutions.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group'>
              <h3 className='text-xl font-bold text-[#1a1a1a] mb-8 uppercase tracking-widest group-hover:text-[#B5BFA1] transition-colors'>
                {skill.name}
              </h3>

              <CircularProgress percentage={skill.percentage} />

              <div className='flex justify-between mt-10 pt-6 border-t border-gray-100'>
                <div className='text-center w-1/2 border-r border-gray-100'>
                  <p className='text-2xl font-bold text-[#B5BFA1]'>
                    {skill.lastWeek}
                  </p>
                  <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1'>
                    Project Load
                  </p>
                </div>
                <div className='text-center w-1/2'>
                  <p className='text-2xl font-bold text-[#B5BFA1]'>
                    {skill.lastMonth}
                  </p>
                  <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1'>
                    Efficiency
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
