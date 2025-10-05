"use client";

import React, { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky pb-4 top-0 z-50">
      {/* 🔹 Top Section */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Brand Logo */}
          <h2 className="text-xl font-semibold text-gray-800 cursor-pointer">
            eCommerce
          </h2>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-5 text-sm text-gray-700 ml-6">
            <span className="hover:text-black cursor-pointer font-medium">
              All
            </span>
            <span className="hover:text-black cursor-pointer">
              Today’s Deals
            </span>
            <span className="hover:text-black cursor-pointer">Gift Cards</span>
            <span className="hover:text-black cursor-pointer">
              Registry & Gifting
            </span>
          </nav>
        </div>

        {/* Center Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-sm px-2"
          />
          <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-700">
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

          {/* Mobile Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="lg:hidden"
            aria-label="Toggle Search"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* 🔹 Bottom Row */}
      <div className="hidden md:flex w-full bg-gray-50 text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-black">
              Customer Service
            </span>
            <span className="cursor-pointer hover:text-black">
              Sell on Amazon
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 py-3 px-6 flex flex-col gap-3 text-gray-700">
          <span className="hover:text-black cursor-pointer font-medium">
            All
          </span>
          <span className="hover:text-black cursor-pointer">Today’s Deals</span>
          <span className="hover:text-black cursor-pointer">Gift Cards</span>
          <span className="hover:text-black cursor-pointer">
            Registry & Gifting
          </span>
          <hr className="border-gray-200" />
          <span className="cursor-pointer hover:text-black">
            Customer Service
          </span>
          <span className="cursor-pointer hover:text-black">
            Sell on Amazon
          </span>
        </div>
      )}

      {/* 🔹 Mobile Search Bar */}
      {searchOpen && (
        <div className="lg:hidden bg-gray-100 border-t border-gray-200 px-4 py-2">
          <div className="flex items-center bg-white border rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent flex-1 outline-none text-sm px-2"
            />
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;