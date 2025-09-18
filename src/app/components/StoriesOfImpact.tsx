
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function StoriesOfImpact() {
//   const caseStudies = [
//     {
//       title: "Stitching Transparency Into Every Thread",
//       description:
//         "B77, a rising sustainable clothing brand, set out to go beyond fashion and make accountability a core part of its identity. With growing demand for supply chain transparency, the brand wanted to provide customers with verified sustainability data for every garment. By implementing a Reput powered Digital Product Passport (DPP), B77 now traces its apparel from farm to wardrobe, ensuring authenticity, compliance, ESG KPI’s and consumer trust. This case study showcases how B77 turned sustainability into a marketing strategy providing them competitive edge.",
//       // img: "/textile.png", // Replace with your actual image
//       img: "/b77new.png", // Replace with your actual image
//     },
//     {
//       title: "From Cotton Fields to Denim Racks: Traceability That Builds Trust",
//       description:
//         "For a leading European denim brand, ensuring full visibility across its Indian supply chain is no longer optional—it’s compliance....",
//       // img: "/industry.png", // Replace with your actual image
//       // img: "/demin.png", // Replace with your actual image
//       img: "/anotherdenim.png", // Replace with your actual image
//     },
//     {
//       title: "Measuring Carbon, Building Low-Emission Steel",
//       description:
//         "For a large Indian infrastructure steel fabricator, carbon transparency is key to staying competitive in global markets...",
//       // img: "/agri.png", // Replace with your actual image
//       img: "/metalrole.png", // Replace with your actual image
//     },
//   ];

//   return (
//     <section className="bg-white py-16 px-6 md:px-16 ">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-black text-3xl md:text-4xl font-semibold">
//           Stories Of <span className="text-green-600 italic">Impact</span>
//         </h2>
//       </div>

// <div className="w-[80%] mx-auto flex flex-col items-center gap-8">
//       {/* First Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg mb-8"
//       >
//         <div className="bg-[#26442E]  text-white p-6 flex flex-col justify-between">
//           <div>
//             <h3 className="text-[28px] md:text-xl font-semibold mb-3">
//               {caseStudies[0].title}
//             </h3>
//             <p className="text-[18px] text-gray-200">{caseStudies[0].description}</p>
//           </div>
//           {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-medium self-start">
//             View case study
//           </button> */}
//         </div>
//         <Image
//           src={caseStudies[0].img}
//           alt={caseStudies[0].title}
//           width={600}
//           height={400}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Second Row - Two Small Cards */}
//       <div className="grid  h-[388px] grid-cols-1 md:grid-cols-2 gap-8">
//         {caseStudies.slice(1).map((study, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg"
//           >
//             <div className="bg-[#26442E] text-white p-6 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-lg text-[28px] md:text-xl font-semibold mb-3">
//                   {study.title}
//                 </h3>
//                 <p className="text-sm text-[18px] text-gray-200">{study.description}</p>
//               </div>
//               {/* <button className="mt-4 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-medium self-start bottom-4 right-1">
//                 View case study
//               </button> */}
//             </div>
//             <Image
//               src={study.img}
//               alt={study.title}
//               width={300}
//               height={200}
//               className="object-cover w-full h-full"
//             />
//           </motion.div>
//         ))}
//       </div>

// </div>
//     </section>
//   );
// }

 
















"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoriesOfImpact() {
  const caseStudies = [
    {
      title: "Stitching Transparency Into Every Thread",
      description:
        "B77, a rising sustainable clothing brand, set out to go beyond fashion and make accountability a core part of its identity. With growing demand for supply chain transparency, the brand wanted to provide customers with verified sustainability data for every garment. By implementing a Reput powered Digital Product Passport (DPP), B77 now traces its apparel from farm to wardrobe, ensuring authenticity, compliance, ESG KPI’s and consumer trust. This case study showcases how B77 turned sustainability into a marketing strategy providing them competitive edge.",
      // img: "/b77new.png",
      img: "/impact.png",
    },
    {
      title: "From Cotton Fields to Denim Racks: Traceability That Builds Trust",
      description:
        "For a leading European denim brand, ensuring full visibility across its Indian supply chain is no longer optional—it’s compliance....",
      img: "/anotherdenim.png",
    },
    {
      title: "Measuring Carbon, Building Low-Emission Steel",
      description:
        "For a large Indian infrastructure steel fabricator, carbon transparency is key to staying competitive in global markets...",
      img: "/metalrole.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-black text-3xl md:text-4xl font-semibold">
          Stories Of <span className="text-green-600 italic">Impact</span>
        </h2>
      </div>

      <div className="w-full md:w-[80%] mx-auto flex flex-col items-center gap-8">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <div className="bg-[#26442E] text-white p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] md:text-28px font-semibold mb-3">
                {caseStudies[0].title}
              </h3>
              <p className="text-[16px] md:text-[18px] text-gray-200">
                {caseStudies[0].description}
              </p>
            </div>
          </div>
          <Image
            src={caseStudies[0].img}
            alt={caseStudies[0].title}
            width={600}
            height={400}
            // className="object-cover w-full h-64 md:h-full"
            className="object-fill w-full h-64 md:h-full"
          />
        </motion.div>

        {/* Second Row - Two Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.slice(1).map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg h-auto md:h-[388px]"
            >
              <div className="bg-[#26442E] text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{study.title}</h3>
                  <p className="text-sm md:text-[18px] text-gray-200">{study.description}</p>
                </div>
              </div>
              <Image
                src={study.img}
                alt={study.title}
                width={300}
                height={200}
                className="object-cover w-full h-64 md:h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
