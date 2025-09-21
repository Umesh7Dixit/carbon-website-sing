"use client";

import React from "react";

export default  function EUDRHero(){
  return (
    <section
      className="relative flex items-center justify-center h-[95vh] bg-[#123A36] bg-cover bg-center"
      style={{ backgroundImage: "url('/eudrbg.png')" }} // 👈 replace with your bg image
    >
      {/* Optional: semi-transparent overlay for readability */}
      {/* <div className="absolute inset-0 bg-[#123A36]/90"></div> */}

      {/* Content */}
      <div className="relative  text-center px-4 sm:px-6 lg:px-8 max-w-3xl z-10">
        {/* <div className="text-white text-2xl mb-4">•</div> */}
        <h1 className="text-3xl w-[110%] sm:text-4xl md:text-[60px] font-semibold text-white leading-snug">
          Cracking the <span className="text-[#8CC63F]">EUDR</span> Code
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-[48px] text-white mt-3 font-medium">
          What Malaysian Businesses <br className="hidden sm:block" /> Need to
          Know
        </h2>
        <p className="text-sm text-[20px] sm:text-base text-gray-300 mt-4">
          What does the EU EUDR mean for exporters of carbon-intensive goods?
        </p>
      </div>
    </section>
  );
};

