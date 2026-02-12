"use client";

const testimonials = [
  {
    name: "Client A",
    role: "CEO, Company",
    text: "Ansa delivered amazing work!",
  },
  {
    name: "Client B",
    role: "Product Manager",
    text: "Highly professional and creative.",
  },
  {
    name: "Client C",
    role: "CTO",
    text: "Excellent skills and communication.",
  },
];

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='py-20 bg-gray-50 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold'>Testimonials</h2>
      </div>
      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-6'>
        {testimonials.map((t) => (
          <div
            key={t.name}
            className='bg-white p-6 rounded-lg shadow text-center'>
            <p className='text-gray-600 mb-4'>"{t.text}"</p>
            <h4 className='font-bold'>{t.name}</h4>
            <span className='text-gray-500 text-sm'>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
