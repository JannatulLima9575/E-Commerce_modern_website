"use client";

import Image from "next/image";

export default function DeliverySection() {
  return (
    <section className="max-w-7xl mx-auto bg-gray-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-16 mt-10 overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Discover eCommerce
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          eCommerce DELIVERS TO YOU
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Worldwide shipping. We ship to over 100 countries and regions, right
          to your doorstep 😊
        </p>
        <button className="mt-4 rounded-full px-6 py-2 bg-black text-white hover:bg-gray-800">
          View more
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/delivery.jpg"
          alt="Amazon Delivery"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
}