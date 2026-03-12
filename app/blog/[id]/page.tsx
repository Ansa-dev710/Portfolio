// app/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import { User, MessageSquare, ArrowUpRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allPosts = [
  {
    id: "1",
    title: "Mastering Modern UI/UX Design Trends",
    author: "Ansa",
    date: "05 Mar",
    year: "2026",
    comments: 3,
    image: "/blog-image1.jpg",
    description: "Explore how minimalist aesthetics and fluid animations are redefining user engagement in the 2026 digital landscape.",
  },
  {
    id: "2",
    title: "The Power of Server-Side Rendering",
    author: "Ansa",
    date: "15 Feb",
    year: "2026",
    comments: 5,
    image: "/blog-image2.jpg",
    description: "Deep dive into Next.js and why SSR is crucial for building scalable, high-performance web applications.",
  },
  {
    id: "3",
    title: "Scaling SEO with Technical Precision",
    author: "Ansa",
    date: "28 Jan",
    year: "2026",
    comments: 2,
    image: "/blog-image3.jpg",
    description: "Beyond keywords: how core web vitals and structured data can significantly boost your organic search rankings.",
  },
  // Nayi posts yahan add karein...
];

export default function AllBlogsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] py-24 px-6 lg:px-16 selection:bg-[#B5BFA1] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Back */}
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-[#B5BFA1] font-bold uppercase text-[10px] tracking-[4px] mb-12 hover:text-white transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none"
          >
            Our <span className="text-[#B5BFA1] italic font-light">Archive</span>
          </motion.h1>
          <p className="text-gray-500 mt-6 max-w-xl text-lg uppercase tracking-widest font-medium">
            A collection of thoughts on code, design, and strategy.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {allPosts.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${blog.id}`} className="block">
                {/* Blog Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#111] mb-8 border border-white/5">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-white/10">
                    <span className="block text-sm font-black text-white">{blog.date}</span>
                    <span className="block text-[10px] text-[#B5BFA1] font-bold uppercase">{blog.year}</span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <User size={12} className="text-[#B5BFA1]" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={12} className="text-[#B5BFA1]" /> {blog.comments}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#B5BFA1] transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                  {blog.description}
                </p>

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/50 group-hover:text-[#B5BFA1] transition-colors">
                    Read Full Story
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#B5BFA1] group-hover:border-[#B5BFA1] transition-all">
                    <ArrowUpRight size={16} className="group-hover:text-black transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}