"use client";

import { motion } from "framer-motion";
import { Calendar, User, MessageSquare, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();

  const blogData = {
    title: "The Intersection of Performance and Aesthetics",
    author: "Ansa Asghar",
    date: "March 05, 2026",
    comments: 5,
    image: "/blog-image1.jpg",

    quote:
      "Exceptional design is not just a visual choice; it is a commitment to the user's journey.",

    description:
      "In modern web development, the challenge lies in maintaining lightning-fast performance while delivering complex, fluid animations. Leveraging Next.js and Tailwind CSS allows us to build interfaces that are as robust as they are beautiful.",
  };

  return (
    <main className='py-20 bg-white px-6 lg:px-16 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/#blog'
          className='group flex items-center gap-2 text-[#B5BFA1] font-bold uppercase text-[11px] tracking-[3px] mb-10 hover:text-[#1a1a1a] transition-all'>
          <ChevronLeft
            size={16}
            className='transform group-hover:-translate-x-1 transition-transform'
          />
          Back to Blog
        </Link>

        <div className='mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex items-center gap-6 mb-6 text-[10px] uppercase tracking-[2px] text-[#b1b1b1] font-bold'>
            <div className='flex items-center gap-1.5'>
              <Calendar
                size={14}
                className='text-[#B5BFA1]'
              />
              {blogData.date}
            </div>
            <div className='flex items-center gap-1.5'>
              <User
                size={14}
                className='text-[#B5BFA1]'
              />
              By {blogData.author}
            </div>
            <div className='flex items-center gap-1.5'>
              <MessageSquare
                size={14}
                className='text-[#B5BFA1]'
              />
              {blogData.comments} Comments
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-6xl font-black text-[#1a1a1a] leading-[1.1] uppercase tracking-tighter'>
            {blogData.title}
          </motion.h1>
        </div>

        <div className='relative w-full aspect-[video] md:h-[500px] overflow-hidden bg-gray-100 mb-16 rounded-sm shadow-2xl'>
          <Image
            src={blogData.image}
            alt={blogData.title}
            fill
            className='object-cover'
            priority
          />
        </div>

        <article className='prose prose-lg max-w-none text-[#666] leading-[1.9]'>
          <div className='flex gap-8 my-16 items-stretch'>
            <div className='w-1.5 bg-[#B5BFA1] rounded-full'></div>
            <p className='text-2xl md:text-3xl font-serif italic text-[#1a1a1a] leading-relaxed py-2'>
              &quot;{blogData.quote}&quot;
            </p>
          </div>

          <div className='text-lg mb-8 text-justify font-light'>
            <p className='mb-6'>
              <span className='hidden'>Reference ID: {params.id}</span>
              {blogData.description}
            </p>
            <p>
              My experience at Heapware has taught me that the best products are
              built with a focus on core web vitals and structured data. Whether
              it is a task management system or a professional portfolio, clean
              code is the bridge between a vision and a high-performance
              reality.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
