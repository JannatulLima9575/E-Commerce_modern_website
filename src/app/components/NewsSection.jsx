"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "AI Revolution in Education",
    desc: "AI is transforming how students learn and teachers teach worldwide.",
    img: "/news1.jpg",
  },
  {
    id: 2,
    title: "Tech Expo 2025 Highlights",
    desc: "The biggest tech innovations of 2025 unveiled at Global Expo.",
    img: "/news2.jpg",
  },
  {
    id: 3,
    title: "Bangladesh in Digital Era",
    desc: "Digital Bangladesh 2.0 aims to boost innovation and startups.",
    img: "/news3.jpg",
  },
  {
    id: 4,
    title: "Next.js 15 Released",
    desc: "Next.js 15 introduces new features and faster routing.",
    img: "/news4.jpg",
  },
  {
    id: 5,
    title: "Women in Tech Summit",
    desc: "Empowering women developers across the global tech ecosystem.",
    img: "/news5.jpg",
  },
  {
    id: 6,
    title: "Future of Web Development",
    desc: "Full-stack frameworks like Next.js and Remix are the future.",
    img: "/news6.jpg",
  },
];

const NewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const intervalRef = useRef(null);

  // ✅ Responsive card count per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) setCardsPerSlide(1); // Mobile
      else if (window.innerWidth < 1024) setCardsPerSlide(2); // Tablet
      else setCardsPerSlide(3); // Desktop
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(newsData.length / cardsPerSlide);

  // ✅ Auto Slide + Pause on Hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, totalSlides]);

  const start = currentSlide * cardsPerSlide;
  const visibleNews = newsData.slice(start, start + cardsPerSlide);

  return (
    <div
      className="max-w-7xl mx-auto bg-gray-100 py-8 overflow-hidden px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Cards */}
      <div className="flex justify-center flex-wrap gap-6">
        {visibleNews.map((news) => (
          <div
            key={news.id}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <div className="relative w-full h-56 sm:h-64 lg:h-72">
              <Image
                src={news.img}
                alt={news.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
              />
            </div>
            <div className="p-3 sm:p-4 text-center">
              <h3 className="text-sm sm:text-base font-semibold mb-1 text-gray-800">
                {news.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                {news.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;