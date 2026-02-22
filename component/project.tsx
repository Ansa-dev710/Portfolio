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
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "/person_1.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "Product Designer",
      text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean flows by their place.",
      image: "/person_2.jpg",
    },
    {
      name: "Michael Smith",
      position: "Web Developer",
      text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
      image: "/person_3.jpg",
    },
    {
      name: "Jessica Williams",
      position: "CEO, TechFlow",
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.",
      image: "/person_4.jpg",
    },
  ];

  return (
    <>
      <section
        id='portfolio'
        className='py-24 bg-white px-6 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block'>
              Accomplishments
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 tracking-tight uppercase'>
              My Projects
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                className='group relative overflow-hidden aspect-square cursor-pointer bg-gray-100'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-[#B5BFA1]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4'>
                  <Plus
                    className='text-white mb-2'
                    size={20}
                  />
                  <span className='text-white/80 text-[9px] uppercase font-bold tracking-[2px] mb-1'>
                    {item.category}
                  </span>
                  <h3 className='text-white text-lg font-bold uppercase tracking-tighter'>
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
          <div className='text-center mb-24'>
            <span className='text-white/60 text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block'>
              Testimonial
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              What client says about?
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='testimonial-swiper pb-20'>
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                className='h-auto'>
                <div className='bg-white p-10 h-full relative shadow-2xl rounded-none flex flex-col'>
                  <div className='absolute -top-5 left-10 w-12 h-12 bg-white flex items-center justify-center shadow-lg'>
                    <Quote
                      size={20}
                      className='text-[#B5BFA1]'
                      fill='currentColor'
                    />
                  </div>

                  <div className='grow'>
                    <p className='text-gray-500 text-[15px] leading-relaxed mb-10 italic'>
                      "{t.text}"
                    </p>
                  </div>

                  <div className='flex items-center gap-5 pt-6 border-t border-gray-50'>
                    <div className='relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-gray-100'>
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-bold text-[#1a1a1a] text-md leading-tight'>
                        {t.name}
                      </h4>
                      <p className='text-[#B5BFA1] text-[10px] font-bold uppercase tracking-widest mt-1'>
                        {t.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style
          jsx
          global>{`
          .testimonial-swiper .swiper-pagination {
            bottom: 0px !important;
          }
          .testimonial-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: white !important;
            opacity: 0.3;
            margin: 0 6px !important;
            transition: all 0.3s ease;
          }
          .testimonial-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            transform: scale(1.3);
          }
        `}</style>
      </section>
    </>
  );
}
