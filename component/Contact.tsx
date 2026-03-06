"use client";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Send, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: <MapPin size={20} />, label: "Location", value: "Bahria Town, Lahore", link: null },
    { icon: <Phone size={20} />, label: "Phone", value: "+92 301 8950901", link: "tel:03018950901" },
    { icon: <Send size={20} />, label: "Email", value: "ansasgar710@gmail.com", link: "mailto:ansasgar710@gmail.com" },
  ];

  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      link: "https://github.com/ansa-dev710" // Aapka Updated GitHub Link
    },
    { 
      icon: <Linkedin size={18} />, 
      link: "https://linkedin.com/in/ansa-asghar" // Example placeholder
    },
    { 
      icon: <Twitter size={18} />, 
      link: "#" 
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section id='contact' className='py-24 bg-[#0a0a0a] px-6 lg:px-16 relative overflow-hidden'>
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#B5BFA1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='mb-16'>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-[#B5BFA1] text-[11px] font-bold uppercase tracking-[0.4em] mb-3 block'>
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-5xl font-bold text-white tracking-tight uppercase'>
            Have a <span className="text-[#B5BFA1] italic font-light">Project?</span>
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='lg:col-span-7 bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl'
          >
            <form className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#B5BFA1] font-bold block mb-1">Name</label>
                <input
                  type='text'
                  placeholder="Your Name"
                  className='w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-[#B5BFA1] transition-all placeholder:text-gray-800'
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#B5BFA1] font-bold block mb-1">Email</label>
                <input
                  type='email'
                  placeholder="email@example.com"
                  className='w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-[#B5BFA1] transition-all placeholder:text-gray-800'
                />
              </div>

              <div className="col-span-1 md:col-span-2 relative group">
                <label className="text-[10px] uppercase tracking-widest text-[#B5BFA1] font-bold block mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="How can I help you?"
                  className='w-full bg-transparent border-b border-white/10 py-2 text-white text-sm outline-none focus:border-[#B5BFA1] transition-all resize-none placeholder:text-gray-800'
                ></textarea>
              </div>
              
              <div className='col-span-1 md:col-span-2 pt-4'>
                <motion.button 
                  whileHover={{ backgroundColor: "#fff", color: "#000" }}
                  className='flex items-center gap-3 px-8 py-4 bg-[#B5BFA1] text-black text-[11px] font-black uppercase tracking-widest rounded-full transition-all duration-300'
                >
                  Send Message
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Details Sidebar */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='lg:col-span-5 flex flex-col gap-10 lg:pl-6'
          >
            <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#B5BFA1] group-hover:bg-[#B5BFA1] group-hover:text-black transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-gray-500 font-bold mb-1">{info.label}</span>
                    <p className="text-white text-lg font-bold truncate max-w-[50] md:max-w-none">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability & Socials */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B5BFA1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B5BFA1]"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Online & Available</span>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" // New Tab mein open hoga
                    rel="noopener noreferrer" // Security best practice
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#B5BFA1] hover:border-[#B5BFA1] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}