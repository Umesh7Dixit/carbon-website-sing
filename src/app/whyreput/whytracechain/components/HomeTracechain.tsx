// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HomeTracechain() {
//   return (
//     <section className="relative w-full h-[90vh]">
//       {/* Background Image */}
//       <Image
//         src="/whyhomet1.png"
//         alt="Hero Banner"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-none"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20">
//         <motion.div
//           className="text-white p-1 rounded-xl max-w-full md:max-w-lg"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-[56px] sm:text-5xl lg:text-[56px] text-[#29442C] w-[565px] font-bold mb-4 leading-tight">
//             Why Choose Reput TraceChain: 
//           </h1>

//           <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
//             Trust, Transparency, and Control in Every Transaction
//           </p>

//           {/* Button (optional) */}
//           <motion.button
//             className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact us →
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }












//responsive












"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeTracechain() {
  return (
    <section className="relative w-full h-[90vh] sm:h-[80vh]">
      {/* Background Image */}
      <div className="hidden sm:block" >
      <Image
        src="/whyhomet1.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20">
        <motion.div
          className="text-white p-1 rounded-xl max-w-full md:max-w-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] text-[#29442C] font-bold mb-4 leading-tight w-full md:w-[565px]">
            Why Choose Reput TraceChain:
          </h1>

          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
            Trust, Transparency, and Control in Every Transaction
          </p>

          {/* Button */}
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}







