// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NetZero() {
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
          <h2 className="text-3xl md:text-[60px] font-bold text-gray-900 leading-snug">
            A complete solution  <br /> for your <span className="text-[#8DD95B]">net zero future</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Avoid headaches from the get-go by automating your data collection and compliance, adjusted to the precise needs and structure of your business.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Calculate 100% of your greenhouse gas (GHG) emissions across Scope 1, 2 and 3 — with full transparency in your value chain.
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
            src="/netZero.png" // save your uploaded screenshot here in /public
            alt="Drive Energy Efficiency Dashboard"
            width={600}
            height={400}
            className=" w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
