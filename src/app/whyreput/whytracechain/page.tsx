







"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import HomeTracechain from "./components/HomeTracechain";
import WhyBlockchain from "./components/whyBlockchain";
import WhyMapping from "./components/whyMapping";
import WhyCustody from "./components/whyCustody";
import WhyRisk from "./components/whyRisk";

const screens = [
  { id: 1, component: <HomeTracechain /> },
  { id: 2, component: <WhyBlockchain /> },
  { id: 3, component: <WhyMapping /> },
  { id: 4, component: <WhyCustody /> },
  { id: 5, component: <WhyRisk /> },
];

function Screen({
  index,
  total,
  scrollYProgress,
  children,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const screenProgress = 1 / total;
  const start = index * screenProgress;
  const end = start + screenProgress;

  // Smooth transitions between screens
  const y = useTransform(
    scrollYProgress,
    [start - screenProgress, start, end, end + screenProgress],
    ["100vh", "0vh", "0vh", "-100vh"]
  );

  const scale = useTransform(
    scrollYProgress,
    [start - screenProgress * 0.5, start, end, end + screenProgress * 0.5],
    [0.8, 1, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start - screenProgress * 0.9, start, end, end + screenProgress * 0.3],
    [0, 1, 1, 0]
  );

  

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Whytracechain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total height based on number of screens
  const totalHeight = screens.length * 100;

  return (
    <>
      {/* Animated screens section */}
      <section className="relative">
        <div
          ref={containerRef}
          style={{ height: `${totalHeight}vh` }}
          className="relative"
        >
          {/* Sticky container for the animation */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
            {screens.map((screen, index) => (
              <Screen
                key={screen.id}
                index={index}
                total={screens.length}
                scrollYProgress={scrollYProgress}
              >
                {screen.component}
              </Screen>
            ))}
          </div>
        </div>
      </section>
      
      {/* This section will naturally appear after the animated screens */}
      {/* The ContactForm and Footer from layout.tsx will render here */}
    </>
  );
}


















