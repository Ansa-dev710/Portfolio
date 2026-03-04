"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Plus, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsAndTestimonials() {
  const projectItems = [
    {
      title: "Next.js Weather App",
      category: "Web Development",
      image: "/work-1.jpg",
    },
    { title: "Admin Dashboard", category: "Full Stack", image: "/work-2.jpg" },
    {
      title: "Portfolio System",
      category: "UI/UX Design",
      image: "/work-3.jpg",
    },
    {
      title: "Heapware CRM",
      category: "Management System",
      image: "/work-4.jpg",
    },
    {
      title: "E-Commerce Interface",
      category: "Web Design",
      image: "/work-5.jpg",
    },
    {
      title: "Auth Systems",
      category: "Security/Middleware",
      image: "/work-6.jpg",
    },
    { title: "SaaS Landing Page", category: "Branding", image: "/work-7.jpg" },
    { title: "API Integration", category: "Backend", image: "/work-8.jpg" },
  ];

  const testimonials = [
    {
      name: "Project Lead @ Heapware",
      position: "Senior Developer",
      text: "Ansa's ability to handle complex Next.js middleware and React state management is impressive. A great asset to any development team.",
      image: "/person1.jpg",
    },
    {
      name: "Ideoversity Mentor",
      position: "Technical Trainer",
      text: "From the very beginning, Ansa showed an exceptional grasp of TypeScript and modern UI frameworks. Truly a creative problem solver.",
      image: "/person2.jpg",
    },
    {
      name: "Freelance Client",
      position: "CEO, TechStart",
      text: "The weather application and dashboard components delivered by Ansa were top-notch. High performance and clean code throughout.",
      image: "/person3.jpg",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <>
      <section
        id='portfolio'
        className='py-24 bg-white px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className='text-center mb-16'>
            <span className='text-[#B5BFA1] text-[12px] font-bold uppercase tracking-[0.4em] mb-3 block'>
              Portfolio
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase'>
              Featured <span className='text-[#B5BFA1]'>Work</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={index % 4}
                className='group relative overflow-hidden aspect-3/4 cursor-pointer bg-gray-100'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-[#1a1a1a]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-6'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-12 h-12 bg-[#B5BFA1] rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <Plus
                      className='text-white'
                      size={24}
                    />
                  </motion.div>
                  <span className='text-[#B5BFA1] text-[10px] uppercase font-bold tracking-[2px] mb-2'>
                    {item.category}
                  </span>
                  <h3 className='text-white text-lg font-bold uppercase tracking-tight'>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-32 bg-[#B5BFA1] px-6 lg:px-16 overflow-hidden relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className='text-center mb-20'>
            <span className='text-white text-[12px] font-bold uppercase tracking-[0.4em] mb-3 block'>
              Feedback
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tighter uppercase'>
              Happy Clients
            </h2>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (_index: number, className: string) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='pb-20'>
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                className='h-auto py-10'>
                <motion.div
                  variants={fadeInUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  custom={i % 3}
                  className='bg-white p-8 md:p-10 h-full flex flex-col shadow-2xl transition-colors duration-500 relative rounded-sm group hover:bg-[#1a1a1a] transition-colors'>
                  <div className='absolute -top-5 left-10 w-12 h-12 bg-[#1a1a1a] group-hover:bg-[#B5BFA1] flex items-center justify-center shadow-xl z-10 transition-colors'>
                    <Quote
                      size={20}
                      className='text-[#B5BFA1] group-hover:text-white'
                      fill='currentColor'
                    />
                  </div>

                  <div className='grow pt-4'>
                    <p className='text-gray-500 group-hover:text-gray-300 text-[15px] leading-relaxed mb-8 italic font-light'>
                      "{t.text}"
                    </p>
                  </div>

                  <div className='flex items-center gap-4 pt-8 border-t border-gray-100 group-hover:border-gray-800'>
                    <div className='relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#f0f0f0] shadow-md'>
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-[#1a1a1a] group-hover:text-white text-md leading-tight'>
                        {t.name}
                      </h4>
                      <p className='text-[#B5BFA1] text-[10px] font-bold uppercase tracking-widest mt-1'>
                        {t.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='custom-pagination flex justify-center items-center gap-2 mt-8'></div>
        </div>

        <style
          jsx
          global>{`
          .custom-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: transparent !important;
            border: 2px solid white;
            opacity: 0.5;
            transition: all 0.4s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: #1a1a1a !important;
            border-color: #1a1a1a !important;
            width: 30px;
            border-radius: 5px;
            opacity: 1;
          }
        `}</style>
      </section>
    </>
  );
}
