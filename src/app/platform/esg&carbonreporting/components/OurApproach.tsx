// app/components/OurApproach.tsx
"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "AI-Powered Drafting",
    description:
      "Leverage AI to auto-generate sustainability responses by synthesizing your carbon and ESG data—aligned with Bursa Malaysia disclosure requirements.",
  },
  {
    number: "02",
    title: "Cross-Framework Mapping",
    description:
      "Map a single response across Bursa, GRI, ISSB, and TCFD, eliminating duplication and cutting manual effort in half.",
  },
  {
    number: "03",
    title: "Guided Disclosures",
    description:
      "Work with Carbonscan.ai experts to refine, validate, and tailor your disclosures, ensuring they meet Bursa Malaysia’s Listing Rules and global standards.",
  },
  {
    number: "04",
    title: "Maker-Checker Workflow",
    description:
      "Assign responsibilities, review drafts, and approve submissions with full audit-ready version tracking and logs.",
  },
  {
    number: "05",
    title: "One-Click Bursa Report Output",
    description:
      "Generate regulator-ready ESG reports in Bursa’s prescribed formats, instantly exportable for submission or board review.",
  },
];

export default function OurApproach() {
  // split rows explicitly so first row has 3, second row 2
  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3);

  return (
    <section className="w-full bg-[#0F3B33] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Carbonscan.ai blends AI automation with expert validation, so you can
            stay focused on driving sustainability while we take care of
            Bursa-compliant ESG reporting.
          </p>
        </div>

        {/* CARDS WRAPPER */}
        <div className="flex flex-col gap-6 items-center">
          {/* FIRST ROW — 3 CARDS CENTERED */}
          <div className="w-full flex flex-wrap justify-center gap-6">
            {row1.map((step, idx) => (
              <motion.div
                key={step.number}
                // animation: fade up + slight stagger
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ translateY: -6, scale: 1.02 }}
                className="bg-[#145C52] rounded-xl p-6 h-[230px] 
                           w-full sm:w-[48%] lg:w-[30%] shadow-md"
              >
                {/* Top row inside card: number | separator | title */}
                <div className="flex items-start">
                  {/* Number */}
                  <div className="flex-none">
                    <div className="text-3xl font-bold text-green-300/40">
                      {step.number}
                    </div>
                  </div>

                  {/* Vertical separator */}
                  <div className="mx-4">
                    <div className="h-12 w-px bg-green-300/40" />
                  </div>

                  {/* Title / subtitle on right */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    {/* small subtitle (optional), keep minimal to match image */}
                    <div className="text-sm text-green-100/60">
                      {/* you can place a short subtitle here if needed */}
                    </div>
                  </div>
                </div>

                {/* Bottom content (description) */}
                <div className="mt-4 text-gray-200 text-sm leading-relaxed">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECOND ROW — 2 CARDS CENTERED */}
          <div className="w-full flex flex-wrap justify-center gap-6">
            {row2.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // continue stagger delay from first row (idx + 3)
                transition={{ duration: 0.5, delay: (idx + 3) * 0.12 }}
                whileHover={{ translateY: -6, scale: 1.02 }}
                className="bg-[#145C52] rounded-xl p-6 h-[230px] 
                           w-full sm:w-[48%] lg:w-[30%] shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex-none">
                    <div className="text-3xl font-bold text-green-300/40">
                      {step.number}
                    </div>
                  </div>

                  <div className="mx-4">
                    <div className="h-12 w-px bg-green-300/40" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <div className="text-sm text-green-100/60"></div>
                  </div>
                </div>

                <div className="mt-4 text-gray-200 text-sm leading-relaxed">
                  {step.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





















// // app/our-approach.tsx

// "use client";

// import { motion } from "framer-motion";

// const steps = [
//   {
//     number: "01",
//     title: "AI-Powered Drafting",
//     description:
//       "Leverage AI to auto-generate sustainability responses by synthesizing your carbon and ESG data—aligned with Bursa Malaysia disclosure requirements.",
//   },
//   {
//     number: "02",
//     title: "Cross-Framework Mapping",
//     description:
//       "Map a single response across Bursa, GRI, ISSB, and TCFD, eliminating duplication and cutting manual effort in half.",
//   },
//   {
//     number: "03",
//     title: "Guided Disclosures",
//     description:
//       "Work with Carbonscan.ai experts to refine, validate, and tailor your disclosures, ensuring they meet Bursa Malaysia’s Listing Rules and global standards.",
//   },
//   {
//     number: "04",
//     title: "Maker-Checker Workflow",
//     description:
//       "Assign responsibilities, review drafts, and approve submissions with full audit-ready version tracking and logs.",
//   },
//   {
//     number: "05",
//     title: "One-Click Bursa Report Output",
//     description:
//       "Generate regulator-ready ESG reports in Bursa’s prescribed formats, instantly exportable for submission or board review.",
//   },
// ];

// export default function OurApproach() {
//   return (
//     <section className="w-full bg-[#0F3B33] text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           Carbonscan.ai blends AI automation with expert validation, so you can
//           stay focused on driving sustainability while we take care of
//           Bursa-compliant ESG reporting.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-[#145C52] rounded-xl p-6 h-[230px] w-full flex flex-col text-left shadow-md"
//           >
//             <span className="text-2xl font-bold text-green-300 mb-2">
//               {step.number}
//             </span>
//             <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               {step.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
