"use client"

import Image from "next/image";
import { useContact } from "../components/ContactContext"; 



export default function Journey() {

    const { scrollToContact } = useContact();
  
    return(
        <section className="bg-[#CFF1F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Side */}
          <div >
            <h1 className="text-3xl w-[108%]  md:text-[60px] font-semibold text-[#1A3A3A] leading-tight">
              See How Carbon Zero Simplifies Your Carbon Journey
            </h1>
            <p className="mt-4 text-gray-600 w-[101%] text-lg text-[20px]">
              Drive growth, meet compliance, and cut emissions with smart carbon
              solutions.
            </p>
            <button onClick={scrollToContact} className="mt-8 px-6 py-3 bg-[#8DD95B] hover:bg-[#8DD95B] text-[#1A3A3A] font-medium rounded-full shadow-md transition">
              Speak to an expert
            </button>
          </div>

          {/* Right Side */}
          <div className="relative top-25 left-37 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
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