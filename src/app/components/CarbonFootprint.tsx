"use client";
import Image from "next/image";
import React from "react";

export default function CarbonFootprint() {
  return (
    <section className="bg-[#1A3A3A] py-16">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side text */}
          <div className="text-left lg:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Let’s do a quick calculation for your{" "}
              <span className="text-green-400">carbon footprint</span>
            </h1>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center bg-green-400 hover:bg-green-500 text-black font-medium px-6 py-3 rounded-full transition-colors"
              >
                Get Started
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <Image
              src="/cfcalc.png"
              alt="Carbon Simulation"
              fill
              className="object-conver"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

