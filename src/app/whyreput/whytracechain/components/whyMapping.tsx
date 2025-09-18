"use client";

// import { CheckCircle, Zap, Globe, ShieldCheck, Link } from "lucide-react";
import Image from "next/image";


export default function WhyMapping() {
    return (
              <section className=" md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
                <div className="relative w-full max-w-[469px] md:w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0 ">
                  <h1 className="text-[14px] mt-1 md:text-[16px] bg-[#29442C] text-white  rounded-[40px] w-[90px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
                    TraceChain
                  </h1>
        
                  <div className="text-sm md:text-base w-full max-w-[598px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-[40px] mb-2 w-full max-w-[467px] md:w-[467px]">
                      n-TH Tier Mapping
                    </h1>
                    <p className="text-sm sm:text-base md:text-[16px] mb-2 w-full max-w-[598px] md:w-[598px]">
                        Supply chains don&apos;t stop at your direct suppliers—and neither should your visibility.
                        With our n-TH Tier Mappingfeature, you can trace products, materials, and compliance data far beyond your first-tier partners, uncovering every link in the chain. From raw material origin to final delivery, this multi-tier view helps you identify hidden risks, strengthen supplier relationships, and ensure ethical and sustainable sourcing at every stage.
                    </p>

                    <p className="text-sm sm:text-base md:text-[16px] mb-2 w-full max-w-[598px] md:w-[598px]">
                      Using automated data collection, supplier onboarding, and blockchain-backed verification, our platform makes deep-tier mapping simple and reliable. Key benefits include:
                    </p>
                    <ul className="list-disc pl-4 md:pl-6 space-y-2 w-full max-w-[598px] md:w-[598px]">
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">End-to-end visibility </span> across all supplier tiers.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">Risk detection </span> for compliance, ESG, and quality issues.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">Blockchain validation  </span> ensuring every tier&apos;s data is authentic.
                      </li>
                    </ul>
        
                    <p className="font-semibold text-sm sm:text-base md:text-lg mt-6 mb-2 md:text-[16px] w-full max-w-[598px] md:w-[598px]">Dynamic mapping that updates as your supply chain evolves. With n-TH Tier Mapping, you can move from reactive to proactive supply chain management—building transparency that extends as deep as your network goes.</p>
        
                  </div>
        
                </div>
                <div className="hidden md:flex justify-center items-center w-full h-full">
                  <Image src="/whyMapping.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
                </div>
              </section>
    )
}








// "use client";

// // import { CheckCircle, Zap, Globe, ShieldCheck, Link } from "lucide-react";
// import Image from "next/image";


// export default function WhyMapping() {
//     return (
//               <section className=" md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0 ">
//                   <h1 className="text-[14px] mt-1 md:text-[16px] bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
//                     TraceChain
//                   </h1>
        
//                   <div className="text-sm md:text-base w-[598px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[467px]">
//                       n-TH Tier Mapping
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                         Supply chains don’t stop at your direct suppliers—and neither should your visibility.
//                         With our n-TH Tier Mappingfeature, you can trace products, materials, and compliance data far beyond your first-tier partners, uncovering every link in the chain. From raw material origin to final delivery, this multi-tier view helps you identify hidden risks, strengthen supplier relationships, and ensure ethical and sustainable sourcing at every stage.
//                     </p>

//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                       Using automated data collection, supplier onboarding, and blockchain-backed verification, our platform makes deep-tier mapping simple and reliable. Key benefits include:
//                     </p>
//                     <ul className="list-disc pl-4 md:pl-6 space-y-2 w-[598px]">
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">End-to-end visibility </span> across all supplier tiers.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Risk detection </span> for compliance, ESG, and quality issues.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Blockchain validation  </span> ensuring every tier’s data is authentic.
//                       </li>
//                     </ul>
        
//                     <p className="font-semibold text-base md:text-lg mt-6 mb-2 text-[16px] w-[598px]">Dynamic mapping that updates as your supply chain evolves. With n-TH Tier Mapping, you can move from reactive to proactive supply chain management—building transparency that extends as deep as your network goes.</p>
        
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyMapping.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












