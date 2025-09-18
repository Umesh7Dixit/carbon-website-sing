"use client"

import React from "react";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function ComplianceScreen() {

  const { scrollToContact } = useContact(); 

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/cbamcardbg.png" // put your image in public/cbam-bg.png
        alt="CBAM Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-6">
        <div className="bg-[#1A2B1F]/90 text-white rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-[756px] mx-auto lg:mr-100 lg:mb-50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-6 leading-tight lg:leading-snug">
            Two Main Compliance <br className="hidden sm:block" /> Pillars
          </h1>

          {/* Pillar 1 */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg md:text-xl mb-2">
              1. Accurate Reporting of Embedded Emissions
            </h2>
            <p className="text-sm md:text-base lg:text-[16px] text-gray-200 leading-relaxed">
              Part of CBAM compliance is ensuring precise calculation of
              embedded emissions for each product shipment, using methodologies
              aligned with EU standards.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="mb-8">
            <h2 className="font-semibold text-lg md:text-xl mb-2">
              2. Purchase & Surrender of CBAM Certificates
            </h2>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Importers must buy CBAM certificates at prices{" "} linked to the EU Emissions Trading System (ETS){" "}
              and surrender them annually to cover the verified emissions of
              their imported goods.
            </p>
          </div>

          {/* Button */}
          <button onClick={scrollToContact} className="bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg px-6 py-3 transition w-full sm:w-auto">
            Get started →
          </button>
        </div>
      </div>
    </div>
  );
}













// "use client"

// import React from "react";
// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 

// export default function ComplianceScreen() {

//   const { scrollToContact } = useContact(); 

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Background Image */}
//       <Image
//         src="/cbamcardbg.png" // put your image in public/cbam-bg.png
//         alt="CBAM Background"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Dark overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content Section */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
//         <div className="bg-[#1A2B1F]/90 text-white rounded-2xl shadow-lg p-6 md:p-10 w-[756px] h-[550] mr-100 mb-50">
//           <h1 className="text-2xl md:text-[48px] font-bold mb-6 leading-snug">
//             Two Main Compliance <br /> Pillars
//           </h1>

//           {/* Pillar 1 */}
//           <div className="mb-6">
//             <h2 className="font-semibold text-lg md:text-xl mb-2">
//               1. Accurate Reporting of Embedded Emissions
//             </h2>
//             <p className="md:text-[16px] text-gray-200 leading-relaxed">
//               Part of CBAM compliance is ensuring precise calculation of
//               embedded emissions for each product shipment, using methodologies
//               aligned with EU standards.
//             </p>
//           </div>

//           {/* Pillar 2 */}
//           <div className="mb-8">
//             <h2 className="font-semibold text-lg md:text-xl mb-2">
//               2. Purchase & Surrender of CBAM Certificates
//             </h2>
//             <p className="text-sm md:text-base text-gray-200 leading-relaxed">
//               Importers must buy CBAM certificates at prices{" "} linked to the EU Emissions Trading System (ETS){" "}
//               and surrender them annually to cover the verified emissions of
//               their imported goods.
//             </p>
//           </div>

//           {/* Button */}
//           <button onClick={scrollToContact} className="bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg px-6 py-3 transition">
//             Get started →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
