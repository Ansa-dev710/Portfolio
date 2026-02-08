import { Monitor, Binoculars, ShoppingBasket } from "lucide-react";

const services = [
  {
    title: "Development",
    icon: (
      <Monitor
        size={48}
        strokeWidth={1}
      />
    ),
    description:
      "I build responsive and user-friendly websites using modern web technologies, focusing on clean code and smooth user experience.",
  },
  {
    title: "Design",
    icon: (
      <Binoculars
        size={48}
        strokeWidth={1}
      />
    ),
    description:
      "I design clean and modern user interfaces that are visually appealing, easy to use, and optimized for all screen sizes.",
  },
  {
    title: "E-Commerce",
    icon: (
      <ShoppingBasket
        size={48}
        strokeWidth={1}
      />
    ),
    description:
      "I create functional and secure e-commerce websites with easy product management and a smooth checkout experience.",
  },
];

export default function ServicesSection() {
  return (
    <section className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center text-gray-900 mb-20'>
          Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center p-12 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300'>
              <div className='text-[#96bb7c] mb-6'>{service.icon}</div>

              <h3 className='text-lg font-medium text-gray-800 mb-6 tracking-wide'>
                {service.title}
              </h3>

              <p className='text-gray-400 leading-relaxed text-sm mb-8'>
                {service.description}
              </p>

              {/* Button */}
              <button className='px-6 py-2 text-sm font-medium text-[#96bb7c] border border-[#96bb7c] rounded-full hover:bg-[#96bb7c] hover:text-white transition-all duration-300'>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
