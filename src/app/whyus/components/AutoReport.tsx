// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AutoReport() {
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
            src="/autoReport.png" // put your uploaded image here in /public
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
            <span className="text-[#8DD95B]">AutoReport</span> - Compliance Made Effortless
          </h2>
          <h5 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
            From raw data to regulator-ready reports.
          </h5>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Carbon Zero&apos;s AutoReport automates sustainability disclosures for frameworks like BURSA, GHG Protocol, CDP, TCFD, and ESG benchmarks. No more manual formatting or endless cross-checks.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Generate audit-ready, investor-friendly reports in minutes — with customizable templates, real-time updates, and one-click exports for boards, regulators, or stakeholders.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With AutoReport, your sustainability reporting is not just faster — it&apos;s smarter, more accurate, and always aligned with evolving global standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
