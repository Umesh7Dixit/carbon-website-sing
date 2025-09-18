// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// // import map from "../../../public/map.png"
// // import map from "../../../public/eudrnew.png"
// import { useContact } from "./ContactContext";


// export default function Eudr() { 

//       const { scrollToContact } = useContact();
  

//   return (
//     <section className="relative  bg-gradient-to-r from-[#1B3323] to-[#0B1E13] py-16 px-6 md:px-16">
//       <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Left Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl"
//         >
//           {/* <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
//             Curious About  EUDR, <br />
//              <span className="text-green-800">BRSR Core <span className="text-white">or</span> CSRD? </span> <br />
//             <div className="text-sm">Check your compliance readiness in seconds.</div>
//           </div> */}
           

//             <div className="text-3xl md:text-4xl font-semibold text-white leading-snug">
//   Curious About EUDR, <br />
//   <span className="shimmer-gold">BRSR Core</span> 
//   <span className="text-white"> or </span> 
//   <span className="shimmer-gold">CSRD</span> <br />
//   <div className="text-sm">Check your compliance readiness in seconds.</div>
// </div>


//           <button onClick={scrollToContact} className="relative mt-6 bg-green-500 text-black font-medium px-6 py-3 rounded flex items-center gap-2 overflow-hidden transition-all duration-300 group">
//             <span className="relative z-10">Contact Us →</span>
//             <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
//               <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
//             </span>
//           </button>
//         </motion.div>

 

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
//   <div className="relative w-full h-full overflow-hidden bottom-18 right-8">
//       <Image src="/eudrnew.png" width={800} height={800} alt="map" />
//       {/* <Image src={map} fill alt="map" /> */}
//   </div>
// </motion.div>





//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContact } from "./ContactContext";

export default function Eudr() { 
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
              Curious About EUDR, <br className="hidden sm:block" />
              <span className="shimmer-gold">BRSR Core</span>
              <span className="text-white"> or </span>
              <span className="shimmer-gold">CSRD</span>
              <span className="sm:hidden">?</span>
              <br className="hidden sm:block" />
              <div className="text-xs sm:text-sm md:text-sm mt-2 sm:mt-1 text-gray-300 leading-relaxed">
                Check your compliance readiness in seconds.
              </div>
            </div>

            <button 
              onClick={scrollToContact} 
              className="relative mt-6 sm:mt-8 bg-green-500 text-black font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group hover:bg-green-400 mx-auto md:mx-0 text-sm sm:text-base"
            >
              <span className="relative z-10">Contact Us →</span>
              <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute w-[2px] h-full bg-black rotate-[30deg] left-3 transition-all duration-300 group-hover:opacity-0"></span>
              </span>
            </button>
          </motion.div>

          {/* Right Image - Hidden on Mobile, Full Desktop Experience */}
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
            <div className="relative w-full h-full overflow-hidden bottom-18 right-20">
              <Image 
                // src="/eudrnew.png" 
                src="/djeio.png" 
                width={800} 
                height={800} 
                alt="EUDR compliance map"
                className="object-contain scale-[1.2]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}