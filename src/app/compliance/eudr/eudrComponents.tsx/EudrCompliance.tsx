
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


export default function EudrCompliance() {
      const { scrollToContact } = useContact(); 
  
  return (
    <section className="w-full bg-green-50 flex items-center justify-center py-10 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            // src="/brsrlaptop.png" // place your uploaded image inside public folder
            src="/eudrlaptop.png" // place your uploaded image inside public folder
            alt="BRSR Compliance Demo"
            width={600}
            height={400}
            className=" scale-[1.20]"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-[48px] leading-[60px] md:text-[48px] font-bold text-gray-900">
            Simplify Your EUDR Compliance Journey
          </h2>

          <p className="mt-4  leading-snug text-gray-700 text-base md:text-[18px] leading-relaxed font-bold">
           Meeting the EU Deforestation Regulation (EUDR) requirements doesn’t have to be a complex, resource-heavy process. RePut automates the entire compliance cycle — from supplier data collection and geolocation mapping to risk assessment and due diligence statement generation.
Our platform integrates seamlessly with your existing procurement, ERP, and supply chain systems to capture accurate commodity and origin data in real time. Built-in templates aligned with EUDR indicators ensure every record is complete, compliant, and audit-ready.
Stay compliant, protect EU market access, and free your teams from manual reporting tasks. With RePut, you can transform EUDR compliance into a streamlined, competitive advantage.
          </p>

          {/* <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            Our platform connects directly with your existing ERP, HR, and environmental
            monitoring systems to pull accurate ESG metrics in real time. Built-in templates
            aligned with BRSR indicators ensure every disclosure is complete, consistent, 
            and audit-ready. Stay compliant, improve data accuracy, and free up your teams
            to focus on ESG strategy rather than chasing spreadsheets. 
          </p>

          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            With RePut, you can transform BRSR compliance into a competitive advantage.
          </p> */}

          {/* Button */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
          >
            Book for Demo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
