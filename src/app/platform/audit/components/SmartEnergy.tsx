// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SmartEnergy() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[60px] font-bold text-[#1A3A3A] leading-snug">
            Smart Energy Assessment and  <br /> Conservation
          </h2>
          <p className="mt-4 text-[#1A3A3A] text-[20px] text-lg leading-relaxed">
            Assess energy consumption patterns with filters like equipment usage, time period, sites, and more. Identify ways to reduce cost, monitor carbon emissions, improve sustainability, and compare energy consumption with similar facilities.
          </p>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/smartEnergy.png" // save your uploaded screenshot here in /public
            alt="Drive Energy Efficiency Dashboard"
            width={600}
            height={400}
            className=" w-full h-auto rounded-2xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
