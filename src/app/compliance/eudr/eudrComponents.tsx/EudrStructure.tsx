"use client"
import React from "react";
import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 

export default function EudrStructure() {
      // const { scrollToContact } = useContact(); 

  return (
    <div className="min-h-screen bg-[#EAFCF3] p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12 lg:ml-30 text-[24px] lg:text-[48px]">
        <div className="w-full lg:w-[836px] mb-4 lg:mb-0">
          <h1 className="text-xl lg:text-2xl lg:ml-8 md:text-3xl text-[#0C0E10] font-bold">
            The Structure of the EUDR Lite  &
            <br/>
            Full EUDR
          </h1>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-end lg:mr-30">
          <Image
            src="/logonew.png" // put your logo inside public/logo.png
            alt="RePut.ai"
            width={120}
            height={48}
            className="lg:w-[150px] lg:h-[60px]"
          />
        </div>
      </div>

      {/* Table-like Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto text-[16px] lg:text-[20px]">
        {/* Column Headers */}
        <div className="bg-green-900 text-white text-center w-full lg:w-[366px] text-[18px] lg:text-[24px] rounded-3xl py-2 px-4 lg:px-6 font-medium">
          ( 2023–2024 for preparation, 2024–2025 for phased rollout )
        </div>
        <div className="hidden lg:block"></div>
        <div className="bg-green-900 text-white text-center w-full lg:w-[408px] text-[18px] lg:text-[24px] rounded-3xl py-2 px-4 lg:px-6 font-medium">
          ( From Dec 2024 for large companies, June 2025 for SMEs )
        </div>

        {/* Mobile: Stack all content vertically, Desktop: Keep original 3-column layout */}
        
        {/* Row 1 */}
        <div className="lg:hidden">
          <CategoryLabel text="Applicability" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="Large companies and traders preparing compliance; SMEs not yet in scope." />
            <InfoCard text="All operators and traders placing EUDR commodities on EU market." />
          </div>
        </div>
        
        {/* Desktop Row 1 */}
        <InfoCard className="hidden lg:block" text="Large companies and traders preparing compliance; SMEs not yet in scope." />
        <CategoryLabel className="hidden lg:flex" text="Applicability" />
        <InfoCard className="hidden lg:block" text="All operators and traders placing EUDR commodities on EU market." />

        {/* Row 2 */}
        <div className="lg:hidden">
          <CategoryLabel text="Disclosure Scope" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="Basic due diligence on commodities with initial traceability efforts." />
            <InfoCard text="Comprehensive due diligence covering deforestation-free and legal sourcing." />
          </div>
        </div>
        
        {/* Desktop Row 2 */}
        <InfoCard className="hidden lg:block" text="Basic due diligence on commodities with initial traceability efforts." />
        <CategoryLabel className="hidden lg:flex" text="Disclosure Scope" />
        <InfoCard className="hidden lg:block" text="Comprehensive due diligence covering deforestation-free and legal sourcing." />

        {/* Row 3 */}
        <div className="lg:hidden">
          <CategoryLabel text="Data Depth" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="Partial supply chain mapping, geolocation for high-risk areas only." />
            <InfoCard text="Full geolocation data to plot land parcels; satellite-based risk verification." />
          </div>
        </div>
        
        {/* Desktop Row 3 */}
        <InfoCard className="hidden lg:block" text="Partial supply chain mapping, geolocation for high-risk areas only." />
        <CategoryLabel className="hidden lg:flex" text="Data Depth" />
        <InfoCard className="hidden lg:block" text="Full geolocation data to plot land parcels; satellite-based risk verification." />

        {/* Row 4 */}
        <div className="lg:hidden">
          <CategoryLabel text="Assurance" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="No third-party assurance required; self-declarations sufficient." />
            <InfoCard text="Third-party checks and EU information system submissions expected." />
          </div>
        </div>
        
        {/* Desktop Row 4 */}
        <InfoCard className="hidden lg:block" text="No third-party assurance required; self-declarations sufficient." />
        <CategoryLabel className="hidden lg:flex" text="Assurance" />
        <InfoCard className="hidden lg:block" text="Third-party checks and EU information system submissions expected." />

        {/* Row 5 */}
        <div className="lg:hidden">
          <CategoryLabel text="Purpose" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="Build internal systems, risk assessments, and traceability processes." />
            <InfoCard text="Ensure deforestation-free supply chains with legal compliance in EU." />
          </div>
        </div>
        
        {/* Desktop Row 5 */}
        <InfoCard className="hidden lg:block" text="Build internal systems, risk assessments, and traceability processes." />
        <CategoryLabel className="hidden lg:flex" text="Purpose" />
        <InfoCard className="hidden lg:block" text="Ensure deforestation-free supply chains with legal compliance in EU." />

        {/* Row 6 */}
        <div className="lg:hidden">
          <CategoryLabel text="Stakeholder Engagement" />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <InfoCard text="Internal teams, suppliers, and early EU buyers." />
            <InfoCard text=" EU regulators, financial institutions, investors, and global buyers." />
          </div>
        </div>
        
        {/* Desktop Row 6 */}
        <InfoCard className="hidden lg:block" text="Internal teams, suppliers, and early EU buyers." />
        <CategoryLabel className="hidden lg:flex" text="Stakeholder Engagement" />
        <InfoCard className="hidden lg:block" text=" EU regulators, financial institutions, investors, and global buyers." />
      </div>
    </div>
  );
}

