import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Target, FileText, Scale, Share2, UserCheck } from 'lucide-react';

export default function CarbonScanDeliverablesScreen(){
  const deliverables = [
    {
      icon: GitBranch,
      title: "Product lifecycle impact modeling",
      description: "Comprehensive analysis of environmental impacts across the entire product lifecycle"
    },
    {
      icon: Target,
      title: "Hotspot detection & analysis",
      description: "Identify critical areas of environmental impact within your supply chain"
    },
    {
      icon: FileText,
      title: "Scenario planning & alternatives testing",
      description: "Test different scenarios and evaluate alternative approaches for optimization"
    },
    {
      icon: Scale,
      title: "Comparative product benchmarking",
      description: "Compare your products against industry standards and competitors"
    },
    {
      icon: Share2,
      title: "Interactive & shareable insights",
      description: "Generate interactive reports and share insights with stakeholders"
    },
    {
      icon: UserCheck,
      title: "Dedicated expert guidance",
      description: "Access to sustainability experts for personalized guidance and support",
      badge: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       scale: 0.85
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.25, 0.25, 0.25, 0.75]
//       }
//     },
//     hover: {
//       y: -12,
//       scale: 1.03,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const iconVariants = {
//     hover: {
//       rotate: 360,
//       scale: 1.1,
//       transition: {
//         duration: 0.6,
//         ease: "easeInOut"
//       }
//     }
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
        //   variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            What CarbonScan.ai Delivers
          </h1>
        </motion.div>

        {/* Deliverables Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {deliverables.map((deliverable, index) => {
            const IconComponent = deliverable.icon;
            
            return (
              <motion.div
                key={index}
                // variants={cardVariants}
                whileHover="hover"
                className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-200 cursor-pointer group overflow-hidden"
              >
                {/* Badge for Dedicated expert guidance */}
                {deliverable.badge && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full"
                  ></motion.div>
                )}

                {/* Icon */}
                <motion.div 
                //   variants={iconVariants}
                  className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-8 group-hover:bg-green-200 transition-colors duration-400"
                >
                  <IconComponent className="w-10 h-10 text-green-600" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {deliverable.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  {deliverable.description}
                </p>

                {/* Gradient Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"></div>
                
                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-20"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
