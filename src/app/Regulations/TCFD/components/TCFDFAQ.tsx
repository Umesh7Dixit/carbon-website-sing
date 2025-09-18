"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Climate Reporting Teams & Issuers",
    questions: [
      {
        question: "Who must comply with TCFD reporting?",
        answer:
          "All Singapore-listed companies, including Mainboard and Catalist issuers, must assess and disclose climate-related risks and opportunities.",
      },
      {
        question: "When do the requirements take effect?",
        answer:
          "Large-cap issuers begin TCFD-aligned disclosures from FY2025, with phased adoption for other issuers through FY2027–2028.",
      },
      {
        question: "What standards must be followed?",
        answer:
          "Disclosures should follow TCFD recommendations and global frameworks (IFRS S1 & S2), covering governance, strategy, risk management, metrics, and targets.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be disclosed?",
        answer:
          "Companies must report climate risks, greenhouse gas emissions (Scope 1, 2, and material Scope 3), scenario analysis, targets, and governance structures, with at least three years of comparable data.",
      },
      {
        question: "Is third-party assurance required?",
        answer:
          "Issuers must disclose the assurance status; independent external assurance will be mandatory in stages.",
      },
      {
        question: "Is there a digital tool to simplify compliance?",
        answer:
          "Yes—Carbon-Zero.ai automates climate data collection, maps disclosures to TCFD pillars, and generates assurance-ready reports.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is TCFD reporting critical now?",
        answer:
          "Investors, regulators, and global capital markets demand transparency on climate risks and sustainability performance.",
      },
      {
        question: "How can compliance benefit my business?",
        answer:
          "It enhances access to sustainable financing, strengthens credibility, and improves resilience against regulatory and market pressures.",
      },
      {
        question: "How does Carbon-Zero.ai support reporting?",
        answer:
          "We streamline climate data collection, map operations to TCFD standards, and produce timely, compliance-ready reports.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Frequent <br /> Questions
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            For more questions, please head{" "}
            <a href="#" className="text-green-600 underline">
              here
            </a>
            .
          </p>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2">
          {faqData.map((section, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="mb-6 border-b pb-3">
                  {/* Category Header */}
                  <Disclosure.Button className="flex w-full justify-between items-center text-left text-lg font-semibold text-gray-800 py-2">
                    {section.category}
                    {open ? (
                      <MinusIcon className="h-5 w-5 text-green-600" />
                    ) : (
                      <PlusIcon className="h-5 w-5 text-green-600" />
                    )}
                  </Disclosure.Button>

                  {/* Questions inside category */}
                  <Disclosure.Panel className="mt-3 space-y-3">
                    {section.questions.map((item, qIdx) => (
                      <Disclosure key={qIdx}>
                        {({ open }) => (
                          <div className="border rounded-lg">
                            <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-50">
                              {item.question}
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-green-600`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-4 text-gray-600 text-sm">
                              {item.answer}
                            </Disclosure.Panel>
                          </div>
                        )}
                      </Disclosure>
                    ))}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
