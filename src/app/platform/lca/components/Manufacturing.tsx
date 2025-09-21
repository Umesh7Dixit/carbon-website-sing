"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


export default function Manufacturing() {
    const { scrollToContact } = useContact();
  
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
            <p className="mt-4 text-[#8DD95B] text-lg leading-relaxed">
                MANUFACTURING
            </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Run LCAs and publish EPDs with speed and accuracy
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Carbon Scan.ai offers automated tools to perform life cycle assessments (LCAs), calculate and validate the <br/> environmental performance of your products, and generate environmental product declarations (EPDs). Stay aligned with international standards, showcase verified data, and strengthen your market position with trusted sustainability insights.
          </p>
          <br/>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            // onClick={() => setShowTrial(true)}
            onClick={scrollToContact} 
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            Book a demo
          </button>
          <button
            // onClick={() => setShowDemo(true)}
            onClick={scrollToContact} 
            className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Explore the platform
          </button>
        </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/manufacturingdasg.png" // save your uploaded screenshot here in /public
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
