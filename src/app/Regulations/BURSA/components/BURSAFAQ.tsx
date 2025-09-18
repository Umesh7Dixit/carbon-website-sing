"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Issuers & Reporting Teams",
    questions: [
      {
        question: "Who must comply with Bursa Malaysia’s ESG reporting rules?",
        answer:
          "All listed issuers on Bursa Malaysia are required to comply, regardless of size or industry, in line with the exchange’s updated sustainability reporting framework.",
      },
      {
        question: "When do the new requirements take effect?",
        answer:
          "The phased implementation begins in 2023 for large companies and will gradually extend to all issuers by 2025.",
      },
      {
        question: "What standards must reports follow?",
        answer:
          "Reports must align with international frameworks such as TCFD, ISSB, and Bursa’s own Sustainability Reporting Guide.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be included in sustainability statements?",
        answer:
          "Companies must disclose climate-related risks, greenhouse gas (GHG) emissions, supply chain sustainability, and governance structures.",
      },
      {
        question: "Do disclosures require third-party assurance?",
        answer:
          "Yes, Bursa is mandating external assurance on ESG disclosures over time to ensure accuracy and credibility of reported data.",
      },
      {
        question: "Is there a digital tool to help with reporting?",
        answer:
          "Yes, platforms like Carbon-Zero.ai can help companies collect ESG data, automate reporting, and ensure compliance with Bursa’s requirements.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is Bursa enhancing ESG reporting now?",
        answer:
          "Global investors and regulators demand higher transparency, and Bursa is aligning Malaysia’s capital markets with global best practices.",
      },
      {
        question: "How can stronger ESG reporting benefit my company?",
        answer:
          "It enhances investor confidence, improves access to sustainable financing, and strengthens long-term competitiveness.",
      },
      {
        question: "How does Carbon-Zero.ai support compliance?",
        answer:
          "Carbon-Zero.ai simplifies compliance by integrating ESG data collection, analytics, and reporting into a single, easy-to-use platform.",
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
