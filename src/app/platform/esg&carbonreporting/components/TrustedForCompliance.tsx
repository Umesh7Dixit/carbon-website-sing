// app/components/TrustedForCompliance.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  isBigNumber?: boolean;
};

const FEATURES: Feature[] = [
  {
    id: "1",
    title: "50+",
    subtitle:
      "Malaysian and regional companies using digital ESG reporting solutions",
    isBigNumber: true,
  },
  {
    id: "2",
    title: "AI-assisted synthesis",
    subtitle: "AI-assisted synthesis across Bursa, GRI, ISSB, and TCFD frameworks",
    icon: "/i.png",
  },
  {
    id: "3",
    title: "Real-time tracking",
    subtitle: "Real-time tracking of section- and question-wise completion",
    icon: "/svg.png",
  },
  {
    id: "4",
    title: "Audit-ready logs",
    subtitle: "Audit-ready logs with role-based approvals and version history",
    icon: "/efw.png",
  },
  {
    id: "5",
    title: "Auto-generated reports",
    subtitle: "Auto-generated reports in Bursa, GRI, ISSB, and IFRS formats",
    icon: "/nk.png",
  },
];

export default function TrustedForCompliance(){
  return (
    <section className="w-full bg-[#0F3B33] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top heading + short paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight"
          >
            Trusted for{" "}
            <span className="text-[#9CE36E]">Compliance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-sm md:text-base text-gray-200 max-w-xl"
          >
            From Bursa Malaysia to global ESG frameworks,{" "}
            <span className="text-[#9CE36E] font-semibold">Carbonscan.ai</span>{" "}
            helps companies reduce disclosure time, improve quality, and stay
            fully audit-ready.
          </motion.p>
        </div>

        {/* Features row with separators */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="w-full"
        >
          <div className="flex items-stretch justify-center gap-0 flex-wrap">
            {FEATURES.map((f, idx) => (
              <React.Fragment key={f.id}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ translateY: -6, scale: 1.02 }}
                  className="flex-1 basis-0 min-w-[160px] max-w-[320px] px-6 py-6 flex flex-col items-center text-center"
                >
                  {/* Top icon / number */}
                  {f.isBigNumber ? (
                    <div className="text-3xl md:text-4xl font-extrabold text-[#9CE36E] mb-3">
                      {f.title}
                    </div>
                  ) : (
                    <div className="w-12 h-12 relative mb-3">
                      <Image
                        src={f.icon || "/icons/default.png"}
                        alt={f.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* Title */}
                  {!f.isBigNumber && (
                    <div className="font-semibold text-sm md:text-base text-gray-100 mb-2">
                      {f.title}
                    </div>
                  )}

                  {/* Subtitle */}
                  <div className="text-[13px] md:text-sm text-gray-300 leading-snug">
                    {f.subtitle}
                  </div>
                </motion.div>

                {/* Vertical separator */}
                {idx < FEATURES.length - 1 && (
                  <div className="hidden md:block w-px bg-white/10 self-stretch" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
