// // app/components/FoodPassport.tsx
// "use client";
// import Image from "next/image";

// export default function FoodPassport() {
//   return (
//     <section className="bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 gap-12">
//       {/* Left Text Section */}
//       <div className="flex-1 max-w-xl text-center md:text-left">
//         <p className="text-gray-600 w-[598px] text-[22px] leading-relaxed mb-4">
//           To sell food products across the regulated and evolved consumer conscious markets, 
//           brands must maintain{" "}
//           <span className="font-semibold text-gray-800">
//             a transparent, compliant, and sustainable supply chain
//           </span>{" "}
//           with all product and environmental data in one place.
//         </p>
//         <p className="text-gray-600 text-[22px] w-[598px] leading-relaxed">
//           RePut.ai’s{" "}
//           <span className="font-semibold text-gray-800">
//             Food Digital Product Passport and compliance management
//           </span>{" "}
//           work together to collect, verify, and share data across the supply chain—
//           including ingredient origin, GHG emissions, certifications, packaging impact,
//           and ESG metrics—ensuring every supplier meets destination-specific regulations 
//           and food safety standards.
//         </p>
//       </div>

//       {/* Right Image Section */}
//       <div className="flex-1 w-[530px] h-[530px] flex items-center justify-center">
//         <div className="rounded-full bg-green-700 p-6 relative flex items-center justify-center w-[320px] h-[320px]">
//           <Image
//             src="/cookies.png" // Replace with your image path
//             alt="Food Package"
//             width={1000}
//             height={920}
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }






// app/components/FoodPassport.tsx
"use client";
import Image from "next/image";

export default function FoodPassport() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-12 gap-8 md:gap-12">
      {/* Left Text Section */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <p className="text-gray-600 text-base sm:text-lg md:text-[22px] leading-relaxed mb-4 w-full md:w-[598px]">
          To sell food products across the regulated and evolved consumer conscious
          markets, brands must maintain{" "}
          <span className="font-semibold text-gray-800">
            a transparent, compliant, and sustainable supply chain
          </span>{" "}
          with all product and environmental data in one place.
        </p>
        <p className="text-gray-600 text-base sm:text-lg md:text-[22px] leading-relaxed w-full md:w-[598px]">
          RePut.ai’s{" "}
          <span className="font-semibold text-gray-800">
            Food Digital Product Passport and compliance management
          </span>{" "}
          work together to collect, verify, and share data across the supply chain—
          including ingredient origin, GHG emissions, certifications, packaging
          impact, and ESG metrics—ensuring every supplier meets destination-specific
          regulations and food safety standards.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-full bg-green-700 p-4 sm:p-6 relative flex items-center justify-center w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[530px] lg:h-[530px]">
          <Image
            src="/cookies.png" // Replace with your image path
            alt="Food Package"
            width={1000}
            height={920}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
