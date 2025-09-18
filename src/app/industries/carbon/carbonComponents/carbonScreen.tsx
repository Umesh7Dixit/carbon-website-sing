

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CarbonScreen() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/cs.png" // replace with your hero image path
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-none"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center px-10 md:px-20">
        <motion.div
          className="  text-white p-1 rounded-xl max-w-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Working Together For <span className="text-white">Maximum Impact</span>
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Empower your textile business with end-to-end product traceability
            and sustainability reporting.
          </p>
           
        </motion.div>
      </div>
    </section>
  );
}
