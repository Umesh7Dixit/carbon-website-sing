"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a carbon credit?",
    answer:
      "A carbon credit is a tradable certificate representing the removal or avoidance of one metric ton of carbon dioxide (CO₂) or an equivalent amount of other greenhouse gases. Companies use carbon credits to offset emissions they cannot reduce directly.",
  },
  {
    question: "How are carbon credits verified?",
    answer:
      "Carbon credits are verified by independent third-party organizations under recognized standards such as Verra (VCS), Gold Standard, or the American Carbon Registry (ACR). These verifiers ensure that the emission reduction or removal is real, measurable, permanent, and additional.",
  },
  {
    question: "Why do companies buy carbon credits?",
    answer:
      "Companies buy carbon credits to compensate for emissions they cannot eliminate within their operations. This helps them meet sustainability goals, comply with regulations, achieve net-zero targets, and demonstrate commitment to climate responsibility.",
  },
  {
    question: "What’s the difference between compliance and voluntary carbon markets?",
    answer:
      "Compliance carbon markets are regulated by governments and require companies to offset emissions to meet legal obligations (e.g., EU ETS). Voluntary carbon markets, on the other hand, allow businesses and individuals to purchase credits voluntarily to meet ESG targets or enhance their sustainability profile.",
  },
  {
    question: "How does blockchain help with carbon credits?",
    answer:
      "Blockchain provides transparency, traceability, and security in carbon credit transactions. Tokenizing credits on a blockchain prevents double-counting, ensures proof of ownership, and allows seamless trading in a secure, decentralized system.",
  },
  {
    question: "Are all carbon credits equal in quality?",
    answer:
      "No, carbon credits vary in quality based on the project type, verification standard, permanence, and additional benefits such as biodiversity protection or community development. High-quality credits come from projects that follow rigorous standards and deliver measurable climate impact.",
  },
  {
    question: "Can individuals buy carbon credits?",
    answer:
      "Yes, individuals can buy carbon credits through online marketplaces, sustainability platforms, and tokenized exchanges. This allows people to offset personal emissions from travel, energy use, or lifestyle activities.",
  },
  {
    question: "How do tokenized carbon credits work?",
    answer:
      "Tokenized carbon credits are digital representations of verified credits on a blockchain. Each token corresponds to a specific carbon credit and can be traded securely and transparently, making carbon markets more liquid, accessible, and efficient.",
  },
];



export default function CarbonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequent <br /> Questions
          </h2>
          <p className="mt-4 text-gray-600">
            For more questions, please head{" "}
            <a href="#" className="text-green-600 underline">
              here
            </a>
            .
          </p>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 text-gray-600 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
