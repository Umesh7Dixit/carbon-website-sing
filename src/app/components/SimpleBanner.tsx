// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "./ContactContext";


// export default function SimpleBanner() {

//     const { scrollToContact } = useContact();
  

//   return (
//     <div className="relative w-full h-[300px] md:h-[400px]  overflow-hidden shadow-lg bg-white ">
//       {/* Background Image */}
//       <div className="absolute inset-0 rounded-3xl overflow-hidden">
//       <Image
//         src="/lines.png" // change to your image path
//         alt="Banner Image"
//         layout="fill"
//         objectFit="cover"
//         className="hover:scale-105 transition-transform duration-500 mb-10 max-w-7xl mx-auto px-4 py-12"
//         priority
//       />
//       </div>

//       {/* Dark Overlay for better text visibility */}
//       <div className="absolute inset-0  mb-10 max-w-7xl mx-auto px-4 py-12 rounded-3xl"></div>

//       {/* Text Content */}
//       <div className="absolute inset-0 flex items-center  mb-10 max-w-7xl mx-auto px-4 py-12">
//         <div className="text-left  text-white p-8 ">
//           <motion.h2
//             className="text-3xl text-[34px] font-bold rounded-3xl text-[#6EED88]"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Ready to <span className="text-[#6EED88]">Redefine</span>
//           </motion.h2>

//           <motion.h3
//             className="text-2xl text-[34px] font-semibold mt-2 shimmer-gold"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             Supply Chain Transparency?
//           </motion.h3>

//           <motion.p
//             className="text-gray-300 mt-4 text-[18px]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Let s move from assumptions to action
//           </motion.p>

//           <motion.button
//             className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg mt-6 w-fit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={scrollToContact}
//           >
//             Connect with our team →
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }











"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "./ContactContext"; 

export default function SimpleBanner() {
  const { scrollToContact } = useContact();

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[400px] overflow-hidden shadow-lg bg-white rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/lines.png"
          alt="Banner Image"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* Dark Overlay (optional for text visibility) */}
      <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-12">
        <div className="text-left text-white max-w-xl">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6EED88]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to <span className="text-[#6EED88]">Redefine</span>
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Supply Chain Transparency?
          </motion.h3>

          <motion.p
            className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Let’s move from assumptions to action
          </motion.p>

          <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-4 sm:mt-6 w-fit text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
          >
            Connect with our team →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
