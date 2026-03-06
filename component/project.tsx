"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Plus, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsAndTestimonials() {
  
  const projectItems = [
    { title: "Next.js Weather App", category: "Web Development", image: "/work-1.jpg" },
    { title: "Admin Dashboard", category: "Full Stack", image: "/work-2.jpg" },
    { title: "Portfolio System", category: "UI/UX Design", image: "/work-3.jpg" },
    { title: "Heapware CRM", category: "Management System", image: "/work-4.jpg" },
    { title: "E-Commerce Interface", category: "Web Design", image: "/work-5.jpg" },
    { title: "Auth Systems", category: "Security/Middleware", image: "/work-6.jpg" },
    { title: "SaaS Landing Page", category: "Branding", image: "/work-7.jpg" },
    { title: "API Integration", category: "Backend", image: "/work-8.jpg" },
  ];

  const testimonials = [
    {
      name: "Project Lead @ Heapware",
      position: "Senior Developer",
      text: "Ansa's ability to handle complex Next.js middleware and React state management is impressive. A great asset to any team.",
      image: "/person1.jpg",
    },
    {
      name: "Ideoversity Mentor",
      position: "Technical Trainer",
      text: "From the very beginning, Ansa showed an exceptional grasp of TypeScript and modern UI frameworks. Truly a creative solver.",
      image: "/person2.jpg",
    },
    {
      name: "Freelance Client",
      position: "CEO, TechStart",
      text: "The weather application and dashboard components delivered by Ansa were top-notch. High performance throughout.",
      image: "/person3.jpg",
    },
    {
      name: "Startup Founder",
      position: "CTO",
      text: "Delivered a complex SaaS landing page ahead of schedule. The integration with modern APIs was seamless.",
      image: "/person4.jpg",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#0a0a0a]">
      
      {/* --- 1. PROJECTS SECTION (Dark Background) --- */}
      <section id='portfolio' className='py-24 bg-[#0a0a0a] px-6 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className='text-center mb-16'>
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.4em] mb-2 block'>
              Portfolio
            </span>
            <h2 className='text-3xl md:text-4xl font-black text-white tracking-tight uppercase'>
              Featured <span className='text-[#B5BFA1] italic'>Work</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={index % 4}
                className='group relative overflow-hidden aspect-[4/5] cursor-pointer bg-[#111] border border-white/5 rounded-xl'>
                
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100'
                />

                {/* Sage Green Hover Overlay */}
                <div className='absolute inset-0 bg-[#B5BFA1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center text-center p-5'>
                  <div className='w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4 shadow-lg'>
                    <Plus className='text-[#B5BFA1]' size={20} />
                  </div>
                  <span className='text-[#1a1a1a] text-[9px] uppercase font-bold tracking-[2px] mb-1'>
                    {item.category}
                  </span>
                  <h3 className='text-[#1a1a1a] text-md font-black uppercase tracking-tight'>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. TESTIMONIALS SECTION (Sage Green Background) --- */}
      <section id='testimonials' className='py-24 bg-[#B5BFA1] px-6 lg:px-16 overflow-hidden relative'>
        <div className='max-w-6xl mx-auto relative z-10'>
          
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className='text-center mb-12'>
            <span className='text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-2 block'>
              Feedback
            </span>
            <h2 className='text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase'>
              Happy Clients
            </h2>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='pb-16'>
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className='h-auto'>
                <motion.div
                  variants={fadeInUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  custom={i}
                  className='bg-[#1a1a1a] p-7 md:p-8 h-full flex flex-col shadow-lg relative rounded-lg group hover:bg-[#B5BFA1] transition-all duration-500 cursor-grab active:cursor-grabbing border border-white/5'>
                  
                  {/* Quote Icon */}
                  <div className='absolute -top-4 left-8 w-10 h-10 bg-[#B5BFA1] group-hover:bg-[#1a1a1a] flex items-center justify-center shadow-md z-10 rounded-md transition-colors duration-300'>
                    <Quote
                      size={16}
                      className='text-[#1a1a1a] group-hover:text-[#B5BFA1]'
                      fill='currentColor'
                    />
                  </div>

                  <div className='grow pt-2'>
                    <p className='text-gray-400 group-hover:text-[#1a1a1a] text-[14px] leading-relaxed mb-6 italic font-medium transition-colors duration-300'>
                      &quot;{t.text}&quot;
                    </p>
                  </div>

                  <div className='flex items-center gap-3 pt-6 border-t border-white/5 group-hover:border-[#1a1a1a]/10 transition-colors duration-300'>
                    <div className='relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-white/10 group-hover:border-[#1a1a1a]/20 transition-all duration-300'>
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-white group-hover:text-[#1a1a1a] text-sm leading-tight transition-colors duration-300'>
                        {t.name}
                      </h4>
                      <p className='text-[#B5BFA1] group-hover:text-[#1a1a1a]/70 text-[9px] font-bold uppercase tracking-widest mt-0.5 transition-colors duration-300'>
                        {t.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='custom-pagination flex justify-center items-center gap-2 mt-4'></div>
        </div>

        <style jsx global>{`
          .custom-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: transparent !important;
            border: 1.5px solid #1a1a1a;
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: #1a1a1a !important;
            width: 24px;
            border-radius: 4px;
            opacity: 1;
          }
        `}</style>
      </section>
    </div>
  );
}