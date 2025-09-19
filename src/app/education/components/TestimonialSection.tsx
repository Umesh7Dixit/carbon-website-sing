'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialSection(){
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        {/* Container with background and border */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white border-gray-200 px-8 py-12 md:px-16 md:py-16 text-center relative"
        >
          {/* Top border accent */}
          <div className="absolute top-0 left-8 right-8 h-0.5 bg-gray-200"></div>
          
          {/* Stars Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center items-center gap-1 mb-8"
          >
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut" 
                }}
              >
                <Star 
                  className="w-8 h-8 fill-green-400 text-green-400"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1A3A3A] leading-relaxed mb-8 italic"
          >
            &quot;SmartCarbon&apos;s Climate Reality check presentation was superb! It raised all the right challenges but in a way that was a lot more accessible than I&apos;ve seen elsewhere.&quot;
          </motion.blockquote>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="text-[#1A3A3A] font-semibold text-lg mb-1">
              Paul W Irwin-Rhodes
            </div>
            <div className="text-[#1A3A3A] text-base">
              Head of Sustainability and SHE, Greggs Plc
            </div>
          </motion.div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gray-200"></div>

          {/* Decorative dot */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
            className="absolute bottom-6 right-8 w-2 h-2 bg-red-500 rounded-full"
          ></motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};
