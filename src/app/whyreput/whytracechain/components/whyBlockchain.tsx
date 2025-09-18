// "use client";

// import Image from "next/image";


// export default function WhyBlockchain() {
//     return (
//               <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
//                 <div className="relative w-[598px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
//                   <h1 className="text-[14px] mt-10 md:text-[16px] mb-4 bg-[#29442C] text-white  rounded-[40px] w-[80px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
//                     TraceChain
//                   </h1>
        
//                   <div className="text-sm md:text-base w-[467px] md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
//                     <h1 className="font-semibold text-base md:text-[40px] mb-2 w-[598px]">
//                       Blockchain-Powered Selective Data Sharing
//                     </h1>
//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                         In modern supply chains, transparency is essential—but so is protecting sensitive business information.
//                         Our platform leverages blockchain-powered selective data sharing, allowing you to choose exactly what information is visible to each stakeholder.
//                         Whether sharing regulatory documents with authorities, provenance data with buyers, or product stories with end consumers, blockchain ensures that every shared record is tamper-proof, timestamped, and verifiable, while keeping all non-shared data fully private.
//                     </p>

//                     <p className="text-base md:text-[16px] mb-2 w-[598px]">
//                         Built on a decentralized ledger, our system combines granular permission controls with the unmatched security of blockchain. This means your data can be trusted by every party without needing a central intermediary. Key benefits include:
//                     </p>
//                     <ul className="list-disc pl-4 md:pl-6 space-y-2 w-[598px]">
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Granular permissions</span> to control what each partner can view.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Immutable records</span>  that cannot be altered once shared.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">End-to-end encryption </span> to safeguard all transactions.
//                       </li>
//                       <li>
//                          <span className="font-bold text-[#29442C] text-[16px] w-[598px]">Full transparency logs </span>for complete accountability.
//                       </li>
//                     </ul>
        
//                     <p className="font-semibold text-base md:text-lg mt-6 mb-2 text-[16px] w-[598px]">With blockchain as the backbone, you can achieve both trust and confidentiality—proving authenticity to partners and customers while protecting your competitive edge.</p>
        
//                   </div>
        
//                 </div>
//                 <div className="flex justify-center items-center w-full h-full">
//                   <Image src="/whyBlockchain.png" alt="TraceChain" width={1000} height={800} className="w-[90%] md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
//                 </div>
//               </section>
//     )
// }












//responsive





"use client";

import Image from "next/image";

export default function WhyBlockchain() {
  return (
    <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-white py-8 md:py-0">
      {/* Text Section */}
      <div className="relative w-full md:w-[598px] left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
        <h1 className="text-[14px] mt-10 md:text-[16px] mb-4 bg-[#29442C] text-white rounded-[40px] w-[90px] md:w-[110px] px-2 outline-1 outline-[#29442C]">
          TraceChain
        </h1>

        <div className="text-sm md:text-base w-full md:w-[34em] mb-4 leading-relaxed">
          <h1 className="font-semibold text-lg md:text-[40px] mb-2 w-full md:w-[598px]">
            Blockchain-Powered Selective Data Sharing
          </h1>

          <p className="text-base md:text-[16px] mb-2 w-full md:w-[598px]">
            In modern supply chains, transparency is essential—but so is protecting sensitive business information.
            Our platform leverages blockchain-powered selective data sharing, allowing you to choose exactly what information is visible to each stakeholder.
            Whether sharing regulatory documents with authorities, provenance data with buyers, or product stories with end consumers, blockchain ensures that every shared record is tamper-proof, timestamped, and verifiable, while keeping all non-shared data fully private.
          </p>

          <p className="text-base md:text-[16px] mb-2 w-full md:w-[598px]">
            Built on a decentralized ledger, our system combines granular permission controls with the unmatched security of blockchain. This means your data can be trusted by every party without needing a central intermediary. Key benefits include:
          </p>

          <ul className="list-disc pl-4 md:pl-6 space-y-2 w-full md:w-[598px]">
            <li>
              <span className="font-bold text-[#29442C] text-[16px]">Granular permissions</span> to control what each partner can view.
            </li>
            <li>
              <span className="font-bold text-[#29442C] text-[16px]">Immutable records</span> that cannot be altered once shared.
            </li>
            <li>
              <span className="font-bold text-[#29442C] text-[16px]">End-to-end encryption</span> to safeguard all transactions.
            </li>
            <li>
              <span className="font-bold text-[#29442C] text-[16px]">Full transparency logs</span> for complete accountability.
            </li>
          </ul>

          <p className="font-semibold text-base md:text-lg mt-6 mb-2 w-full md:w-[598px]">
            With blockchain as the backbone, you can achieve both trust and confidentiality—proving authenticity to partners and customers while protecting your competitive edge.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src="/whyBlockchain.png"
          alt="TraceChain"
          width={1000}
          height={800}
          className="w-[90%] md:w-[75%] h-auto md:h-[75%] object-cover transition-all duration-1000 ease-out"
        />
      </div>
    </section>
  );
}
