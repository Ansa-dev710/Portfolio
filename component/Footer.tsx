import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Dribbble,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#f8f9fa] pt-24 pb-12 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
          <div className='space-y-6'>
            <h4 className='text-gray-900 font-semibold text-lg'>
              About Orbit.
            </h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className='space-y-4'>
              <h5 className='text-gray-900 font-semibold text-sm'>Connect</h5>
              <div className='flex gap-3'>
                {[Instagram, Twitter, Facebook, Linkedin, Github, Dribbble].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href='#'
                      className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white hover:bg-[#96bb7c] transition-colors'>
                      <Icon size={14} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <h4 className='text-gray-900 font-semibold text-lg'>Navagation</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  HTML5 & CSS3
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  NEXT.js
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  NODE.js
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  React JS
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-gray-900 font-semibold text-lg'>Services</h4>
            <ul className='space-y-3 text-gray-400 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  E-Commerce
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[#96bb7c]'>
                  Fullstack web Dev
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-gray-900 font-semibold text-lg'>Contact</h4>
            <ul className='space-y-4 text-gray-400 text-sm'>
              <li className='leading-relaxed'>Behria Town, Lahore</li>
              <li>
                <a
                  href='tel:+923018950901'
                  className='hover:text-[#96bb7c] block'>
                  +92 3018950901
                </a>
              </li>
              <li>
                <a
                  href='mailto:ansaasghr710@gmail.com'
                  className='hover:text-[#96bb7c] block italic'>
                  ansaasghr710@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-200 pt-12 text-center'>
          <p className='text-gray-400 text-sm tracking-wide'>
            Copyright ©2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
