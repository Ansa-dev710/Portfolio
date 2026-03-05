"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// FIX: navLinks ko component se bahar move kiya taaki dependency ka error khatam ho jaye
const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#portfolio" },
  { name: "Blog", path: "#blog" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Offset 150px for better active state detection
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Ab yahan error nahi aayega

  return (
    <nav className='fixed w-full z-50 bg-[#1a1a1a] shadow-xl py-5'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12'>
        <Link
          href='#hero'
          className='text-2xl font-black uppercase tracking-tighter text-white'>
          ANSA<span className='text-[#B5BFA1]'>.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[2px]'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`relative transition-colors duration-300 pb-2 ${
                  active === item.name
                    ? "text-[#B5BFA1]"
                    : "text-white hover:text-[#B5BFA1]"
                }`}>
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-[0.5] bg-[#B5BFA1] transition-all duration-300 ${
                    active === item.name ? "w-full" : "w-0"
                  }`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-white font-bold text-xs uppercase tracking-widest'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close ×" : "Menu ☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='flex justify-between items-center px-8 py-6 border-b border-white/10'>
          <span className='text-2xl font-black text-white uppercase'>
            ANSA<span className='text-[#B5BFA1]'>.</span>
          </span>
          <button
            className='text-4xl text-white'
            onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <ul className='flex flex-col items-center justify-center gap-8 mt-16 text-lg font-bold uppercase tracking-[3px] text-white'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  active === item.name ? "text-[#B5BFA1]" : "text-white"
                }`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
