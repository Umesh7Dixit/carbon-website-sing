"use client";

import React from "react";
import Image from "next/image";

 

export default function CBAMQualify(){

  return (

         <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left small card (image) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/cbamsmall.png" // 👈 place your small card image in /public
            alt="CarbonScan card"
            width={800}
            height={800}
            className="w-full max-w-[570px]"
          />
        </div>

        {/* Right big card (image + button overlay) */}
        <div className="relative flex justify-center md:justify-start">
          <Image
            src="/cbamlarge.png" // 👈 place your big card image in /public
            alt="Does my business qualify card"
            width={700}
            height={700}
            className=" w-full"
          />

          {/* Button overlay at bottom */}
          <div className="absolute bottom-10 left-0 right-[40%] flex justify-center">
            <button className="bg-[#8DD95B] hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-2 shadow-md transition">
              Know more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

