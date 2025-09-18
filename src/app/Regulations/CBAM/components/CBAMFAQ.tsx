"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Issuers & Reporting Teams",
    questions: [
      {
        question: "Who must comply with CBAM?",
        answer:
          "Companies exporting carbon-intensive goods (e.g., aluminum, steel, cement, fertilizers, electricity, hydrogen) to the EU must submit CBAM reports",
      },
      {
        question: "When do CBAM requirements take effect?",
        answer:
          "The transitional phase runs 2023–2025 with mandatory emissions reporting. From 2026, importers will pay a carbon levy.",
      },
      {
        question: "Who will be affected by Malaysia's carbon tax?",
        answer:
          "High-emission sectors such as energy, heavy manufacturing, and resource-based industries will progressively be brought under the national carbon tax.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be included in CBAM reports?",
        answer:
          "Verified data on direct and indirect emissions across production and supply chains, reported quarterly via the EU CBAM Registry.",
      },
      {
        question: "Will disclosures require third-party verification?",
        answer:
          "Yes. The EU requires emissions to be independently verified; Malaysia's framework is also expected to mandate assurance.",
      },
      {
        question: "Is there a digital tool to simplify compliance?",
        answer:
          "Yes, platforms like Carbon-Zero.ai automate data collection, carbon calculations, and generate assurance-ready CBAM and tax reports.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is CBAM being introduced?",
        answer:
          "To prevent carbon leakage, ensure fair competition, and align imports with the EU's climate targets.",
      },
      {
        question: "How does carbon pricing in Malaysia affect businesses?",
        answer:
          "It introduces additional compliance costs but also creates opportunities to access green financing and improve operational efficiency.",
      },
      {
        question: "How does Carbon-Zero.ai support compliance?",
        answer:
          "We streamline emissions tracking, map data to CBAM and Malaysia's tax framework, and deliver accurate, audit-ready reports to reduce compliance risk.",
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
