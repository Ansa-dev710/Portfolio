"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  size: string;
};

const portfolioItems: PortfolioItem[] = [
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
    image: "/pp4.jpg",
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
  const [filter, setFilter] = useState<string>("All");
  const [visible, setVisible] = useState<boolean>(false);

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  // Scroll animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("portfolio-grid");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-20 px-4 max-w-7xl mx-auto'>
      {/* Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-semibold text-gray-900 mb-2'>
          Selected Works
        </h2>
        <p className='text-gray-500 text-sm md:text-base'>
          A showcase of projects that highlight design, creativity, and
          attention to detail.
        </p>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-6 mt-6'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-[#96bb7c]/20 border-[#96bb7c] text-[#96bb7c]"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        id='portfolio-grid'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 transform
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${index * 150}ms` }}>
            {/* Image */}
            <div className={`relative w-full ${item.size}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110'
              />
            </div>

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
              <h3 className='text-white text-lg md:text-xl font-semibold mb-1'>
                {item.title}
              </h3>
              <p className='text-[#96bb7c] text-sm md:text-base font-light'>
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
