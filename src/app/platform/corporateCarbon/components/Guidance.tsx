import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default  function Guidance(){
  const features = [
    {
      title: "From Data to Action",
      description: "Our experts help you turn carbon data into practical insights with deep analysis of your biggest emission sources."
    },
    {
      title: "Save Time, Build Trust",
      description: "Simplify regulatory reporting and share clear, reliable carbon reports that build confidence with stakeholders in Malaysia and beyond."
    },
    {
      title: "Plan Ahead with Confidence",
      description: "Get tailored decarbonisation strategies and support for setting science- based targets—so you can move forward with clarity."
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

//   const itemVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

  return (
    <div className="h-[75vh] bg-[#1A3A3A]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Main Heading */}
            <motion.div 
            // variants={itemVariants}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Guidance You Can Count On
              </h1>
            </motion.div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                //   variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <motion.div
            // variants={imageVariants}
            className="relative"
          >
            <div className="relative  overflow-hidden">
              <Image
                src="/guidance.png"
                alt="Emissions Dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Dashboard Overlay Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> */}
              
              {/* Optional: Add a subtle glow effect */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-sm -z-10"></div> */}
            </div>

            {/* Floating Elements for Visual Interest */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full shadow-lg"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg"
            ></motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
