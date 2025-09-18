"use client"


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function BlogsResources() {
  const [activeCard, setActiveCard] = useState(0);
 

  const blogData = [
    { 
      id: 1,
      title: "Supply Chain Traceability",
      subtitle: "Supply Chain Visibility: Half of Companies Adopt New Tech",
      date: "Yesterday",
      description: "Technology is transforming supply chain management in 2023. To improve supply chain (SC) visibility and efficiency, companies are using cloud-based software, traceability systems, and sophisticated analytics. QIMA found that 40% of companies invested in supply chain digitization to improve traceability. This change transforms times and boosts profits.",
      image: "/card1.png",
      link: "/blogview"
    },
    {
      id: 2,
      title: "Supplier Risk Management",
      subtitle: "Solving supplier traceability in modern supply chains",
      date: "Yesterday",
      description: "Modern supply chains face unprecedented challenges in supplier risk management. Companies are implementing advanced tracking systems and AI-powered analytics to monitor supplier performance, compliance, and potential disruptions. This comprehensive approach helps businesses maintain resilience and operational continuity.",
      image: "/card2.png",
      link: "/blogview/supplier"
    },
    {
      id: 3,
      title: "What Is Supply Chain Traceability and How to Achieve It?",
      subtitle: "In today's interconnected economy, supply chain traceability is becoming a critical requirement in more and more sectors to maintain trust and efficiency.",
      date: "Yesterday",
      description: "Supply chain traceability provides end-to-end visibility across all stages of production and distribution. By implementing blockchain technology, IoT sensors, and data analytics, companies can track products from raw materials to final delivery, ensuring quality, compliance, and consumer trust.",
      image: "/card3.png",
      link: "/blogview/traceability"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* Left Side - Cards */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-white">Blogs & Resources</h1>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-slate-900" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {blogData.map((blog, index) => (
              <div
                key={blog.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCard === index 
                    ? 'bg-white/10 border border-white/20' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeCard === index ? 'bg-blue-500 text-white' : 'bg-white/20 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {blog.subtitle}
                    </p>
                    <span className="text-gray-400 text-xs">
                      {blog.date}
                    </span>
                  </div>
                  {/* Card Image */}
                  <div className="w-20 h-12 relative flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Interactive Display */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-white rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Illustration Area */}


              {/* <div className="flex-1 flex items-center justify-center mb-6">
                <div className="relative w-full max-w-md">
                   <div className="space-y-6">
                     <div className="flex justify-end">
                      <div className="bg-orange-400 p-2 rounded">
                        <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
                      </div>
                    </div>

                     <div className="bg-white rounded-lg p-4 shadow-lg">
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                          <div key={item} className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{item}.</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                            <div className={`w-4 h-4 rounded-sm ${
                              idx < 2 ? 'bg-green-500' : 'bg-gray-300'
                            }`}>
                              {idx < 2 && (
                                <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                     <div className="flex justify-start">
                      <div className="bg-red-500 p-2 rounded">
                        <div className="w-8 h-4 bg-red-600 rounded-sm"></div>
                      </div>
                    </div>

                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                         refX="0" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                        </marker>
                      </defs>
                      <path d="M 150 40 Q 180 100 150 160" stroke="white" strokeWidth="2" 
                            fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                      <path d="M 50 160 Q 20 100 50 40" stroke="white" strokeWidth="2" 
                            fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                    </svg>
                  </div>
                </div>
              </div> */}

              {/* Illustration Area - Show Image of Active Card */}
<div className="flex-1 flex items-center justify-center mb-6">
  <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden shadow-lg">
    <Image 
      src={blogData[activeCard].image}
      alt={blogData[activeCard].title}
      layout="fill"
      className="object-cover"
    />
  </div>
</div>


              {/* Text Content */}
              <div className="text-white">
                <p className="text-sm leading-relaxed mb-4 opacity-90">
                  {blogData[activeCard].description}
                </p>
                <Link 
                  href={blogData[activeCard].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors duration-200 text-sm font-medium"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function BlogsResources() {
//   const [activeCard, setActiveCard] = useState(0);

//   const blogData = [
//     {
//       id: 1,
//       title: "Supply Chain Traceability",
//       subtitle: "Supply Chain Visibility: Half of Companies Adopt New Tech",
//       date: "Yesterday",
//       description: "Technology is transforming supply chain management in 2023. To improve supply chain (SC) visibility and efficiency, companies are using cloud-based software, traceability systems, and sophisticated analytics. QIMA found that 40% of companies invested in supply chain digitization to improve traceability. This change transforms times and boosts profits.",
//       image: "/card1.png",
//       link: "/blogs/supply-chain-traceability"
//     },
//     {
//       id: 2,
//       title: "Supplier Risk Management",
//       subtitle: "Solving supplier traceability in modern supply chains",
//       date: "Yesterday",
//       description: "Modern supply chains face unprecedented challenges in supplier risk management. Companies are implementing advanced tracking systems and AI-powered analytics to monitor supplier performance, compliance, and potential disruptions. This comprehensive approach helps businesses maintain resilience and operational continuity.",
//       image: "/card2.png",
//       link: "/blogs/supplier-risk-management"
//     },
//     {
//       id: 3,
//       title: "What Is Supply Chain Traceability and How to Achieve It?",
//       subtitle: "In today's interconnected economy, supply chain traceability is becoming a critical requirement in more and more sectors to maintain trust and efficiency.",
//       date: "Yesterday",
//       description: "Supply chain traceability provides end-to-end visibility across all stages of production and distribution. By implementing blockchain technology, IoT sensors, and data analytics, companies can track products from raw materials to final delivery, ensuring quality, compliance, and consumer trust.",
//       image: "/card3.png",
//       link: "/blogs/supply-chain-traceability-guide"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
//           {/* Left Side - Cards */}
//           <div className="space-y-6">
//             <div className="flex items-center justify-between mb-8">
//               <h1 className="text-3xl font-bold text-white">Blogs & Resources</h1>
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                 <svg 
//                   className="w-4 h-4 text-slate-900" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>

//             {blogData.map((blog, index) => (
//               <div
//                 key={blog.id}
//                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeCard === index 
//                     ? 'bg-white/10 border border-white/20' 
//                     : 'bg-white/5 hover:bg-white/10'
//                 }`}
//                 onMouseEnter={() => setActiveCard(index)}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                     activeCard === index ? 'bg-blue-500 text-white' : 'bg-white/20 text-white'
//                   }`}>
//                     {index + 1}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       {blog.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm mb-3 leading-relaxed">
//                       {blog.subtitle}
//                     </p>
//                     <span className="text-gray-400 text-xs">
//                       {blog.date}
//                     </span>
//                   </div>
//                   {/* Card Image */}
//                   <div className="w-20 h-12 relative flex-shrink-0">
//                     <Image
//                       src={blog.image}
//                       alt={blog.title}
//                       fill
//                       className="object-cover rounded-md"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side - Interactive Display */}
//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
//               <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
//               <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-white rounded-full"></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 h-full flex flex-col">
//               {/* Illustration Area */}
//               <div className="flex-1 flex items-center justify-center mb-6">
//                 <div className="relative w-full max-w-md">
//                   {/* Supply Chain Illustration */}
//                   <div className="space-y-6">
//                     {/* Top Section - Warehouse */}
//                     <div className="flex justify-end">
//                       <div className="bg-orange-400 p-2 rounded">
//                         <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
//                       </div>
//                     </div>

//                     {/* Middle Section - Checklist */}
//                     <div className="bg-white rounded-lg p-4 shadow-lg">
//                       <div className="space-y-2">
//                         {[1, 2, 3, 4, 5, 6].map((item, idx) => (
//                           <div key={item} className="flex items-center space-x-2">
//                             <span className="text-sm font-medium">{item}.</span>
//                             <div className="flex-1 h-2 bg-gray-200 rounded"></div>
//                             <div className={`w-4 h-4 rounded-sm ${
//                               idx < 2 ? 'bg-green-500' : 'bg-gray-300'
//                             }`}>
//                               {idx < 2 && (
//                                 <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
//                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Bottom Section - Truck */}
//                     <div className="flex justify-start">
//                       <div className="bg-red-500 p-2 rounded">
//                         <div className="w-8 h-4 bg-red-600 rounded-sm"></div>
//                       </div>
//                     </div>

//                     {/* Connecting Lines */}
//                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
//                       <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//                          refX="0" refY="3.5" orient="auto">
//                           <polygon points="0 0, 10 3.5, 0 7" fill="white" />
//                         </marker>
//                       </defs>
//                       <path d="M 150 40 Q 180 100 150 160" stroke="white" strokeWidth="2" 
//                             fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
//                       <path d="M 50 160 Q 20 100 50 40" stroke="white" strokeWidth="2" 
//                             fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="text-white">
//                 <p className="text-sm leading-relaxed mb-4 opacity-90">
//                   {blogData[activeCard].description}
//                 </p>
//                 <Link 
//                   href={blogData[activeCard].link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors duration-200 text-sm font-medium"
//                 >
//                   Read more
//                   <svg 
//                     className="w-4 h-4 ml-1" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// // import Image from "next/image";
// import Link from "next/link";

// export default function BlogsResources() {
//   const [activeCard, setActiveCard] = useState(0);

//   const blogData = [
//     {
//       id: 1,
//       title: "Supply Chain Traceability",
//       subtitle: "Supply Chain Visibility: Half of Companies Adopt New Tech",
//       date: "Yesterday",
//       description: "Technology is transforming supply chain management in 2023. To improve supply chain (SC) visibility and efficiency, companies are using cloud-based software, traceability systems, and sophisticated analytics. QIMA found that 40% of companies invested in supply chain digitization to improve traceability. This change transforms times and boosts profits.",
//       image: "/card1.png",
//       link: "/blogs/supply-chain-traceability"
//     },
//     {
//       id: 2,
//       title: "Supplier Risk Management",
//       subtitle: "Solving supplier traceability in modern supply chains",
//       date: "Yesterday",
//       description: "Modern supply chains face unprecedented challenges in supplier risk management. Companies are implementing advanced tracking systems and AI-powered analytics to monitor supplier performance, compliance, and potential disruptions. This comprehensive approach helps businesses maintain resilience and operational continuity.",
//       image: "/card2.png",
//       link: "/blogs/supplier-risk-management"
//     },
//     {
//       id: 3,
//       title: "What Is Supply Chain Traceability and How to Achieve It?",
//       subtitle: "In today's interconnected economy, supply chain traceability is becoming a critical requirement in more and more sectors to maintain trust and efficiency.",
//       date: "Yesterday",
//       description: "Supply chain traceability provides end-to-end visibility across all stages of production and distribution. By implementing blockchain technology, IoT sensors, and data analytics, companies can track products from raw materials to final delivery, ensuring quality, compliance, and consumer trust.",
//       image: "/card3.png",
//       link: "/blogs/supply-chain-traceability-guide"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
//           {/* Left Side - Cards */}
//           <div className="space-y-6">
//             <div className="flex items-center justify-between mb-8">
//               <h1 className="text-3xl font-bold text-white">Blogs & Resources</h1>
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                 <svg 
//                   className="w-4 h-4 text-slate-900" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>

//             {blogData.map((blog, index) => (
//               <div
//                 key={blog.id}
//                 className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   activeCard === index 
//                     ? 'bg-white/10 border border-white/20' 
//                     : 'bg-white/5 hover:bg-white/10'
//                 }`}
//                 onMouseEnter={() => setActiveCard(index)}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                     activeCard === index ? 'bg-blue-500 text-white' : 'bg-white/20 text-white'
//                   }`}>
//                     {index + 1}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white mb-2">
//                       {blog.title}
//                     </h3>
//                     <p className="text-gray-300 text-sm mb-3 leading-relaxed">
//                       {blog.subtitle}
//                     </p>
//                     <span className="text-gray-400 text-xs">
//                       {blog.date}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side - Interactive Display */}
//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
//               <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
//               <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-white rounded-full"></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 h-full flex flex-col">
//               {/* Illustration Area */}
//               <div className="flex-1 flex items-center justify-center mb-6">
//                 <div className="relative w-full max-w-md">
//                   {/* Supply Chain Illustration */}
//                   <div className="space-y-6">
//                     {/* Top Section - Warehouse */}
//                     <div className="flex justify-end">
//                       <div className="bg-orange-400 p-2 rounded">
//                         <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
//                       </div>
//                     </div>

//                     {/* Middle Section - Checklist */}
//                     <div className="bg-white rounded-lg p-4 shadow-lg">
//                       <div className="space-y-2">
//                         {[1, 2, 3, 4, 5, 6].map((item, idx) => (
//                           <div key={item} className="flex items-center space-x-2">
//                             <span className="text-sm font-medium">{item}.</span>
//                             <div className="flex-1 h-2 bg-gray-200 rounded"></div>
//                             <div className={`w-4 h-4 rounded-sm ${
//                               idx < 2 ? 'bg-green-500' : 'bg-gray-300'
//                             }`}>
//                               {idx < 2 && (
//                                 <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
//                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Bottom Section - Truck */}
//                     <div className="flex justify-start">
//                       <div className="bg-red-500 p-2 rounded">
//                         <div className="w-8 h-4 bg-red-600 rounded-sm"></div>
//                       </div>
//                     </div>

//                     {/* Connecting Lines */}
//                     <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
//                       <defs>
//                         <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//                          refX="0" refY="3.5" orient="auto">
//                           <polygon points="0 0, 10 3.5, 0 7" fill="white" />
//                         </marker>
//                       </defs>
//                       <path d="M 150 40 Q 180 100 150 160" stroke="white" strokeWidth="2" 
//                             fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
//                       <path d="M 50 160 Q 20 100 50 40" stroke="white" strokeWidth="2" 
//                             fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="text-white">
//                 <p className="text-sm leading-relaxed mb-4 opacity-90">
//                   {blogData[activeCard].description}
//                 </p>
//                 <Link 
//                   href={blogData[activeCard].link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors duration-200 text-sm font-medium"
//                 >
//                   Read more
//                   <svg 
//                     className="w-4 h-4 ml-1" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }