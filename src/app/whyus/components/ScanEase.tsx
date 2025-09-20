// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ScanEase() {
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
            <span className="text-[#8DD95B]" >ScanEase</span> – Smarter  <br /> Data, Zero Hassle
          </h1>
          <h4 className="text-3xl md:text-[30px] font-semibold w-[110%] text-gray-900 leading-snug">
            Goodbye spreadsheets, hello automation.
          </h4>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            With Carbon Zero&apos;s ScanEase technology, collecting emissions data becomes effortless. Simply upload invoices, utility bills, or scanned documents — our AI instantly converts them into structured, audit- ready data.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            No more manual entry, errors, or chasing files. Whether through ERP integration, bulk uploads, or smart scanning, ScanEase ensures your data is accurate, seamless, and ready for compliance.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Focus on driving sustainability goals, while Carbon Zero handles the heavy lifting in the background.
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
            src="/printer.png" // save your uploaded screenshot here in /public
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
