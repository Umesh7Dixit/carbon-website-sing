// "use client";

// // import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "./ContactContext";


// export default function Earth() {

//     const { scrollToContact } = useContact();
  

//   return (
//     <section className="relative  bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
//       <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
// {/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"> */}
        
//         {/* Left Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl"
//         >
//           <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
//             Design For Modern <br />
//              <span className="text-green-800 shimmer-gold">Global Supply Chains </span> <br />
//             <div className="text-sm">RePut power value chains  across Asia, Europe, USA and the western Europe.</div>
//           </div>
//           {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded flex items-center gap-2 transition">
//             Get started →
//           </button> */}

//           <button className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
//             <span className="relative z-10" onClick={scrollToContact} >Get started →</span>
//             {/* Black diagonal line */}
//             <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
//               <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
//             </span>
//           </button>
//         </motion.div>

//         {/* Right Image */}
//  {/* Right Globe (upper half only, doesn’t change section height) */}
 

//  <motion.div
//   initial={{ opacity: 0, x: 50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.6 }}
//   className="
//     pointer-events-none
//     absolute right-0 -bottom-[75%]   /* 👈 bleed below the section */
//     z-30
//     w-[380px] h-[380px] md:w-[480px] md:h-[480px]
//   "
// >
//   <div className="relative w-full h-full rounded-full overflow-hidden">
//     <div className="absolute inset-0 [clip-path:inset(0_0_50%_0)]">
//       <iframe src="/globe2.html" title="3D Globe" className="block w-full h-full border-0" />
//     </div>
//   </div>
// </motion.div>





//       </div>
//     </section>
//   );
// }













"use client";

import { motion } from "framer-motion";
import { useContact } from "./ContactContext";

export default function Earth() {
  const { scrollToContact } = useContact();

  return (
    <section className="relative bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-12 md:py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:max-w-xl text-center md:text-left z-40 relative"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight sm:leading-snug">
              Design For Modern <br className="hidden sm:block" />
              <span className="sm:hidden">Global Supply Chains </span>
              <span className="hidden sm:inline text-green-800 shimmer-gold">Global Supply Chains</span> 
              <br className="hidden sm:block" />
              <div className="text-xs sm:text-sm md:text-sm mt-2 sm:mt-1 text-gray-300 leading-relaxed">
                RePut power value chains across Asia, Europe, USA and the Middle East Geography.
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="relative mt-6 sm:mt-8 bg-green-500 text-black font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group hover:bg-green-400 mx-auto md:mx-0 text-sm sm:text-base"
            >
              <span className="relative z-10">Get started →</span>
              {/* Black diagonal line */}
              <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
              </span>
            </button>
          </motion.div>

          {/* Right Globe - Hidden on Mobile, Full Desktop Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              hidden md:block
              pointer-events-none
              absolute right-0 -bottom-[75%]
              z-30
              w-[380px] h-[380px] md:w-[480px] md:h-[480px]
            "
          >
            <div className="relative mr-30 w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 [clip-path:inset(0_0_50%_0)]">
                <iframe 
                  src="/globe2.html" 
                  title="3D Globe" 
                  className="block w-full h-full border-0 scale-[1.28]" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}