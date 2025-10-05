import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f3f3f3] text-gray-700 text-sm mt-10">
      {/* 🔹 Top Section */}
      <div className="max-w-7xl mx-auto md:px-0 px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Amazon Devices</li>
            <li className="hover:underline cursor-pointer">Amazon Tours</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3">Make Money with Us</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell apps on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
            <li className="hover:underline cursor-pointer">Host an Amazon Hub</li>
            <li className="hover:underline cursor-pointer">See More Make Money with Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Your Orders</li>
            <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            <li className="hover:underline cursor-pointer">Returns & Replacements</li>
            <li className="hover:underline cursor-pointer">
              Manage Your Content and Devices
            </li>
            <li className="hover:underline cursor-pointer">Amazon Assistant</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3">Amazon Payment Products</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer">Shop with Points</li>
            <li className="hover:underline cursor-pointer">Reload Your Balance</li>
            <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
          </ul>
        </div>
      </div>
      {/* 🔹 Bottom Section */}
      <div className="bg-[#e0e0e0] text-xs text-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <span className="hover:underline cursor-pointer">Conditions of Use</span>
            <span className="hover:underline cursor-pointer">Privacy Notice</span>
            <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
          </div>
          <p>© 2025, Amazon clone, built for demo purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;