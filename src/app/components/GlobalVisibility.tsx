"use client"


import Image from "next/image";
import mapImage from "../../../public/map.jpg"; // update path if needed
import { useContact } from "./ContactContext";


export default function GlobalVisibility() {

      const { scrollToContact } = useContact();


  return (
    <div
      className="h-screen relative bg-cover bg-center min-h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/backgroundLayer.png')", // put your swirl background image here
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 py-16 gap-12">
        {/* Left Section */}
        <div className="text-white max-w-lg">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Get real-time visibility <br /> over your global operations
          </h2>

          {/* Tags */}
          <div className="flex gap-4 flex-wrap mb-6">
            {["Enhance", "Adapt", "Optimize"].map((label, index) => (
              <span
                key={index}
                className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium shadow-md"
              >
                {label}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button  onClick={scrollToContact}  className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
            Book A Demo <span className="text-xl">→</span>
          </button>
        </div>

        {/* Right Section: Map Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={mapImage}
            alt="Global map screenshot"
            className="rounded-xl shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
