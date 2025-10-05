"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "AI Revolution in Education",
    desc: "AI is transforming how students learn and teachers teach across the globe.",
    img: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Tech Expo 2025 Highlights",
    desc: "The biggest tech innovations of 2025 unveiled at Global Expo.",
    img: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Bangladesh in Digital Era",
    desc: "Digital Bangladesh 2.0 program aims to boost innovation and startups.",
    img: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "Next.js 15 Released",
    desc: "Next.js 15 brings new features, faster routing, and better performance.",
    img: "/images/news4.jpg",
  },
  {
    id: 5,
    title: "Women in Tech Summit",
    desc: "Empowering women developers in the growing tech ecosystem.",
    img: "/images/news5.jpg",
  },
  {
    id: 6,
    title: "Future of Web Development",
    desc: "The shift towards full-stack frameworks like Next.js and Remix.",
    img: "/images/news6.jpg",
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
      if (window.innerWidth < 640) setCardsPerSlide(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerSlide(2); // tablet
      else setCardsPerSlide(3); // desktop
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
      className="max-w-7xl mx-auto bg-gray-100 py-10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <div className="flex justify-center flex-wrap gap-6 transition-all duration-700 ease-in-out">
        {visibleNews.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-2xl w-full sm:w-[45%] lg:w-[30%] hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <Image
              src={news.img}
              alt={news.title}
              width={400}
              height={250}
              className="rounded-t-2xl object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm">{news.desc}</p>
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