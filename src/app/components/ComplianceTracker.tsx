"use client";
import Image from "next/image";
import { useContact } from "../components/ContactContext"; 


export default function ComplianceTracker() {
    const { scrollToContact } = useContact();
  
  return (
    <section className="w-full bg-[#0f2d2a] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-[48px] font-semibold text-white leading-snug mb-4">
            Want to know more on <span className="text-[#8DD95B]">BURSA</span> or <span className="text-[#8DD95B]">SGX</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-6 text-[20px]">
            Check your compliance readiness in seconds.
          </p>
          <button onClick={scrollToContact} className="px-6 py-3 bg-[#8DD95B] text-[#0f2d2a] font-semibold rounded-full shadow-md hover:bg-[#8dd95bd2] transition">
            Explore the Compliance Tracker
          </button>
        </div>

        {/* Right Content - Single Image */}
        <div className="flex justify-center">
          <Image
            src="/cptracker.png" // replace with your image
            alt="Compliance Tracker"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
