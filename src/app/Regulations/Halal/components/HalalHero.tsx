"use client";

import React from "react";

export default  function HalalHero(){
  return (
    <section
      className="relative flex items-center justify-center h-[95vh] bg-[#123A36] bg-cover bg-center"
      style={{ backgroundImage: "url('/eudrbg.png')" }} // 👈 replace with your bg image
    >
      
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl z-10">
        {/* <div className="text-white text-2xl mb-4">•</div> */}
        <h1 className="text-3xl sm:text-4xl md:text-[60px] font-semibold text-white leading-snug">
          Sustainability Made Mandatory: Get Ready For <span className="text-[#8CC63F]">Halal Certification</span>   
        </h1>
         
      </div>
    </section>
  );
};

