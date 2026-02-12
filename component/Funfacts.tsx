"use client";

const funFacts = [
  { number: 50, label: "Projects" },
  { number: 10, label: "Years Experience" },
  { number: 100, label: "Happy Clients" },
  { number: 25, label: "Awards" },
];

export default function FunFacts() {
  return (
    <section className='py-20 bg-gray-50 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {funFacts.map((fact) => (
          <div key={fact.label}>
            <h3 className='text-4xl font-bold text-indigo-600 mb-2'>
              {fact.number}+
            </h3>
            <p className='text-gray-600'>{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
