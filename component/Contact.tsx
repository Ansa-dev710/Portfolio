import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section className='min-h-screen flex items-center justify-center py-24 px-6 bg-white'>
      <div className='max-w-6xl w-full mx-auto'>
        <h2 className='text-4xl font-semibold text-center text-gray-900 mb-20'>
          Contact Me
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
          <div className='lg:col-span-7'>
            <form className='space-y-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='relative border-b border-gray-300 py-2 focus-within:border-[#96bb7c] transition-colors'>
                  <label className='text-xs text-gray-400 uppercase font-bold tracking-widest'>
                    First name
                  </label>
                  <input
                    type='text'
                    className='w-full bg-transparent outline-none pt-1 text-gray-800'
                  />
                </div>
                <div className='relative border-b border-gray-300 py-2 focus-within:border-[#96bb7c] transition-colors'>
                  <label className='text-xs text-gray-400 uppercase font-bold tracking-widest'>
                    Last name
                  </label>
                  <input
                    type='text'
                    className='w-full bg-transparent outline-none pt-1 text-gray-800'
                  />
                </div>
              </div>

              <div className='relative border-b border-gray-300 py-2 focus-within:border-[#96bb7c] transition-colors'>
                <label className='text-xs text-gray-400 uppercase font-bold tracking-widest'>
                  Email address
                </label>
                <input
                  type='email'
                  className='w-full bg-transparent outline-none pt-1 text-gray-800'
                />
              </div>

              <div className='relative border-b border-gray-300 py-2 focus-within:border-[#96bb7c] transition-colors'>
                <label className='text-xs text-gray-400 uppercase font-bold tracking-widest'>
                  Message
                </label>
                <textarea
                  rows={4}
                  className='w-full bg-transparent outline-none pt-1 text-gray-800 resize-none'
                />
              </div>

              <button
                type='submit'
                className='px-8 py-4 bg-[#96bb7c] text-white text-[10px] font-bold tracking-[0.2em] rounded-full hover:bg-[#85a86a] transition-all uppercase'>
                Send Message
              </button>
            </form>
          </div>

          <div className='lg:col-span-5 space-y-8 lg:pl-12'>
            <h3 className='text-sm font-bold text-gray-900 uppercase tracking-widest mb-6'>
              Contact Info
            </h3>

            <ul className='space-y-6'>
              <li className='flex items-start gap-4 group'>
                <div className='text-[#96bb7c] mt-1'>
                  <MapPin size={18} />
                </div>
                <span className='text-gray-400 text-sm leading-relaxed'>
                  Behria Town, Lahore
                </span>
              </li>

              <li className='flex items-center gap-4 group'>
                <div className='text-[#96bb7c]'>
                  <Phone size={18} />
                </div>
                <a
                  href='tel:+923018950901'
                  className='text-gray-400 hover:text-[#96bb7c] text-sm transition-colors'>
                  +92 3018950901
                </a>
              </li>

              <li className='flex items-center gap-4 group'>
                <div className='text-[#96bb7c]'>
                  <Mail size={18} />
                </div>
                <a
                  href='mailto:ansaasghr710@gmail.com'
                  className='text-gray-400 hover:text-[#96bb7c] text-sm transition-colors'>
                  ansaasghr710@gmail.com
                </a>
              </li>

              <li className='flex items-center gap-4 group'>
                <div className='text-[#96bb7c]'>
                  <Globe size={18} />
                </div>
                <a
                  href='https://github.com/Ansa-dev710'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-400 hover:text-[#96bb7c] text-sm transition-colors'>
                  Github/Ansa-dev710
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
