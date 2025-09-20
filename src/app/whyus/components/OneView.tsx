// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OneView() {
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
            src="/inoeview.png" // put your uploaded image here in /public
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
            <span className="text-[#8DD95B]">OneView</span> – You Integrated Carbon Dashboard
          </h2>
          <h5 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
            All your climate data. One powerful view.
          </h5>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Carbon Zero&apos;s OneView dashboard unifies carbon accounting, AI- driven insights, and prescriptive analytics into a single, easy-to-use interface.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            From real-time emission tracking to regulatory compliance status, offset progress, and future reduction targets — everything is visualized, connected, and actionable.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With customizable reports, executive summaries, and drill-down analytics, OneView empowers both sustainability teams and leadership to make faster, smarter, and transparent climate decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
