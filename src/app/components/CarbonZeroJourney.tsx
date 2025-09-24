"use client";
import Image from "next/image";

export default function CarbonZeroJourney() {
  return (
    <section className="w-full bg-[#E5E7EB] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Text */}
        <div  >
          <h2 className="text-3xl md:text-[60px] font-semibold text-[#1A3A3A] mb-4">
            Accelerate Your <br /> Carbon Zero Journey
          </h2>
          <p className="text-[#1A3A3A] w-[460px] text-lg text-[20px] font-normal">
            Leverage <span className="font-semibold text-[#1A3A3A]">Carbon Zero</span> to streamline carbon accounting, ESG disclosures, and compliance with global standards.
          </p>
        </div>

        {/* Right Side - Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-l-2 border-l-[#1A3A3A] pl-6">
          {/* Regulations & Directives */}
          <div className="col-span-2 sm:col-span-3">
            <h3 className="font-semibold text-[#1A3A3A] text-[26px] mb-4">Regulations & Directives</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Image src="/eurd.png" alt="EURD" width={160} height={80} className="mx-auto" />
              <Image src="/scrd.png" alt="CSRD" width={160} height={80} className="mx-auto" />
              <Image src="/csrd.png" alt="CBAM" width={160} height={80} className="mx-auto" />
              <Image src="/tcfd45.png" alt="TCFD" width={160} height={80} className="mx-auto" />
              <Image src="/mspo45.png" alt="MSPO" width={160} height={80} className="mx-auto" />
              <Image src="/rohs46.png" alt="ROHS" width={160} height={80} className="mx-auto" />
              <Image src="/reach456.png" alt="Reach" width={160} height={80} className="mx-auto" />
            </div>
          </div>

          {/* Protocols */}
          <div className="col-span-2 sm:col-span-3 mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Protocols</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Image src="/ghg12.png" alt="GHG Protocol" width={160} height={80} className="mx-auto" />
              <Image src="/defra.png" alt="DEFRA" width={160} height={80} className="mx-auto" />
              <Image src="/ipcc16.png" alt="IPCC" width={160} height={80} className="mx-auto" />
              <Image src="/bursa.png" alt="Bursa Carbon Exchange" width={160} height={100} className="mx-auto" />
            </div>
          </div>

          {/* Reporting */}
          <div className="col-span-2 sm:col-span-3 mt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Reporting</h3>
            <div className="grid grid-cols-3 gap-6">
              <Image src="/mal.png" alt="Bursa" width={160} height={80} className="mx-auto" />
              <Image src="/sgx12.png" alt="SGX" width={160} height={80} className="mx-auto" />
              <Image src="/abdbrsr.png" alt="BRSR" width={160} height={80} className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
