"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, img: "/off.jpg", title: "Hi, Tomas", subtitle: "Recommendations for you 👉" },
  { id: 2, img: "/off2.jpg", title: "Your Orders", subtitle: "View your orders" },
  { id: 3, img: "/off3.jpg", title: "Electronics", subtitle: "Big Sale 30%" },
  { id: 4, img: "/off4.jpg", title: "Home & Kitchen", subtitle: "Big Sale 30%" },
  { id: 5, img: "/Hair Drier5.jpg", title: "Fashion", subtitle: "Up to 40% Off" },
  { id: 6, img: "/Parfum1.jpg", title: "Beauty", subtitle: "Trending Deals" },
  { id: 7, img: "/headphone5.jpg", title: "Grocery", subtitle: "Everyday Essentials" },
  { id: 8, img: "/Parfum5.jpg", title: "Sports", subtitle: "Flat 25% Off" },
];

const RecommendationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Responsive item count
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(cards.length / itemsPerPage);

  // ✅ Auto Slide with Pause on Hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [itemsPerPage, isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleCards = cards.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div
      className="relative w-full max-w-7xl mx-auto md:px-0 mt-6 px-2 sm:px-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden bg-[#fff9f7] ">
        <div
          className="flex flex-wrap justify-center sm:justify-center gap-4 p-4 transition-all duration-500 ease-in-out"
          style={{ minHeight: "140px" }}
        >
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center w-full sm:w-[48%] md:w-[45%] lg:w-[23%] xl:w-[22%] gap-3 p-3"
            >
              <div className="flex-shrink-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={70}
                  height={70}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Left Button */}
      <button
        onClick={prevSlide}
        title="Previous"
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* ✅ Right Button */}
      <button
        onClick={nextSlide}
        title="Next"
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* ✅ Dots Navigation */}
      <div className="flex justify-center mt-3 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-gray-800 scale-110" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSlider;