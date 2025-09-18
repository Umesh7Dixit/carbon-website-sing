// app/page.tsx or components/CbamGuidance.tsx

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0d0f0a] text-white overflow-hidden px-4">
      {/* Background concentric circles */}
      {/* <div className="absolute w-[170%] h-[170%] rounded-full border border-white opacity-30" />
      <div className="absolute w-[130%] h-[130%] rounded-full border border-white opacity-50" />
      <div className="absolute w-[70%] h-[70%] rounded-full border border-white opacity-50" /> */}

      {/* Dotted Background Circles */}
      <div className="absolute left-1/2 top-1/2 w-[100%] aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[80%] aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[30%]  aspect-square rounded-full border border-dotted border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />


      {/* Floating Images */}
      <div className="absolute top-10 left-5 w-26 h-26 md:w-40 md:h-40">
        <Image
          src="/concrete2.png"
          alt="concrete"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <div className="absolute top-5 right-30 w-16 h-16 md:w-40 md:h-40">
        <Image
          src="/steel22.png"
          alt="pipes"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      <div className="absolute bottom-10 md:bottom-16 w-20 h-20 md:w-40 md:h-40">
        <Image
          src="/rolls2.png"
          alt="rolls"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-[54px] font-semibold text-center leading-snug z-10">
        The Carbon Border Adjustment Mechanism
      </h1>

      {/* Green Highlight Box */}
      <div className="mt-4 px-4 py-2 bg-green-900/60 rounded-md shadow-lg border border-green-500 z-10 border-b-green-300 border-b-4">
        <span className="text-[50px] sm:text-xl md:text-2xl font-semibold text-white">
          ( CBAM ) Guidance
        </span>
      </div>

      {/* Subtitle */}
      <h2 className="mt-3 text-lg sm:text-xl md:text-[54px] font-semibold text-center z-10">
        for Industries
      </h2>

      {/* Small text */}
      <p className="mt-6 text-[11.4px] sm:text-xs md:text-sm text-gray-400 text-center z-10 max-w-2xl">
        WHAT DOES THE EU CBAM MEAN FOR EXPORTERS OF CARBON-INTENSIVE GOODS?
      </p>
    </div>
  );
}
