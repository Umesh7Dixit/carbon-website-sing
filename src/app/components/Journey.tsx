"use client"

import Image from "next/image";


export default function Journey() {
    return(
        <section className="bg-[#CFF1F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              See How Carbon Zero Simplifies Your Carbon Journey
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Drive growth, meet compliance, and cut emissions with smart carbon
              solutions.
            </p>
            <button className="mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-md transition">
              Speak to an expert
            </button>
          </div>

          {/* Right Side */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            <Image
              src="/journey.png" // Put your image in public folder
              alt="Dashboard preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    );
}