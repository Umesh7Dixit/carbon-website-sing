"use client"

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function EudrInfo() {
  const { scrollToContact } = useContact(); 

  return (
    <>
    <div className="min-h-screen flex flex-col items-start justify-start bg-white text-black px-4 sm:px-5 lg:px-6 py-8 sm:py-10 lg:py-12">
      <div className="w-full max-w-[1100px] lg:w-[1100px] lg:ml-30 text-sm sm:text-base lg:text-base xl:text-[22px] leading-relaxed">
        <p className="mb-4 sm:mb-5 lg:mb-6">
          The EU is one of the largest importers of agricultural and forest commodities globally, sourcing vast quantities of cattle, cocoa, coffee, palm oil, rubber, soy, and wood from multiple regions. With growing consumer and regulatory demand for deforestation-free products, the EU has introduced the EU Deforestation Regulation (EUDR) to ensure that goods placed on its market are not linked to deforestation or forest degradation occurring after 31 December 2020.
        </p>

        <p className="mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base md:text-lg lg:text-[22px]">
          EUDR impacts both EU-based companies and exporters worldwide. It requires businesses to prove that products are legally produced, deforestation-free, and fully traceable through the supply chain. This includes linking every batch to precise geolocation coordinates of its origin plots, supported by risk assessments and due diligence documentation.
        </p>

        <p className="mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base md:text-lg lg:text-[22px]">
          Non-compliance could lead to severe consequences, including product bans, fines, reputational damage, and loss of access to one of the world&apos;s most lucrative markets. For exporters, meeting EUDR obligations is not only a legal necessity but also a competitive advantage in an increasingly sustainability-driven trade environment.
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
            src="/eudrCard.png" // place your image in public/images/
            alt="Boxes and CBAM illustration"
            fill
            className="object-contain lg:h-[129%] lg:left-[30px] lg:top-[-58px]"
          />
        </div>

        {/* Right side - Text content */}
        <div className="bg-green-50 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 rounded-md shadow order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-3xl font-bold mb-3 sm:mb-4">
            Does my company need to{" "}
            <span className="text-green-600 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">comply with EUDR?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] xl:text-base leading-relaxed text-gray-700">
            EUDR applies to companies placing certain commodities and derived products on the EU market or exporting them from the EU.
            Covered commodities include cattle, cocoa, coffee, oil palm, rubber, soy, and wood — along with a wide range of products 
            derived from these materials.
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
      <div className="max-w-4xl w-full mt-12 sm:mt-14 lg:mt-16 lg:mr-70 px-4 sm:px-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[36px] font-semibold mb-3 sm:mb-4">
          Purpose of  <span className="text-green-600">EUDR </span>
        </h3>
        <p className="text-sm sm:text-[16px] w-full lg:w-[1097px] md:text-base text-gray-800 leading-relaxed mb-3 sm:mb-4">
          EUDR aims to reduce the EU&apos;s contribution to global deforestation, protect biodiversity, and promote sustainable production. Companies must perform due diligence to prove their products:
        </p>
        <ul className="list-disc pl-4 sm:pl-5 lg:pl-6 space-y-1 sm:space-y-2">
          <li className="text-black font-bold text-sm sm:text-[16px]">
            Are deforestation-free
          </li>
          <li className="text-black font-bold text-sm sm:text-[16px]">
            Comply with relevant local laws in the country of production
          </li>
          <li className="text-black font-bold text-sm sm:text-[16px]">
            Are traceable to their place of origin
          </li>
        </ul>
      </div>
    </div>

    </>
  );
}






















// "use client"

// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 


// export default function EudrInfo() {
//       const { scrollToContact } = useContact(); 

//   return (
//     <>
//     <div className="min-h-screen flex flex-col items-start justify-start bg-white text-black px-6 py-12">
//       <div className="w-[1100px] ml-30 text-base md:text-[22px] leading-relaxed">
//         <p className="mb-6">
//           The EU is one of the largest importers of agricultural and forest commodities globally, sourcing vast quantities of cattle, cocoa, coffee, palm oil, rubber, soy, and wood from multiple regions. With growing consumer and regulatory demand for deforestation-free products, the EU has introduced the EU Deforestation Regulation (EUDR) to ensure that goods placed on its market are not linked to deforestation or forest degradation occurring after 31 December 2020.
//         </p>



//         <p className="mb-6 text-[22px]">
//           EUDR impacts both EU-based companies and exporters worldwide. It requires businesses to prove that products are legally produced, deforestation-free, and fully traceable through the supply chain. This includes linking every batch to precise geolocation coordinates of its origin plots, supported by risk assessments and due diligence documentation.
//         </p>

//         <p className="mb-6 text-[22px]">
//           Non-compliance could lead to severe consequences, including product bans, fines, reputational damage, and loss of access to one of the world’s most lucrative markets. For exporters, meeting EUDR obligations is not only a legal necessity but also a competitive advantage in an increasingly sustainability-driven trade environment.
//         </p>

      

//         {/* Button */}
//         <div className="flex mt-10 justify-start">
//           <button onClick={scrollToContact} className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md shadow-md">
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
//             // src="/complybrsr.png" // place your image in public/images/
//             src="/eudrCard.png" // place your image in public/images/
//             alt="Boxes and CBAM illustration"
//             fill
//             className="object-contain  h-[129%] left-[30px] top-[-58px] "
//           />
//         </div>

//         {/* Right side - Text content */}
//         <div className="bg-green-50 p-6 md:p-8 rounded-md shadow">
//           <h2 className="text-[48px] md:text-3xl font-bold mb-4">
//             Does my company need to{" "}
//             <span className="text-green-600 text-[48px]">comply with EUDR?</span>
//           </h2>
//           <p className="text-[18px] md:text-base leading-relaxed text-gray-700">
//             EUDR applies to companies placing certain commodities and derived products on the EU market or exporting them from the EU.
//             Covered commodities include cattle, cocoa, coffee, oil palm, rubber, soy, and wood — along with a wide range of products 
//             derived from these materials.
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6">
//             <button onClick={scrollToContact} className="bg-black text-[18px] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-gray-900 transition">
//               Know more →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Regulation Purpose Section */}
//       <div className="max-w-4xl w-full mt-16 mr-70">
//         <h3 className="text-[36px] md:text-[36px] font-semibold mb-4">
//           Purpose of  <span className="text-green-600">EUDR </span>
//         </h3>
//         <p className="text-[16px] w-[1097px] md:text-base text-gray-800 leading-relaxed mb-4">
//           EUDR aims to reduce the EU’s contribution to global deforestation, protect biodiversity, and promote sustainable production. Companies must perform due diligence to prove their products:
//         </p>
//         <ul className="list-disc pl-6">
//           <li className="text-black font-bold text-[16px]">
//             Are deforestation-free
//           </li>
//           <li className="text-black font-bold text-[16px]">
//             Comply with relevant local laws in the country of production
//           </li>
//           <li className="text-black font-bold text-[16px]">
//             Are traceable to their place of origin
//           </li>
//         </ul>


//       </div>
//     </div>

//     </>
//   );
// }


















