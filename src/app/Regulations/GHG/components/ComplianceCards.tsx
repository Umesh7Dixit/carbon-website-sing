// app/components/ComplianceCards.tsx

"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [

 {
    title: "EUDR",
    subtitle: "Powered by CarbonScan.ai",
    image: "/esgcard.png", // 👈 put image in /public
  },
     {
    title: "Bursa",
    subtitle: "Powered by CarbonScan.ai",
    image: "/brrsacard.png", // 👈 put image in /public
  },
  
  {
    title: "CBAM & Carbon Tax",
    subtitle: "Powered by CarbonScan.ai",
    image: "/cbamcardk.png",
  },
];

export default  function ComplianceCards(){
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          Start preparing for the future of{" "}
          <span className="text-green-500">Compliances & regulations</span>{" "}
          today.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>

              {/* Button */}
              <div className="mt-auto pt-4">
                <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg py-2 transition">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

