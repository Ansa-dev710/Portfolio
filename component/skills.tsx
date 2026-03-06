"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Updated Skills array
const skills = [
  { name: "Next.js / React", percentage: 95, lastWeek: "28%", lastMonth: "60%" },
  { name: "TypeScript", percentage: 90, lastWeek: "15%", lastMonth: "45%" },
  { name: "Tailwind CSS", percentage: 98, lastWeek: "32%", lastMonth: "70%" },
  { name: "Node.js", percentage: 80, lastWeek: "10%", lastMonth: "35%" },
  { name: "UI/UX Design", percentage: 85, lastWeek: "20%", lastMonth: "50%" },
  { name: "PostgreSQL/Auth", percentage: 75, lastWeek: "12%", lastMonth: "30%" },
];

// Moving Particles Background Component
const ParticleBackground = () => {
  // Random particles generate karne ka logic
  const particles = Array.from({ length: 40 });

  return (
    <div className='absolute inset-0 overflow-hidden -z-10'>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-[#B5BFA1]/20 rounded-full'
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50], // Upar ki taraf move karenge
            opacity: [0, 1, 0], // Fade in/out effect
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 5, // Random speed
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className='relative flex items-center justify-center w-40 h-40 mx-auto'>
      <svg className='w-full h-full transform -rotate-90'>
        {/* Empty Circle - Subtle Dark */}
        <circle
          cx='80'
          cy='80'
          r={radius}
          stroke='#222222'
          strokeWidth='8'
          fill='transparent'
        />
        {/* Progress Circle - Sage Green */}
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
        {/* White Text for contrast */}
        <span className='text-3xl font-black text-white'>
          {percentage}
          <sup className='text-sm ml-0.5 text-[#B5BFA1]'>%</sup>
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Section Divider Effect (Scroll ke sath move karega)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const dividerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id='skills'
      className='relative py-24 bg-[#0a0a0a] px-6 lg:px-16'> {/* Pure Dark Background */}
      
      {/* 1. Moving Particles Background */}
      <ParticleBackground />

      <div className='max-w-7xl mx-auto'>
        
        <div className='text-center mb-20 relative'>
          
          {/* 2. Section Top Divider (Soft Glow) */}
          <motion.div 
            style={{ opacity: dividerOpacity }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-[px] bg-gradient-linear from-transparent via-[#B5BFA1]/40 to-transparent" />

          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-[#B5BFA1] text-xs font-bold uppercase tracking-[0.4em] mb-4 block'>
            Expertise
          </motion.span>
          <h2 className='text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase'>
            Technical <span className='text-[#B5BFA1] italic'>Skills</span>
          </h2>
          <div className='max-w-2xl mx-auto'>
            <p className='text-gray-500 text-lg leading-relaxed'>
              My technical journey, sharpened at{" "}
              <span className='text-white font-semibold italic'>Ideoversity</span>{" "}
              and refined through professional projects at{" "}
              <span className='text-white font-semibold italic'>Heapware</span>,
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Card background dark with soft border
              className='bg-[#111111] border border-white/5 p-10 rounded-2xl hover:border-[#B5BFA1]/40 hover:shadow-2xl hover:shadow-[#B5BFA1]/10 transition-all duration-500 text-center group relative overflow-hidden'>
              
              {/* Card Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-linear from-[#B5BFA1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className='text-sm font-bold text-white mb-8 uppercase tracking-[0.2em] group-hover:text-[#B5BFA1] transition-colors relative z-10'>
                {skill.name}
              </h3>

              <div className="relative z-10">
                <CircularProgress percentage={skill.percentage} />
              </div>

              <div className='flex justify-between mt-10 pt-6 border-t border-white/5 relative z-10'>
                <div className='text-center w-1/2 border-r border-white/5'>
                  <p className='text-2xl font-bold text-[#B5BFA1]'>
                    {skill.lastWeek}
                  </p>
                  <p className='text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1'>
                    Project Load
                  </p>
                </div>
                <div className='text-center w-1/2'>
                  <p className='text-2xl font-bold text-[#B5BFA1]'>
                    {skill.lastMonth}
                  </p>
                  <p className='text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1'>
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