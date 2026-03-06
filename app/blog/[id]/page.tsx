"use client";

import { motion } from "framer-motion";
import { Calendar, User, MessageSquare, ChevronLeft, Quote as QuoteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const allBlogs = [
  {
    id: "1",
    title: "Mastering Modern UI/UX Design Trends",
    author: "Ansa",
    date: "05 Mar, 2026",
    comments: 3,
    image: "/blog-image1.jpg",
    quote: "Minimalism is not a lack of something. It is simply the perfect amount of something.",
    description: "Explore how minimalist aesthetics and fluid animations are redefining user engagement in the 2026 digital landscape. Modern UI is moving towards micro-interactions that feel natural and intuitive.",
  },
  {
    id: "2",
    title: "The Power of Server-Side Rendering",
    author: "Ansa",
    date: "15 Feb, 2026",
    comments: 5,
    image: "/blog-image2.jpg",
    quote: "Speed is the most important feature of any web application.",
    description: "Deep dive into Next.js and why SSR is crucial for building scalable, high-performance web applications. SSR ensures that your content is indexed by search engines and delivered instantly to users.",
  },
  {
    id: "3",
    title: "Scaling SEO with Technical Precision",
    author: "Ansa",
    date: "28 Jan, 2026",
    comments: 2,
    image: "/blog-image3.jpg",
    quote: "Technical SEO is the foundation upon which all other marketing is built.",
    description: "Beyond keywords: how core web vitals and structured data can significantly boost your organic search rankings. Precision in technical architecture is what separates top-tier sites from the rest.",
  },
];

export default function BlogPost() {
  const params = useParams();
  const blogData = allBlogs.find((b) => b.id === params.id);

  if (!blogData) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Blog Not Found</h2>
        <Link href="/#blog" className="text-[#B5BFA1] font-bold uppercase text-[12px] tracking-widest mt-6 border-b border-[#B5BFA1] pb-1">Go Back</Link>
      </div>
    );
  }

  return (
    <main className='bg-[#0a0a0a] min-h-screen text-white selection:bg-[#B5BFA1] selection:text-black'>
      
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">
        <Link
          href='/#blog'
          className='group inline-flex items-center gap-2 text-[#B5BFA1] font-bold uppercase text-[11px] tracking-[4px] mb-12 hover:text-white transition-all'>
          <ChevronLeft size={16} className='transform group-hover:-translate-x-1 transition-transform' />
          Back to Insights
        </Link>

        <div className='max-w-4xl'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex flex-wrap items-center gap-6 mb-8 text-[10px] uppercase tracking-[2px] text-gray-500 font-black'>
            <div className='flex items-center gap-2'>
              <Calendar size={14} className='text-[#B5BFA1]' />
              {blogData.date}
            </div>
            <div className='flex items-center gap-2 border-l border-white/10 pl-6'>
              <User size={14} className='text-[#B5BFA1]' />
              By {blogData.author}
            </div>
            <div className='flex items-center gap-2 border-l border-white/10 pl-6'>
              <MessageSquare size={14} className='text-[#B5BFA1]' />
              {blogData.comments} Comments
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-7xl font-black text-white leading-[1] uppercase tracking-tighter mb-16'>
            {blogData.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#B5BFA1] italic font-light">{blogData.title.split(' ').pop()}</span>
          </motion.h1>
        </div>
      </div>

      {/* Hero Image - Fixed size & High Impact */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#111]'>
        <Image
          src={blogData.image}
          alt={blogData.title}
          fill
          className='object-cover opacity-80'
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-60" />
      </motion.div>

      {/* Content Area */}
      <div className='max-w-4xl mx-auto px-6 lg:px-16 py-24'>
        <article className='relative'>
          
          {/* Elegant Blockquote */}
          <div className='relative mb-20 py-10 border-y border-white/5'>
            <QuoteIcon className="absolute -top-4 left-0 text-[#B5BFA1] opacity-20" size={60} />
            <p className='text-3xl md:text-4xl font-light italic text-[#B5BFA1] leading-[1.4] text-center md:text-left'>
              &quot;{blogData.quote}&quot;
            </p>
          </div>

          <div className='space-y-8 text-gray-400 text-lg md:text-xl leading-[1.8] font-medium'>
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-[#B5BFA1] first-letter:mr-3 first-letter:float-left">
              {blogData.description}
            </p>
            
            <p>
              My experience at <span className="text-white font-bold">Heapware</span> has taught me that the best products are
              built with a focus on core web vitals and structured data. Whether
              it is a task management system or a professional portfolio, clean
              code is the bridge between a vision and a high-performance
              reality.
            </p>

            <div className="pt-12">
                <div className="h-[2px] w-20 bg-[#B5BFA1]" />
                <p className="mt-6 text-sm uppercase tracking-[4px] font-bold text-white">Ansa Asghar</p>
                <p className="text-[10px] uppercase tracking-[2px] text-[#B5BFA1]">Full Stack Web Developer</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}