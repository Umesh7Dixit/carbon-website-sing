"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Producers & Supply Chain Actors",
    questions: [
      {
        question: "Who must comply with RSPO certification?",
        answer:
          "Plantation owners, mills, independent & organized smallholders, refiners, processors, traders, consumer goods manufacturers, and retailers involved in the palm oil supply chain.",
      },
      {
        question: "When do RSPO requirements take effect?",
        answer:
          "RSPO certification is voluntary but increasingly required by international buyers; demand has been steadily rising since its introduction in 2004.",
      },
      {
        question: "What standards must be followed?",
        answer:
          "Compliance with the RSPO Principles & Criteria (P&C), covering environmental responsibility, social equity, labor rights, and transparent governance.",
      },
    ],
  },
  {
    category: "Data & Assurance",
    questions: [
      {
        question: "What data must be included for RSPO certification?",
        answer:
          "Detailed records on land use, agricultural practices, emissions, labor conditions, and supply chain traceability.",
      },
      {
        question: "Does RSPO require third-party audits?",
        answer:
          "Yes. Certification is only granted after independent audits by accredited certification bodies, with ongoing surveillance audits to ensure compliance.",
      },
      {
        question: "Is there a digital tool to simplify certification?",
        answer:
          "Yes. Platforms like Carbon-Zero.ai automate data tracking, documentation, and assurance-ready reporting to streamline RSPO compliance.",
      },
    ],
  },
  {
    category: "Strategic & Market Benefits",
    questions: [
      {
        question: "Why is RSPO certification important now?",
        answer:
          "Global buyers, investors, and regulators increasingly demand certified sustainable palm oil to ensure responsible sourcing.",
      },
      {
        question: "How can RSPO certification benefit my business?",
        answer:
          "It secures global market access, strengthens brand reputation, and demonstrates commitment to sustainability.",
      },
      {
        question: "How does Carbon-Zero.ai support compliance?",
        answer:
          "We simplify data collection, map your operations to RSPO standards, and generate documentation that is audit- and assurance-ready.",
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
