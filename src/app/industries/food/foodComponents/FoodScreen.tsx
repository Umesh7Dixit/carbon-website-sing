

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function FoodScreen() {
//   return (
//     <section className="relative w-full h-[90vh]">
//       {/* Background Image */}
//       <Image
//         src="/chips2.png" // replace with your hero image path
//         alt="Hero Banner"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-none"></div>

//       {/* Text Content */}
//       <div className="absolute mt-25 inset-0 flex items-center px-10 md:px-20 ">
//         <motion.div
//           className="  text-white p-1 rounded-xl max-w-lg"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl w-[607px]  h-[125px] md:text-[54px] font-bold mb-4">
//             RePut.ai For <span className="text-white">Packages Food Products</span>
//           </h1>
//           <p className="mb-10 w-[607px] text-[22px] text-gray-200">
//             RePut.ai empowers food brands to track, verify, and communicate every detail of their products—covering origin, ingredients, certifications, and environmental impact. Our platform combines Digital Product Passports, carbon footprint tracking, and authenticity verification to ensure compliance with global food safety and sustainability standards.
//           </p>
           
//         </motion.div>
//       </div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FoodScreen() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/chips2.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-20">
        <motion.div
          className="text-white p-2 rounded-xl max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
            RePut.ai For{" "}
            <span className="text-white">Packages Food Products</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            RePut.ai empowers food brands to track, verify, and communicate every
            detail of their products—covering origin, ingredients, certifications,
            and environmental impact. Our platform combines Digital Product
            Passports, carbon footprint tracking, and authenticity verification
            to ensure compliance with global food safety and sustainability
            standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
