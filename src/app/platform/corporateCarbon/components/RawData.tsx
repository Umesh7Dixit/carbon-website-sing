"use client";

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 


export default  function RawData(){
    const { scrollToContact } = useContact();

  return (
    <section className="bg-white w-full h-screen">
      <div className="max-w-8xl mx-auto h-full flex items-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Text Section */}
          <div className="flex flex-col justify-center ml-8">
            <h1 className="text-[60px] sm:text-[60px] font-bold text-[#1A3A3A] w-[108%]">
              From Raw Data to Carbon Insights in Seconds
            </h1>
 
            <p className="mt-6 text-[20px] font-semibold text-[#1A3A3A]">
                Why spend months on manual carbon accounting when it can be done in minutes? Carbon Scan&apos;s AI platform ingests your data streams, calculates footprint across value chains, and produces actionable insights instantly. Embed sustainability into daily decisions, not just annual reports.
            </p>
            <br/>
            <button 
                  onClick={scrollToContact}
                  className="px-8 py-3 w-[38%] rounded-full  border border-[#8DD95B] text-bllalck font-medium hover:bg-[#8DD95B] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors bg-[#8DD95B] duration-200 disabled:bg-green-600 disabled:cursor-not-allowed"
                >
                  Watch a demo
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/alldash.png" // Make sure this image is in your public folder
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

