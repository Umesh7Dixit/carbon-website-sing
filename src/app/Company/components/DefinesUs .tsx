"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Purpose",
    content:
      "Guides decisions and actions with a planetary mission. Every choice we make is filtered through our commitment to creating positive impact for the world we share.",
  },
  {
    title: "Integrity",
    content:
      "Transparency and honesty as the baseline. We build trust through consistent actions, open communication, and unwavering commitment to our values.",
  },
  {
    title: "Grit",
    content:
      "Perseverance and relentless pursuit of progress. We embrace challenges as opportunities to grow and never give up on our mission to create meaningful change.",
  },
];

export default function DefinesUs(){
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-[#0F3732] w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Tabs */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-white text-3xl sm:text-[60px] font-bold">
              What <span className="italic text-green-400">Defines</span> Us ?
            </h2>
            <div className="mt-4 flex flex-col space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left text-[40px] font-medium transition-colors ${
                    activeTab.title === tab.title
                      ? "text-green-400"
                      : "text-gray-200 hover:text-green-300"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="border-l border-green-400 pl-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-white text-[40px] leading-relaxed"
              >
                {activeTab.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

