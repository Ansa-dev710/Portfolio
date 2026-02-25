"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin size={22} />,
      label: "Address",
      value: "Bahria Town Lahore",
      link: null,
    },
    {
      icon: <Phone size={22} />,
      label: "Contact Number",
      value: "03018950901",
      link: "tel:03018950901",
    },
    {
      icon: <Send size={22} />,
      label: "Email Address",
      value: "ansasgar710@gmail.com",
      link: "mailto:ansasgar710@gmail.com",
    },
  ];

  return (
    <section
      id='contact'
      className='py-24 bg-white px-6 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-[#B5BFA1] text-[13px] font-bold uppercase tracking-[0.4em] mb-4 block'>
            CONTACT US
          </span>
          <h2 className='text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight'>
            Have a Project?
          </h2>

          <p className='max-w-2xl mx-auto text-gray-400 text-[16px] leading-relaxed'>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's build something
            amazing together!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
          <div className='lg:col-span-8 order-2 lg:order-1'>
            <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full bg-white border border-[#B5BFA1] p-4 text-sm outline-none focus:shadow-md transition-all'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full bg-white border border-[#B5BFA1] p-4 text-sm outline-none focus:shadow-md transition-all'
              />
              <input
                type='text'
                placeholder='Subject'
                className='col-span-1 md:col-span-2 w-full bg-white border border-[#B5BFA1] p-4 text-sm outline-none focus:shadow-md transition-all'
              />
              <textarea
                placeholder='Message'
                rows={6}
                className='col-span-1 md:col-span-2 w-full bg-white border border-[#B5BFA1] p-4 text-sm outline-none focus:shadow-md transition-all resize-none'></textarea>
              <div className='col-span-1 md:col-span-2'>
                <button className='px-10 py-5 bg-[#B5BFA1] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-[#1a1a1a] transition-all duration-300'>
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className='lg:col-span-4 order-1 lg:order-2 flex flex-col gap-8'>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className='flex items-center gap-6'>
                {info.link ? (
                  <a
                    href={info.link}
                    className='flex items-center gap-6 group cursor-pointer'>
                    <div className='w-16 h-16 rounded-full bg-[#B5BFA1]/20 text-[#B5BFA1] flex items-center justify-center shrink-0 group-hover:bg-[#B5BFA1]/30 transition-all'>
                      <div className='w-12 h-12 rounded-full bg-[#B5BFA1] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
                        {info.icon}
                      </div>
                    </div>
                    <p className='text-gray-500 text-[15px] leading-snug group-hover:text-[#B5BFA1] transition-colors font-medium'>
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <div className='flex items-center gap-6'>
                    <div className='w-16 h-16 rounded-full bg-[#B5BFA1]/20 text-[#B5BFA1] flex items-center justify-center shrink-0'>
                      <div className='w-12 h-12 rounded-full bg-[#B5BFA1] text-white flex items-center justify-center shadow-sm'>
                        {info.icon}
                      </div>
                    </div>
                    <p className='text-gray-500 text-[15px] leading-snug'>
                      {info.value}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
