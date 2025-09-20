// app/components/CarbonFeatures.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Carbon Offset Tokenization Process",
    subtitle: "CarbonScan Tokenization Workflow",
    description: `At CarbonScan.ai, we simplify carbon credit tokenization with AI-driven verification and blockchain security.`,
    points: [
      "Project Screening: Every offset project is vetted against leading standards like Verra, Gold Standard, and ACR to ensure real impact.",
      "Secure Tokenization: Verified credits become tamper-proof digital tokens on a decentralized blockchain, preventing fraud and double-counting.",
      "Instant Smart Contracts: Automated contracts handle verification, compliance, and settlement in real time—no manual delays.",
      "Decentralized Compliance: AI and blockchain enable automated validation, ensuring credits meet evolving regulatory requirements.",
    ],
    img: "/sdoao.png", // replace with your image path
    imgAlt: "Carbon Credit Process",
  },
  {
    title: "Custom ESG Solutions for Enterprises",
    subtitle: "",
    description: `We deliver tailored carbon offset and ESG solutions to help enterprises meet Scope 1, 2, and 3 compliance goals:`,
    points: [
      "Flexible Tokenization: Seamlessly integrate tokenized carbon credits into ESG strategies to track, manage, and trade verified credits with ease.",
      "Net-Zero Partnerships: Collaborate with industries pursuing net-zero goals through a scalable, blockchain-powered platform that ensures global liquidity and transparency.",
    ],
    img: "/building.png", // replace with your image path
    imgAlt: "Custom ESG Solutions",
  },
  {
    title: "AI-Driven Verification",
    subtitle: "",
    description: `Our platform combines blockchain with AI analytics for unmatched accuracy and trust in carbon markets:`,
    points: [
      "Verified Credits: AI monitors, verifies, and records every carbon project to eliminate over-crediting and inefficiencies.",
      "Instant Insights: Real-time analytics provide clear visibility into the carbon impact of investments, improving transparency and decision-making.",
    ],
    img: "/AIdriven.png", // replace with your image path
    imgAlt: "AI Verification",
  },
];

export default function CarbonFeatures() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" overflow-hidden "
            >
              <Image
                src={feature.img}
                alt={feature.imgAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {feature.title}
              </h2>
              {feature.subtitle && (
                <h3 className="text-lg font-semibold text-green-600">
                  {feature.subtitle}
                </h3>
              )}
              <p className="text-gray-700">{feature.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
