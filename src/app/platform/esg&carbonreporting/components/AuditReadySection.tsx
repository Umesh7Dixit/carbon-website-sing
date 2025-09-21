// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useContact } from "../../../components/ContactContext"; 


export default function AuditReadySection() {
    const { scrollToContact } = useContact();

  return (
    <section className="h-[90vh] bg-[#0F3B33] text-white py-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium text-green-300 uppercase">
            AI-Powered ESG & Carbon Reporting for Malaysia
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Be audit-ready with ease.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Carbonscan.ai helps you prepare sustainability disclosures aligned
            with Bursa Malaysia’s Listing Requirements, GRI, ISSB, and TCFD.
          </p>

          <ul className="space-y-3">
            {[
              "Automated data capture",
              "Framework-aligned reporting",
              "Carbon accounting & audit-ready outputs",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle className="text-green-400 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <motion.a
            // href="#"
            onClick={scrollToContact} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-green-400 text-[#0F3B33] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-300 transition"
          >
            Generate Bursa Reports →
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/esghome.png" // save your screenshot in /public
            alt="Audit Ready Dashboard"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
