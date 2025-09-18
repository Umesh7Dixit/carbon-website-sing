"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HomeCircle() {


      const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);


  return (
    <section className="relative w-full h-[100vh] bg-[#b4ccbd]">
      {/* Background Image */}
      {/* <Image
        // src="/ses.png"
        src="/refhui.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      /> */}
            


      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20 flex-col sm:flex-row">
        <motion.div
          className="text-white p-1 rounded-xl max-w-full md:max-w-lg mb-8 sm:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[32px] sm:text-5xl lg:text-[56px] text-[#29442C] w-full sm:w-[565px] font-bold mb-4 leading-tight">
            Why Choose Reput Circle for EPR?
          </h1>

          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
             Because compliance is just the start—Reput Circle turns EPR into a competitive advantage.
          </p>

          {/* Button (optional) */}
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us →
          </motion.button>
        </motion.div>

            <div className="w-full h-[50vh] sm:w-[100vh] sm:h-[100vh] top-0 sm:top-5 left-0 sm:left-20 bottom-0 sm:bottom-40 md:h-[100vh] lg:h-[100vh] relative">
              <video
                ref={videoRef}
                src="/whyCircular.mp4"
                autoPlay
                muted
                loop
                playsInline
                onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.playbackRate = 0.5;
            }}
                className="absolute w-full h-full object-contain"
              />
            </div>
      </div>

      
    </section>
  );
}





// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function HomeCircle() {


//       const videoRef = useRef<HTMLVideoElement | null>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.5; 
//     }
//   }, []);


//   return (
//     <section className="relative w-full h-[100vh] bg-[#b4ccbd]">
//       {/* Background Image */}
//       {/* <Image
//         // src="/ses.png"
//         src="/refhui.png"
//         alt="Hero Banner"
//         fill
//         priority
//         className="object-cover"
//       /> */}
            


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
//             Why Choose Reput Circle for EPR?
//           </h1>

//           <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
//              Because compliance is just the start—Reput Circle turns EPR into a competitive advantage.
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

//             <div className="w-[100vh] h-[100vh] top-5 left-20 bottom-40 md:h-[100vh] lg:h-[100vh] relative">
//               <video
//                 ref={videoRef}
//                 src="/whyCircular.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 onLoadedMetadata={() => {
//               if (videoRef.current) videoRef.current.playbackRate = 0.5;
//             }}
//                 className="absolute  w-full h-full object-contain"
//               />
//             </div>
//       </div>

      
//     </section>
//   );
// }




