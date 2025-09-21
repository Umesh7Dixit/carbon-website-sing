"use client";

import Image from "next/image";

export default function Trusted() {
  const logos = [
    "/bestinate.png",
    "/handShake.png",
    "/mdec.png",
    "/greenBayInc.png",
    "/Tenaga.png",
    "/manulife.png",
    "/simedarby.png",
    "/myown.png",
    "/aia.png",
    "/lordlog.png",
    "/gEasr.png",
    "/futureeco.png",
  ];

  return (
    <section className="bg-[#1A3A3A] pb-12 pt-2 relative overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
        Trusted By Global Organisation
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center mx-8">
              <Image src={logo} alt={`Logo ${idx}`} width={180} height={60} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-6">
        Powered by CarbonScan.ai
      </p>
    </section>
  );
}

















// "use client";

// import Image from "next/image";

// export default function Trusted() {
//   return (
//     <section className="bg-[#0e2f2c] py-12 relative overflow-hidden">
 
//       <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
//         Trusted By Global Organisation
//       </h2>
 
//       <div className="relative w-full overflow-hidden">
//         <div className="flex animate-scroll">
 
//           <div className="flex gap-16 min-w-[130%] justify-around">
//             <Image src="/bestinate.png" alt="Logo 1" width={180} height={60} />
//             <Image src="/handShake.png" alt="Logo 2" width={180} height={60} />
//             <Image src="/mdec.png" alt="Logo 3" width={180} height={60} />
//             <Image src="/taisin.png" alt="Logo 4" width={180} height={60} />
//             <Image src="/Tenaga.png" alt="Logo 5" width={180} height={60} />
//             <Image src="/manulife.png" alt="Logo 6" width={180} height={60} />
//           </div>
//           <div className="flex gap-16 min-w-full justify-around">
//             <Image src="/simedarby.png" alt="Logo 1" width={180} height={60} />
//             <Image src="/myown.png" alt="Logo 3" width={180} height={60} />
//             <Image src="/aia.png" alt="Logo 4" width={180} height={60} />
//             <Image src="/lordlog.png" alt="Logo 5" width={180} height={60} />
//             <Image src="/gEasr.png" alt="Logo 6" width={180} height={60} />
//             <Image src="/futureeco.png" alt="Logo 2" width={180} height={60} />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="text-center text-gray-400 text-sm mt-6">
//         Powered by CarbonScan.ai
//       </p>
//     </section>
//   );
// }
