"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "CSS", percentage: 95, lastWeek: "28%", lastMonth: "60%" },
  { name: "HTML", percentage: 98, lastWeek: "28%", lastMonth: "60%" },
  { name: "jQuery", percentage: 68, lastWeek: "28%", lastMonth: "60%" },
  { name: "Photoshop", percentage: 80, lastWeek: "28%", lastMonth: "60%" },
  { name: "WordPress", percentage: 75, lastWeek: "28%", lastMonth: "60%" },
  { name: "SEO", percentage: 85, lastWeek: "28%", lastMonth: "60%" },
];

const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#f2f2f2"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#B5BFA1"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={dashArray}
          initial={{ strokeDashoffset: dashArray }}
          whileInView={{ strokeDashoffset: dashOffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-black text-[#1a1a1a]">{percentage}<sup className="text-sm ml-0.5">%</sup></span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F9F9F9] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-8 uppercase tracking-widest">
                {skill.name}
              </h3>

              {/* Circular Bar */}
              <CircularProgress percentage={skill.percentage} />

              {/* Bottom Stats */}
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                <div className="text-center w-1/2 border-r border-gray-100">
                  <p className="text-2xl font-bold text-[#B5BFA1]">{skill.lastWeek}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Last week</p>
                </div>
                <div className="text-center w-1/2">
                  <p className="text-2xl font-bold text-[#B5BFA1]">{skill.lastMonth}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Last month</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}