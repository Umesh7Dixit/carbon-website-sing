import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Meter(){
  const [hoveredMeter, setHoveredMeter] = useState(null);

  const metrics = [
    {
      id: 1,
      title: "PERMANENT STORAGE",
      value: "100+",
      unit: "yrs",
      percentage: 85,
      description: "CO₂ securely locked in building materials (Traditional CCS: <30 yrs; CCU 3x longer)",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "COST OF UTILIZATION",
      value: "$28.0",
      unit: "/te CO₂",
      percentage: 75,
      description: "vs Traditional CCS: $45— —60/te CO₂ (~40% lower cost)",
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "INITIAL CAPEX",
      value: "$320.0M",
      unit: "",
      percentage: 70,
      description: "vs CCS plants: $500M+ (36% lower investment)",
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "CARBON CREDIT REVENUE",
      value: "$30.0",
      unit: "/te CO₂",
      percentage: 80,
      description: "Verified credits from long-term utilization",
      color: "from-green-400 to-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const meterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const CircularMeter = ({ metric, index }) => {
    const circumference = 2 * Math.PI * 55; // Increased radius from 45 to 55
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (metric.percentage / 100) * circumference;

    return (
      <motion.div
        variants={meterVariants}
        className="flex flex-col items-center text-center cursor-pointer group"
      >
        {/* Circular Progress Meter */}
        <div className="relative mb-6">
          <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 120 120"> {/* Increased from w-32 h-32 and viewBox 100x100 */}
            {/* Background Circle */}
            <circle
              cx="60" /* Adjusted center from 50 to 60 */
              cy="60" /* Adjusted center from 50 to 60 */
              r="55" /* Increased radius from 45 to 55 */
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
              className="opacity-30"
            />
            
            {/* Static Progress Circle */}
            <motion.circle
              cx="60" /* Adjusted center from 50 to 60 */
              cy="60" /* Adjusted center from 50 to 60 */
              r="55" /* Increased radius from 45 to 55 */
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ 
                duration: 1.5,
                ease: "easeOut",
                delay: index * 0.3
              }}
            />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
              {metric.value}
            </div>
            {metric.unit && (
              <div className="text-sm lg:text-base text-gray-600 font-medium">
                {metric.unit}
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wide group-hover:text-green-600 transition-colors duration-300">
          {metric.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed max-w-56 group-hover:text-gray-800 transition-colors duration-300"> {/* Increased max-width from max-w-48 to max-w-56 */}
          {metric.description}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Demand for carbon capture, utilization, and storage is accelerating
          </h1>
        </motion.div>

        {/* Content Paragraphs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto mb-20 space-y-6"
        >
          <motion.p 
            variants={textVariants}
            className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
          >
            Traditional carbon capture systems often focus only on short-term storage, offering limited long-term benefits. Carbon Scan.ai 
            enables industries to go further by transforming captured CO₂ into durable construction materials such as bricks and cement 
            raw inputs. This ensures the carbon is locked in for decades, creating both environmental and economic value.
          </motion.p>

          <motion.p 
            variants={textVariants}
            className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
          >
            By embedding CO₂ directly into building materials, companies can reduce emissions, lower reliance on traditional cement 
            processes, and contribute to a more sustainable construction sector. Importantly, this approach not only supports 
            decarbonization but also makes businesses eligible for verified carbon credits, opening new revenue streams while meeting 
            global sustainability expectations.
          </motion.p>

          <motion.p 
            variants={textVariants}
            className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
          >
            A growing number of Malaysian and international firms are exploring CCU with Carbon Scan.ai, as it offers long-term storage, 
            compliance readiness, and financial incentives through carbon markets.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {metrics.map((metric, index) => (
            <CircularMeter 
              key={metric.id} 
              metric={metric} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};


















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export default  function Meter(){
//   const [hoveredMeter, setHoveredMeter] = useState(null);

//   const metrics = [
//     {
//       id: 1,
//       title: "PERMANENT STORAGE",
//       value: "100+",
//       unit: "yrs",
//       percentage: 85,
//       description: "CO₂ securely locked in building materials (Traditional CCS: <30 yrs; CCU 3x longer)",
//       color: "from-green-400 to-green-600"
//     },
//     {
//       id: 2,
//       title: "COST OF UTILIZATION",
//       value: "$28.0",
//       unit: "/te CO₂",
//       percentage: 75,
//       description: "vs Traditional CCS: $45— —60/te CO₂ (~40% lower cost)",
//       color: "from-green-400 to-green-600"
//     },
//     {
//       id: 3,
//       title: "INITIAL CAPEX",
//       value: "$320.0M",
//       unit: "",
//       percentage: 70,
//       description: "vs CCS plants: $500M+ (36% lower investment)",
//       color: "from-green-400 to-green-600"
//     },
//     {
//       id: 4,
//       title: "CARBON CREDIT REVENUE",
//       value: "$30.0",
//       unit: "/te CO₂",
//       percentage: 80,
//       description: "Verified credits from long-term utilization",
//       color: "from-green-400 to-green-600"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const meterVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.9,
//       y: 30 
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const CircularMeter = ({ metric, index }) => {
//     const circumference = 2 * Math.PI * 45;
//     const strokeDasharray = circumference;
//     const strokeDashoffset = circumference - (metric.percentage / 100) * circumference;

//     return (
//       <motion.div
//         variants={meterVariants}
//         className="flex flex-col items-center text-center cursor-pointer group"
//       >
//         {/* Circular Progress Meter */}
//         <div className="relative mb-6">
//           <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
//             {/* Background Circle */}
//             <circle
//               cx="50"
//               cy="50"
//               r="45"
//               stroke="#e5e7eb"
//               strokeWidth="8"
//               fill="none"
//               className="opacity-30"
//             />
            
//             {/* Static Progress Circle */}
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="45"
//               stroke="url(#gradient)"
//               strokeWidth="8"
//               fill="none"
//               strokeLinecap="round"
//               strokeDasharray={strokeDasharray}
//               initial={{ strokeDashoffset: circumference }}
//               animate={{ strokeDashoffset }}
//               transition={{ 
//                 duration: 1.5,
//                 ease: "easeOut",
//                 delay: index * 0.3
//               }}
//             />
            
//             {/* Gradient Definition */}
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#10b981" />
//                 <stop offset="100%" stopColor="#059669" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Center Value */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center">
//             <div className="text-3xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
//               {metric.value}
//             </div>
//             {metric.unit && (
//               <div className="text-sm text-gray-600 font-medium">
//                 {metric.unit}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Title */}
//         <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wide group-hover:text-green-600 transition-colors duration-300">
//           {metric.title}
//         </h3>

//         {/* Description */}
//         <p className="text-xs text-gray-600 leading-relaxed max-w-48 group-hover:text-gray-800 transition-colors duration-300">
//           {metric.description}
//         </p>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
//             Demand for carbon capture, utilization, and storage is accelerating
//           </h1>
//         </motion.div>

//         {/* Content Paragraphs */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-6xl mx-auto mb-20 space-y-6"
//         >
//           <motion.p 
//             variants={textVariants}
//             className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
//           >
//             Traditional carbon capture systems often focus only on short-term storage, offering limited long-term benefits. Carbon Scan.ai 
//             enables industries to go further by transforming captured CO₂ into durable construction materials such as bricks and cement 
//             raw inputs. This ensures the carbon is locked in for decades, creating both environmental and economic value.
//           </motion.p>

//           <motion.p 
//             variants={textVariants}
//             className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
//           >
//             By embedding CO₂ directly into building materials, companies can reduce emissions, lower reliance on traditional cement 
//             processes, and contribute to a more sustainable construction sector. Importantly, this approach not only supports 
//             decarbonization but also makes businesses eligible for verified carbon credits, opening new revenue streams while meeting 
//             global sustainability expectations.
//           </motion.p>

//           <motion.p 
//             variants={textVariants}
//             className="text-gray-700 text-base lg:text-lg leading-relaxed text-center"
//           >
//             A growing number of Malaysian and international firms are exploring CCU with Carbon Scan.ai, as it offers long-term storage, 
//             compliance readiness, and financial incentives through carbon markets.
//           </motion.p>
//         </motion.div>

//         {/* Metrics Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
//         >
//           {metrics.map((metric, index) => (
//             <CircularMeter 
//               key={metric.id} 
//               metric={metric} 
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };
