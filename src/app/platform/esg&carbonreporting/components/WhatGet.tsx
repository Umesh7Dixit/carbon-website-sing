// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatGet() {
  return (
    <section className="h-[60vh] flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/whatGet.png" // put your uploaded image here in /public
            alt="Energy Dashboard"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            What You Get
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
               Carbonscan.ai simplifies carbon and ESG compliance by automating data entry, pre-filling responses, and mapping disclosures seamlessly across multiple frameworks including Bursa Malaysia, GRI, ISSB, and TCFD.
          </p>
          <br/>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                With real-time tracking of progress and gaps, you always know where you stand. Every report is backed by expert validation, ensuring your sustainability disclosures are accurate, audit-ready, and aligned with both local and global requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}




// // app/page.tsx

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function WhatGet() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT SIDE - TEXT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-3xl md:text-[60px] font-bold text-[#1A3A3A] leading-snug">
//             What You Get
//           </h2>
//           <p className="mt-4 text-[#1A3A3A] text-[20px] text-lg leading-relaxed">
//             Carbonscan.ai simplifies carbon and ESG compliance by automating data entry, pre-filling responses, and mapping disclosures seamlessly across multiple frameworks including Bursa Malaysia, GRI, ISSB, and TCFD.
//           </p>
//           <br/>
//           <p className="mt-4 text-[#1A3A3A] text-[20px] text-lg leading-relaxed">
//             With real-time tracking of progress and gaps, you always know where you stand. Every report is backed by expert validation, ensuring your sustainability disclosures are accurate, audit-ready, and aligned with both local and global requirements.
//           </p>
//         </motion.div>

//         {/* RIGHT SIDE - IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center"
//         >
//           <Image
//             src="/whatGet.png" // save your uploaded screenshot here in /public
//             alt="Drive Energy Efficiency Dashboard"
//             width={600}
//             height={400}
//             className=" w-full h-auto rounded-2xl shadow-xl"
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
