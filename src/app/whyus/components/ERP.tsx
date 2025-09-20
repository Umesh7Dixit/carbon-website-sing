// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ERP() {
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
            Plug & Play<span className="text-[#8DD95B]" >ERP</span>    <br /> Integration
          </h1>
          <h4 className="text-3xl md:text-[30px] font-semibold w-[110%] text-gray-900 leading-snug">
            Seamless sustainability within your existing workflows.
          </h4>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Carbon Zero connects effortlessly with leading ERP platforms (SAP, Oracle, Microsoft Dynamics, Tally, and more) to automatically fetch energy, procurement, logistics, and financial data.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            This eliminates manual uploads, reduces errors, and ensures that your carbon accounting and reporting run in sync with your core business operations.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With real-time synchronization, your sustainability data is always accurate, auditable, and ready for compliance or internal reviews — without disrupting daily business processes.
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
            src="/erpdash.png" // save your uploaded screenshot here in /public
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
