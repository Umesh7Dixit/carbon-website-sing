// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


export default function Database() {
    const { scrollToContact } = useContact();
  
  return (
    <section className="h-[60vh] flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/jdiowji.png" // put your uploaded image here in /public
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
            <p className="mt-4 text-[#8DD95B] text-lg leading-relaxed">
                  DATABASE
            </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Built-in emission factor databases for smarter assessments
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Access a wide library of 20+ trusted LCI/LCIA emission factor databases.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Choose from global, regional, and sector-specific datasets, covering both spend-based and activity-based factors.          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Build custom databases by adding your own emission factors for fuels, logistics, products, services, and more.
          </p>

          
        <br/>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            // onClick={() => setShowTrial(true)}
            onClick={scrollToContact} 
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            Book a demo
          </button>
          {/* <button
            // onClick={() => setShowDemo(true)}
            className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Explore the platform
          </button> */}
        </div>
        </motion.div>

      </div>
    </section>
  );
}
