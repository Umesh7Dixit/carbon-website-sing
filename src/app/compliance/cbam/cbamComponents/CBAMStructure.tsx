"use client"
import React from "react";
import Image from "next/image";

export default function CBAMStructure() {
  return (
    <div className="min-h-screen bg-[#F9FEFA] p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 mx-auto max-w-6xl">
        <div className="w-full sm:w-[836px] mb-4 sm:mb-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] text-[#0C0E10] font-bold">
            The Structure of the CBAM <br/>
            Transitional vs. Full Implementation Phases
          </h1>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-end">
          <Image
            src="/logonew.png" // put your logo inside public/logo.png
            alt="RePut.ai"
            width={120}
            height={48}
            className="sm:w-[150px] sm:h-[60px]"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden max-w-4xl mx-auto space-y-8">
        {/* Transitional Phase */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="bg-green-900 text-white text-center rounded-2xl py-3 px-4 font-medium text-lg mb-6">
            Transitional Phase <br/> (2023–2025)
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Carbon Cost Requirement</h3>
              <p className="text-gray-600 text-sm">No CBAM certificate purchase required</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Reporting Obligation</h3>
              <p className="text-gray-600 text-sm">Quarterly reporting of embedded emissions (direct + indirect for covered CN codes)</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Data Methodology</h3>
              <p className="text-gray-600 text-sm">Data can be based on default values if actual values are unavailable</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Penalty Structure</h3>
              <p className="text-gray-600 text-sm">No financial penalty for emissions levels (reporting only)</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Compliance Focus</h3>
              <p className="text-gray-600 text-sm">Focus on building supplier and production data collection systems</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Scope</h3>
              <p className="text-gray-600 text-sm">CN codes limited to cement, iron & steel, aluminium, fertilisers, hydrogen, electricity</p>
            </div>
          </div>
        </div>

        {/* Full Implementation */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="bg-green-900 text-white text-center rounded-2xl py-3 px-4 font-medium text-lg mb-6">
            Full Implementation (from 2026)
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Carbon Cost Requirement</h3>
              <p className="text-gray-600 text-sm">Mandatory purchase and surrender of CBAM certificates based on verified emissions</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Reporting Obligation</h3>
              <p className="text-gray-600 text-sm">Annual declaration with verified emissions data and corresponding certificate surrender</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Data Methodology</h3>
              <p className="text-gray-600 text-sm">Actual emissions data required, calculated per EU-approved methodology</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Penalty Structure</h3>
              <p className="text-gray-600 text-sm">Penalties for under-reporting, late reporting, or inaccurate data submission</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Compliance Focus</h3>
              <p className="text-gray-600 text-sm">Full operational integration of emissions tracking and verification across supply chain</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Scope</h3>
              <p className="text-gray-600 text-sm">Potential scope expansion to additional products (e.g., chemicals, polymers) by 2030</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Table-like Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {/* Column Headers */}
        <div className="bg-green-900 text-lg lg:text-[24px] text-white text-center rounded-3xl py-2 px-4 lg:px-6 font-medium">
          Transitional Phase <br/> (2023–2025)
        </div>
        <div></div>
        <div className="bg-green-900 text-lg lg:text-[24px] text-white text-center rounded-3xl py-2 px-4 lg:px-6 font-medium">
          Full Implementation (from 2026)
        </div>

        {/* Row 1 */}
        <InfoCard text="No CBAM certificate purchase required" />
        <CategoryLabel text="Carbon Cost Requirement" />
        <InfoCard text="Mandatory purchase and surrender of CBAM certificates based on verified emissions" />

        {/* Row 2 */}
        <InfoCard text="Quarterly reporting of embedded emissions (direct + indirect for covered CN codes)" />
        <CategoryLabel text="Reporting Obligation" />
        <InfoCard text="Annual declaration with verified emissions data and corresponding certificate surrender" />

        {/* Row 3 */}
        <InfoCard text="Data can be based on default values if actual values are unavailable" />
        <CategoryLabel text="Data Methodology" />
        <InfoCard text="Actual emissions data required, calculated per EU-approved methodology" />

        {/* Row 4 */}
        <InfoCard text="No financial penalty for emissions levels (reporting only)" />
        <CategoryLabel text="Penalty Structure" />
        <InfoCard text="Penalties for under-reporting, late reporting, or inaccurate data submission" />

        {/* Row 5 */}
        <InfoCard text="Focus on building supplier and production data collection systems" />
        <CategoryLabel text="Compliance Focus" />
        <InfoCard text="Full operational integration of emissions tracking and verification across supply chain" />

        {/* Row 6 */}
        <InfoCard text="CN codes limited to cement, iron & steel, aluminium, fertilisers, hydrogen, electricity" />
        <CategoryLabel text="Scope" />
        <InfoCard text="Potential scope expansion to additional products (e.g., chemicals, polymers) by 2030" />
      </div>
    </div>
  );
}

// Left/Right card component
const InfoCard = ({ text }: { text: string }) => (
  <div className="bg-white border border-green-200 rounded-3xl shadow-sm p-3 lg:p-4 text-sm lg:text-[20px] text-gray-700">
    {text}
  </div>
);

// Middle label component
const CategoryLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center text-center font-medium text-gray-700 text-sm lg:text-base">
    {text}
  </div>
);

















// "use client"
// import React from "react";
// import Image from "next/image";

// export default function CBAMStructure() {
//   return (
//     <div className="min-h-screen bg-[#F9FEFA] p-8">
//       {/* Header */}
//       <div className="flex justify-between items-start mb-12 ml-38 text-[48px]">
//         <div className="w-[836px]">
//           <h1 className="text-2xl md:text-3xl  text-[#0C0E10] font-bold">
//             The Structure of the CBAM <br/>
//             Transitional vs. Full Implementation Phases
//           </h1>
//         </div>

//         {/* Logo */}
//         <div className="flex flex-col items-end  mr-30">
//           <Image
//             src="/logonew.png" // put your logo inside public/logo.png
//             alt="RePut.ai"
//             width={150}
//             height={60}
//           />
//         </div>
//       </div>

//       {/* Table-like Grid */}
//       <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {/* Column Headers */}
//         <div className="bg-green-900 text-[24px] text-white text-center rounded-3xl py-2 px-6 font-medium">
//           Transitional Phase <br/> (2023–2025)
//         </div>
//         <div></div>
//         <div className="bg-green-900 text-[24px] text-white text-center rounded-3xl py-2 px-6 font-medium">
//           Full Implementation (from 2026)
//         </div>

//         {/* Row 1 */}
//         <InfoCard text="No CBAM certificate purchase required" />
//         <CategoryLabel text="Carbon Cost Requirement" />
//         <InfoCard text="Mandatory purchase and surrender of CBAM certificates based on verified emissions" />

//         {/* Row 2 */}
//         <InfoCard text="Quarterly reporting of embedded emissions (direct + indirect for covered CN codes)" />
//         <CategoryLabel text="Reporting Obligation" />
//         <InfoCard text="Annual declaration with verified emissions data and corresponding certificate surrender" />

//         {/* Row 3 */}
//         <InfoCard text="Data can be based on default values if actual values are unavailable" />
//         <CategoryLabel text="Data Methodology" />
//         <InfoCard text="Actual emissions data required, calculated per EU-approved methodology" />

//         {/* Row 4 */}
//         <InfoCard text="No financial penalty for emissions levels (reporting only)" />
//         <CategoryLabel text="Penalty Structure" />
//         <InfoCard text="Penalties for under-reporting, late reporting, or inaccurate data submission" />

//         {/* Row 5 */}
//         <InfoCard text="Focus on building supplier and production data collection systems" />
//         <CategoryLabel text="Compliance Focus" />
//         <InfoCard text="Full operational integration of emissions tracking and verification across supply chain" />

//         {/* Row 6 */}
//         <InfoCard text="CN codes limited to cement, iron & steel, aluminium, fertilisers, hydrogen, electricity" />
//         <CategoryLabel text="Scope" />
//         <InfoCard text="Potential scope expansion to additional products (e.g., chemicals, polymers) by 2030" />
//       </div>
//     </div>
//   );
// }

// // Left/Right card component
// const InfoCard = ({ text }: { text: string }) => (
//   <div className="bg-white border border-green-200 rounded-3xl shadow-sm p-4 text-[20px] text-gray-700">
//     {text}
//   </div>
// );

// // Middle label component
// const CategoryLabel = ({ text }: { text: string }) => (
//   <div className="flex items-center justify-center text-center font-medium text-gray-700">
//     {text}
//   </div>
// );
