"use client";

import React from "react";

export default  function CBAMHero(){
  return (
    <section
      className="relative flex items-center justify-center h-[95vh] bg-[#123A36] bg-cover bg-center"
      style={{ backgroundImage: "url('/eudrbg.png')" }} // 👈 replace with your bg image
    >

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-[60px] font-semibold text-white leading-snug">
          Navigate <span className="text-[#8CC63F]">CBAM and Malaysia&apos;s Carbon Tax</span>  Regulations with Confidence
        </h1>

      </div>
    </section>
  );
};

