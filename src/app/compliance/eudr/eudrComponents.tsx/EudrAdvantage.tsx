"use client";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

const advantages = [
  {
    title: "Commodity Scope Analysis:",
    desc: "Review your existing ESG disclosures, policies, and data systems against BRSR's nine principles.",
    icon: "/e1.png",
  },
  {
    title: "Supply Chain Mapping:",
    desc: "Trace all suppliers down to farm or plot level.",
    icon: "/e2.png",
  },
  {
    title: "Geolocation Data Integration:",
    desc: "Capture, store, and manage GPS coordinates in compliance with EU rules.",
    icon: "/e4.png",
  },
  {
    title: "Risk Assessment Automation:",
    desc: "Evaluate deforestation risk based on satellite data and external watchlists.",
    icon: "/e3.png",
  },
  {
    title: "Due Diligence Statement Generator:",
    desc: "Auto-create EU-compliant declarations.",
    icon: "/e5.png",
  },
  {
    title: "Training & Knowledge Support:",
    desc: "Build internal expertise to maintain long-term compliance.",
    icon: "/e6.png",
  },
];

export default function EudrAdvantage() {
  const { scrollToContact } = useContact(); 

  return (
    <section className="bg-white w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 xl:py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto lg:ml-32 mb-8 sm:mb-10 lg:mb-12 px-2 text-start">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-start w-full lg:w-[1100px] font-bold text-black mb-3 sm:mb-4">
          EUDR compliance can be complex, <br className="hidden sm:block"/>
          <span className="text-[#008000]">but RePut makes it simple:</span>
        </h1>
      </div>

      <div className="w-full lg:w-[1026px] h-auto lg:h-[50px] mx-auto lg:mx-35 flex justify-start text-left px-2 mb-6 sm:mb-8 lg:mb-0">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-black">
          How We Help – EUDR Readiness Package
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-4 sm:p-6 lg:p-6 xl:p-9"
            style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
          >
            {/* Text Content */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-[21px] xl:text-[21px] font-bold mb-2 sm:mb-3 mt-6 sm:mt-8 lg:mt-9">
              {adv.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-[21px] xl:text-base text-gray-200 leading-relaxed">
              {adv.desc}
            </p>

            {/* Diagonal Top-Right with Icon */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-30 xl:h-30 overflow-hidden">
              <div className="w-full h-full bg-white clip-diagonal flex items-start justify-end">
                <Image
                  src={adv.icon}
                  alt={adv.title}
                  width={32}
                  height={32}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-3 lg:right-3 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-start lg:top-35 mx-auto lg:ml-36 px-2">
        <button 
          onClick={scrollToContact} 
          className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-xs sm:text-sm lg:text-base"
        >
          <span className="hidden sm:inline">Discuss Our EUDR Regulation Readiness Package Today →</span>
          <span className="sm:hidden">Discuss EUDR Package →</span>
        </button>
      </div>

      {/* Custom CSS for Diagonal Cut */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  );
}













// "use client";
// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 




// const advantages = [
//   {
//     title: "Commodity Scope Analysis:",
//     desc: "Review your existing ESG disclosures, policies, and data systems against BRSR’s nine principles.",
//     // icon: "/onecard.png",
//     icon: "/e1.png",
//   },
//   {
//     title: "Supply Chain Mapping:",
//     desc: "Trace all suppliers down to farm or plot level.",
//     // icon: "/twocard.png",
//     icon: "/e2.png",
//   },
//   {
//     title: "Geolocation Data Integration:",
//     desc: "Capture, store, and manage GPS coordinates in compliance with EU rules.",
//     // icon: "/thirdcard.png",
//     icon: "/e4.png",
//   },
//   {
//     title: "Risk Assessment Automation:",
//     desc: "Evaluate deforestation risk based on satellite data and external watchlists.",
//     // icon: "/fourcard.png",
//     icon: "/e3.png",
//   },
//   {
//     title: "Due Diligence Statement Generator:",
//     desc: "Auto-create EU-compliant declarations.",
//     // icon: "/cbam_icon.png",
//     icon: "/e5.png",
//   },
//   {
//     title: "Training & Knowledge Support:",
//     desc: "Build internal expertise to maintain long-term compliance.",
//     // icon: "/sixcard.png",
//     icon: "/e6.png",
//   },
// ];






// export default function EudrAdvantage() {
//       const { scrollToContact } = useContact(); 

//   return (
//     <section className="bg-white w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
//       {/* Heading */}
//       <div className="max-w-6xl ml-32  mb-12 px-2 text-start ">
//         <h1 className="text-[48px]  text-start w-[1100px] sm:text-3xl lg:text-[48px] font-bold text-black mb-4 ">
//           EUDR compliance can be complex, <br/>
//           <span className="text-[#008000]">but RePut makes it simple:</span>
//         </h1>
//       </div>

//       <div className="w-[1026px] h-[50px] mx-35 flex justify-start  text-left">
//         <p className="text-[36px] sm:text-base md:text-[36px] text-black">
//           How We Help – EUDR Readiness Package
//         </p>
//       </div>

//       {/* Grid of Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-16">
//         {advantages.map((adv, index) => (
//           <div
//             key={index}
//             className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-6 sm:p-8 md:p-9"
//             style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
//           >
//             {/* Text Content */}
//             <h3 className="text-base sm:text-[21px] md:text-[21px] font-bold mb-3 mt-9">
//               {adv.title}
//             </h3>
//             <p className="text-[21px]  sm:text-[21px] md:text-base text-gray-200 leading-relaxed">
//               {adv.desc}
//             </p>

//             {/* Diagonal Top-Right with Icon */}
//             <div className="absolute top-0  right-0 w-32 h-32 sm:w-30 sm:h-30  overflow-hidden">
//               <div className="w-full h-full bg-white clip-diagonal flex items-start justify-end">
//                 <Image
//                   src={adv.icon}
//                   alt={adv.title}
//                   width={40}
//                   height={40}
//                   className="absolute top-3 right-3"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}


//       </div>

//       {/* Button */}

//       <div className="mt-10 flex justify-start top-35 mx-auto ml-36">
//         <button             onClick={scrollToContact} className="px-5 sm:px-6 py-2  sm:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-sm sm:text-base">
//           Discuss Our  EUDR Regulation Reediness Package Today →
//         </button>
//       </div>


//       {/* Custom CSS for Diagonal Cut */}
//       <style jsx>{`
//         .clip-diagonal {
//           clip-path: polygon(100% 0, 100% 100%, 0 0);
//         }
//       `}</style>
//     </section>
//   );
// }






 