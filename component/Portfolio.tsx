"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Card Vol. 3",
    category: "Mockup",
    image: "/p1.jpg",
    size: "h-48",
  },
  {
    id: 2,
    title: "Modern Chair",
    category: "Mockup",
    image: "/p2.jpg",
    size: "h-64",
  },
  {
    id: 3,
    title: "Interior Design",
    category: "Photography",
    image: "/p3.jpg",
    size: "h-[500px]",
  },
  {
    id: 4,
    title: "Black House",
    category: "Photography",
    image: "/p4.jpg",
    size: "h-[500px]",
  },
  {
    id: 5,
    title: "Product Wrap",
    category: "Packaging",
    image: "/p5.jpg",
    size: "h-[500px]",
  },
  {
    id: 6,
    title: "Abstract Art",
    category: "Typography",
    image: "/p6.jpg",
    size: "h-[550px]",
  },
  {
    id: 7,
    title: "Cream Tubes",
    category: "Packaging",
    image: "/p7.jpg",
    size: "h-72",
  },
];

const categories = ["All", "Packaging", "Mockup", "Typography", "Photography"];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className='py-20 px-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-semibold text-gray-900 mb-8'>
          My Portfolio
        </h2>

        <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "text-[#96bb7c]"
                  : "text-gray-400 hover:text-gray-600"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className='relative group overflow-hidden break-inside-avoid rounded-sm bg-gray-100'>
            <div className={`relative w-full ${item.size}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>

            <div className='absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h3 className='text-white text-xl font-medium mb-1'>
                {item.title}
              </h3>
              <p className='text-[#96bb7c] text-sm font-light'>
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
