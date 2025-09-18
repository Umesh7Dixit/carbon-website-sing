// "use client";
// import { motion } from "framer-motion";

// export default function DynamicSection() {
//   const data = [
//     {
//       id: 1,
//       image: "/images/sample1.png",
//       title: "Sustainable Energy",
//       desc: "We focus on renewable energy solutions for a better tomorrow.",
//     },
//     {
//       id: 2,
//       image: "/images/sample2.png",
//       title: "Green Innovation",
//       desc: "Innovating with eco-friendly technology for industries worldwide.",
//     },
//     {
//       id: 3,
//       image: "/images/sample3.png",
//       title: "Carbon Neutral Future",
//       desc: "Together we can reduce emissions and build a carbon-neutral world.",
//     },
//   ];

//   return (
//     <div className="space-y-16 p-10">
//       {data.map((item, index) => (
//         <motion.div
//           key={item.id}
//           className={`flex flex-col md:flex-row items-center gap-10 ${
//             index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//           }`}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: index * 0.2 }}
//         >
//           {/* Image */}
//           <motion.img
//             src={item.image}
//             alt={item.title}
//             className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
//             whileHover={{ rotate: 2 }}
//           />

//           {/* Text */}
//           <motion.div
//             className="w-full md:w-1/2 space-y-4"
//             whileHover={{ scale: 1.03 }}
//           >
//             <h2 className="text-3xl font-bold text-green-600">{item.title}</h2>
//             <p className="text-gray-600 text-lg">{item.desc}</p>
//             <button className="px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition">
//               Learn More
//             </button>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }











import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function DynamicSection(){

  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll progress (0 to 1)
  const scrollProgress = Math.min(scrollY / 800, 1);
  
  // Calculate transforms based on scroll
  const headerOpacity = Math.max(1 - scrollProgress * 2, 0);
  const headerTranslateY = scrollProgress * -100;
  
  const centerImageScale = Math.max(1 - scrollProgress * 0.5, 0.6);
  const centerImageOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  
  const gridOpacity = Math.max((scrollProgress - 0.3) * 2, 0);
  const gridTranslateY = Math.max(50 - scrollProgress * 100, 0);

  return (
    <div className="min-h-[200vh] bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
      {/* Header Section */}
      <div 
        className="fixed top-0 left-0 right-0 z-20 text-center pt-12 pb-8 transition-all duration-700 ease-out"
        style={{
          opacity: headerOpacity,
          transform: `translateY(${headerTranslateY}px)`
        }}
      >
        <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600 tracking-wide">AI Powered Technology</span>
        </div>

        <h1 className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gray-800">ZERO</span>
          <span className="text-emerald-600 ml-2">Carbon</span>
        </h1>

        <div className={`max-w-lg mx-auto mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            All Your ESG & Compliance Needs — Effortlessly Handled
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The same traceability that builds trust also powers seamless ESG reporting.
          </p>
        </div>

        <button className={`bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Request a demo →
        </button>
      </div>

      {/* Center Image - First Screen */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div 
          className="relative transition-all duration-700 ease-out"
          style={{
            transform: `scale(${centerImageScale})`,
            opacity: centerImageOpacity
          }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-full relative overflow-hidden shadow-2xl">
            <div className="absolute inset-4 bg-green-600 rounded-full opacity-60"></div>
            <div className="absolute inset-8 bg-green-700 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-white text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">NET</div>
                <div className="text-3xl md:text-4xl font-bold">ZERO</div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-1/3 right-4 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Side Images - First Screen */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Left top image */}
        <div 
          className="absolute top-32 left-16 transition-all duration-700 ease-out"
          style={{
            opacity: centerImageOpacity,
            transform: `translateY(${scrollProgress * 200}px) scale(${Math.max(1 - scrollProgress * 0.3, 0.8)})`
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg shadow-lg relative overflow-hidden">
            <Image src="/api/placeholder/128/128" alt="Smart City" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Right top image */}
        <div 
          className="absolute top-32 right-16 transition-all duration-700 ease-out"
          style={{
            opacity: centerImageOpacity,
            transform: `translateY(${scrollProgress * -150}px) scale(${Math.max(1 - scrollProgress * 0.3, 0.8)})`
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-lg shadow-lg relative overflow-hidden">
            <Image src="/api/placeholder/128/128" alt="Hands with Net Zero" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Left bottom image */}
        <div 
          className="absolute bottom-32 left-24 transition-all duration-700 ease-out"
          style={{
            opacity: centerImageOpacity,
            transform: `translateY(${scrollProgress * -100}px) scale(${Math.max(1 - scrollProgress * 0.3, 0.8)})`
          }}
        >
          <div className="w-28 h-28 bg-gradient-to-br from-green-200 to-green-400 rounded-lg shadow-lg relative overflow-hidden">
            <Image src="/api/placeholder/112/112" alt="Forest Sustainability" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Right bottom image */}
        <div 
          className="absolute bottom-32 right-24 transition-all duration-700 ease-out"
          style={{
            opacity: centerImageOpacity,
            transform: `translateY(${scrollProgress * 180}px) scale(${Math.max(1 - scrollProgress * 0.3, 0.8)})`
          }}
        >
          <div className="w-28 h-28 bg-gradient-to-br from-teal-200 to-teal-400 rounded-lg shadow-lg relative overflow-hidden">
            <Image src="/api/placeholder/112/112" alt="Green Technology" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Second Screen - Grid Layout */}
      <div 
        className="fixed inset-0 flex items-center justify-center transition-all duration-700 ease-out"
        style={{
          opacity: gridOpacity,
          transform: `translateY(${gridTranslateY}px)`
        }}
      >
        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full max-w-4xl px-8">
          {/* Top Left */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Smart City Technology" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Center - NET ZERO */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Forest Canopy" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-emerald-600 bg-opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-1">NET</div>
                  <div className="text-2xl font-bold">ZERO</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Sustainable Hands" fill className="object-cover" />
              <div className="absolute inset-0 bg-emerald-600 bg-opacity-20"></div>
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-8 bg-emerald-800 bg-opacity-80 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">NET ZERO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-green-300 to-green-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Green Innovation" fill className="object-cover" />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-8 bg-green-800 bg-opacity-80 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">NET ZERO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Center */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Urban Sustainability" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-teal-300 to-teal-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
              <Image src="/api/placeholder/300/200" alt="Environmental Technology" fill className="object-cover" />
              <div className="absolute inset-0 bg-teal-600 bg-opacity-20"></div>
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div 
          className="transition-opacity duration-500"
          style={{ opacity: scrollProgress < 0.8 ? 1 : 0 }}
        >
          <div className="flex flex-col items-center text-gray-600">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mb-2 relative">
              <div className="w-1 h-2 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
            <span className="text-xs">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};
