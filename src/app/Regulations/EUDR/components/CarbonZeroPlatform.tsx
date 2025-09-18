import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CarbonZeroPlatform(){
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-800">Build a deforestation-free supply chain with </span>
              <span className="text-green-400">Carbon-Zero.ai</span>
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                To comply with the European Union Deforestation-free Regulation (EUDR) and gain a competitive edge, Malaysian exporters of palm oil, rubber, cocoa, and timber must ensure full supply chain traceability and prove products are free from deforestation.
              </p>

              <p>
                Carbon-Zero.ai enables end-to-end visibility down to plantation level, integrates geolocation data, and aligns with Malaysia&apos;s carbon tax framework to strengthen ESG performance.
              </p>

              <p>
                By building transparency and compliance into your supply chain, you can protect EU market access, enhance your global reputation, and future-proof your business against tightening regulations.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-3 transition-colors duration-200 text-lg">
                <span>Discover more about the platform</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-2xl w-full">
              <Image 
                width={800}
                height={600}
                src="/carbinsdeo.png" 
                alt="Carbon-Zero.ai EUDR Dashboard showing compliance tracking, due diligence statements, and supply chain monitoring interface"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
