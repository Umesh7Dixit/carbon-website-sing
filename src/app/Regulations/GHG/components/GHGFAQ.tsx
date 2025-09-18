"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Emissions Reporting Teams & Issuers",
    questions: [
      {
        question: "Who must comply with GHG reporting?",
        answer:
          "All companies with significant emissions—especially those in energy-intensive sectors, transport, manufacturing, agriculture, and finance—must measure and disclose their carbon footprint.",
      },
      {
        question: "When do the requirements take effect?",
        answer:
          "Large-cap issuers begin Scope 1 & 2 emissions reporting from FY2025, with phased adoption of Scope 3 and full GHG disclosure for others through FY2027–2028.",
      },
      {
        question: "What standards must be followed?",
        answer:
          "Disclosures should follow global GHG reporting frameworks (GHG Protocol, IFRS S1 & S2), covering emissions across the value chain, reduction targets, governance, and mitigation strategies.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be disclosed?",
        answer:
          "Companies must report Scope 1, Scope 2, and material Scope 3 emissions, reduction initiatives, scenario analysis, and governance structures with at least three years of comparable data.",
      },
      {
        question: "Is third-party assurance required?",
        answer:
          "Issuers must disclose assurance status; independent verification will become mandatory in stages.",
      },
      {
        question: "Is there a digital tool to simplify compliance?",
        answer:
          "Yes—Carbon-Zero.ai automates emissions data collection, maps disclosures to GHG standards, and generates assurance-ready reports.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is GHG reporting critical now?",
        answer:
          "Investors, regulators, and global markets increasingly demand transparency on emissions and climate impact.",
      },
      {
        question: "How can compliance benefit my business?",
        answer:
          "It improves access to sustainable financing, enhances credibility, and strengthens resilience against regulatory and market pressures.",
      },
      {
        question: "How does Carbon-Zero.ai support reporting?",
        answer:
          "We streamline emissions data collection, map operations to global GHG frameworks, and produce timely, compliance-ready reports.",
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
