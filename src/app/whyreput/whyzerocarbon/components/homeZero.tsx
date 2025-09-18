"use client";

// import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeZeroCarbon() {
  return (
    <section className="relative w-full h-[90vh] bg-gray-50">
      {/* Background Image */}
      {/* <Image
        src="/newWhyZero.png"
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
            How RePut Zero Carbon make me future ready?
          </h1>

          <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
            With <span className="font-bold"> blockchain-backed transparency, real-time insights, </span> and automated reporting, RePut provides a secure, scalable solution to track and manage sustainability efforts, making it easy for businesses to achieve their Net Zero goals.
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
                src="/carbonwhy.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-contain"
              />
      </div>

      </div>
    </section>
  );
}










// "use client";

// // import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HomeZeroCarbon() {
//   return (
//     <section className="relative w-full h-[90vh] bg-gray-50">
//       {/* Background Image */}
//       {/* <Image
//         src="/newWhyZero.png"
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
//             How RePut Zero Carbon make me future ready?
//           </h1>

//           <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-[22px] text-[#29442C] max-w-full md:max-w-[607px]">
//             With <span className="font-bold"> blockchain-backed transparency, real-time insights, </span> and automated reporting, RePut provides a secure, scalable solution to track and manage sustainability efforts, making it easy for businesses to achieve their Net Zero goals.
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

//       <div className="w-[100vh] h-[100vh] top-5 left-20 bottom-40 md:h-[100vh] lg:h-[100vh] relative">
//               <video
//                 src="/carbonwhy.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute  w-full h-full object-contain"
//               />
//       </div>

//       </div>
//     </section>
//   );
// }
