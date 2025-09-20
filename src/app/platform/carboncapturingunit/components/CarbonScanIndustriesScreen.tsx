import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CarbonScanIndustriesScreen(){
  const industries = [
    {
      id: 1,
      title: "Cement Industry",
      image: "/cement.png"
    },
    {
      id: 2,
      title: "Palm Oil",
      image: "/oil.png"
    },
    {
      id: 3,
      title: "Automobile",
      image: "/automobile.png"
    },
    {
      id: 4,
      title: "Manufacturing",
      image: "/manufacturing.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Industry Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                
                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl lg:text-2xl font-bold text-center px-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.title}
                  </h3>
                </div>
                
                {/* Subtle Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-green-400/0 group-hover:ring-green-400/30 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-center">
            <span className="text-green-600 font-medium">CarbonScan.ai's</span> Carbon Capture & Utilization (CCU) technology offers cross-industry usability by converting captured CO<sub>2</sub> into durable raw materials for cement, bricks, and construction applications. In palm oil and food processing, it reduces refinery emissions while generating carbon credits; in cement and construction, it permanently stores CO<sub>2</sub> and enables low-carbon building materials; in transport and logistics, captured emissions can be repurposed into infrastructure blocks for ports, roads, and warehouses; in the automobile and manufacturing sectors, it supports net-zero goals by embedding carbon-negative materials into supply chains. Beyond these, CCU solutions extend to steel, power generation, mining, real estate, and chemical industries — creating scalable pathways for long-term CO<sub>2</sub> storage, cost savings, and monetizable carbon credits.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
