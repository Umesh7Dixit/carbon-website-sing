"use client";

import Image from "next/image";


export default function WhyReport() {
    return (
              <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
                <div className="relative w-full max-w-[469px] sm:w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
                  <h1 className="text-[14px] mt-10 md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[120px] sm:w-[80px] md:w-[180px] px-7  outline-1 outline-[#29442C]">
                    ZERO Carbon
                  </h1>
        
                  <div className="text-sm md:text-base w-full max-w-[467px] sm:w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-[26px] sm:text-[30px] md:text-[40px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                      Generate Automated Reports
                    </h1>
                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                        RePut simplifies the entire data collection and reporting process, eliminating the need for manual entries
                        or error-prone spreadsheets. With seamless integrations, bulk data uploads in any format, and our patented 
                        Magic Scan technology, RePut automatically collects, processes, and structures data in real time. Our AI-powered platform maps this data to the required sustainability standards and generates audit-ready reports at the click of a button. This automation not only saves time and reduces errors but also ensures your business stays compliant, efficient, and focused on achieving its sustainability goals without the hassle of manual reporting.
                    </p>

  
                  </div>
        
                </div>
                <div className="hidden sm:flex justify-center items-center w-full h-full">
                  <Image src="/whyReport.png" alt="TraceChain" width={800} height={800} className="w-[90%] md:w-[85%] h-[60%] md:h-[90vh] object-contain transition-all duration-1000 ease-out" />
                </div>
              </section>
    )
}















// "use client";

// import Image from "next/image";


// export default function WhyReport() {
//     return (
//               <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
//                   <h1 className="text-[14px] mt-10 md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[180px] px-7  outline-1 outline-[#29442C]">
//                     ZERO Carbon
//                   </h1>
        
//                   <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[467px]">
//                       Generate Automated Reports
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[467px]">
//                         RePut simplifies the entire data collection and reporting process, eliminating the need for manual entries
//                         or error-prone spreadsheets. With seamless integrations, bulk data uploads in any format, and our patented 
//                         Magic Scan technology, RePut automatically collects, processes, and structures data in real time. Our AI-powered platform maps this data to the required sustainability standards and generates audit-ready reports at the click of a button. This automation not only saves time and reduces errors but also ensures your business stays compliant, efficient, and focused on achieving its sustainability goals without the hassle of manual reporting.
//                     </p>

  
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyReport.png" alt="TraceChain" width={800} height={800} className="w-[90%] md:w-[85%] h-[60%] md:h-[90vh] object-contain transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












