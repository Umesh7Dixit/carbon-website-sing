"use client";

import Image from "next/image";

export default  function BuildLca(){
  return (
    <section className="bg-white w-full h-screen">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[60px] sm:text-[60px] font-bold text-[#1A3A3A] w-[108%]">
              Build LCA instantly and with clarity
            </h1>
            <p className="mt-6 text-[20px] font-semibold text-[#1A3A3A]">
              <span className="text-[#8DD95B]">Carbon Scan.ai</span> is an intelligent LCA platform that helps businesses calculate, refine, and share environmental footprints at the product level—without needing deep LCA expertise.
            </p>
            <p className="mt-6 text-[20px] font-semibold text-[#1A3A3A]">
                Automate the collection of data, cut through technical hurdles, and deliver trustworthy insights that create transparency and measurable impact.
            </p>
            {/* <br/>
            <button
                  className="px-8 py-3 w-[38%] rounded-full  border border-[#8DD95B] text-bllalck font-medium hover:bg-[#8DD95B] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors bg-[#8DD95B] duration-200 disabled:bg-green-600 disabled:cursor-not-allowed"
                >
                  Speak to an expert
            </button> */}
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/buildLca.png" // Make sure this image is in your public folder
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

