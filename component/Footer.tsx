"use client";
import {
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#232931] pt-24 pb-12 px-6 lg:px-16 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
          <div className='space-y-6'>
            <h4 className='text-xl font-bold'>Lets talk about</h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              I am a passionate developer focused on creating modern and
              responsive web applications. Let's collaborate to bring your ideas
              to life with clean code and great design.
            </p>
            <button className='px-6 py-3 bg-[#B5BFA1] text-white text-[12px] font-bold uppercase rounded-md hover:bg-white hover:text-[#B5BFA1] transition-all duration-300'>
              Learn more
            </button>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold'>Links</h4>
            <ul className='space-y-4'>
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li
                    key={link}
                    className='flex items-center gap-2 group cursor-pointer'>
                    <ChevronRight
                      size={14}
                      className='text-gray-500 group-hover:text-[#B5BFA1] transition-colors'
                    />
                    <span className='text-gray-400 group-hover:text-white transition-colors'>
                      {link}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold'>Services</h4>
            <ul className='space-y-4'>
              {[
                "Web Design",
                "Web Development",
                "Business Strategy",
                "Data Analysis",
                "Graphic Design",
              ].map((service) => (
                <li
                  key={service}
                  className='flex items-center gap-2 group cursor-pointer'>
                  <ChevronRight
                    size={14}
                    className='text-gray-500 group-hover:text-[#B5BFA1] transition-colors'
                  />
                  <span className='text-gray-400 group-hover:text-white transition-colors'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xl font-bold'>Have a Questions?</h4>
            <ul className='space-y-6 text-gray-400'>
              <li className='flex gap-4'>
                <MapPin
                  size={20}
                  className='text-white shrink-0'
                />
                <span className='text-sm'>Bahria Town, Lahore, Pakistan</span>
              </li>
              <li className='flex gap-4'>
                <Phone
                  size={20}
                  className='text-white shrink-0'
                />
                <span className='text-sm'>+92 301 8950901</span>
              </li>
              <li className='flex gap-4'>
                <Send
                  size={20}
                  className='text-white shrink-0'
                />
                <span className='text-sm'>ansaasghr710@gmail.com</span>
              </li>
            </ul>

            <div className='flex gap-3 pt-4'>
              {[Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#B5BFA1] transition-all duration-300'>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-8 text-center'>
          <p className='text-gray-500 text-sm'>
            Copyright ©2026 All rights reserved | This template is made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
