import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useContact } from "../../components/ContactContext";


const faqs = [
  {
    question: "What is the Textile Digital Product Passport (DPP)?",
    answer: "The Textile Digital Product Passport (DPP) is a digital record that contains essential product data, ensuring transparency and traceability across the textile supply chain.",
  },
  {
    question: "How does RePut.ai track my product’s carbon footprint?",
    answer: "RePut.ai uses real-time data from your supply chain and integrates it with advanced carbon calculation models to provide accurate carbon footprint tracking.",
  },
  {
    question: "Which sustainability metrics does the Carbon & Sustainability Dashboard cover?",
    answer: "It covers metrics like CO₂ emissions, energy usage, waste generation, water usage, and more, to help businesses meet sustainability goals.",
  },
  {
    question: "What regulations and certifications can I comply with using RePut.ai?",
    answer: "RePut.ai supports compliance with various international standards such as GHG Protocol, ISO 14064, and EU sustainability regulations.",
  },
  {
    question: "How does RePut.ai help prevent counterfeiting?",
    answer: "By using secure blockchain technology and digital product passports, RePut.ai verifies product authenticity and prevents counterfeit products.",
  },
  {
    question: "Do I need separate tools for DPP, carbon tracking, and compliance?",
    answer: "No, RePut.ai combines these features into a single integrated platform.",
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on the scale of your operations. Contact us for a custom quote.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

              const { scrollToContact } = useContact(); 
  

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            For More Question About the carbon emission Tracking , please head{" "}
            <a onClick={scrollToContact}  className="text-green-700 font-semibold underline">HERE</a>
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
