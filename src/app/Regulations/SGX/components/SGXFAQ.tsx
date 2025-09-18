"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Issuers & Reporting Teams",
    questions: [
      {
        question: "Who must comply with SGX sustainability reporting?",
        answer:
          "All companies listed on the Singapore Exchange, including Mainboard and Catalist issuers.",
      },
      {
        question: "When do the requirements take effect?",
        answer:
          "Large-cap issuers begin climate-related disclosures from FY2025, with phased rollout for others through 2027–2028.",
      },
      {
        question: "What standards must be followed?",
        answer:
          "Reports must align with SGX guidelines and global frameworks like IFRS S1 & S2 or TCFD, covering material ESG factors, risks, and metrics.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be disclosed?",
        answer:
          "ESG performance metrics, climate risks, targets, and governance structures with at least three years of comparable data.",
      },
      {
        question: "Does SGX require third-party assurance?",
        answer:
          "Companies must disclose assurance status; independent assurance will become mandatory in stages.",
      },
      {
        question: "Is there a digital tool to simplify compliance?",
        answer:
          "Yes—Carbon-Zero.ai automates ESG data collection, disclosure mapping, and assurance-ready reporting.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is SGX sustainability reporting important now?",
        answer:
          "Investors, regulators, and global markets demand transparency on ESG performance.",
      },
      {
        question: "How can compliance benefit my business?",
        answer:
          "It attracts sustainable financing, boosts reputation, and strengthens resilience against regulatory and market risks.",
      },
      {
        question: "How does Carbon-Zero.ai support compliance?",
        answer:
          "By automating ESG data, mapping disclosures to SGX requirements, and generating compliance-ready reports.",
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
