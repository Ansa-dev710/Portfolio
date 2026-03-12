"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: "/blog-image1.jpg",
      date: "05 Mar",
      year: "2026",
      author: "Ansa",
      comments: 3,
      title: "Mastering Modern UI/UX Design Trends",
      description: "Explore how minimalist aesthetics and fluid animations are redefining user engagement in the 2026 digital landscape.",
    },
    {
      id: 2,
      image: "/blog-image2.jpg",
      date: "15 Feb",
      year: "2026",
      author: "Ansa",
      comments: 5,
      title: "The Power of Server-Side Rendering",
      description: "Deep dive into Next.js and why SSR is crucial for building scalable, high-performance web applications today.",
    },
    {
      id: 3,
      image: "/blog-image3.jpg",
      date: "28 Jan",
      year: "2026",
      author: "Ansa",
      comments: 2,
      title: "Scaling SEO with Technical Precision",
      description: "Beyond keywords: how core web vitals and structured data can significantly boost your organic search rankings.",
    },
  ];

  return (
    <section id='blog' className='py-32 bg-[#0a0a0a] px-6 lg:px-16 relative overflow-hidden'>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B5BFA1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className='max-w-7xl mx-auto relative z-10'>
        
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6'>
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='text-[#B5BFA1] text-[12px] font-bold uppercase tracking-[0.5em] mb-4 block'>
              Insights & Articles
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none'>
              Latest <span className="text-[#B5BFA1] italic font-light">Stories</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
             {/* Yeh Link '/blog' page par le kar jayega */}
             <Link href="/blog" className="text-[11px] font-bold uppercase tracking-widest text-white/50 border-b border-white/10 pb-1 hover:text-[#B5BFA1] hover:border-[#B5BFA1] transition-all duration-300">
                View All Posts
             </Link>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className='flex flex-col group'>
              
              <div className='relative aspect-[16/10] w-full overflow-hidden mb-8 rounded-2xl bg-[#111111] border border-white/5'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className='object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-center">
                  <span className="block text-sm font-black text-white leading-none">{blog.date}</span>
                  <span className="block text-[10px] text-[#B5BFA1] font-bold uppercase mt-1">{blog.year}</span>
                </div>
              </div>

              <div className='flex items-center gap-6 mb-4 text-[10px] uppercase font-bold tracking-widest text-gray-500'>
                <div className='flex items-center gap-2 group-hover:text-white transition-colors'>
                  <User size={12} className='text-[#B5BFA1]' />
                  {blog.author}
                </div>
                <div className='flex items-center gap-2'>
                  <MessageSquare size={12} className='text-[#B5BFA1]' />
                  {blog.comments} Comments
                </div>
              </div>

              <Link href={`/blog/${blog.id}`}>
                <h3 className='text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#B5BFA1] transition-colors duration-300'>
                  {blog.title}
                </h3>
              </Link>

              <p className='text-gray-400 text-[15px] leading-relaxed mb-8 font-medium line-clamp-2'>
                {blog.description}
              </p>

              <div className='mt-auto pt-6 border-t border-white/5'>
                <Link
                  href={`/blog/${blog.id}`}
                  className='flex items-center justify-between group/link text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-[#B5BFA1] transition-colors'>
                  <span>Read Full Article</span>
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-[#B5BFA1] group-hover/link:border-[#B5BFA1] transition-all duration-500">
                    <ArrowUpRight size={14} className="group-hover/link:text-black transition-colors" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}