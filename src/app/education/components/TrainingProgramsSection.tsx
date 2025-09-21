'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContact } from "../../components/ContactContext"; 


export default function ComplianceTrainingSection(){
    const { scrollToContact } = useContact();

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8"
            >
              Compliance and Carbon Training Programs
            </motion.h1>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8"
            >
              <p>
                Empowering businesses and people with future-ready skills for a sustainable world.
              </p>

              <p>
                We offer training programs that equip organizations and individuals with the skills to navigate today&apos;s sustainability landscape. Courses cover compliance essentials like CBAM, EUDR, Bursa, SOX, and global frameworks such as GHG Protocol and TCFD, along with specialized carbon management modules.
              </p>

              <p>
                From short workshops to certifications, our programs serve sustainability leaders, compliance officers, energy managers, business owners, and professionals across industries. Each course blends expert instruction with real-world case studies, giving participants practical insights to drive measurable impact.
              </p>

              <p>
                Whether upskilling teams or building personal expertise, our training helps you stay compliant, cut emissions, and lead confidently in a low-carbon economy.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Organization level course
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Courses for individual
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/ppt.png"
                alt="Compliance training session with people in a conference room looking at charts on a large screen"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay for better visual effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
