"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Adaptive Reporting work?",
    answer:
      "Adaptive Reporting uses AI-driven insights to analyze energy data and generate customized reports tailored to your business needs.",
  },
  {
    question: "Can I customize my sustainability reports?",
    answer:
      "Yes, you can fully customize your sustainability reports with metrics, visuals, and templates that align with your organization’s goals.",
  },
  {
    question: "Does this replace manual reporting processes?",
    answer:
      "Absolutely. The platform automates reporting workflows, reducing manual work and eliminating human errors.",
  },
  {
    question: "Is this platform suitable for global enterprises?",
    answer:
      "Yes, it scales to support global operations with multilingual capabilities and region-specific compliance.",
  },
  {
    question: "How secure are these reports?",
    answer:
      "All reports are encrypted end-to-end with enterprise-grade security to protect sensitive business data.",
  },
  {
    question: "Can I generate reports on-demand?",
    answer:
      "Yes, reports can be generated instantly on-demand, ensuring real-time insights for better decision-making.",
  },
];

export default function FAQSection() {
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
