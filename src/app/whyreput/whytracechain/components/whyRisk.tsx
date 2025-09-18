"use client";

import Image from "next/image";


export default function WhyRisk() {
    return (
              <section className=" md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
                <div className="relative w-full max-w-[469px] md:w-[469px] h-full left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0  md:mb-0">
                  <h1 className="text-[14px] mt-15 md:text-[16px] p-1 bg-[#29442C] text-white  rounded-[40px] w-[90px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
                    TraceChain
                  </h1>
        
                  <div className="text-sm md:text-base w-full max-w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-xl sm:text-2xl md:text-[40px] mb-2 w-full max-w-[598px] md:w-[598px]">
                      Risk Management
                    </h1>
                    <p className="text-sm sm:text-base md:text-[16px] mb-2 w-full max-w-[598px] md:w-[598px]">
                        Unseen vulnerabilities in your supply chain can lead to costly disruptions, compliance failures, and reputational damage. 
                        Our Risk Management feature empowers you to identify, assess, and mitigate risks across every tier of your network—before they become problems. By combining real-time data, predictive analytics, and blockchain-verified information, we give you a complete picture of your operational, environmental, and compliance risks.
                    </p>

                    <p className="text-sm sm:text-base md:text-[16px] mb-2 w-full max-w-[598px] md:w-[598px]">
                        Our interactive risk heat map visually highlights high, medium, and low-risk zones across your entire supply chain—helping you prioritize action where it matters most. From supplier performance tracking to ESG compliance checks, our system transforms risk management from a reactive process into a proactive strategy. Key benefits include:
                    </p>
                    <ul className="list-disc pl-4 md:pl-6 space-y-2 w-full max-w-[598px] md:w-[598px]">
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">Automated risk scoring   </span>for suppliers and materials.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">Early warning alerts  </span> for compliance, quality, or delivery issues.
                      </li>
                      <li>
                         <span className="font-bold text-[#29442C] text-sm sm:text-base md:text-[16px] w-full max-w-[598px] md:w-[598px]">Custom dashboards & heat maps   </span>to monitor risk distribution in real time.
                      </li>
                     
                    </ul>
        
                    <p className="font-semibold text-sm sm:text-base md:text-lg mt-2 md:text-[16px] w-full max-w-[598px] md:w-[598px]">With Risk Management built into Reput TraceChain, you can act on risks before they escalate—protecting your supply chain, your customers, and your brand reputation.</p>
        
                  </div>
        
                </div>
                <div className="hidden md:flex justify-center items-center w-full h-full">
                  <Image src="/whyRisk.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
                </div>
              </section>
    )
}











// "use client";

// import Image from "next/image";


// export default function WhyRisk() {
//     return (
//               <section className=" md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[469px] h-full left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0  md:mb-0">
//                   <h1 className="text-[14px] mt-15 md:text-[16px] p-1 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
//                     TraceChain
//                   </h1>
        
//                   <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[598px]">
//                       Risk Management
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                         Unseen vulnerabilities in your supply chain can lead to costly disruptions, compliance failures, and reputational damage. 
//                         Our Risk Management feature empowers you to identify, assess, and mitigate risks across every tier of your network—before they become problems. By combining real-time data, predictive analytics, and blockchain-verified information, we give you a complete picture of your operational, environmental, and compliance risks.
//                     </p>

//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                         Our interactive risk heat map visually highlights high, medium, and low-risk zones across your entire supply chain—helping you prioritize action where it matters most. From supplier performance tracking to ESG compliance checks, our system transforms risk management from a reactive process into a proactive strategy. Key benefits include:
//                     </p>
//                     <ul className="list-disc pl-4 md:pl-6 space-y-2 w-[598px]">
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Automated risk scoring   </span>for suppliers and materials.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Early warning alerts  </span> for compliance, quality, or delivery issues.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Custom dashboards & heat maps   </span>to monitor risk distribution in real time.
//                       </li>
                     
//                     </ul>
        
//                     <p className="font-semibold text-base md:text-lg mt-2  text-[16px] w-[598px]">With Risk Management built into Reput TraceChain, you can act on risks before they escalate—protecting your supply chain, your customers, and your brand reputation.</p>
        
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyRisk.png" alt="TraceChain" width={1000} height={800} className="w-[90%] ml-50 md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












