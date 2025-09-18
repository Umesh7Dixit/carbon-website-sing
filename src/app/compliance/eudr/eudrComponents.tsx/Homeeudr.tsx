

"use client"

import Image from "next/image";

export default function Homeeudr() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0d0f0a] text-white overflow-hidden px-4">
     
      <div className="absolute left-1/2 top-1/2 w-[100%] aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[80%] aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[30%]  aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />


      <div className="absolute top-10 left-5 w-26 h-26 md:w-40 md:h-40">
        <Image
          src="/handeudr.png"
          alt="concrete"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <div className="absolute top-5 right-30 w-16 h-16 md:w-40 md:h-40">
        <Image
          src="/woodeudr.png"
          alt="pipes"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <div className="absolute bottom-10 md:bottom-16 w-20 h-20 md:w-40 md:h-40">
        <Image
          src="/aEudr.png"
          alt="rolls"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-[54px] font-semibold text-center leading-snug z-10">
        What does the EU Deforestation
      </h1>

      <div className="mt-4 px-4 py-2 font-semibold bg-green-900/60 rounded-md shadow-lg border border-green-500 z-10 border-b-green-300 border-b-4">
        <span className="text-[50px] sm:text-xl md:text-2xl font-semibold text-white">
          Regulation Mean
        </span>
      </div>

      {/* Subtitle */}
      <h1 className="mt-3 text-lg sm:text-xl md:text-[46px] font-semibold text-center z-10">
        for your products & supply chains?
      </h1>
 
    </div>
  );
}

