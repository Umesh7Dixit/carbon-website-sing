import React from "react";
import Image from "next/image";

export default function ESGDashboard() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center px-12 space-y-8">
        <div className="flex items-center space-x-2 ">
          <span className="text-xl">🚀</span>
          <span className="font-semibold text-[#29442C]">ZERO Carbon</span>
        </div>

        <div className="space-y-6">
          <div className="flex space-x-4">
            <Image src="/ai-driven.png" alt="AI" width={40} height={40} />
            <div>
              <h3 className="font-bold text-lg text-[#29442C]">AI-Driven Hot Spots</h3>
              <p className="text-gray-600 text-sm">
                Detect and address risk areas instantly with predictive and
                prescriptive analytics.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Image src="/data-icon.png" alt="Data" width={40} height={40} />
            <div>
              <h3 className="font-bold text-lg text-[#29442C]">Faster Data Collection</h3>
              <p className="text-gray-600 text-sm">
                RePut uniquely reduces ESG data collection time, freeing up
                resources for action.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Image src="/licenses-icon.png" alt="Licenses" width={40} height={40} />
            <div>
              <h3 className="font-bold text-lg text-[#29442C]">All Licenses in One Place</h3>
              <p className="text-gray-600 text-sm">
                Centralized storage for certifications and compliance documents.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Image src="/global-icon.png" alt="Global" width={40} height={40} />
            <div>
              <h3 className="font-bold text-lg text-[#29442C]">Global Standards Coverage</h3>
              <p className="text-gray-600 text-sm">
                Easily meet reporting requirements for: CBAM, GRI, CDSR, and
                regional compliance for UK, USA, and more.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Image src="/regulations-icon.png" alt="Regulations" width={40} height={40} />
            <div>
              <h3 className="font-bold text-lg text-[#29442C]">Stay Ahead of Regulations</h3>
              <p className="text-gray-600 text-sm">
                Proactively comply with evolving ESG laws while building trust and
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 flex items-center justify-center ">
        <Image
          src="/section-4-zero.png"
          alt="Dashboard Preview"
          width={600}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
