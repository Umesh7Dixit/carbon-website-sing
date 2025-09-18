// "use client";

// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// import { useRef } from "react";

// const screens = [
//   { id: 1, color: "bg-red-500", text: "Screen 1" },
//   { id: 2, color: "bg-blue-500", text: "Screen 2" },
//   { id: 3, color: "bg-green-500", text: "Screen 3" },
//   { id: 4, color: "bg-yellow-500", text: "Screen 4" },
//   { id: 5, color: "bg-purple-500", text: "Screen 5" },
// ];

// function Screen({
//   index,
//   total,
//   scrollYProgress,
//   color,
//   text,
// }: {
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
//   color: string;
//   text: string;
// }) {
//   const y = useTransform(
//     scrollYProgress,
//     [index / total, (index + 1) / total],
//     ["100%", "0%"]
//   );

//   const scale = useTransform(
//     scrollYProgress,
//     [index / total, (index + 1) / total],
//     [0.9, 1]
//   );

//   return (
//     <motion.div
//       style={{ y, scale }}
//       className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white text-4xl font-bold ${color}`}
//     >
//       {text}
//     </motion.div>
//   );
// }

// export default function FullPageScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // dynamic height = number of screens * 100vh
//   const totalHeight = `${screens.length * 100}vh`;

//   return (
//     <section className="relative z-0"> {/* ✅ isolates styling from rest of site */}
//       <div ref={containerRef} className="relative" style={{ height: totalHeight }}>
//         {screens.map((screen, index) => (
//           <Screen
//             key={screen.id}
//             index={index}
//             total={screens.length}
//             scrollYProgress={scrollYProgress}
//             color={screen.color}
//             text={screen.text}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }














"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const screens = [
  { id: 1, color: "bg-red-500", text: "Screen 1" },
  { id: 2, color: "bg-blue-500", text: "Screen 2" },
  { id: 3, color: "bg-green-500", text: "Screen 3" },
  { id: 4, color: "bg-yellow-500", text: "Screen 4" },
  { id: 5, color: "bg-purple-500", text: "Screen 5" },
];

function Screen({
  index,
  total,
  scrollYProgress,
  color,
  text,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  color: string;
  text: string;
}) {
  // motion values for animation
  const y = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    ["100%", "0%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0.9, 1]
  );

  return (
    <motion.div
      style={{ y, scale }}
      className={`snap-start fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white text-4xl font-bold ${color}`}
    >
      {text}
    </motion.div>
  );
}

export default function FullPageScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // dynamic height = number of screens * 100vh
  const totalHeight = `${screens.length * 100}vh`;

  return (
    <section className="relative z-0">
      <div
        ref={containerRef}
        style={{ height: totalHeight }}
        className="relative snap-y snap-mandatory overflow-y-scroll h-screen"
      >
        {screens.map((screen, index) => (
          <Screen
            key={screen.id}
            index={index}
            total={screens.length}
            scrollYProgress={scrollYProgress}
            color={screen.color}
            text={screen.text}
          />
        ))}
      </div>
    </section>
  );
}
