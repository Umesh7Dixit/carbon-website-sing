"use client";

import Image from "next/image";
import background from "../../../public/start.png"; // Adjust path as needed
import { useContact } from "./ContactContext";


export default function SubscribeSection() {
      const { scrollToContact } = useContact();

  return (
    <section className="relative h-64 w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src={background}
        alt="Background"
        fill
        className="object-cover object-center"
        quality={100}
        priority
      />

      {/* Overlay for dark tint if needed */}
      <div className="absolute inset-0 bg-[#0c1e3b] opacity-90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-lg md:text-xl font-light mb-4">
          Receive updates from RePut
        </h2>
        <button onClick={scrollToContact} className="bg-white text-[#0c1e3b] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all">
          Subscribe
        </button>
      </div>
    </section>
  );
}
