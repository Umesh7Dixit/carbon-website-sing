"use client";

import Image from "next/image";
import { useContact } from "../../../components/ContactContext";

export default function EudrTimeline() {
  const { scrollToContact } = useContact();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAFCF3] px-4">
      {/* Heading */}
      <h1 className="text-[28px] md:text-[48px] font-bold text-start text-black w-full md:w-[1222px]">
        Does my business meet EUDR’s phased <br className="hidden md:block" />{" "}
        <span className="text-green-700 text-[28px] md:text-[48px]">
          compliance requirements?
        </span>
      </h1>

      {/* Middle Background Image - hidden on small screens */}
      <div className="relative w-full h-[250px] md:h-[500px] my-4 hidden md:block">
        <Image
          src="/eudrTImelinebg.png"
          alt="CBAM Compliance"
          fill
          className="object-cover"
        />
      </div>

      {/* Button */}
      <div className="w-full max-w-6xl justify-start mt-6 md:mt-10">
        <button
          onClick={scrollToContact}
          className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          Know more →
        </button>
      </div>
    </div>
  );
}











// "use client";

// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext"; 


// export default function EudrTimeline() {
//       const { scrollToContact } = useContact(); 
  
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#EAFCF3]">
//       {/* Heading */}
//       <h1 className="text-[48px] md:text-4xl font-bold text-start text-black w-[1222px] px-4">
//        Does my business meet EUDR’s phased  <br/>  {"                         "}
//         <span className="text-green-700 text-[48px]">compliance requirements?</span>
//       </h1>
       

//       {/* Middle Background Image */}
//       <div className="relative w-full  h-[500] my-2">
//         <Image
//           src="/eudrTImelinebg.png"  
//           alt="CBAM Compliance"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Button */}
//       <div className="w-full max-w-6xl justify-start mt-10">
//         <button onClick={scrollToContact} className="px-6 py-3    bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
//           Know more →
//         </button>
//       </div>

//     </div>
//   );
// }
 





