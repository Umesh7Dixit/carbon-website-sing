import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useContact } from "../../../components/ContactContext"; 


export default function AccurateResultsScreen (){

    const { scrollToContact } = useContact();
  

  const features = [
    {
      title: "Trusted Methodology",
      description: "Carbon Scan uses globally recognised methods, adapted for Malaysian businesses, so you can be confident in your numbers."
    },
    {
      title: "Complete Footprint",
      description: "No missing data? No problem. Our smart-tested and average methods help you calculate a full footprint when detailed data isn't available."
    },
    {
      title: "Precision When You Need It",
      description: "Switch to activity-based calculations for the highest accuracy, or easily import emissions data from your existing systems."
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
//     hidden: { opacity: 0, x: 50 },
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
//     hidden: { opacity: 0, x: -50, scale: 0.9 },
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Content - Business Travel Form Image */}
          <motion.div
            // variants={imageVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/njini.png"
                alt="Business Travel Carbon Calculator"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Optional: Add a subtle border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-sm -z-10"></div>
            </div>

            {/* Floating Elements for Visual Interest */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full shadow-lg"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg"
            ></motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            
            {/* Main Heading */}
            <motion.div 
            // variants={itemVariants}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Accurate Results You Can Rely On
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={buttonVariants}>
              <motion.button
                variants={buttonVariants}
                onClick={scrollToContact}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Schedule a call
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
