"use client";

import Image from "next/image";
import { useContact } from "../../components/ContactContext"; 

export default function LearningPage() {
    const { scrollToContact } = useContact();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h1 className="text-[60px] font-bold text-[#1A3A3A] leading-snug">
            Empowering <br />
            Sustainability <br />
            Through Learning
          </h1>

          <p className="mt-4 text-[#1A3A3A] text-lg text-[24px] font-semibold">
            Compliance and carbon training designed for organizations and
            individuals to build future-ready skills.
          </p>

          <button
            // onClick={() => alert("✅ Expert will contact you soon!")}
            onClick={scrollToContact}
            className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-white font-medium shadow-md hover:bg-green-600 transition"
          >
            
            Speak to an expert 
            
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/education.png" // 👉 Save uploaded image in public/ as learning-image.png
            alt="Sustainability Learning"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
