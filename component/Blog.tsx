"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: "/blog-image1.jpg",
      date: "March 05, 2026",
      author: "Ansa",
      comments: 3,
      title: "Mastering Modern UI/UX Design Trends",
      description:
        "Explore how minimalist aesthetics and fluid animations are redefining user engagement in the 2026 digital landscape.",
    },
    {
      id: 2,
      image: "/blog-image2.jpg",
      date: "Feb. 15, 2026",
      author: "Ansa",
      comments: 5,
      title: "The Power of Server-Side Rendering",
      description:
        "Deep dive into Next.js and why SSR is crucial for building scalable, high-performance web applications today.",
    },
    {
      id: 3,
      image: "/blog-image3.jpg",
      date: "Jan. 28, 2026",
      author: "Ansa",
      comments: 2,
      title: "Scaling SEO with Technical Precision",
      description:
        "Beyond keywords: how core web vitals and structured data can significantly boost your organic search rankings.",
    },
  ];

  return (
    <section
      id='blog'
      className='py-24 bg-[#f8f9fa] px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-[#B5BFA1] text-[13px] font-semibold uppercase tracking-[4px] mb-2 block'>
            Our Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-5xl font-bold text-[#1a1a1a]'>
            Recent Blog
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col group'>
              {/* IMAGE CONTAINER FIX: Added aspect-video and min-height */}
              <Link
                href={`/blog/${blog.id}`}
                className='relative aspect-video w-full overflow-hidden mb-7 bg-gray-200 block rounded-sm shadow-sm'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover transition-transform duration-1000 group-hover:scale-110'
                  priority={index === 0}
                />
              </Link>

              {/* Meta Info */}
              <div className='flex items-center gap-4 mb-3 text-[11px] uppercase tracking-widest text-[#b1b1b1] font-bold'>
                <div className='flex items-center gap-1.5'>
                  <Calendar
                    size={13}
                    className='text-[#B5BFA1]'
                  />
                  {blog.date}
                </div>
                <div className='flex items-center gap-1.5'>
                  <User
                    size={13}
                    className='text-[#B5BFA1]'
                  />
                  {blog.author}
                </div>
                <div className='flex items-center gap-1.5'>
                  <MessageSquare
                    size={13}
                    className='text-[#B5BFA1]'
                  />
                  {blog.comments}
                </div>
              </div>

              {/* Title */}
              <Link href={`/blog/${blog.id}`}>
                <h3 className='text-[22px] font-bold text-[#1a1a1a] mb-4 leading-[1.3] group-hover:text-[#B5BFA1] transition-colors duration-300'>
                  {blog.title}
                </h3>
              </Link>

              <p className='text-[#999999] text-[15px] leading-[1.8] mb-6 font-light'>
                {blog.description}
              </p>

              {/* Read More Button */}
              <div className='mt-auto'>
                <Link
                  href={`/blog/${blog.id}`}
                  className='relative inline-block text-[12px] font-bold uppercase tracking-[2px] text-[#1a1a1a] hover:text-[#B5BFA1] transition-all duration-300'>
                  Read More
                  {/* Underline Fix: Added height as 1px or 2px */}
                  <span className='block h-[0.5] w-full bg-[#B5BFA1] mt-1 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
