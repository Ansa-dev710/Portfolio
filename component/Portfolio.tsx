"use client";

const portfolioItems = [
  { title: "Project One", image: "/project1.jpg" },
  { title: "Project Two", image: "/project2.jpg" },
  { title: "Project Three", image: "/project3.jpg" },
  { title: "Project Four", image: "/project4.jpg" },
];

export default function Portfolio() {
  return (
    <section
      id='portfolio'
      className='py-20 bg-white px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold'>Portfolio</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {portfolioItems.map((item) => (
          <div
            key={item.title}
            className='overflow-hidden rounded-lg shadow-lg h-48 flex items-center justify-center bg-gray-200'>
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
}
