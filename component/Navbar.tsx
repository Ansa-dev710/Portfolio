"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12'>
        {/* Logo */}
        <Link
          href='#hero'
          className='text-2xl font-bold text-gray-900'>
          Ansa<span className='text-gray-700'></span>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-sm font-medium'>
          {navLinks.map((item) => (
            <li
              key={item.name}
              className='relative'>
              <a
                href={item.path}
                className='text-gray-900 hover:text-gray-900 transition-colors duration-300'>
                {item.name}
                {/* underline */}
                <span className='absolute left-1/2 -bottom-1 w-0 h-[0.5] bg-gray-900 transition-all duration-300 transform -translate-x-1/2 hover:w-full'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-2xl text-gray-900'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='flex justify-between items-center px-6 py-5 border-b border-gray-200'>
          <Link
            href='#hero'
            className='text-2xl font-bold text-gray-900'
            onClick={() => setIsOpen(false)}>
            Ansa<span className='text-gray-700'>Portfolio</span>
          </Link>
          <button
            className='text-3xl text-gray-900'
            onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
        <ul className='flex flex-col gap-6 mt-8 px-6'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={() => setIsOpen(false)}
                className='text-gray-900 text-lg hover:text-gray-600 transition-colors duration-300'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
