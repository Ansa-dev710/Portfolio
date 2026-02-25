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
      description:
        "Creating visually stunning and user-friendly interfaces that capture your brand identity.",
      icon: (
        <Layout
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Web Application",
      description:
        "Building powerful, scalable, and secure web applications tailored to your business.",
      icon: (
        <Smartphone
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Web Development",
      description:
        "Writing clean, efficient code to bring designs to life with seamless functionality.",
      icon: (
        <Monitor
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Graphic Design",
      description:
        "Crafting compelling visual assets from marketing materials to social media graphics.",
      icon: (
        <PenTool
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "Logo Design",
      description:
        "Designing unique and memorable brand identities that leave a lasting impression.",
      icon: (
        <Search
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
    {
      title: "SEO",
      description:
        "Optimizing your digital presence to improve search rankings and drive organic traffic.",
      icon: (
        <PieChart
          size={28}
          strokeWidth={1.5}
        />
      ),
    },
  ];

  return (
    <>
      <section
        id='services'
        className='py-24 bg-white px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block'>
              I am great at
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 tracking-tight'>
              We do awesome services for our clients
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
                className='relative group p-8 text-center bg-[#fcfcfc] transition-all duration-300 hover:bg-[#B5BFA1] cursor-pointer border border-gray-50 shadow-sm'>
                <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
                  <div className='w-16 h-16 rounded-full bg-[#B5BFA1] text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-[#B5BFA1]'>
                    {service.icon}
                  </div>
                </div>

                <div className='mt-6'>
                  <h3 className='text-base font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider transition-colors duration-300 group-hover:text-white'>
                    {service.title}
                  </h3>

                  <p className='text-gray-400 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-white/90'>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#B5BFA1] px-6 lg:px-16'>
        <div className='max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight'>
              Have a project on your mind?
            </h2>
          </div>
          <a
            href='#contact'
            className='inline-block px-8 py-4 bg-white text-[#B5BFA1] font-bold uppercase text-[11px] tracking-widest rounded-sm hover:bg-[#1a1a1a] hover:text-white transition-all duration-300'>
            Contact me
          </a>
        </div>
      </section>
    </>
  );
}
