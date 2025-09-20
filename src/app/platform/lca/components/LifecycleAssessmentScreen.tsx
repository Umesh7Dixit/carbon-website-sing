import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Filter, Recycle, Cloud, TrendingUp, Shield } from 'lucide-react';

export default function LifecycleAssessmentScreen(){
  const services = [
    {
      icon: Factory,
      title: "Gate-to-Gate Life Cycle Assessment",
      description: "We carry out Gate-to-Gate Life Cycle Assessments (LCA) aligned with ISO 14044, evaluating the environmental impacts within factory operations - from the moment inputs enter production until finished outputs leave the facility."
    },
    {
      icon: Filter,
      title: "Cradle-to-Gate Life Cycle Assessment",
      description: "A Cradle-to-Gate LCA measures the footprint of a product from raw material extraction (cradle) up to the factory gate, before it reaches the customer. Following ISO 14044, we provide clear insights into upstream and production-related impacts."
    },
    {
      icon: Recycle,
      title: "Cradle-to-Grave Life Cycle Assessment",
      description: "With Cradle-to-Grave LCA, we assess the complete lifecycle of a product—from raw material extraction through use, disposal, and recycling. Based on ISO 14044, this approach provides a full picture of long-term environmental impacts."
    },
    {
      icon: Cloud,
      title: "Product Carbon Footprint (PCF)",
      description: "We calculate total greenhouse gas emissions in CO₂ equivalents under ISO 14067, identifying key emission sources and opportunities for reduction across the product lifecycle."
    },
    {
      icon: TrendingUp,
      title: "Comparative Life Cycle Assessment (CLCA)",
      description: "Comparative LCA enables businesses to assess and compare the environmental performance of different products, processes, or systems. Using ISO 14040 and ISO 14044 standards, we help you choose the option with the lowest impact."
    },
    {
      icon: Shield,
      title: "Assurance Support",
      description: "Our assurance service offers third-party verification of LCA studies, ensuring compliance with ISO 14040 and ISO 14044. Independent validation enhances credibility and builds trust in your sustainability reporting.",
      badge: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       y: -8,
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div
        //   variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Service Areas Within Product Lifecycle Assessment
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                // variants={cardVariants}
                whileHover="hover"
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer group"
              >
                {/* Badge for Assurance Support */}
                {/* {service.badge && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                )} */}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-green-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
