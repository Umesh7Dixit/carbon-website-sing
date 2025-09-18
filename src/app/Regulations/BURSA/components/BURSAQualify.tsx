// app/components/EUDRQualify.tsx

"use client";

import React from "react";
// import { CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";

// const commodities = [
//   { name: "Palm oil & derived products", icon: "🌴" },
//   { name: "Rubber", icon: "🛞" },
//   { name: "Cocoa", icon: "🍫" },
//   { name: "Cattle (beef & leather)", icon: "🥩" },
//   { name: "Timber & wood products", icon: "🪵" },
// ];

// const criteria = [
//   {
//     text: "Deforestation-free (no land cleared after 31 Dec 2020)",
//     color: "bg-emerald-600",
//   },
//   { text: "Legally produced under Malaysian laws", color: "bg-green-500" },
//   {
//     text: "Traceable with geolocation data (plantation/plot level)",
//     color: "bg-teal-600",
//   },
// ];

export default function BURSAQualify(){
//   const [selected, setSelected] = useState<string | null>(null);

  return (
    // <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    //     {/* Left Card */}
    //     <div className="bg-white shadow-md rounded-xl p-6 text-black">
    //       <h3 className="text-lg font-semibold text-white bg-emerald-900 rounded-md px-3 py-2 inline-block">
    //         CarbonScan.ai
    //       </h3>
    //       <h2 className="mt-4 text-xl font-semibold text-gray-800">
    //         Does My Business Qualify Under
    //       </h2>
    //       <p className="text-gray-600 text-sm">
    //         EUDR applies to specific forest-risk commodities and
    //         qualification criteria
    //       </p>

    //       {/* Commodities */}
    //       <div className="mt-6">
    //         <h4 className="font-medium text-gray-700 mb-2">Forest-Risk Commodities</h4>
    //         <ul className="space-y-2">
    //           {commodities.map((item) => (
    //             <li
    //               key={item.name}
    //               className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition ${
    //                 selected === item.name
    //                   ? "border-emerald-600 bg-emerald-50"
    //                   : "border-gray-200"
    //               }`}
    //               onClick={() => setSelected(item.name)}
    //             >
    //               <span className="text-xl">{item.icon}</span>
    //               <span className="text-gray-800 text-sm">{item.name}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Criteria */}
    //       <div className="mt-6">
    //         <h4 className="font-medium text-gray-700 mb-2">Qualification Criteria</h4>
    //         <ul className="space-y-2">
    //           {criteria.map((c) => (
    //             <li
    //               key={c.text}
    //               className={`flex items-center gap-2 text-white text-sm rounded-md px-3 py-2 ${c.color}`}
    //             >
    //               <CheckCircle size={16} />
    //               {c.text}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Compliance */}
    //       <div className="mt-6">
    //         <h4 className="font-medium text-gray-700 mb-2">Compliance Requirements</h4>
    //         <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
    //           <li>Submit due diligence statements</li>
    //           <li>Maintain records for at least 5 years</li>
    //         </ul>
    //       </div>

    //       <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg py-2 transition">
    //         Enhance Supply Chain Transparency
    //       </button>
    //     </div>

    //     {/* Right Info Section */}
    //     <div className="bg-white shadow-md rounded-xl p-6">
    //       <h2 className="flex items-center gap-2 text-2xl font-semibold text-emerald-700">
    //         <Leaf size={24} className="text-emerald-600" />
    //         Does My Business Qualify Under EUDR?
    //       </h2>

    //       <p className="mt-4 text-gray-700 text-sm leading-relaxed">
    //         EUDR applies to specific forest-risk commodities and their derived
    //         products. These include:
    //       </p>

    //       <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
    //         <li>Palm oil and derived products</li>
    //         <li>Rubber (natural rubber and finished goods)</li>
    //         <li>Cocoa and chocolate-based products</li>
    //         <li>Coffee</li>
    //         <li>Cattle (beef & leather)</li>
    //         <li>
    //           Timber & wood products (including paper, furniture, plywood, etc.)
    //         </li>
    //       </ul>

    //       <p className="mt-4 text-gray-700 text-sm leading-relaxed">
    //         If your goods fall under these categories when exported to the EU,
    //         you must ensure that they are:
    //       </p>

    //       <ol className="mt-3 list-decimal list-inside text-gray-700 text-sm space-y-1">
    //         <li>Deforestation-free (no land cleared after 31 Dec 2020)</li>
    //         <li>Legally produced according to Malaysian laws</li>
    //         <li>
    //           Traceable with geolocation data provided down to the plantation or
    //           plot level
    //         </li>
    //       </ol>

    //       <p className="mt-4 text-gray-700 text-sm leading-relaxed">
    //         Exporters will also be required to submit due diligence statements
    //         and maintain records for at least five years. Ensuring supply chain
    //         transparency is the most important step to compliance.
    //       </p>

    //       <button className="mt-6 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg py-2 px-5 transition">
    //         Know more →
    //       </button>
    //     </div>
    //   </div>
    // </section>


         <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left small card (image) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/busmallcard.png" // 👈 place your small card image in /public
            alt="CarbonScan card"
            width={800}
            height={800}
            className="w-full max-w-[570px]"
          />
        </div>

        {/* Right big card (image + button overlay) */}
        <div className="relative flex justify-center md:justify-start">
          <Image
            src="/bursalarge.png" // 👈 place your big card image in /public
            alt="Does my business qualify card"
            width={700}
            height={700}
            className=" w-full"
          />

          {/* Button overlay at bottom */}
          <div className="absolute bottom-10 left-0 right-[40%] flex justify-center">
            <button className="bg-[#8DD95B] hover:bg-emerald-700 text-white font-medium rounded-lg px-6 py-2 shadow-md transition">
              Know more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

