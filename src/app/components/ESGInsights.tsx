"use client";
import { motion } from "framer-motion";
import { FaChartBar, FaShieldAlt } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { RiFileExcel2Fill } from "react-icons/ri";

export default function ESGInsights() {
  const features = [
    {
      title: "AI-Smart Data Collection",
      description:
        "Our in-house developed GreenLens technology makes ESG data collection effortless—just capture pictures, and the system does the rest.",
      icon: <FaChartBar className="text-[#8DD95B] text-3xl" />,
    },
    {
      title: "One Reliable Source Of Truth",
      description:
        "Convert scattered data to centralized data through a unified system, making reporting effortless and transparent.",
      icon: <BsDatabaseFillCheck className="text-[#8DD95B] text-3xl" />,
    },
    {
      title: "No More Boring Excel Templates",
      description:
        "Remove slow, error-prone manual work with automated processes through ERP integration and bulk upload, that keep things moving.",
      icon: <RiFileExcel2Fill className="text-[#8DD95B] text-3xl" />,
    },
    {
      title: "Clean & Trusted Data",
      description:
        "Automated checks detect and eliminate duplicates, anomalies, outliers, and inconsistencies—delivering clean, reliable insights that keep your reports audit-ready and you fully prepared.",
      icon: <FaShieldAlt className="text-[#8DD95B] text-3xl" />,
    },
  ];

  return (
    <section className="w-full py-16 px-6 text-center md:px-12 bg-white text-gray-800 justify-between">
      {/* Header */}
      <div className="text-center  mx-auto mb-12 justify-center">
        <h2 className="text-3xl md:text-[48px] font-bold mb-4 ">
          Gain From Your ESG Insights
        </h2>
        {/* <div className="w-full justify-center text-center">
        <p className="text-gray-600 w-[950px] text-lg text-[20px] font-normal text-center justify-center">
          Sustainability runs on reliable data. And data collection is the universal bottleneck for all industries. 
          Our platform helps you capture, organize, and automate ESG Data—giving you clarity across scope 1, 2, and 3 emissions without the complexity.
        </p>
        </div> */}

        <div className="w-full text-center">
        <p className="text-gray-600 max-w-[950px] text-lg md:text-[20px] font-normal mx-auto">
          Sustainability runs on reliable data. And data collection is the universal bottleneck for all industries. 
          Our platform helps you capture, organize, and automate ESG Data—giving you clarity across scope 1, 2, and 3 emissions without the complexity.
        </p>
      </div>
      
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-green-100 p-3 rounded-full">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-[20px] text-left w-[236px]">{feature.title}</h3>
            <p className="text-gray-600 text-sm text-[16px] text-left font-normal w-[263px]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


























// "use client";
// import { motion } from "framer-motion";
// import { FaChartBar, FaShieldAlt } from "react-icons/fa";
// import { BsDatabaseFillCheck } from "react-icons/bs";
// import { RiFileExcel2Fill } from "react-icons/ri";

// export default function ESGInsights() {
//   const features = [
//     {
//       title: "AI-Smart Data Collection",
//       description:
//         "Our in-house developed GreenLens technology makes ESG data collection effortless—just capture pictures, and the system does the rest.",
//       icon: <FaChartBar className="text-[#8DD95B] text-3xl" />,
//     },
//     {
//       title: "One Reliable Source Of Truth",
//       description:
//         "Convert scattered data to centralized data through a unified system, making reporting effortless and transparent.",
//       icon: <BsDatabaseFillCheck className="text-[#8DD95B] text-3xl" />,
//     },
//     {
//       title: "No More Boring Excel Templates",
//       description:
//         "Remove slow, error-prone manual work with automated processes through ERP integration and bulk upload, that keep things moving.",
//       icon: <RiFileExcel2Fill className="text-[#8DD95B] text-3xl" />,
//     },
//     {
//       title: "Clean & Trusted Data",
//       description:
//         "Automated checks detect and eliminate duplicates, anomalies, outliers, and inconsistencies—delivering clean, reliable insights that keep your reports audit-ready and you fully prepared.",
//       icon: <FaShieldAlt className="text-[#8DD95B] text-3xl" />,
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-6 md:px-12 bg-white text-gray-800">
//       {/* Header */}
//       <div className="text-center max-w-3xl mx-auto mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Gain From Your ESG Insights
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Sustainability runs on reliable data. And data collection is the universal bottleneck for all industries. 
//           Our platform helps you capture, organize, and automate ESG Data—giving you clarity across scope 1, 2, and 3 emissions without the complexity.
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-all duration-300"
//           >
//             <div className="bg-green-100 p-3 rounded-full">{feature.icon}</div>
//             <h3 className="text-lg font-semibold">{feature.title}</h3>
//             <p className="text-gray-600 text-sm">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
