


"use client";
import Image from "next/image";


export default function HeroSection() {
  
  return (
    
        <main className="relative h-[90vh] bg-[#0e2f2c] flex items-center px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Background Image on Right */}
      <div className="absolute right-0 top-[53%]  -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-90">
        <Image
          // src="/homedash1.png" // 👈 replace with your actual image
          src="/dash2.png" // 👈 replace with your actual image
          alt="Dashboard Preview"
          width={600}
          height={500}
          className=""
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl space-y-2 text-left bottom-[90px]">
        {/* Badge */}
        <span className="inline-block bg-[#2f473f] text-white text-sm font-medium px-4 py-1 rounded-full">
          Sustainability Platform
        </span>

        {/* Heading */}
        <h1 className="text-[60px] sm:text-[60px] lg:text-[60px] font-bold leading-tight w-[1280px]">
          Smarter Carbon Accounting <br />
          <span className="text-green-400">& Informed Decisions</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed w-[775px] text-[18px]">
          Turn regulations into opportunities with one intelligent platform. Track
          and manage carbon accounting, carbon training, BURSA reporting, and Halal
          certification effortlessly.
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed w-[800px] text-[18px]">
          Go a step further with built-in support for carbon capture initiatives.
          Because true sustainability means preparing your business for tomorrow,
          today.
        </p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-sm">Certified GHG Protocol compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-sm">AI-enhanced interface</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-full font-semibold transition">
            Request a Demo
          </button>
          <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-full font-semibold transition">
            Explore The Platform
          </button>
        </div>
      </div>
    </main>
  );
    
}