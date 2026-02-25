"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, Calendar } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
      date: "Feb. 21, 2026",
      author: "Admin",
      comments: 3,
      title: "The Best Way to Design Your Website",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      date: "Feb. 15, 2026",
      author: "Admin",
      comments: 5,
      title: "Food and Drink Design for 2026",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      date: "Jan. 28, 2026",
      author: "Admin",
      comments: 2,
      title: "Why SEO is Important for Your Business",
      description:
        "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.",
    },
  ];

  return (
    <section
      id='blog'
      className='py-24 bg-white px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <span className='text-[#B5BFA1] text-[12px] font-bold uppercase tracking-[0.4em] mb-4 block'>
            Our Blog
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight'>
            Recent Blog
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group cursor-pointer'>
              <div className='relative h-[400] w-full overflow-hidden mb-8 shadow-sm'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              <div className='px-2'>
                <div className='flex items-center gap-6 mb-4 text-[11px] uppercase tracking-widest text-gray-400 font-semibold'>
                  <span className='text-[#B5BFA1] flex items-center gap-1'>
                    <Calendar size={13} /> {blog.date}
                  </span>
                  <span className='flex items-center gap-1'>
                    <User size={13} /> {blog.author}
                  </span>
                  <span className='flex items-center gap-1'>
                    <MessageSquare size={13} /> {blog.comments}
                  </span>
                </div>

                <h3 className='text-2xl font-bold text-[#1a1a1a] mb-4 leading-snug group-hover:text-[#B5BFA1] transition-colors duration-300'>
                  {blog.title}
                </h3>

                <p className='text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-2'>
                  {blog.description}
                </p>

                <div className='inline-block border-b-2 border-[#B5BFA1] pb-1'>
                  <span className='text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a]'>
                    Read More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
