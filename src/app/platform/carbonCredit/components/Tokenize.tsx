"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tokenize() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Carbon Credits We Tokenize
          </h1>
          <p className="text-gray-700">
            CarbonScan.ai tokenizes Verified Carbon Units (VCU), Renewable
            Energy Certificates (REC), and Afforestation &amp; Reforestation
            credits (AR), ensuring transparency, reliability, and easy trading
            for Malaysian businesses.
          </p>
        </motion.div>

        {/* SECTION 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Carbon Dioxide Removal (CDR) Solutions
            </h2>
            <h3 className="text-lg font-semibold text-gray-800">
              Nature-Based Solutions
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Biochar: Captures carbon and creates high-value credits.</li>
              <li>
                REDD/REDD+: Prevents deforestation and degradation.
              </li>
              <li>
                ARR: Tree planting and ecosystem restoration.
              </li>
              <li>
                Blue Carbon: Conserves mangroves and seagrasses.
              </li>
              <li>
                Ocean Methods: Enhance carbon capture via seawater alkalinity.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              Technology-Based Solutions
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                DACCS: Captures CO₂ from air, stores underground or converts to
                fuels.
              </li>
              <li>
                BECCS: Converts biomass energy into low-carbon solutions.
              </li>
            </ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden">
              <Image
                src="/indus.png"
                alt="Factory image"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden">
              <Image
                src="/solar.png"
                alt="Solar panel and wind turbine"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              GHG Emission Reduction &amp; Avoidance (CER &amp; VER)
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Cookstove Credits: Promote efficient cookstoves that reduce
                biomass use and lower greenhouse gas emissions.
              </li>
              <li>
                Renewable Energy Credits (REC): Support solar, wind, biofuels,
                and geothermal energy to cut reliance on fossil fuels.
              </li>
              <li>
                Methane Capture Credits: Capture methane from landfills,
                livestock, and industrial sources to prevent emissions and
                generate digital carbon tokens.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
