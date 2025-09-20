"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Carbonscan.ai support Bursa Malaysia ESG reporting?",
    answer:
      "Carbonscan.ai includes pre-built Bursa Malaysia templates and mapping logic so your collected data automatically populates the fields Bursa requires. It validates disclosures against Bursa rules, attaches evidence (source files, meter images), and produces audit-ready exports in the format needed for submission. The platform also keeps full traceability so each reported value can be traced back to its source and approval workflow.",
  },
  {
    question: "Can Carbonscan.ai be used for other ESG frameworks?",
    answer:
      "Yes — the platform supports multiple frameworks (for example GRI, ISSB, TCFD and other regional standards) via configurable mappings and templates. You maintain a single source of truth for your data and then generate framework-specific views/reports, so one dataset can be published across different standards without duplicate data entry.",
  },
  {
    question: "How does the platform ensure data accuracy?",
    answer:
      "Data accuracy is ensured through a combination of automated and manual controls: ingestion connectors (meters, ERP, CSV) with automatic unit conversion and validation rules, anomaly detection and flagging, reconciliation checks, and mandatory reviewer/approval workflows. Every change is logged (data lineage) so auditors can see who changed what, when and why.",
  },
  {
    question: "Is Carbonscan.ai suitable only for public listed companies?",
    answer:
      "No — Carbonscan.ai is designed to scale. It serves public-listed companies, private enterprises, utilities, and consultants. Modular features and flexible deployment/pricing let smaller organisations adopt core capabilities while larger organisations enable advanced governance, multi-site rollups, and enterprise integrations.",
  },
  {
    question: "How secure is my ESG and emissions data?",
    answer:
      "Security is built-in: data is encrypted in transit (TLS) and at rest, role-based access controls and single-sign-on options are supported, and detailed access/audit logs are available. The platform can be deployed with enterprise options (VPC, dedicated tenancy or SSO integrations) and undergoes regular security assessments to meet typical corporate security requirements.",
  },
];


export default function FAQESG() {
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
