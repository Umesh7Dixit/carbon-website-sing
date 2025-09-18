
//    "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function IndustryTransformations() {
//   const industries = [
//     {
//       title: "Textile & Fashion",
//     //   description: "Our platform enhances the textile and fashion industry by offering sustainable and traceable solutions.",
//       img: "/textile&fashion.png", // Replace with actual image path
//     },
//     {
//       title: "Food & Beverage",
//     //   description:"Revolutionizing food production with traceability and sustainability, helping track every ingredient.",
//       img: "/food&Beverage.png", // Replace with actual image path
//     },
//     {
//       title: "Personal Care",
//     //   description:"Optimizing personal care products to ensure traceability and transparency throughout the manufacturing process.",
//       img: "/personalCare.png", // Replace with actual image path
//     },
//     {
//       title: "Jewellery",
//     //   description:"Providing secure and verified data for jewellery sourcing, ensuring authenticity and sustainability.",
//       img: "/Jewellery.png", // Replace with actual image path
//     },
//   ];

//   return (
//     <section className="bg-white py-16 px-6 md:px-16">
//       {/* Header Section */}
       
//       <div className="text-center mb-20">

//          <h2 className=" text-xl md:text-xl font-semibold mb-10 text-[#29442C]">
//          What we do
//         </h2>
//         <h2 className="text-black text-3xl md:text-4xl font-semibold">
//           Powering Transformation{" "}
//           <span className="text-green-600">Across Industries</span>
//         </h2>
//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           Our platform is designed to adapt to the complex realities of high-impact industries from soil to shelf, mine to market.
//         </p>
//       </div>

//       {/* Industry Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//         {industries.map((industry, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {/* Card Image */}
//             <div className="w-full h-[500px] relative overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src={industry.img}
//                 alt={industry.title}
//                 width={500}
//                 height={300}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             {/* Card Title */}
//             {/* <h3 className="mt-4 text-xl font-semibold text-black">{industry.title}</h3> */}
//             {/* Card Description */}
//             {/* <p className="text-gray-600 mt-2 text-sm">{industry.description}</p> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



















"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, SetStateAction } from "react";

export default function IndustryTransformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const industries = [
    {
      title: "Textile & Fashion",
      description: "Our platform enhances the textile and fashion industry by offering sustainable and traceable solutions.",
      img: "/textile&fashion.png",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Food & Beverage",
      description: "Revolutionizing food production with traceability and sustainability, helping track every ingredient.",
      img: "/food&Beverage.png",
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Personal Care",
      description: "Optimizing personal care products to ensure traceability and transparency throughout the manufacturing process.",
      img: "/personalCare.png",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Jewellery",
      description: "Providing secure and verified data for jewellery sourcing, ensuring authenticity and sustainability.",
      img: "/Jewellery.png",
      color: "from-yellow-400 to-amber-400"
    },
    {
      title: "Pharmaceutical",
      description: "Ensuring pharmaceutical products are traceable, safe, and compliant with regulations, from manufacturing to delivery.",
      img: "/pharma.jpg",
      color: "from-yellow-400 to-amber-400"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === industries.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, industries.length]);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleCenterCardClick = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? industries.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === industries.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-xl md:text-xl font-semibold mb-10 text-[#29442C]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          What we do
        </motion.h2>
        <motion.h2 
          className="text-black text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powering Transformation{" "}
          <span className="text-green-600 relative">
            Across Industries
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our platform is designed to adapt to the complex realities of high-impact industries from soil to shelf, mine to market.
        </motion.p>
      </motion.div>

      {/* Main Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {industries.map((industry, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + industries.length) % industries.length;
              const isNext = index === (currentIndex + 1) % industries.length;
              const isFarLeft = index === (currentIndex - 2 + industries.length) % industries.length;
              const isFarRight = index === (currentIndex + 2) % industries.length;

              if (!isActive && !isPrev && !isNext && !isFarLeft && !isFarRight) return null;

              let xPosition = 0;
              let scale = 0.7;
              let zIndex = 1;
              let opacity = 0.4;
              let rotateY = 0;

              if (isActive) {
                xPosition = 0;
                scale = 1;
                zIndex = 10;
                opacity = 1;
                rotateY = 0;
              } else if (isPrev) {
                xPosition = -300;
                scale = 0.8;
                zIndex = 5;
                opacity = 0.7;
                rotateY = 25;
              } else if (isNext) {
                xPosition = 300;
                scale = 0.8;
                zIndex = 5;
                opacity = 0.7;
                rotateY = -25;
              } else if (isFarLeft) {
                xPosition = -500;
                scale = 0.6;
                zIndex = 2;
                opacity = 0.3;
                rotateY = 35;
              } else if (isFarRight) {
                xPosition = 500;
                scale = 0.6;
                zIndex = 2;
                opacity = 0.3;
                rotateY = -35;
              }

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{ perspective: "1000px" }}
                  initial={{ x: 600, opacity: 0, rotateY: -45 }}
                  animate={{ 
                    x: xPosition, 
                    scale, 
                    opacity,
                    rotateY,
                    zIndex
                  }}
                  exit={{ x: -600, opacity: 0, rotateY: 45 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    x: { duration: 0.8 },
                    scale: { duration: 0.6 },
                    opacity: { duration: 0.5 }
                  }}
                  onClick={() => isActive ? handleCenterCardClick() : goToSlide(index)}
                  whileHover={isActive ? {} : { scale: scale + 0.05, y: -10 }}
                >
                  <div className="relative w-80 h-[480px] md:w-96 md:h-[450px]">
                    {/* Card Background with Gradient */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.color} opacity-20`}
                      animate={isActive ? { opacity: 0.3 } : { opacity: 0.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Main Card */}
                    <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                      {/* Image Container */}
                      <div className="relative h-3/4 overflow-hidden">
                        <Image
                          src={industry.img}
                          alt={industry.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-700"
                          style={{ 
                            transform: isActive ? 'scale(1.05)' : 'scale(1)',
                            filter: isActive ? 'brightness(1.1)' : 'brightness(0.95)'
                          }}
                        />
                        
                        {/* Overlay for active card */}
                        {isActive && (
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        )}

                        {/* Progress bar for active card */}
                        {isActive && isAutoPlaying && (
                          <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 h-1/4 flex flex-col justify-center">
                        <motion.h3 
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isActive ? 'text-green-600' : 'text-gray-800'
                          }`}
                          animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {industry.title}
                        </motion.h3>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              className="text-gray-600 text-sm leading-relaxed"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {industry.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Active card glow effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl ring-4 ring-green-400/30 ring-offset-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 shadow-lg shadow-green-300/50' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
              {index === currentIndex && isAutoPlaying && (
                <motion.div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-green-500"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}