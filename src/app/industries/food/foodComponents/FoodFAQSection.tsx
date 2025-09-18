import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useContact } from "../../../components/ContactContext";

const faqs = [
  {
    question: "What is the Food Digital Product Passport?",
    answer: "The Food Digital Product Passport (DPP) is a digital record that stores key information about a food product such as its origin, ingredients, certifications, and carbon footprint. It ensures transparency, traceability, and trust across the entire food supply chain.",
  },
  {
    question: "How does RePut.ai calculate carbon footprint for food?",
    answer: "RePut.ai collects real-time supply chain data like sourcing, transportation, processing, and packaging, then applies advanced carbon accounting models to calculate the accurate carbon footprint of food products.",
  },
  {
    question: "Which certifications does RePut.ai support?",
    answer: "RePut.ai supports leading food and sustainability certifications including GHG Protocol, ISO 14064, EU Farm-to-Fork, and other international food safety and environmental standards.",
  },
  {
    question: "Can RePut.ai help me meet both food safety and sustainability rules?",
    answer: "Yes. RePut.ai aligns with international food safety regulations (HACCP, FSSC 22000) as well as sustainability standards (GHG Protocol, EU Green Deal) to help businesses comply with both requirements simultaneously.",
  },
  {
    question: "How can consumers benefit from this data?",
    answer: "Consumers can scan the digital product passport to check where their food comes from, its carbon footprint, certifications, and safety compliance—helping them make informed and sustainable food choices.",
  }
];


export default function FoodFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

            const { scrollToContact } = useContact(); 
  

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            For More Question About the carbon emission Tracking , please head{" "}
            <a onClick={scrollToContact} className="text-green-700 font-semibold underline">HERE</a>
          </p>
        </div>

        {/* Right FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-gray-100 transition text-black"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-black" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-black" />
                )}
              </button>
              {/* Answer */}
              <div
                className={`px-5 pb-4 text-black transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



















// import { PlusIcon } from "@heroicons/react/24/outline";

// const faqs = [
//   { question: "What is the Food Digital Product Passport?" },
//   { question: "How does RePut.ai calculate carbon footprint for food?" },
//   { question: "Which certifications does RePut.ai support?" },
//   { question: "Can RePut.ai help me meet both food safety and sustainability rules?" },
//   { question: "How can consumers benefit from this data?" },
// ];

// export default function FoodFAQSection() {

  
//   return (
//     <section className="bg-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-700">
//             For More Question About the carbon emission Tracking , please head{" "}
//             <a href="#" className="text-green-700 font-semibold underline">
//               HERE
//             </a>
//           </p>
//         </div>

//         {/* Right FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center px-5 py-4 text-black font-medium cursor-pointer hover:bg-gray-100 transition"
//             >
//               <span>{faq.question}</span>
//               <PlusIcon className="w-5 h-5 text-black" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
