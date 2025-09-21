"use client"
import { useContact } from "../../../components/ContactContext"; 


export default function Finance(){
    const { scrollToContact } = useContact();
  
    return(
            <div className="h-[55vh] bg-gray-50 p-4 md:p-8">
      <div className="max-w-[80%] mx-auto text-center text-black justify-center">
        {/* Header */}
        <div>
            CARBON ACCOUNTING AND ASSESSMENT
        </div>
        <div className="text-center mb-12 ">
          <h1 className="text-3xl md:text-[55px] font-bold text-[#1A3A3A] mb-4">
            Finance-Ready Carbon <br/> Accounting for Global Standards
          </h1>
          <p className="text-lg text-[#1A3A3A] font-semibold mb-8 max-w-3xl mx-auto">
            Move beyond estimates to defensible carbon data. Carbon Scan connects your operations and supply chain into a unified platform that generates finance-ready reports aligned with CBAM, CSRD, and BRSR requirements—making compliance simple and reliable.
          </p>
          <button onClick={scrollToContact} className="bg-[#1A3A3A] hover:bg-[#1A3A3A] text-white px-8 py-3 rounded-full font-semibold transition-colors">
            BOOK A DEMO
          </button>
        </div>
        </div>
        </div>

    );
}