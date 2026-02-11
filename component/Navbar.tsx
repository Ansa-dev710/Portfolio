"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <section className='relative min-h-screen w-full overflow-hidden text-white bg-black scroll-smooth'>
      <div className='absolute inset-0 -z-10 bg-linear-to-r from-purple-600 via-blue-600 to-indigo-700 animate-gradient bg-size[length:400%_400%]' />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}>
        <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4'>
          <Link
            href='/'
            className='text-2xl font-bold tracking-tight'>
            Ansa<span className='text-gray-300'></span>
          </Link>

          <ul className='hidden md:flex items-center space-x-8 text-sm font-medium'>
            {navLinks.map((item) => (
              <li
                key={item.name}
                className='relative'>
                <Link
                  href={item.path}
                  className={`transition-colors duration-300 ${
                    pathname === item.path
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[0.5] bg-white transition-all duration-300 ${
                      pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-4'>
            <Link
              href='/contact'
              className='hidden md:inline-block px-5 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-[#85a86a] transition'>
              Hire Me
            </Link>

            <button
              className='md:hidden text-white text-2xl'
              onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className='md:hidden bg-black/90 px-6 pb-6 space-y-4'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className='block text-gray-300 py-2 hover:text-white transition'>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div className='flex min-h-screen flex-col items-center justify-center text-center px-6 pt-24'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold leading-tight md:text-6xl lg:text-7xl'>
          Build Modern Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='mt-6 max-w-2xl text-lg md:text-xl text-gray-200'>
          I'm <span className='font-semibold'>Ansa Asghar</span>, a Full-Stack
          Developer crafting high-performance, scalable SaaS applications with
          modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='mt-8 flex gap-4'>
          <Link
            href='/contact'
            className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition duration-300'>
            Get Started
          </Link>

          <Link
            href='/portfolio'
            className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300'>
            View Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
