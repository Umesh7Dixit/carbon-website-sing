

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "../../../components/ContactContext";


// export default function FoodFeatureSection() {

//             const { scrollToContact } = useContact();
  
//   const features = [
//     {
//       highlight: "Protect your brand and assure your customers",
//       description:
//         "Our encrypted, tamper-proof digital markers integrate invisibly into your product labels or packaging. They cannot be replicated, yet can be scanned instantly with any smartphone—no separate app required.",
//       points: [
//         "Verify product origin and authenticity",
//         "Detect and prevent counterfeiting",
//         "Provide transparency on manufacturing details",
//         "Strengthen consumer trust and brand loyalty",
//       ],
//       img: "/chipsdpp.png",
//     },
//     {
//       highlight: "Carbon & Sustainability Dashboard",
//       description:
//         "Quantify and communicate your food product’s environmental footprint.RePut.ai’s GHG accounting engine calculates Scope 1, 2, and 3 emissions across farming, processing, packaging, transport, and retail.",
//       points: [
//         "Product-level CO₂e via Life Cycle Assessment (LCA)",
//         "Sustainable sourcing percentages (organic, fair trade, local)",
//         "Packaging impact and recyclability",
//         "Water footprint and efficiency measures",
//         " These verified metrics can be shared directly with consumers through QR scans, supporting climate-conscious purchasing decisions and compliance with global disclosure frameworks.",
//       ],
//       img: "/lp.png",
//     },
//     {
//       highlight: "Regulatory Compliance Mode Simple",
//       description:
//         "Meet food safety and sustainability requirements with ease.",
//       points: [
//         "EU Digital Product Passport for agri-food",
//         "EU Farm to Fork Strategy and Sustainable Food Systems Framework",
//         "FDA Food Safety Modernization Act (FSMA)",
//         "ISO 22000 food safety standards",
//         "Global GAP and Fairtrade certifications",
//         "Organic certifications (EU Organic, USDA Organic)",
//         "Carbon reporting frameworks (ISO 14064, GHG Protocol)",
//       ],
//       img: "/dash.png",
//     },
//   ];

 
//   return (
//     <section className="bg-white py-16 px-6 md:px-16">

//       {/* Features */}
//       <div className="flex flex-col gap-28 relative">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row items-start gap-60 ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             } relative`}
//           >

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0"
//             >
//               <Image
//                 src={feature.img}
//                 alt={feature.highlight}
//                 width={500}
//                 height={350}
//                 className="rounded-lg"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-md m-22"
//             >
//               <h3 className="text-black text-xl font-semibold">
//                 {feature.highlight}
//                 <sup>™</sup>
//               </h3>
//               <p className="text-gray-600 mt-2">{feature.description}</p>
//               <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
//                 {feature.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//               <button  onClick={scrollToContact}  className="mt-4 px-5 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition">
//                 Learn More
//               </button>
//             </motion.div>
//           </div>
//         ))}

//         {/* Vertical dotted line */}
//         {/* <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-green-500"></div> */}
//       </div>
//     </section>
//   );
// }






 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext";

export default function FoodFeatureSection() {
  const { scrollToContact } = useContact();

  const features = [
    {
      highlight: "Protect your brand and assure your customers",
      description:
        "Our encrypted, tamper-proof digital markers integrate invisibly into your product labels or packaging. They cannot be replicated, yet can be scanned instantly with any smartphone—no separate app required.",
      points: [
        "Verify product origin and authenticity",
        "Detect and prevent counterfeiting",
        "Provide transparency on manufacturing details",
        "Strengthen consumer trust and brand loyalty",
      ],
      img: "/chipsdpp.png",
    },
    {
      highlight: "Carbon & Sustainability Dashboard",
      description:
        "Quantify and communicate your food product’s environmental footprint. RePut.ai’s GHG accounting engine calculates Scope 1, 2, and 3 emissions across farming, processing, packaging, transport, and retail.",
      points: [
        "Product-level CO₂e via Life Cycle Assessment (LCA)",
        "Sustainable sourcing percentages (organic, fair trade, local)",
        "Packaging impact and recyclability",
        "Water footprint and efficiency measures",
        "Verified metrics shared via QR scans for compliance & trust",
      ],
      img: "/carbondash.png",
    },
    {
      highlight: "Regulatory Compliance Made Simple",
      description: "Meet food safety and sustainability requirements with ease.",
      points: [
        "EU Digital Product Passport for agri-food",
        "EU Farm to Fork Strategy and Sustainable Food Systems Framework",
        "FDA Food Safety Modernization Act (FSMA)",
        "ISO 22000 food safety standards",
        "Global GAP and Fairtrade certifications",
        "Organic certifications (EU Organic, USDA Organic)",
        "Carbon reporting frameworks (ISO 14064, GHG Protocol)",
      ],
      // img: "/dash.png",
      img: "/verify.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Features */}
      <div className="flex flex-col gap-28 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image
            // <motion.div
            //   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            //   whileInView={{ opacity: 1, x: 0 }}
            //   transition={{ duration: 0.5 }}
            //   className="flex-shrink-0 max-w-[500px] w-full flex justify-center"
            // >
            //   <Image
            //     src={feature.img}
            //     alt={feature.highlight}
            //     width={500}
            //     height={350}
            //     className="rounded-lg object-contain scale-[1.80] mx-8"
            //   />
            // </motion.div>

            {/* Text */}
            {/* <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl w-full"
            >
              <h3 className="text-black text-3xl md:text-4xl font-semibold">
                {feature.highlight}
                <sup>™</sup>
              </h3>
              <p className="text-gray-600 mt-4 text-base md:text-lg">
                {feature.description}
              </p>
              <ul className="mt-4 space-y-2 text-base md:text-lg text-gray-700 list-disc list-inside">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="mt-6 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition"
              >
                Learn More
              </button>
            </motion.div>  */}


{/* Image */}
<motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="flex-shrink-0 w-full md:w-[700px] flex justify-center" // ✅ much larger width
>
  <Image
    src={feature.img}
    alt={feature.highlight}
    width={700}   // ✅ larger width
    height={450}  // ✅ adjust height proportionally
    className="rounded-lg object-contain"
  />
</motion.div>

{/* Text */}
<motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-xl w-full"
>
  <h3 className="text-black text-3xl md:text-4xl font-semibold">
    {feature.highlight}
    <sup>™</sup>
  </h3>
  <p className="text-gray-600 mt-4 text-base md:text-lg">
    {feature.description}
  </p>
  <ul className="mt-4 space-y-2 text-base md:text-lg text-gray-700 list-disc list-inside">
    {feature.points.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
  <button
    onClick={scrollToContact}
    className="mt-6 px-6 py-3 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition"
  >
    Learn More
  </button>
</motion.div>



          </div>
        ))}
      </div>
    </section>
  );
}
