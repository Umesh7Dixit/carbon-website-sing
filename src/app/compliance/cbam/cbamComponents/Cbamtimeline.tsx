"use client";

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function ComplianceScreen() {

  const { scrollToContact } = useContact(); 
  
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-[#EAFCF3]">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-4 lg:ml-33 text-start text-black w-full lg:w-[1222px] px-2 lg:px-4">
        Does my business meet CBAM&apos;s phased compliance requirements?{" "}
        <span className="text-green-700">for goods imported into the EU</span>
      </h1>

      {/* Middle Background Image - Hidden on small screens */}
      <div className="relative w-full h-[410px] my-2 hidden md:block">
        <Image
          src="/circleCard.png"  
          alt="CBAM Compliance"
          fill
          className="object-cover"
        />
      </div>

      {/* Button */}
      <div className="w-full mx-4 lg:ml-35 max-w-6xl justify-start mt-5">
        <button onClick={scrollToContact} className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
          Know more →
        </button>
      </div>

    </div>
  );
}












// "use client";

// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 

// export default function ComplianceScreen() {

//   const { scrollToContact } = useContact(); 
  
//   return (
//     <div className="flex flex-col items-start  justify-center min-h-screen bg-[#EAFCF3]">
//       {/* Heading */}
//       <h1 className="text-3xl md:text-4xl font-bold ml-33 text-start text-black w-[1222px] px-4">
//         Does my business meet CBAM’s phased compliance requirements?{" "}
//         <span className="text-green-700">for goods imported into the EU</span>
//       </h1>

//       {/* Middle Background Image */}
//       <div className="relative w-full  h-[410px] my-2">
//         <Image
//           src="/circleCard.png"  
//           alt="CBAM Compliance"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Button */}
//       <div className="w-full ml-35 max-w-6xl justify-start mt-5">
//         <button onClick={scrollToContact} className="px-6 py-3    bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
//           Know more →
//         </button>
//       </div>

//     </div>
//   );
// }
 
 