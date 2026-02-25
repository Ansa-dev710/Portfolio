"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsAndTestimonials() {
  const projectItems = [
    {
      title: "Building Portfolio",
      category: "Web Design",
      image: "/work-1.jpg",
    },
    { title: "Creative Design", category: "Application", image: "/work-2.jpg" },
    { title: "Modern Office", category: "Branding", image: "/work-3.jpg" },
    { title: "Digital Work", category: "Web Design", image: "/work-4.jpg" },
    { title: "Mobile App", category: "Application", image: "/work-5.jpg" },
    { title: "Graphic Design", category: "Branding", image: "/work-6.jpg" },
    { title: "UI/UX Design", category: "Web Design", image: "/work-7.jpg" },
    { title: "Logo Branding", category: "Branding", image: "/work-8.jpg" },
  ];

  const testimonials = [
    {
      name: "Roger Scott",
      position: "Marketing Manager",
      text: "Working with this developer was a game-changer. The attention to detail and ability to translate complex requirements into a seamless UI is truly remarkable.",
      image: "/person_1.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "Product Designer",
      text: "Exceptional service and professional workflow. The final product exceeded our expectations in both performance and aesthetics. Highly recommended!",
      image: "/person_2.jpg",
    },
    {
      name: "Michael Smith",
      position: "Web Developer",
      text: "A highly skilled individual who understands the nuances of modern web technologies. The project was delivered on time with top-notch code quality.",
      image: "/person_3.jpg",
    },
  ];

  return (
    <>
      <section
        id='portfolio'
        className='py-24 bg-white px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block'>
              Portfolio
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight'>
              Featured Work
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative overflow-hidden aspect-4/5 cursor-pointer bg-gray-100 rounded-sm'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-6'>
                  <div className='w-10 h-10 bg-[#B5BFA1] rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <Plus
                      className='text-white'
                      size={20}
                    />
                  </div>
                  <span className='text-[#B5BFA1] text-[10px] uppercase font-bold tracking-[2px] mb-2'>
                    {item.category}
                  </span>
                  <h3 className='text-white text-xl font-bold uppercase tracking-tight'>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-center mb-20'>
            <span className='text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block'>
              Testimonial
            </span>

            <h2 className='text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tighter'>
              Client Testimonials
            </h2>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='testimonial-swiper pb-24'>
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                className='h-auto'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className='bg-white p-12 h-full relative flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500'>
                  <div className='absolute -top-6 left-10 w-12 h-12 bg-[#1a1a1a] flex items-center justify-center shadow-xl'>
                    <Quote
                      size={20}
                      className='text-[#B5BFA1]'
                      fill='currentColor'
                    />
                  </div>

                  <div className='grow'>
                    <p className='text-gray-700 text-[16px] leading-relaxed mb-10 font-normal italic'>
                      "{t.text}"
                    </p>
                  </div>

                  <div className='flex items-center gap-5 pt-8 border-t border-gray-100'>
                    <div className='relative w-14 h-14 rounded-full overflow-hidden shrink-0'>
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-[#1a1a1a] text-lg leading-tight tracking-tight'>
                        {t.name}
                      </h4>
                      <p className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-widest mt-1'>
                        {t.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style
          jsx
          global>{`
          .testimonial-swiper .swiper-pagination {
            bottom: 20px !important;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: white !important;
            opacity: 0.5;
            transition: all 0.4s ease;
            margin: 0 8px !important;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            transform: scale(1.4);
            background: #1a1a1a !important; /* Active dot is black */
          }
        `}</style>
      </section>
    </>
  );
}
