"use client";

import Image from "next/image";


export default function WhyMappingWaste() {
    return (
              <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
                <div className="relative w-full max-w-[469px] sm:w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
                  <h1 className="text-[14px]  md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[100px] px-7 outline-1 outline-[#29442C]">
                    Circle
                  </h1>
        
                  <div className="md:text-base w-full max-w-[467px] sm:w-[467px] mb-4 md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-[24px] sm:text-[28px] md:text-[35px] mb-2 w-full max-w-[594px] sm:w-[594px]">
                      Mapping Waste Profile with Registered Recycler - Closing the Loop
                    </h1>
                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[594px] sm:w-[594px]">
                      Effective EPR compliance isn&apos;t just about tracking products—it&apos;s about ensuring waste is recovered and processed by authorized recyclers. Our Mapping Waste Profile with Registered Recycler
                      feature connects your waste streams directly to verified, government-registered recycling partners. Every kilogram of waste is matched to a recycler capable of processing it, and all transactions are recorded on the blockchain for authenticity and audit readiness.
                    </p>

                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[594px] sm:w-[594px] font-bold" >Key Benefits:</p>
                    <ul className="list-disc pl-4 md:pl-6 space-y-2 w-full max-w-[594px] sm:w-[594px]">
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-full max-w-[594px] sm:w-[594px]">Recycler Matching —   </span>Automatically link each waste type to the right registered recycler in your network.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-[16px] w-full max-w-[594px] sm:w-[594px]">Regulatory Alignment — </span>Comply with EPR mandates by proving waste was processed by authorized partners.
                      </li>
                      
                    </ul>

  
                  </div>
        
                </div>
                <div className="hidden sm:flex justify-center items-center w-full h-full">
                  <Image src="/whyWaste.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[70%] h-[60%] md:h-[100vh] object-contain transition-all duration-1000 ease-out" />
                </div>
              </section>
    )
}











// "use client";

// import Image from "next/image";


// export default function WhyMappingWaste() {
//     return (
//               <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
//                   <h1 className="text-[14px]  md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[100px] px-7 outline-1 outline-[#29442C]">
//                     Circle
//                   </h1>
        
//                   <div className="md:text-base w-[467px] md:w-[467px] mb-4 md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[35px] mb-2 w-[594px]">
//                       Mapping Waste Profile with Registered Recycler - Closing the Loop
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[594px]">
//                       Effective EPR compliance isn’t just about tracking products—it’s about ensuring waste is recovered and processed by authorized recyclers. Our Mapping Waste Profile with Registered Recycler
//                       feature connects your waste streams directly to verified, government-registered recycling partners. Every kilogram of waste is matched to a recycler capable of processing it, and all transactions are recorded on the blockchain for authenticity and audit readiness.
//                     </p>

//                     <p className="text-base md:text-[16px] mb-2 w-[594px] font-bold" >Key Benefits:</p>
//                                         <ul className="list-disc pl-4 md:pl-6 space-y-2w-[594px]">
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[594px]">Recycler Matching —   </span>Automatically link each waste type to the right registered recycler in your network.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[594px]">Regulatory Alignment — </span>Comply with EPR mandates by proving waste was processed by authorized partners.
//                       </li>
                      
//                     </ul>

  
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyWaste.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[70%] h-[60%] md:h-[100vh] object-contain transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












