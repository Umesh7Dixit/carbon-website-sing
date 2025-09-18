// "use client";
// import Image from "next/image";

// const advantages = [
//   {
//     title: "Empower Clients with Data-Driven Insights",
//     desc: "As an Alliance Partner, you'll leverage RePut's data ans insights to transform your clients' organizations, driving meaningful change",
//     icon: "/badge.png",
//   },
//   {
//     title: "Extend our Implementation Teams' Reach",
//     desc: "Delivery Partners work as an extension of RePut’s implementation teams, focusing on the rollout and deployment of our solutions.",
//     icon: "/badge.png",
//   },
//   {
//     title: "Collaborate for Systemic Change and Sustainability",
//     desc: "Circular partners with governments and NGOs to put shared learnings into action, driving systemic change for responsible business practices.",
//     icon: "/badge.png",
//   },
//   {
//     title: "Amplify Cutting-Edge Technology",
//     desc: "System Integrator Partners assess, screen, and integrate RePut’s tool into clients’ existing processes and products, bringing emerging technologies to corporates.",
//     icon: "/badge.png",
//   },
//   {
//     title: "Provide Fact-Based Recommendations Backed by Data",
//     desc: "Advisory Partners use RePut’s data to give clients fact-based recommendations, driving internal transformation and optimization.",
//     icon: "/badge.png",
//   },
// ];

// export default function AdvantagesSection() {
//   return (
//     <section className="bg-white w-full h-[100vh] px-6 py-16 ">
//       {/* Heading */}
//       {/* <div className="max-w-6xl ">
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
//           No matter where you and your clients are in the journey to
//           future-proofing their business, Circulor offers flexible partnership
//           options to meet your needs.
//         </p>
//       </div> */}

//       <div className="max-w-6xl mx-auto px-6" >

//       <div className="mb-8 md:mb-12">
//           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
//             Partnering with RePut.ai: Multiple Paths to Success
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 max-w-4xl">
//             No matter where you and your clients are in the journey to future-proofing their business, 
//             Circular offers flexible partnership options to meet your needs.
//           </p>
//         </div>

//       {/* Grid of Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 ">
//         {advantages.map((adv, index) => (
//           <div
//             key={index}
//             className="relative bg-green-900 text-white rounded-lg shadow-lg hover:scale-105 m-5 transform transition duration-300 p-9 h-50 w-90"
//             style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
//           >
//             {/* Text Content */}
//             <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
//             <p className="text-sm text-gray-200">{adv.desc}</p>

//             {/* Diagonal Top-Right with Icon */}
//             <div className="absolute top-0 right-0 w-25 h-25 overflow-hidden">
//               <div className=" w-full h-full bg-white clip-diagonal flex items-start justify-end">
//                 <Image
//                   src={adv.icon}
//                   alt={adv.title}
//                   width={50}
//                   height={50}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="mt-10 flex justify-center">
//         <button className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition">
//           Book for Demo →
//         </button>
//       </div>

//       {/* Custom CSS for Diagonal Cut */}
//       <style jsx>{`
//         .clip-diagonal {
//           clip-path: polygon(100% 0, 100% 100%, 0 0);
//         }
//       `}</style>


//       </div>
//     </section>
//   );
// }




"use client";
import Image from "next/image";

const advantages = [
  {
    title: "Empower Clients with Data-Driven Insights",
    desc: "As an Alliance Partner, you'll leverage RePut's data and insights to transform your clients' organizations, driving meaningful change.",
    icon: "/badge.png",
  },
  {
    title: "Extend Our Implementation Teams' Reach",
    desc: "Delivery Partners work as an extension of RePut’s implementation teams, focusing on the rollout and deployment of our solutions.",
    icon: "/badge.png",
  },
  {
    title: "Collaborate for Systemic Change and Sustainability",
    desc: "Circular partners with governments and NGOs to put shared learnings into action, driving systemic change for responsible business practices.",
    icon: "/badge.png",
  },
  {
    title: "Amplify Cutting-Edge Technology",
    desc: "System Integrator Partners assess, screen, and integrate RePut’s tool into clients’ existing processes and products, bringing emerging technologies to corporates.",
    icon: "/badge.png",
  },
  {
    title: "Provide Fact-Based Recommendations Backed by Data",
    desc: "Advisory Partners use RePut’s data to give clients fact-based recommendations, driving internal transformation and optimization.",
    icon: "/badge.png",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-10 py-12 md:py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 px-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Partnering with RePut.ai: Multiple Paths to Success
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
          No matter where you and your clients are in the journey to
          future-proofing their business, Circular offers flexible partnership
          options to meet your needs.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {advantages.map((adv, index) => (
          <div
            key={index}
            className="relative bg-green-900 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300 p-6 sm:p-8 md:p-9"
            style={{ boxShadow: "0px 0px 15px 2px rgba(0,255,0,0.4)" }}
          >
            {/* Text Content */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
              {adv.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
              {adv.desc}
            </p>

            {/* Diagonal Top-Right with Icon */}
            <div className="absolute top-0  right-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden">
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
      <div className="mt-10 flex justify-center">
        <button className="px-5 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 flex items-center gap-2 transition text-sm sm:text-base">
          Book for Demo →
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
