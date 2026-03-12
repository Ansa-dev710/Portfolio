"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Layout,
  PenTool,
  Search,
  PieChart,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Creating visually stunning and user-friendly interfaces that capture your brand identity.",
      icon: <Layout size={28} strokeWidth={1.5} />,
    },
    {
      title: "Web Application",
      description: "Building powerful, scalable, and secure web applications tailored to your business.",
      icon: <Smartphone size={28} strokeWidth={1.5} />,
    },
    {
      title: "Web Development",
      description: "Writing clean, efficient code to bring designs to life with seamless functionality.",
      icon: <Monitor size={28} strokeWidth={1.5} />,
    },
    {
      title: "Graphic Design",
      description: "Crafting compelling visual assets from marketing materials to social media graphics.",
      icon: <PenTool size={28} strokeWidth={1.5} />,
    },
    {
      title: "Logo Design",
      description: "Designing unique and memorable brand identities that leave a lasting impression.",
      icon: <Search size={28} strokeWidth={1.5} />,
    },
    {
      title: "SEO",
      description: "Optimizing your digital presence to improve search rankings and drive organic traffic.",
      icon: <PieChart size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <>
      <section id='services' className='py-24 bg-[#0a0a0a] px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          
          <div className='text-center mb-24'>
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.4em] mb-3 block'>
              I am great at
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase'>
              Awesome <span className='text-[#B5BFA1] italic'>Services</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative group p-10 text-center bg-[#111111] border border-white/5 transition-all duration-500 hover:bg-[#B5BFA1] cursor-pointer rounded-sm'
              >
                <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
                  <div className='w-16 h-16 rounded-full bg-[#B5BFA1] text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-white group-hover:text-[#B5BFA1]'>
                    {service.icon}
                  </div>
                </div>

                <div className='mt-8'>
                  <h3 className='text-lg font-bold text-white mb-4 uppercase tracking-widest transition-colors duration-300 group-hover:text-white'>
                    {service.title}
                  </h3>

                  <p className='text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/90'>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Updated CTA Section without stars --- */}
      <section className='py-20 bg-[#B5BFA1] px-6 lg:px-16 relative overflow-hidden'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
          
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter uppercase'>
              Have a project on your mind?
            </h2>
            <p className='text-black/80 text-lg leading-relaxed max-w-2xl font-medium'>
              Whether it's a complex Task Management System or a high-performance Full Stack Application, 
              I bring my expertise from Heapware to deliver scalable and elegant solutions. 
              Let's transform your vision into a digital reality with clean code and modern aesthetics.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href='#contact'
              className='inline-block px-12 py-5 bg-black text-white font-bold uppercase text-[12px] tracking-[0.3em] rounded-full shadow-2xl hover:bg-zinc-900 transition-all duration-300'>
              Contact me
            </a>
          </motion.div>
          
        </div>

        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      </section>
    </>
  );
}