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
      className={`fixed w-full z-50 bg-white transition py-5 ${scrolled ? "shadow-md py-3" : ""}`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12'>
        <Link
          href='#hero'
          className='text-2xl font-bold'>
          Ansa<span className='text-indigo-600'></span>
        </Link>

        <ul className='hidden md:flex gap-8 text-sm font-medium'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className='hover:text-gray-600 text-gray-700'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className='md:hidden text-2xl'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className='md:hidden bg-white text-black flex flex-col p-4 gap-4'>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
}
