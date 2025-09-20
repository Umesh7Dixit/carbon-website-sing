// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SmartEnergySection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/builderdashjjoj.png" // put your uploaded image here in /public
            alt="Energy Dashboard"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl w-full h-auto"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Smart Energy <br /> Assessment and Conservation
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Assess energy consumption patterns with filters like equipment usage,
            time period, sites, and more. Identify ways to reduce cost, monitor
            carbon emissions, improve sustainability, and compare energy
            consumption with similar facilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
