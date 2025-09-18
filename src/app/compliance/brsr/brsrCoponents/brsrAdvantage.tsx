
// "use client";
// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 




// const advantages = [
//   {
//     title: "Regulatory Readiness Scan:",
//     desc: "Review your existing ESG disclosures, policies, and data systems against BRSR’s nine principles.",
//     icon: "/onecard.png",
//     // icon: "/e1.png",
//   },
//   {
//     title: "Materiality & KPI Framework:",
//     desc: "Identify the most relevant ESG topics for your business and map them to BRSR indicators.",
//     icon: "/twocard.png",
//     // icon: "/e2.png",
//   },
//   {
//     title: "Data Collection Blueprint:",
//     desc: "Establish structured workflows for capturing environmental, social, and governance metrics from across your operations.",
//     icon: "/thirdcard.png",
//     // icon: "/e4.png",
//   },
//   {
//     title: "Supplier & Partner Coordination:",
//     desc: "Engage value-chain partners to gather consistent and verifiable ESG information.",
//     icon: "/fourcard.png",
//     // icon: "/e3.png",
//   },
//   {
//     title: "Integrated Reporting Tools:",
//     desc: "Implement digital solutions to compile, validate, and format disclosures for SEBI’s prescribed submission format",
//     icon: "/cbam_icon.png",
//     // icon: "/e5.png",
//   },
//   {
//     title: "Capacity-Building Sessions:",
//     desc: "Equip your teams with the skills and awareness needed to maintain compliance year after year.",
//     icon: "/sixcard.png",
//     // icon: "/e6.png",
//   },
// ];






// export default function BrsrAdvantage() {
//       const { scrollToContact } = useContact(); 

//   return (
//     <section className="bg-white w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto  mb-12 px-2 text-left">
//         <h1 className="text-[48px] sm:text-3xl lg:text-[48px] font-bold text-black mb-4 w-[744px]">
//           Getting BRSR-ready is <span className="text-[#008000]">easier than you think.</span>
//         </h1>

//       </div>

//       <div className="w-[1026px] h-[90px] mx-40 flex justify-start mb-12 text-left">
//         <p className="text-[36px] sm:text-base md:text-[36px] text-black">
//           Accelerate your journey to full compliance with SEBI’s BRSR mandate in just 90 days through the RePut.ai BRSR Preparation Suite, which offers:
//         </p>
//       </div>

//       {/* Grid of Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-40">
//         {advantages.map((adv, index) => (
//           <div
//             key={index}
//             className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-6 sm:p-8 md:p-9"
//             style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
//           >
//             {/* Text Content */}
//             <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 mt-10">
//               {adv.title}
//             </h3>
//             <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
//               {adv.desc}
//             </p>

//             {/* Diagonal Top-Right with Icon */}
//             <div className="absolute top-0  right-0 w-16 h-16 sm:w-30 sm:h-30 overflow-hidden">
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
//         <button onClick={scrollToContact} className="px-5 sm:px-6 py-2  sm:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-sm sm:text-base">
//           Discuss Our  BRSR Regulation Reediness Package Today →
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






 "use client";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

const advantages = [
  {
    title: "Regulatory Readiness Scan:",
    desc: "Review your existing ESG disclosures, policies, and data systems against BRSR's nine principles.",
    icon: "/onecard.png",
    // icon: "/e1.png",
  },
  {
    title: "Materiality & KPI Framework:",
    desc: "Identify the most relevant ESG topics for your business and map them to BRSR indicators.",
    icon: "/twocard.png",
    // icon: "/e2.png",
  },
  {
    title: "Data Collection Blueprint:",
    desc: "Establish structured workflows for capturing environmental, social, and governance metrics from across your operations.",
    icon: "/thirdcard.png",
    // icon: "/e4.png",
  },
  {
    title: "Supplier & Partner Coordination:",
    desc: "Engage value-chain partners to gather consistent and verifiable ESG information.",
    icon: "/fourcard.png",
    // icon: "/e3.png",
  },
  {
    title: "Integrated Reporting Tools:",
    desc: "Implement digital solutions to compile, validate, and format disclosures for SEBI's prescribed submission format",
    icon: "/cbam_icon.png",
    // icon: "/e5.png",
  },
  {
    title: "Capacity-Building Sessions:",
    desc: "Equip your teams with the skills and awareness needed to maintain compliance year after year.",
    icon: "/sixcard.png",
    // icon: "/e6.png",
  },
];

export default function BrsrAdvantage() {
  const { scrollToContact } = useContact(); 

  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12 px-2 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black mb-4 w-full lg:w-[744px]">
          Getting BRSR-ready is <span className="text-[#008000]">easier than you think.</span>
        </h1>
      </div>

      <div className="w-full max-w-[1026px] mx-auto lg:mx-40 flex justify-start mb-12 text-left px-2 lg:px-0">
        <p className="text-base sm:text-lg md:text-xl lg:text-[36px] text-black">
          Accelerate your journey to full compliance with SEBI&apos;s BRSR mandate in just 90 days through the RePut.ai BRSR Preparation Suite, which offers:
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8 lg:mt-40">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-6 sm:p-8 md:p-9"
            style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
          >
            {/* Text Content */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 mt-6 lg:mt-10">
              {adv.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
              {adv.desc}
            </p>

            {/* Diagonal Top-Right with Icon */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-30 sm:h-30 overflow-hidden">
              <div className="w-full h-full bg-white clip-diagonal flex items-start justify-end">
                <Image
                  src={adv.icon}
                  alt={adv.title}
                  width={40}
                  height={40}
                  className="absolute top-3 right-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center lg:justify-start lg:mx-auto lg:ml-36">
        <button onClick={scrollToContact} className="px-5 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-sm sm:text-base">
          Discuss Our BRSR Regulation Readiness Package Today →
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