// "use client"

// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 


 

// export default function BrsrInfo() {
//   const { scrollToContact } = useContact(); 

//   return (
//     <>
//     <div className="h-[500px] flex flex-col items-center justify-start bg-white text-black px-10 py-12">
//       <div className="w-[1100px] text-base md:text-[22px] leading-relaxed mr-10">
//         <p className="mb-6 w-[1100px]">
//           India is aligning corporate reporting with global ESG standards to attract sustainable investment and improve corporate governance. BRSR brings structured ESG disclosure into mainstream compliance, ensuring investors and regulators have access to reliable sustainability data.
//         </p>



//         <p className="mb-6 w-[1100px] text-[22px]">
//           While initially applied to the top 1,000 listed entities, BRSR sets the stage for broader ESG adoption across industries. Early adoption helps companies improve transparency, manage non-financial risks, and prepare for integration with global sustainability reporting frameworks like GRI, SASB, and ISSB.
//         </p>

      

//         {/* Button */}
//         <div className="flex mt-10 justify-start">
//           <button  onClick={scrollToContact} className="bg-green-500  hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md shadow-md">
//             Get in touch & find out how you can comply
//           </button>
//         </div>
//       </div>
//     </div>


// {/* ____________________________________________________________________________________________________________________ */}


//       <div className="min-h-screen bg-white text-black px-6 py-12 flex flex-col items-center">
//         <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
//         {/* Left side - Image */}
//         <div className="relative w-full h-72 md:h-[400px]">
//           <Image
//             src="/complybrsr.png" // place your image in public/images/
//             alt="Boxes and CBAM illustration"
//             fill
//             className="object-cover rounded-md h-[129%] left-[30px] top-[-58px] "
//           />
//         </div>

//         {/* Right side - Text content */}
//         <div className="bg-green-50 p-6 md:p-8 rounded-md shadow">
//           <h2 className="text-[48px] md:text-3xl font-bold mb-4">
//             Does my company need to{" "}
//             <span className="text-green-600 text-[48px]">comply with BRSR?</span>
//           </h2>
//           <p className="text-[18px] md:text-base leading-relaxed text-gray-700">
//             Under SEBI’s mandate, the top 1,000 listed companies (by market capitalisation) must prepare and submit a BRSR annually.
//             This framework requires disclosures aligned with the National Guidelines on Responsible Business Conduct (NGRBC),
//             covering environmental, social, and governance performance.
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6">
//             <button  onClick={scrollToContact}  className="bg-black text-[18px] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-900 transition">
//               Know more →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Regulation Purpose Section */}
//       <div className="max-w-4xl w-full mt-16 mr-62">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-4">
//           Purpose of  <span className="text-green-600">BRSR </span>
//         </h3>
//         <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
//           BRSR aims to integrate sustainability into the core of corporate strategy by standardising disclosures on:
//         </p>
//         <ul>
//           <li> <span className="text-black font-bold">Environmental Impact </span> – energy, emissions, water, waste</li>
//           <li> <span className="text-black font-bold">Social Performance </span> – employee welfare, diversity, community impact</li>
//           <li> <span className="text-black font-bold">Governance </span> – ethics, anti-corruption, board oversight of ESG matters</li>
//         </ul>


//         <p className="text-sm md:text-base text-gray-800 leading-relaxed">
//           The reporting framework ensures comparability, enabling investors to assess companies on their sustainability performance alongside financial results.
//         </p>
//       </div>
//     </div>

//     </>
//   );
// }










"use client"

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function BrsrInfo() {
  const { scrollToContact } = useContact(); 

  return (
    <>
    <div className="h-auto min-h-[500px] lg:h-[500px] flex flex-col items-center justify-start bg-white text-black px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
      <div className="w-full max-w-[1100px] lg:w-[1100px] text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed lg:mr-10">
        <p className="mb-4 sm:mb-5 lg:mb-6 w-full lg:w-[1100px]">
          India is aligning corporate reporting with global ESG standards to attract sustainable investment and improve corporate governance. BRSR brings structured ESG disclosure into mainstream compliance, ensuring investors and regulators have access to reliable sustainability data.
        </p>

        <p className="mb-4 sm:mb-5 lg:mb-6 w-full lg:w-[1100px] text-sm sm:text-base md:text-lg lg:text-[22px]">
          While initially applied to the top 1,000 listed entities, BRSR sets the stage for broader ESG adoption across industries. Early adoption helps companies improve transparency, manage non-financial risks, and prepare for integration with global sustainability reporting frameworks like GRI, SASB, and ISSB.
        </p>

        {/* Button */}
        <div className="flex mt-6 sm:mt-8 lg:mt-10 justify-start">
          <button onClick={scrollToContact} className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-md shadow-md text-sm sm:text-base">
            Get in touch & find out how you can comply
          </button>
        </div>
      </div>
    </div>

{/* ____________________________________________________________________________________________________________________ */}

      <div className="min-h-screen bg-white text-black px-4 sm:px-5 lg:px-6 py-8 sm:py-10 lg:py-12 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-center">
        {/* Left side - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-72 xl:h-[400px] order-2 lg:order-1">
          <Image
            src="/complybrsr.png" // place your image in public/images/
            alt="Boxes and CBAM illustration"
            fill
            className="object-cover rounded-md lg:h-[129%] lg:left-[30px] lg:top-[-58px]"
          />
        </div>

        {/* Right side - Text content */}
        <div className="bg-green-50 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 rounded-md shadow order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-3xl font-bold mb-3 sm:mb-4">
            Does my company need to{" "}
            <span className="text-green-600 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">comply with BRSR?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-base leading-relaxed text-gray-700">
            Under SEBI&apos;s mandate, the top 1,000 listed companies (by market capitalisation) must prepare and submit a BRSR annually.
            This framework requires disclosures aligned with the National Guidelines on Responsible Business Conduct (NGRBC),
            covering environmental, social, and governance performance.
          </p>

          {/* CTA Button */}
          <div className="mt-4 sm:mt-5 lg:mt-6">
            <button onClick={scrollToContact} className="bg-black text-sm sm:text-base lg:text-[18px] text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-900 transition">
              Know more →
            </button>
          </div>
        </div>
      </div>

      {/* Regulation Purpose Section */}
      <div className="max-w-4xl w-full mt-12 sm:mt-14 lg:mt-16 lg:mr-62 px-4 sm:px-0">
        <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4">
          Purpose of  <span className="text-green-600">BRSR </span>
        </h3>
        <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-gray-800 leading-relaxed mb-3 sm:mb-4">
          BRSR aims to integrate sustainability into the core of corporate strategy by standardising disclosures on:
        </p>
        <ul className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-sm xl:text-base space-y-1 sm:space-y-2">
          <li> <span className="text-black font-bold">Environmental Impact </span> – energy, emissions, water, waste</li>
          <li> <span className="text-black font-bold">Social Performance </span> – employee welfare, diversity, community impact</li>
          <li> <span className="text-black font-bold">Governance </span> – ethics, anti-corruption, board oversight of ESG matters</li>
        </ul>

        <p className="text-xs sm:text-sm lg:text-sm xl:text-base text-gray-800 leading-relaxed">
          The reporting framework ensures comparability, enabling investors to assess companies on their sustainability performance alongside financial results.
        </p>
      </div>
    </div>

    </>
  );
}