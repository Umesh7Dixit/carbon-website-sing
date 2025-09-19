"use client";

import Image from "next/image";

export default  function SustainableSection(){
  return (
    <section className="bg-white w-full h-screen">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[60px] sm:text-[60px] font-bold text-[#1A3A3A]">
              We exist to build a sustainable future.
            </h1>
            <p className="mt-6 text-[20px] font-semibold text-[#1A3A3A]">
              We help organisations and individuals reduce emissions, stay
              compliant, and drive real impact through practical sustainability
              solutions.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/sushome.png" // Make sure this image is in your public folder
              alt="Sustainable Future"
              width={800}
              height={800}
              className=" w-[1180px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

