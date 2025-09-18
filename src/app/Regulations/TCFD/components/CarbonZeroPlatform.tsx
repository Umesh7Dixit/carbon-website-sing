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
              <span className="text-slate-800">Build TCFD-Ready Climate Reporting with  </span>
              <span className="text-green-400">Carbon-Zero.ai</span>
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                To meet TCFD recommendations, companies must disclose climate-related risks, opportunities, and governance practices in a structured, investor-ready format.
              </p>

              <p>
                Carbon-Zero.ai streamlines this process by automating climate data collection, mapping disclosures to TCFD pillars, and producing assurance-ready reports.
              </p>

              <p>
                With accurate, transparent, and timely reporting, you can enhance regulatory compliance, strengthen stakeholder trust, and position your organization as a climate-resilient leader.
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
                src="/tcfddash.png" 
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
