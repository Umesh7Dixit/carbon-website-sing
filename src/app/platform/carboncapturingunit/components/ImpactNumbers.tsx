// app/components/ImpactNumbers.tsx
"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ImpactNumbers() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation runs once
    threshold: 0.3, // 30% visible
  });

  return (
    <section
      ref={ref}
      className="relative bg-gray-100 py-16 px-6 sm:px-12"
      style={{
        backgroundImage: "url('/impact-bg.png')", // <-- replace with your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our impact by numbers
          </h2>
          <p className="text-gray-700 text-lg">
            Carbon Scan.ai is helping businesses simplify carbon accounting with
            real-time tracking, automated reporting, and compliance-ready
            insights.
          </p>
        </motion.div>

        {/* Right Numbers */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10 text-gray-900 font-bold"
        >
          <div>
            <div className="text-4xl md:text-5xl text-[#123232]">
              {inView && <CountUp end={12450} duration={2.5} separator="," />}
            </div>
            <p className="text-gray-600 text-lg">
              CO₂ Data Points Processed Today
            </p>
          </div>

          <div>
            <div className="text-4xl md:text-5xl text-[#123232]">
              {inView && <CountUp end={3275890} duration={3} separator="," />}
            </div>
            <p className="text-gray-600 text-lg">
              CO₂ Data Points Tracked Since 2020
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
