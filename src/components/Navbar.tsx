"use client";

import React from "react";
import Image from "next/image";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white pb-4">
      {/* 🔹 Top Row */}
      <div className="max-w-7xl mx-auto smpx-6 flex items-center justify-between h-16">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semi-bold">eCommerce</h2>

          <nav className="hidden md:flex items-center gap-5 text-sm text-gray-700">
            <span className="hover:text-black cursor-pointer font-medium">All</span>
            <span className="hover:text-black cursor-pointer">Today’s Deals</span>
            <span className="hover:text-black cursor-pointer">Gift Cards</span>
            <span className="hover:text-black cursor-pointer">Registry & Gifting</span>
          </nav>
        </div>

        {/* Middle Section — Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/3">
          <input
            type="text"
            placeholder="Search Amazon"
            className="bg-transparent outline-none flex-1 text-sm px-2"
          />
          <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-gray-700">
          <span className="hidden sm:block text-sm cursor-pointer hover:text-black">
            🇺🇸 USD
          </span>
          <span className="hidden sm:block text-sm cursor-pointer hover:text-black">
            ENG
          </span>

          <div className="flex items-center gap-4">
            <User className="w-5 h-5 cursor-pointer hover:text-black" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-black" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Row */}
      <div className="w-full bg-gray-50 text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-black">Customer Service</span>
            <span className="cursor-pointer hover:text-black">Sell on Amazon</span>
          </div>
          <div className="lg:hidden flex items-center gap-3">
            <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;