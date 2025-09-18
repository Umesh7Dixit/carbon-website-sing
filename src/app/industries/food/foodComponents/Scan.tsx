// app/components/FoodSystem.tsx
"use client";
import Image from "next/image";

export default function Scan() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 gap-12">
      {/* Left Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-full bg-green-700 p-6 relative flex items-center justify-center w-[360px] h-[360px]">
          <Image
            src="/scan.png" // Replace with your image path
            alt="Food Can & Mobile App"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 max-w-xl text-center md:text-left space-y-6">
        <div>
          <h3 className="font-semibold text-[20px] text-gray-800 mb-2">
            Enable circular food systems:
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            Capture data from every stage of a product’s life cycle—farming,
            processing, distribution, and after-life packaging—and implement
            better strategies for reuse, recycling, and waste minimization.
          </p>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold text-gray-800 mb-2">
            Ensure consumer trust:
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            Today’s consumers want safe, sustainable, and ethically sourced food.
            By giving them verified origin, ingredient, and environmental impact
            data, you build long-term loyalty and future-proof your brand.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] text-gray-800 mb-2">
            Streamline Global Compliance:
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            Easily meet varied food safety, labeling, and sustainability rules
            across multiple countries with one centralized, verifiable Food DPP—
            reducing delays and ensuring smooth market entry.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] text-gray-800 mb-2">
            Enable Smarter Reverse Logistics:
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            With Smart QRs on every product, you can quickly trace and retrieve
            items if quality issues arise. This ensures faster recalls, safer
            supply chains, and the ability to recover materials for reuse or safe
            disposal—protecting both consumers and your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
