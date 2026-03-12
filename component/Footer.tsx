"use client";

import {
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  MapPin,
  Phone,
  Send,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='relative bg-[#0a0a0a] pt-24 pb-12 px-6 lg:px-16 text-white border-t border-white/5 overflow-hidden'>
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#B5BFA1 1px, transparent 1px), linear-gradient(90deg, #B5BFA1 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }} />
      
      {/* Subtle Radial Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B5BFA1]/10 blur-[120px] rounded-full z-0" />

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
          
          <div className='space-y-6'>
            <h4 className='text-xl font-bold tracking-tight'>
              Let's <span className="text-[#B5BFA1]">Talk</span>
            </h4>
            <p className='text-gray-400 text-[13px] leading-relaxed'>
              I am a passionate Full Stack Developer focused on creating modern and
              responsive web applications. Let's collaborate to bring your ideas
              to life with clean code and great design.
            </p>
            <button className='px-6 py-3 bg-[#B5BFA1] text-black text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#B5BFA1]/5'>
              Hire Me
            </button>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold tracking-tight text-[#B5BFA1]'>Links</h4>
            <ul className='space-y-4'>
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li
                    key={link}
                    className='flex items-center gap-2 group cursor-pointer w-fit'>
                    <ChevronRight
                      size={14}
                      className='text-[#B5BFA1]/40 group-hover:text-[#B5BFA1] transition-colors'
                    />
                    <span className='text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all'>
                      {link}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold tracking-tight text-[#B5BFA1]'>Services</h4>
            <ul className='space-y-4'>
              {[
                "Web Design",
                "Web Development",
                "UI/UX Design",
                "Auth Integration",
                "API Development",
              ].map((service) => (
                <li
                  key={service}
                  className='flex items-center gap-2 group cursor-pointer w-fit'>
                  <ChevronRight
                    size={14}
                    className='text-[#B5BFA1]/40 group-hover:text-[#B5BFA1] transition-colors'
                  />
                  <span className='text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold tracking-tight'>Questions?</h4>
            <ul className='space-y-6 text-gray-400'>
              <li className='flex gap-4 group cursor-default'>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#B5BFA1]/10 transition-colors">
                    <MapPin size={18} className='text-[#B5BFA1]' />
                </div>
                <span className='text-[13px] self-center'>Bahria Town, Lahore, Pakistan</span>
              </li>
              <li className='flex gap-4 group cursor-default'>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#B5BFA1]/10 transition-colors">
                    <Phone size={18} className='text-[#B5BFA1]' />
                </div>
                <span className='text-[13px] self-center'>+92 301 8950901</span>
              </li>
              <li className='flex gap-4 group cursor-default'>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#B5BFA1]/10 transition-colors">
                    <Send size={18} className='text-[#B5BFA1]' />
                </div>
                <span className='text-[13px] self-center'>ansaasghr710@gmail.com</span>
              </li>
            </ul>

            <div className='flex gap-3 pt-4'>
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#B5BFA1] hover:text-black transition-all duration-300'>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-[11px] uppercase tracking-[2px] font-medium'>
            Copyright ©2026 All rights reserved
          </p>
          <p className='text-gray-500 text-[11px] uppercase tracking-[2px] font-medium'>
            Made  <span className="text-[#B5BFA1]">❤️</span> by Ansa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;