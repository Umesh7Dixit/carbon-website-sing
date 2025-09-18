"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(parseFloat(start.toFixed(0)));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

export default function CarbonZero(){
    
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-6" ref={ref}>
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Accelerate Your Path To Net Zero
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-2">
          With Carbon Zero
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-green-500 text-5xl font-bold">
            {startCount ? <Counter target={90} /> : 0}%
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            faster carbon insights
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Cut down manual calculations with automated data capture and AI-powered processing.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-green-500 text-5xl font-bold">
            {startCount ? <Counter target={150} /> : 0}+
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            days saved in reporting
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Streamline compliance with ready-to-use templates for BURSA, GHG Protocol, and ESG frameworks.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-green-500 text-5xl font-bold">
            {startCount ? <Counter target={25} /> : 0}x
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            more efficient audits
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            Generate investor- and regulator-ready carbon and ESG reports in just a few clicks.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition">
          Request a demo
        </button>
      </div>
    </div>
  );
};

// export default ;
