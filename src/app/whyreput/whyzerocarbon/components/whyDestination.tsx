"use client";

import Image from "next/image";


export default function WhyDestination() {
    return (
              <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
                <div className="relative w-full max-w-[469px] sm:w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
                  <h1 className="text-[14px] mt-5 md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[120px] sm:w-[80px] md:w-[180px] px-7  outline-1 outline-[#29442C]">
                    ZERO Carbon
                  </h1>
        
                  <div className="text-sm md:text-base w-full max-w-[467px] sm:w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
                    <h1 className="font-semibold text-[28px] sm:text-[32px] md:text-[40px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                      One Stop Destination
                    </h1>
                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                        With RePut&apos;s Zero Carbon, businesses can confidently reduce their environmental impact, build trust with stakeholders, 
                        and contribute to a carbon-neutral future everything on the single platform including both:
                    </p>

                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px] font-bold">Insetting</p>

                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                        Enabling companies to reduce emissions within their own operations by adopting sustainable practices like energy efficiency and renewable sourcing.
                    </p>


                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px] font-bold">Offsetting</p>

                    <p className="text-base md:text-[16px] mb-2 w-full max-w-[467px] sm:w-[467px]">
                        For emissions that can&apos;t be eliminated, RePut facilitates carbon credit purchases, ensuring complete carbon neutrality through verified external projects.
                    </p>



  
                  </div>
        
                </div>
                <div className="hidden sm:flex justify-center items-center w-full h-full">
                  <Image src="/whyDest.png" alt="TraceChain" width={1000} height={800} className="w-[90%] md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
                </div>
              </section>
    )
}









// "use client";

// import Image from "next/image";


// export default function WhyDestination() {
//     return (
//               <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[469px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
//                   <h1 className="text-[14px] mt-5 md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[180px] px-7  outline-1 outline-[#29442C]">
//                     ZERO Carbon
//                   </h1>
        
//                   <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[467px]">
//                       One Stop Destination
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[467px]">
//                         With RePut&apos;s Zero Carbon, businesses can confidently reduce their environmental impact, build trust with stakeholders, 
//                         and contribute to a carbon-neutral future everything on the single platform including both:
//                     </p>

//                     <p className="text-base md:text-[16px] mb-2 w-[467px] font-bold">Insetting</p>

//                     <p className="text-base md:text-[16px] mb-2 w-[467px]">
//                         Enabling companies to reduce emissions within their own operations by adopting sustainable practices like energy efficiency and renewable sourcing.
//                     </p>


//                     <p className="text-base md:text-[16px] mb-2 w-[467px] font-bold">Offsetting</p>

//                     <p className="text-base md:text-[16px] mb-2 w-[467px]">
//                         For emissions that can&apos;t be eliminated, RePut facilitates carbon credit purchases, ensuring complete carbon neutrality through verified external projects.
//                     </p>



  
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyDest.png" alt="TraceChain" width={1000} height={800} className="w-[90%] md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












