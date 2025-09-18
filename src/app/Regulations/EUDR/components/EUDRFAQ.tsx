"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    category: "Producers & Exporters",
    questions: [
      {
        question: "What products from Malaysia are covered under the EUDR?",
        answer:
          "EUDR applies to commodities such as palm oil, rubber, cocoa, coffee, cattle (beef & leather), and timber including derived products.",
      },
      {
        question: "How can I prove that my products are deforestation-free?",
        answer:
          "You must provide geolocation data down to the plantation or plot level and demonstrate no deforestation after 31 December 2020.",
      },
      {
        question: "What data do I need to collect from plantations or suppliers?",
        answer:
          "You need geolocation coordinates, evidence of legal compliance, and supply chain traceability records kept for at least five years.",
      },
    ],
  },
  {
    category: "Traders & Exporters",
    questions: [
      {
        question: "Will the EUDR affect my ability to access EU markets?",
        answer:
          "Yes, only products that meet EUDR’s deforestation-free, legally produced, and traceability requirements can be exported to the EU.",
      },
      {
        question: "What documentation is required when shipping to Europe?",
        answer:
          "Exporters must submit due diligence statements including commodity origin, geolocation data, and legal compliance verification.",
      },
      {
        question: "How can I avoid shipment delays or rejections at customs?",
        answer:
          "Ensure complete and accurate due diligence documentation, maintain transparent supply chains, and use recognized compliance platforms.",
      },
    ],
  },
  {
    category: "Manufacturers & Processors",
    questions: [
      {
        question:
          "Do processed goods like rubber-based products or palm derivatives also fall under EUDR?",
        answer:
          "Yes, processed goods derived from forest-risk commodities are also covered and must comply with EUDR requirements.",
      },
      {
        question:
          "What systems can help me track and trace raw materials effectively?",
        answer:
          "Digital supply chain traceability systems, blockchain solutions, and geolocation mapping tools can help manage compliance.",
      },
      {
        question:
          "How does EUDR compliance improve my global competitiveness?",
        answer:
          "Compliance boosts credibility, ensures EU market access, and strengthens your company’s sustainability reputation globally.",
      },
    ],
  },
  {
    category: "Retailers & Brands",
    questions: [
      {
        question: "How can EUDR compliance help me build consumer trust?",
        answer:
          "Consumers prefer sustainable products. EUDR compliance demonstrates ethical sourcing and enhances brand reputation.",
      },
      {
        question:
          "Can I use deforestation-free certification as part of my ESG reporting?",
        answer:
          "Yes, certifications and compliance data can support your ESG disclosures and investor communications.",
      },
      {
        question:
          "What role does Carbon-Zero.ai play in simplifying compliance for my supply chain?",
        answer:
          "Platforms like Carbon-Zero.ai streamline data collection, verify compliance, and help businesses manage due diligence efficiently.",
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









// "use client";

// import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

// const faqData = [
//   {
//     category: "Producers & Exporters",
//     questions: [
//       "What products from Malaysia are covered under the EUDR?",
//       "How can I prove that my products are deforestation-free?",
//       "What data do I need to collect from plantations or suppliers?",
//     ],
//   },
//   {
//     category: "Traders & Exporters",
//     questions: [
//       "Will the EUDR affect my ability to access EU markets?",
//       "What documentation is required when shipping to Europe?",
//       "How can I avoid shipment delays or rejections at customs?",
//     ],
//   },
//   {
//     category: "Manufacturers & Processors",
//     questions: [
//       "Do processed goods like rubber-based products or palm derivatives also fall under EUDR?",
//       "What systems can help me track and trace raw materials effectively?",
//       "How does EUDR compliance improve my global competitiveness?",
//     ],
//   },
//   {
//     category: "Retailers & Brands",
//     questions: [
//       "How can EUDR compliance help me build consumer trust?",
//       "Can I use deforestation-free certification as part of my ESG reporting?",
//       "What role does Carbon-Zero.ai play in simplifying compliance for my supply chain?",
//     ],
//   },
// ];

// export default function FAQ() {
//   return (
//     <div className="w-full bg-white py-16 px-6 md:px-16">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//             Frequent <br /> Questions
//           </h2>
//           <p className="mt-4 text-gray-600 text-sm md:text-base">
//             For more questions, please head{" "}
//             <a href="#" className="text-green-600 underline">
//               here
//             </a>
//             .
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="md:col-span-2">
//           {faqData.map((section, idx) => (
//             <Disclosure key={idx}>
//               {({ open }) => (
//                 <div className="mb-6 border-b pb-3">
//                   {/* Category Header */}
//                   <Disclosure.Button className="flex w-full justify-between items-center text-left text-lg font-semibold text-gray-800 py-2">
//                     {section.category}
//                     {open ? (
//                       <MinusIcon className="h-5 w-5 text-green-600" />
//                     ) : (
//                       <PlusIcon className="h-5 w-5 text-green-600" />
//                     )}
//                   </Disclosure.Button>

//                   {/* Questions inside category */}
//                   <Disclosure.Panel className="mt-3 space-y-3">
//                     {section.questions.map((q, qIdx) => (
//                       <Disclosure key={qIdx}>
//                         {({ open }) => (
//                           <div className="border rounded-lg">
//                             <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-50">
//                               {q}
//                               <ChevronUpIcon
//                                 className={`${
//                                   open ? "rotate-180 transform" : ""
//                                 } h-5 w-5 text-green-600`}
//                               />
//                             </Disclosure.Button>
//                             <Disclosure.Panel className="px-4 pb-4 text-gray-600 text-sm">
//                               Answer placeholder for: {q}
//                             </Disclosure.Panel>
//                           </div>
//                         )}
//                       </Disclosure>
//                     ))}
//                   </Disclosure.Panel>
//                 </div>
//               )}
//             </Disclosure>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


 













// import React, { useState } from 'react';
// import { Plus, Minus, ChevronDown } from 'lucide-react';

// interface Question {
//   id: string;
//   question: string;
//   answer?: string;
// }

// interface Category {
//   id: string;
//   title: string;
//   questions: Question[];
//   isExpanded: boolean;
// }

// export default  function EUDRFAQSection (){
//   const [categories, setCategories] = useState<Category[]>([
//     {
//       id: 'producers',
//       title: 'Producers & Exporters',
//       isExpanded: false,
//       questions: [
//         {
//           id: 'products-covered',
//           question: 'What products from Malaysia are covered under the EUDR?',
//           answer: 'The EUDR covers seven key commodities: cattle, cocoa, coffee, palm oil, soy, wood, and rubber. Malaysian exporters are particularly affected by palm oil, rubber, wood, and cocoa products.'
//         },
//         {
//           id: 'prove-deforestation-free',
//           question: 'How can I prove that my products are deforestation-free?',
//           answer: 'You need to provide due diligence statements with geolocation data, prove the products were not produced on land deforested after December 2020, and maintain complete supply chain traceability.'
//         },
//         {
//           id: 'data-collection',
//           question: 'What data do I need to collect from plantations or suppliers?',
//           answer: 'You need geolocation coordinates, production dates, supplier information, land use history, and documentation proving no deforestation occurred after December 31, 2020.'
//         }
//       ]
//     },
//     {
//       id: 'traders',
//       title: 'Traders & Exporters',
//       isExpanded: false,
//       questions: [
//         {
//           id: 'market-access',
//           question: 'Will the EUDR affect my ability to access EU markets?',
//           answer: 'Yes, non-compliant products will be banned from EU markets. You must ensure all products meet EUDR requirements to maintain market access.'
//         },
//         {
//           id: 'documentation-required',
//           question: 'What documentation is required when shipping to Europe?',
//           answer: 'You need due diligence statements, certificates of compliance, geolocation data, and proof of deforestation-free production for all covered commodities.'
//         },
//         {
//           id: 'avoid-delays',
//           question: 'How can I avoid shipment delays or rejections at customs?',
//           answer: 'Ensure complete documentation, maintain digital traceability systems, conduct regular compliance audits, and work with certified suppliers.'
//         }
//       ]
//     },
//     {
//       id: 'manufacturers',
//       title: 'Manufacturers & Processors',
//       isExpanded: false,
//       questions: [
//         {
//           id: 'processed-goods',
//           question: 'Do processed goods like rubber-based products or palm derivatives also fall under EUDR?',
//           answer: 'Yes, the EUDR applies to both raw commodities and products derived from them, including processed rubber products, palm oil derivatives, and wood-based products.'
//         },
//         {
//           id: 'tracking-systems',
//           question: 'What systems can help me track and trace raw materials effectively?',
//           answer: 'Digital traceability platforms, blockchain solutions, satellite monitoring, and integrated supply chain management systems can help track materials from source to product.'
//         },
//         {
//           id: 'global-competitiveness',
//           question: 'How does EUDR compliance improve my global competitiveness?',
//           answer: 'EUDR compliance demonstrates sustainability leadership, opens access to premium markets, reduces regulatory risks, and enhances brand reputation globally.'
//         }
//       ]
//     },
//     {
//       id: 'retailers',
//       title: 'Retailers & Brands',
//       isExpanded: false,
//       questions: [
//         {
//           id: 'consumer-trust',
//           question: 'How can EUDR compliance help me build consumer trust?',
//           answer: 'EUDR compliance demonstrates your commitment to sustainability, provides transparency in your supply chain, and assures consumers that your products are environmentally responsible.'
//         },
//         {
//           id: 'esg-reporting',
//           question: 'Can I use deforestation-free certification as part of my ESG reporting?',
//           answer: 'Yes, EUDR compliance directly supports ESG goals, particularly environmental criteria, and can be integrated into sustainability reporting and corporate responsibility initiatives.'
//         },
//         {
//           id: 'carbon-zero-role',
//           question: 'What role does Carbon-Zero.ai play in simplifying compliance for my supply chain?',
//           answer: 'Carbon-Zero.ai provides end-to-end visibility, automates compliance documentation, integrates geolocation data, and streamlines the entire EUDR compliance process for your supply chain.'
//         }
//       ]
//     }
//   ]);

//   const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

//   const toggleCategory = (categoryId: string) => {
//     setCategories(prev => 
//       prev.map(cat => 
//         cat.id === categoryId 
//           ? { ...cat, isExpanded: !cat.isExpanded }
//           : cat
//       )
//     );
//   };

//   const toggleQuestion = (questionId: string) => {
//     setExpandedQuestions(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(questionId)) {
//         newSet.delete(questionId);
//       } else {
//         newSet.add(questionId);
//       }
//       return newSet;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
//             Frequent Questions
//           </h1>
//           <p className="text-gray-600 text-lg">
//             For more questions, please head{' '}
//             <span className="text-green-400 cursor-pointer hover:underline">here</span>.
//           </p>
//         </div>

//         {/* FAQ Categories */}
//         <div className="space-y-6">
//           {categories.map((category) => (
//             <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
//               {/* Category Header */}
//               <button
//                 onClick={() => toggleCategory(category.id)}
//                 className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <h2 className="text-xl font-semibold text-slate-800">
//                   {category.title}
//                 </h2>
//                 <div className="flex-shrink-0">
//                   {category.isExpanded ? (
//                     <Minus className="w-6 h-6 text-gray-500" />
//                   ) : (
//                     <Plus className="w-6 h-6 text-gray-500" />
//                   )}
//                 </div>
//               </button>

//               {/* Questions */}
//               {category.isExpanded && (
//                 <div className="border-t border-gray-200">
//                   {category.questions.map((question) => (
//                     <div key={question.id} className="border-b border-gray-100 last:border-b-0">
//                       <button
//                         onClick={() => toggleQuestion(question.id)}
//                         className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
//                       >
//                         <p className="text-gray-700 pr-4">
//                           {question.question}
//                         </p>
//                         <div className="flex-shrink-0">
//                           <ChevronDown 
//                             className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
//                               expandedQuestions.has(question.id) ? 'rotate-180' : ''
//                             }`}
//                           />
//                         </div>
//                       </button>

//                       {/* Answer */}
//                       {expandedQuestions.has(question.id) && question.answer && (
//                         <div className="px-6 pb-6">
//                           <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-400">
//                             <p className="text-gray-700 leading-relaxed">
//                               {question.answer}
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Contact Section */}
//         {/* <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
//           <h3 className="text-xl font-semibold text-slate-800 mb-3">
//             Still have questions?
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Our EUDR compliance experts are here to help you navigate the requirements.
//           </p>
//           <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
//             Contact Our Experts
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };
