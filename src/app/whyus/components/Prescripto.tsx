// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Prescripto() {
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
          <h1 className="text-3xl md:text-[60px] font-bold text-gray-900 leading-snug">
            <span className="text-[#8DD95B]" >Prescripto</span> – Turning   <br /> Insights into Action
          </h1>
          <h4 className="text-3xl md:text-[30px] font-semibold w-[110%] text-gray-900 leading-snug">
            From &quot;<span className="text-[#8DD95B]" >what to do</span>&quot; to &quot;<span className="text-[#8DD95B]" >how to do it.</span>&quot;
          </h4>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Carbon Zero&apos;s Prescripto doesn&apos;t just tell you where emissions come from — it prescribes clear, step-by-step actions to cut them.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our prescriptive analytics engine uses AI and industry best practices to recommend specific interventions, whether it&apos;s switching to cleaner energy sources, optimizing supply chains, or adopting greener operations.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With prioritized action plans, ROI analysis, and continuous tracking, you&apos;ll know exactly what to change, when to change, and how it impacts your bottom line — ensuring your path to Net Zero is not only possible but profitable.
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
            src="/prescr.png" // save your uploaded screenshot here in /public
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
