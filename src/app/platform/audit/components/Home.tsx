"use client";

// import { useState } from "react";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 


export default function Home() {
  // const [showTrial, setShowTrial] = useState(false);
  // const [showDemo, setShowDemo] = useState(false);
    const { scrollToContact } = useContact();


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <Image
        src="/builder.png" // replace with your uploaded image path in /public
        alt="Energy Assessment"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 mr-110 text-start md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Achieve Energy Efficiency with <br />
          <span className="text-green-400">Energy Assessment Software</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Introducing mobile-first energy assessment software for growing teams
          of energy consultants, audits, utilities, and organizations
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            // onClick={() => setShowTrial(true)}
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition"
          >
            Start Free Trial
          </button>
          <button
            // onClick={() => setShowDemo(true)}
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Schedule Demo
          </button>
        </div>
      </div>

      {/* Interactive Modals */}
      {/* {showTrial && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <h2 className="text-xl font-bold mb-4" onClick={scrollToContact}>Start Free Trial</h2>
            <p className="text-gray-600 mb-4">
              Thanks for your interest! Our trial setup will be emailed to you.
            </p>
            <button
              onClick={() => setShowTrial(false)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <h2 className="text-xl font-bold mb-4" onClick={scrollToContact}>Schedule Demo</h2>
            <p className="text-gray-600 mb-4">
              Our team will reach out to schedule your personalized demo.
            </p>
            <button
              onClick={() => setShowDemo(false)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
