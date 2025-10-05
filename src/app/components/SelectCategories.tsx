"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

type Category = {
  id: number;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, name: "Gucci", image: "/ladiesBag3.jpg" },
  { id: 2, name: "Branded Headphone", image: "/headphone5.jpg" },
  { id: 3, name: "Smart Watch", image: "/watch3.jpg" },
  { id: 4, name: "Sunglasses", image: "/sunglasses4.jpg" },
  { id: 5, name: "Blue Chanel", image: "/Parfum5.jpg" },
  { id: 6, name: "Rabbo Gens Belt", image: "/manbelt2.jpg" },
  { id: 7, name: "Hair Dryer", image: "/HairDrier1.jpg" },
  { id: 8, name: "Bottle", image: "/off2.jpg" },
];

export default function SelectCategories() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  // 🔹 Adjust visible items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Handle Next button with infinite looping
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  // 🔹 Get visible items with looping logic
  const getVisibleCategories = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= categories.length) {
      return categories.slice(startIndex, endIndex);
    } else {
      return [
        ...categories.slice(startIndex),
        ...categories.slice(0, endIndex - categories.length),
      ];
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 py-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Shop by Categories</h2>
        <button className="text-blue-600 text-sm hover:underline">
          View all Categories
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="flex gap-5 overflow-hidden transition-transform">
          {getVisibleCategories().map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center justify-center rounded-2xl p-5 bg-white flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-[180px] sm:h-[200px] md:h-[220px]"
              />
              <p className="mt-3 text-base font-semibold text-gray-800 text-left">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          title="Next"
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition"
        >
          <FaChevronRight className="text-gray-700 text-lg" />
        </button>
      </div>
    </div>
  );
}