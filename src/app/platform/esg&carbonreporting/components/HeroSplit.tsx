// app/components/HeroSplit.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


export default function HeroSplit() {
    const { scrollToContact } = useContact();
  
  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Card */}
        <div className="relative bg-[#0F3B33] text-white rounded-2xl shadow-2xl overflow-visible p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <p className="text-sm text-green-200 font-medium mb-3">
                AI-powered ESG workflow
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Make ESG Reporting{" "}
                <span className="text-[#9CE36E]">Effortless</span>{" "}
                and <span className="text-[#9CE36E]">Smart</span>
              </h1>

              <p className="mt-4 text-gray-300 max-w-lg text-base leading-relaxed">
                Carbonscan.ai transforms time-consuming reporting into a smooth,
                transparent, AI-guided ESG workflow.
              </p>

              <motion.a
                // href="#"
                onClick={scrollToContact} 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block cursor-pointer mt-8 bg-[#9CE36E] text-[#07332B] px-6 py-3 rounded-full font-semibold shadow-md"
                aria-label="Explore"
              >
                Explore
              </motion.a>
            </motion.div>

            {/* RIGHT - Image + decorative circles */}
            <div className="relative flex justify-center md:justify-end">
 

              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full md:w-[620px] lg:w-[580px] overflow-hidden"
                style={{ minHeight: 240 }}
              >
                <div className="relative w-full h-120 md:h-72 lg:h-80">
                  {/* Replace /meeting.png with your image */}
                  <Image
                    src="/heroSplit.png"
                    alt="Team reviewing ESG reports"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
