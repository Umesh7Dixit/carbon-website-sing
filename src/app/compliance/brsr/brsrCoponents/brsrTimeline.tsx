"use client";

import Image from "next/image";
import { useContact } from "../../../components/ContactContext"; 

export default function BrsrTimeline() {

    const { scrollToContact } = useContact();

  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-[#EAFCF3]">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-start font-bold text-black w-full lg:w-[1222px] px-4 mx-auto lg:ml-38">
       Does my business meet BRSR&apos;s phased <br className="hidden sm:block"/>  {"                         "}
        <span className="text-green-700">compliance requirements?</span>
      </h1>
       
      {/* Middle Background Image - Hidden on small screens */}
      <div className="relative w-full h-[500px] my-2 hidden md:block">
        <Image
          src="/brsrBG.png"  
          alt="CBAM Compliance"
          fill
          className="object-cover"
        />
      </div>

      {/* Button */}
      <div className="w-full max-w-6xl justify-start mt-10 mx-4 lg:ml-45">
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


// export default function BrsrTimeline() {

//     const { scrollToContact } = useContact();


//   return (
//     <div className="flex flex-col items-start justify-center min-h-screen bg-[#EAFCF3]">
//       {/* Heading */}
//       <h1 className="text-[48px] text-start md:text-4xl font-bold  text-black w-[1222px] px-4 ml-38">
//        Does my business meet BRSR’s phased <br/>  {"                         "}
//         <span className="text-green-700">compliance requirements?</span>
//       </h1>
       

//       {/* Middle Background Image */}
//       <div className="relative w-full  h-[500] my-2">
//         <Image
//           src="/brsrBG.png"  
//           alt="CBAM Compliance"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Button */}
//       <div className="w-full max-w-6xl justify-start mt-10 ml-45">
//         <button onClick={scrollToContact} className="px-6 py-3    bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
//           Know more →
//         </button>
//       </div>

//     </div>
//   );
// }
 





