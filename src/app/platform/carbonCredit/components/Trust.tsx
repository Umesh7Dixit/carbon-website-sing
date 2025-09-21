// app/page.tsx (Next.js 13+ App Router) 
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 


export default function Trust() {
    const { scrollToContact } = useContact();
  
  return (
    <div className="min-h-screen bg-[#123232] flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            CarbonScan.ai – Your Trusted Carbon Tokenization Platform
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Our platform transforms verified carbon units (VCU) into secure,
            tradable digital assets using blockchain technology. We combine
            advanced analytics, full transparency, and global compliance to help
            Malaysian businesses meet ESG targets and unlock the value of carbon
            credits.
          </p>
          <p className="text-base md:text-lg text-gray-200">
            Beyond Carbon Offsets, CarbonScan.ai enables tokenization of
            Renewable Energy Certificates (REC), Guarantees of Origin (GO), and
            Biodiversity Credits — all validated by international standards.
          </p>
          <p className="text-base md:text-lg text-gray-200">
            Empower your sustainability journey with CarbonScan.ai.
          </p>
          <button onClick={scrollToContact} className="px-6 py-3 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-full shadow-lg transition">
            Explore
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            // whileHover={{ scale: 1.05 }}
            className="bg-whiteoverflow-hidden"
          >
            <Image
              src="/acaji.png" // <-- replace with your image
              alt="Carbon Credits"
              width={400}
              height={600}
              className="w-full h-106 object-contain"
            />
            {/* <div className="p-3 text-center font-medium">Carbon Credits</div> */}
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden"
          >
            <Image
              src="/sdnojo.png" // <-- replace with your image
              alt="Renewable Energy Certificates"
              width={400}
              height={300}
              className="w-full h-106 object-contain"
            />
            {/* <div className="p-3 text-center font-medium">
              Renewable Energy Certificates
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
