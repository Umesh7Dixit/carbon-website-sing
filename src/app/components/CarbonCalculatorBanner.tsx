// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useContact } from "./ContactContext";


// export default function CarbonCalculatorBanner() {
//     const { scrollToContact } = useContact();

//   return (
//     <section className="bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Left Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
//             Get a quick and easy <br />
//             calculation of your company’s 
//             <div className="shimmer-gold">Carbon Footprint</div>
//           </h2>
 

//           <button className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
//             <span className="relative z-10" onClick={scrollToContact}>Get started →</span>
//             {/* Black diagonal line */}
//             <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
//               <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
//             </span>
//           </button>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex-shrink-0 absolute right-0 mt-20 flex items-center justify-end"
//         >
//           <Image
//             src="/calc.png" // Replace with your actual calculator image path
//             alt="Calculator"
//             width={450}
//             height={450}
//             className="object-contain "
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }






 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "./ContactContext";

export default function CarbonCalculatorBanner() {
  const { scrollToContact } = useContact();

  return (
    <section className="bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl z-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
            Get a quick and easy calculation of your company’s<div className="shimmer-gold">Carbon Footprint</div>
          </h2>

          <button
            className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group"
            onClick={scrollToContact}
          >
            <span className="relative z-10">Get started →</span>
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
            </span>
          </button>
        </motion.div>

        {/* Right Image - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex flex-shrink-0 absolute right-0 mt-20 items-center justify-end"
        >
          <Image
            src="/calc.png" // Replace with your actual calculator image path
            alt="Calculator"
            width={450}
            height={450}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