// Left/Right card component
const InfoCard = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`bg-white border border-gray-200 rounded-xl shadow-sm p-3 lg:p-4 text-xs lg:text-sm text-gray-700 ${className}`}>
    {text}
  </div>
);

// Middle label component
const CategoryLabel = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`flex items-center justify-center text-center font-medium text-gray-700 mb-2 lg:mb-0 ${className}`}>
    {text}
  </div>
);














// "use client"
// import React from "react";
// import Image from "next/image";
// // import { useContact } from "../../../components/ContactContext"; 


// export default function EudrStructure() {
//       // const { scrollToContact } = useContact(); 

//   return (
//     <div className="min-h-screen bg-[#EAFCF3] p-8">
//       {/* Header */}
//       <div className="flex justify-between items-start mb-12 ml-30 text-[48px]">
//         <div className="w-[836px]">
//           <h1 className="text-2xl ml-8 md:text-3xl text-[#0C0E10] font-bold">
//             The Structure of the EUDR Lite  &
//             <br/>
//             Full EUDR
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
//       <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto text-[20px]">
//         {/* Column Headers */}
//         <div className="bg-green-900 text-white text-center w-[366] text-[24px]  rounded-3xl py-2 px-6 font-medium">
//           ( 2023–2024 for preparation, 2024–2025 for phased rollout )
//         </div>
//         <div></div>
//         <div className="bg-green-900 text-white text-center w-[408px] text-[24px] rounded-3xl py-2 px-6 font-medium">
//           ( From Dec 2024 for large companies, June 2025 for SMEs )
//         </div>

//         {/* Row 1 */}
//         <InfoCard  text="Large companies and traders preparing compliance; SMEs not yet in scope." />
//         <CategoryLabel text="Applicability" />
//         <InfoCard text="All operators and traders placing EUDR commodities on EU market." />

//         {/* Row 2 */}
//         <InfoCard text="Basic due diligence on commodities with initial traceability efforts." />
//         <CategoryLabel text="Disclosure Scope" />
//         <InfoCard text="Comprehensive due diligence covering deforestation-free and legal sourcing." />

//         {/* Row 3 */}
//         <InfoCard text="Partial supply chain mapping, geolocation for high-risk areas only." />
//         <CategoryLabel text="Data Depth" />
//         <InfoCard text="Full geolocation data to plot land parcels; satellite-based risk verification." />

//         {/* Row 4 */}
//         <InfoCard text="No third-party assurance required; self-declarations sufficient." />
//         <CategoryLabel text="Assurance" />
//         <InfoCard text="Third-party checks and EU information system submissions expected." />

//         {/* Row 5 */}
//         <InfoCard text="Build internal systems, risk assessments, and traceability processes." />
//         <CategoryLabel text="Purpose" />
//         <InfoCard text="Ensure deforestation-free supply chains with legal compliance in EU." />

//         {/* Row 6 */}
//         <InfoCard text="Internal teams, suppliers, and early EU buyers." />
//         <CategoryLabel text="Stakeholder Engagement" />
//         <InfoCard text=" EU regulators, financial institutions, investors, and global buyers." />
//       </div>
//     </div>
//   );
// }

// // Left/Right card component
// const InfoCard = ({ text }: { text: string }) => (
//   <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 text-sm text-gray-700">
//     {text}
//   </div>
// );

// // Middle label component
// const CategoryLabel = ({ text }: { text: string }) => (
//   <div className="flex items-center justify-center text-center font-medium text-gray-700">
//     {text}
//   </div>
// );
