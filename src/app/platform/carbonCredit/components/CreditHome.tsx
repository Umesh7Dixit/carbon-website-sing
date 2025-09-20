"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CreditHome() {
  return (
    <section className="bg-white  py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* --- TOP ROW: HEADING LEFT + PARAGRAPH RIGHT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT HEADING */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Carbon credit <br /> Generation
            </h1>
          </motion.div>

          {/* RIGHT PARAGRAPH */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Empowering Businesses to Turn Carbon Reduction into Tangible Value
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At CarbonScan.ai, we specialize in providing advanced solutions for
              precise measurement, verification, and generation of carbon credits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We combine state-of-the-art AI technology with industry best
              practices to help businesses not only meet their Net Zero targets but
              also create new revenue streams through certified carbon credit
              generation. By bridging sustainability and profitability, we support
              the green transformation of Malaysia&apos;s economy.
            </p>
          </motion.div>
        </div>

        {/* --- BOTTOM IMAGE FULL WIDTH --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/credit.png"
              alt="Carbon Credit"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}













// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function CreditHome() {
//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* LEFT TEXT BLOCK */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Carbon credit <br /> Generation
//           </h1>
//           <h2 className="text-xl font-semibold text-gray-800">
//             Empowering Businesses to Turn Carbon Reduction into Tangible Value
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             At CarbonScan.ai, we specialize in providing advanced solutions for
//             precise measurement, verification, and generation of carbon credits.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             We combine state-of-the-art AI technology with industry best
//             practices to help businesses not only meet their Net Zero targets but
//             also create new revenue streams through certified carbon credit
//             generation. By bridging sustainability and profitability, we support
//             the green transformation of Malaysia&apos;s economy.
//           </p>
//         </motion.div>

//         {/* RIGHT IMAGE BLOCK */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="w-full"
//         >
//           <div className="overflow-hidden rounded-2xl shadow-lg">
//             <Image
//               src="/carbon-credit.jpg"
//               alt="Carbon Credit"
//               width={1200}
//               height={800}
//               className="w-full h-auto object-cover"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
