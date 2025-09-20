"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Adaptive Reporting work?",
    answer:
      "Adaptive Reporting automatically collects, validates and maps your ESG and carbon data to frameworks like Bursa Malaysia, EU, TCFD and others. It continuously updates in real time, keeps full traceability of each data point, and produces audit-ready, regulator-compliant reports.",
  },
  {
    question: "Can I customize my sustainability reports?",
    answer:
      "Yes. You can fully customize templates, data mappings and output formats to match frameworks such as GRI, ISSB, TCFD and regional standards. This lets you maintain one source of truth and generate framework-specific reports without re-entering data.",
  },
  {
    question: "Does this replace manual reporting processes?",
    answer:
      "The platform drastically reduces manual effort by automating data ingestion, validation, unit conversions and anomaly checks. Built-in approval workflows and data lineage ensure every change is tracked, so you retain oversight and auditability.",
  },
  {
    question: "Is this platform suitable for global enterprises?",
    answer:
      "Yes. Carbonscan.ai is designed to scale for public-listed companies, multinational enterprises, utilities and consultants. It supports multi-site rollups, enterprise integrations and flexible deployment options while remaining accessible for smaller organisations.",
  },
  {
    question: "How secure are these reports?",
    answer:
      "All data is encrypted in transit (TLS) and at rest. Role-based access controls, single-sign-on, detailed audit logs and enterprise deployment options (VPC, dedicated tenancy) ensure corporate-grade security and compliance with regular security assessments.",
  },
  {
    question: "Can I generate reports on-demand?",
    answer:
      "Yes. Reports can be generated instantly at any time, pulling the latest validated data. You can export them in multiple formats for internal review, investor updates or regulator submission without waiting for scheduled reporting cycles.",
  },
];


export default function FQQCompliance() {
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
