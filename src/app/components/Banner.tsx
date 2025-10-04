"use client";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  reviews: string;
  image: string;
};

type Slide = {
  id: number;
  title: string;
  desc: string;
  product: Product;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "SHOP COMPUTERS & ACCESSORIES",
    desc: "Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more",
    product: {
      name: "JBL T460BT Black Headphones",
      price: "$125.00",
      oldPrice: "$250.00",
      discount: "50%",
      reviews: "1,245 reviews",
      image: "/Hair Drier4.jpg",
    },
  },
  {
    id: 2,
    title: "LATEST SMARTPHONES",
    desc: "Explore the best smartphones with high performance and latest features",
    product: {
      name: "iPhone 14 Pro Max",
      price: "$999.00",
      oldPrice: "$1200.00",
      discount: "20%",
      reviews: "3,210 reviews",
      image: "/Hair Drier4.jpg",
    },
  },
  {
    id: 3,
    title: "TOP GAMING LAPTOPS",
    desc: "Powerful gaming laptops at the best price",
    product: {
      name: "Asus ROG Gaming Laptop",
      price: "$1450.00",
      oldPrice: "$1800.00",
      discount: "15%",
      reviews: "870 reviews",
      image: "/Hair Drier4.jpg",
    },
  },
  {
    id: 4,
    title: "SMARTWATCH COLLECTION",
    desc: "Track fitness, stay connected and more",
    product: {
      name: "Apple Watch Series 9",
      price: "$450.00",
      oldPrice: "$600.00",
      discount: "25%",
      reviews: "2,540 reviews",
      image: "/Hair Drier4.jpg",
    },
  },
  {
    id: 5,
    title: "WIRELESS SPEAKERS",
    desc: "Enjoy premium sound with wireless speakers",
    product: {
      name: "JBL Portable Speaker",
      price: "$199.00",
      oldPrice: "$299.00",
      discount: "30%",
      reviews: "1,120 reviews",
      image: "/Hair Drier4.jpg",
    },
  },
];

const Banner: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  // Next slide manually
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto Slide (every 3 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-gray-100 flex items-center justify-between px-14 py-10 rounded-lg relative overflow-hidden">
      {/* Left side text */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">{slides[current].title}</h2>
        <p className="text-gray-600 mb-6">{slides[current].desc}</p>
        <button className="px-6 py-2 bg-black text-white rounded-md">
          View more
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-black" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Right side product card */}
      <div className="w-1/2 flex items-center justify-center relative">
        <div className="bg-white shadow-lg p-6 rounded-lg relative transition-all duration-700 ease-in-out">
          <Image
            src={slides[current].product.image}
            alt={slides[current].product.name}
            width={500}
            height={500}
            className="object-contain"
          />

          <div className="absolute top-4 right-4 bg-yellow-400 text-white text-sm px-2 py-1 rounded-full">
            {slides[current].product.discount}
          </div>
          <h3 className="font-semibold">{slides[current].product.name}</h3>
          <p className="text-gray-500 text-sm">
            {slides[current].product.reviews}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-black">
              {slides[current].product.price}
            </span>
            <span className="text-sm line-through text-gray-400">
              {slides[current].product.oldPrice}
            </span>
          </div>
        </div>

        {/* Next button */}
        <button
          type="button"
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;