import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useContact } from "../../../components/ContactContext"; 


export default function CarbonAccountingScreen(){
  const [activeTab, setActiveTab] = useState(0);
  const { scrollToContact } = useContact();

  const tabsData = [
    {
      id: 0,
      title: "01 Measure",
      heading: "Everything You Need for Finance-Ready Carbon Accounting",
      description: "Make carbon measurement seamless with Carbon Scan's intelligent platform. Our solution transforms raw business data into reliable, audit-ready carbon calculations, giving you instant visibility into Scope 1, 2, and 3 emissions.",
      features: [
        "Fully aligned with the GHG Protocol and global disclosure standards",
        "Verified methodologies for accurate carbon accounting",
        "Dynamic dashboards that turn data into actionable insights"
      ],
      image: "/fivemeet.png"
    },
    {
      id: 1,
      title: "02 Report",
      heading: "Finance-Ready Carbon Reporting for BURSA Malaysia",
      description: "Ensure your business meets Bursa Malaysia's sustainability disclosure requirements with confidence. Carbon Scan equips you with investor- grade carbon reporting that's easy to generate, compliant with global and local standards, and tailored for Malaysian stakeholders.",
      features: [
        "One-click reports aligned with Bursa Malaysia's Sustainability Reporting Framework",
        "Deep analysis of Scope 1, 2, and 3 emission hotspots across operations and supply chains",
        "Customisable dashboards for board, investor, and regulator communications"
      ],
      image: "/frijijiodash.png"
    },
    {
      id: 2,
      title: "03 Reduce",
      heading: "Decarbonisation that Delivers Business Value",
      description: "Lower emissions, lower costs. Carbon Scan helps you design a science-based decarbonisation pathway that aligns with global climate targets while unlocking financial savings and operational efficiency.",
      features: [
        "Set credible, science-aligned targets",
        "Develop customised action roadmaps for your business",
        "Forecast both carbon and cost reductions with precision analytics",
        "Leverage CCU (Carbon Capture & Utilisation) opportunities for hard-to-abate sectors",
        "Unlock new revenue streams through verified carbon credits"
      ],
      image: "/dnewioj.png"
    }
  ];

  const currentTab = tabsData[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              {tabsData.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-slate-800 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 bg-slate-800 rounded-full"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6">
                  {currentTab.heading}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                  {currentTab.description}
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
              >
                {currentTab.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={currentTab.image}
                  alt={currentTab.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};






















// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Check, ArrowRight } from 'lucide-react';

// export default function CarbonAccountingScreen(){
//   const [activeTab, setActiveTab] = useState(0);

//   const tabsData = [
//     {
//       id: 0,
//       title: "01 Measure",
//       heading: "Everything You Need for Finance-Ready Carbon Accounting",
//       description: "Make carbon measurement seamless with Carbon Scan's intelligent platform. Our solution transforms raw business data into reliable, audit-ready carbon calculations, giving you instant visibility into Scope 1, 2, and 3 emissions.",
//       features: [
//         "Fully aligned with the GHG Protocol and global disclosure standards",
//         "Verified methodologies for accurate carbon accounting",
//         "Dynamic dashboards that turn data into actionable insights"
//       ],
//       image: "/nceij.png",
//     //   dashboards: [
//     //     { title: "Total Emissions", value: "2,847", subtitle: "tCO2e" },
//     //     { title: "Executive summary by scope", chart: "pie" },
//     //     { title: "Corporate Carbon Footprint", chart: "bar" }
//     //   ]
//     },
//     {
//       id: 1,
//       title: "02 Report",
//       heading: "Comprehensive Carbon Reporting Made Simple",
//       description: "Generate audit-ready reports that meet all major compliance standards. Our automated reporting system ensures accuracy while saving you countless hours of manual work.",
//       features: [
//         "Automated report generation for all major standards",
//         "Real-time compliance monitoring and alerts",
//         "Customizable templates for different stakeholders"
//       ],
//       image: "/api/placeholder/600/400",
//       dashboards: [
//         { title: "Reports Generated", value: "156", subtitle: "This Year" },
//         { title: "Compliance Status", chart: "status" },
//         { title: "Report Distribution", chart: "flow" }
//       ]
//     },
//     {
//       id: 2,
//       title: "03 Reduce",
//       heading: "Strategic Carbon Reduction Planning",
//       description: "Transform insights into action with our reduction planning tools. Set science-based targets, track progress, and implement effective carbon reduction strategies.",
//       features: [
//         "Science-based target setting and validation",
//         "ROI analysis for carbon reduction initiatives",
//         "Progress tracking with predictive analytics"
//       ],
//       image: "/api/placeholder/600/400",
//       dashboards: [
//         { title: "Reduction Target", value: "45%", subtitle: "by 2030" },
//         { title: "Initiative Progress", chart: "progress" },
//         { title: "Cost Savings", chart: "savings" }
//       ]
//     }
//   ];

//   const currentTab = tabsData[activeTab];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
//         {/* Navigation Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
//             <div className="flex space-x-2">
//               {tabsData.map((tab, index) => (
//                 <motion.button
//                   key={tab.id}
//                   onClick={() => setActiveTab(index)}
//                   className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeTab === index
//                       ? 'bg-slate-800 text-white shadow-lg'
//                       : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//                   }`}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {activeTab === index && (
//                     <motion.div
//                       className="absolute inset-0 bg-slate-800 rounded-full"
//                       layoutId="activeTab"
//                       initial={false}
//                       transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     />
//                   )}
//                   <span className="relative z-10">{tab.title}</span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
//           >
            
//             {/* Left Content */}
//             <div className="space-y-8">
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2, duration: 0.6 }}
//               >
//                 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-6">
//                   {currentTab.heading}
//                 </h1>
//                 <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
//                   {currentTab.description}
//                 </p>
//               </motion.div>

//               {/* Features List */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="space-y-4"
//               >
//                 {currentTab.features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                     className="flex items-start space-x-4"
//                   >
//                     <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                       <Check className="w-4 h-4 text-white" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed">{feature}</p>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.5 }}
//               >
//                 <motion.button
//                   className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group"
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span>Book a Demo</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </motion.button>
//               </motion.div>
//             </div>

//             {/* Right Content - Image and Dashboard */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="relative"
//             >
//               {/* Background Image Placeholder */}
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-200">
//                 <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center">
//                   <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl m-4 flex items-center justify-center">
//                     <div className="text-center space-y-4">
//                       <div className="w-16 h-16 bg-white/30 rounded-full mx-auto flex items-center justify-center">
//                         <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
//                       </div>
//                       <div className="space-y-2">
//                         <div className="h-3 bg-white/40 rounded-full w-24 mx-auto"></div>
//                         <div className="h-3 bg-white/30 rounded-full w-16 mx-auto"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Dashboard Cards */}
//               {/* <div className="absolute -bottom-6 -left-4 right-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 {currentTab.dashboards.map((dashboard, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30, scale: 0.8 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ 
//                       delay: 0.5 + index * 0.1, 
//                       duration: 0.6,
//                       type: "spring",
//                       stiffness: 100
//                     }}
//                     className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 backdrop-blur-sm"
//                   >
//                     <div className="text-xs text-gray-500 mb-2 font-medium">
//                       {dashboard.title}
//                     </div>
//                     {dashboard.value ? (
//                       <div>
//                         <div className="text-2xl font-bold text-slate-800 mb-1">
//                           {dashboard.value}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           {dashboard.subtitle}
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-2">
//                         {dashboard.chart === 'pie' && (
//                           <div className="flex items-center space-x-2">
//                             <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-r-green-500 border-b-orange-500"></div>
//                             <div className="space-y-1">
//                               <div className="flex items-center space-x-1">
//                                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                                 <span className="text-xs text-gray-600">Scope 1: 65%</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                                 <span className="text-xs text-gray-600">Scope 2: 25%</span>
//                               </div>
//                               <div className="flex items-center space-x-1">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                                 <span className="text-xs text-gray-600">Scope 3: 10%</span>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                         {dashboard.chart === 'bar' && (
//                           <div className="space-y-1">
//                             <div className="flex items-center justify-between">
//                               <div className="w-12 h-2 bg-green-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">65%</span>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">25%</span>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <div className="w-4 h-2 bg-orange-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">10%</span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}
//               </div> */}
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };
