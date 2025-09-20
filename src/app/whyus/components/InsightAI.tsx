// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InsightAI() {
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
            src="/insigndash.png" // put your uploaded image here in /public
            alt="Energy Dashboard"
            width={600}
            height={400}
            className=" w-full h-auto"
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
          <h2 className="text-3xl md:text-[60px] font-bold text-gray-900 leading-snug">
            <span className="text-[#8DD95B]">InsightAI</span> – Smarter Decisions for a Greener Future
          </h2>
          <h5 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
            From data to action.
          </h5>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
           Carbon Zero&apos;s InsightAI turns raw carbon data into powerful insights. Our AI engine analyzes your emissions trends, benchmarks you against industry standards, and highlights high-impact reduction opportunities.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Go beyond reporting — plan for the future. InsightAI helps you simulate scenarios, forecast your carbon footprint, and build data-backed strategies to meet net-zero commitments faster.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With predictive analytics and intelligent recommendations, you can cut costs, reduce emissions, and stay ahead of evolving compliance requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
