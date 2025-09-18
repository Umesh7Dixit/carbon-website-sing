

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "../../components/ContactContext";


// export default function FeatureSection() {

//           const { scrollToContact } = useContact();
  
//   const features = [
//     {
//       highlight: "Protect your brand and assure your customers.",
//       description:
//         "Our encrypted, tamper-proof digital markers integrate invisibly into your product labels or packaging. They cannot be replicated, yet can be scanned instantly with any smartphone—no separate app required.",
//       points: [
//         "Verify product origin and authenticity",
//         "Detect and prevent counterfeiting",
//         "Provide transparency on manufacturing details",
//         "Strengthen consumer trust and brand loyalty",
//       ],
//       img: "/shirt.png",
//     },
//     {
//       highlight: "Track and showcase your sustainability impact in real time.",
//       description:
//         "RePut.ai’s GHG accounting engine measures and reports emissions across Scope 1, Scope 2, and Scope 3 activities—covering everything from direct manufacturing to upstream supply chains and downstream logistics. The platform also tracks",
//       points: [
//         "roduct-level CO₂e footprint based on lifecycle analysis (LCA)",
//         "Material circularity and recycled content share",
//         "Waste generation & diversion rates",
//         "Chemical usage compliance against industry and regulatory standards",
//         "Packaging impact including recyclability and carbon intensity",
//         "Present these verified metrics directly to customers through a QR scan, turning sustainability performance into a powerful proof point for your brand while ensuring compliance with global climate disclosure frameworks.",
//       ],
//       img: "/lp.png",
//     },
//     {
//       highlight: "Stay ahead of evolving global sustainability and textile standards.",
//       description:
//         "RePut.ai ensures your products and supply chain meet the most demanding regulatory, certification, and due diligence requirements. Our platform supports compliance with:",
//       points: [
//         " EU Corporate Sustainability Reporting Directive (CSRD)",
//         "OEKO-TEX® Standard 100 for harmful substance testing",
//         "Global Organic Textile Standard (GOTS) for organic fiber certification",
//         "ISO 14064 for GHG emissions accounting and verification",
//         "Higg Index for textile sustainability assessment",
//         "REACH and ZDHC chemical management requirements ",
//       ],
//       img: "/dash.png",
//     },
//   ];
 



//   return (
//     <section className="bg-white py-16 px-6 md:px-16">
//       {/* Header */}
//       <div className="text-center max-w-2xl mx-auto mb-20">
//         <h2 className="text-3xl md:text-4xl font-semibold text-black">
//           Protect Your{" "}
//           <span className="text-green-600 font-bold">Brand</span> <br /> & Lead{" "}
//           <span className="text-green-600 font-bold">Sustainability</span>
//         </h2>
//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           A combined approach to product authenticity and real-time
//           environmental impact tracking.
//         </p>
//       </div>

//       {/* Features */}
//       <div className="flex flex-col gap-28 relative">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row items-start gap-30 ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             } relative`}
//           >
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0 w-[520px] h-[418px]"
//             >
//               <Image
//                 src={feature.img}
//                 alt={feature.highlight}
//                 width={700}
//                 height={550}
//                 className="rounded-lg"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-md m-25"
//             >
//               <h3 className="text-black text-[40px] w-[600px] font-semibold">
//                 {feature.highlight}
//                 <sup>™</sup>
//               </h3>
//               <p className="text-gray-600 mt-2 w-[600px]">{feature.description}</p>
//               <ul className="mt-4 space-y-2 w-[600px] text-[22px] text-gray-700 list-disc list-inside">
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

//       </div>



      
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../components/ContactContext";

export default function FeatureSection() {
  const { scrollToContact } = useContact();

  const features = [
    {
      highlight: "Protect your brand and assure your customers.",
      description:
        "Our encrypted, tamper-proof digital markers integrate invisibly into your product labels or packaging. They cannot be replicated, yet can be scanned instantly with any smartphone—no separate app required.",
      points: [
        "Verify product origin and authenticity",
        "Detect and prevent counterfeiting",
        "Provide transparency on manufacturing details",
        "Strengthen consumer trust and brand loyalty",
      ],
      img: "/shirt.png",
    },
    {
      highlight: "Track and showcase your sustainability impact in real time.",
      description:
        "RePut.ai’s GHG accounting engine measures and reports emissions across Scope 1, Scope 2, and Scope 3 activities—covering everything from direct manufacturing to upstream supply chains and downstream logistics.",
      points: [
        "Product-level CO₂e footprint based on lifecycle analysis (LCA)",
        "Material circularity and recycled content share",
        "Waste generation & diversion rates",
        "Chemical usage compliance against industry and regulatory standards",
        "Packaging impact including recyclability and carbon intensity",
        "Present verified metrics directly to customers through QR scan",
      ],
      // img: "/lp.png",
      img: "/carbondash.png",
    },
    {
      highlight: "Stay ahead of evolving global sustainability and textile standards.",
      description:
        "RePut.ai ensures your products and supply chain meet the most demanding regulatory, certification, and due diligence requirements. Our platform supports compliance with:",
      points: [
        "EU Corporate Sustainability Reporting Directive (CSRD)",
        "OEKO-TEX® Standard 100 for harmful substance testing",
        "Global Organic Textile Standard (GOTS) for organic fiber certification",
        "ISO 14064 for GHG emissions accounting and verification",
        "Higg Index for textile sustainability assessment",
        "REACH and ZDHC chemical management requirements",
      ],
      // img: "/dash.png",
      img: "/carbon.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Protect Your{" "}
          <span className="text-green-600 font-bold">Brand</span> <br /> & Lead{" "}
          <span className="text-green-600 font-bold">Sustainability</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          A combined approach to product authenticity and real-time
          environmental impact tracking.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-28 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 max-w-[500px] transform scale-[1.23] mx-8 w-full flex justify-center"
            >
              <Image
                src={feature.img}
                alt={feature.highlight}
                width={500}
                height={400}
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
