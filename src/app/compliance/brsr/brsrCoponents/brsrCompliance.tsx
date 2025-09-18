"use client"









// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext";

// export default function BrsrCompliance() {
//           const { scrollToContact } = useContact();
  
//   return (
//     <section className="w-full bg-green-50 ">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        
//         {/* Left Side - Mockup with background */}
//         <div className="relative  h-[400px] md:h-[500px] flex justify-center items-center overflow-hidden max-w-4xl mx-auto mb-20 mt-20">
//           {/* Background */}
//           <Image
//             src="/bglp.png" // place your uploaded image here
//             // src="/brsrlaptop.png" // place your uploaded image here
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="absolute inset-0 z-0"
//           />

//           {/* Laptop mockup */}
//           {/* <div className="relative z-10 transform transition-transform hover:scale-105 duration-300">
//             <Image
//               // src="/lprhone.png"
//               src="/brsrlaptop.png"
//               alt="Laptop Dashboard"
//               width={500}
//               height={300}
//               className="drop-shadow-2xl scale-[1.28]"
              
//             />
//           </div> */}
//         </div>

//         {/* Right Side - Text */}
//         <div className="bg-green-50 p-8 md:p-12 flex flex-col justify-center">
//           <h2 className="text-3xl md:text-[48px] font-bold mb-4 text-black">
//             Simplify Your BRSR<br/> Compliance Journey
//           </h2> 
//           <p className="text-gray-700 font-bold text-[18px] mb-6 leading-relaxed">
//             Meeting SEBI’s BRSR requirements doesn’t have to be a manual, time-consuming process. RePut automates the entire reporting cycle — from data collection and validation to final submission in the prescribed format.
//           </p>
//           <p className="text-gray-700 font-bold text-[18px] mb-6 leading-relaxed">
//             Our platform connects directly with your existing ERP, HR, and environmental monitoring systems to pull accurate ESG metrics in real time. Built-in templates aligned with BRSR indicators ensure every disclosure is complete, consistent, and audit-ready. Stay compliant, improve data accuracy, and free up your teams to focus on ESG strategy rather than chasing spreadsheets. With RePut, you can transform BRSR compliance into a competitive advantage.
//           </p>
//           <button onClick={scrollToContact} className="bg-[#07130C] text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition flex items-center gap-2 w-fit">
//             Book for Demo →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }






 


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContact } from "../../../components/ContactContext"; 


// export default function BRSRSection() {
export default function BrsrCompliance() {
    const { scrollToContact } = useContact(); 
  
  return (
    <section className="w-full bg-green-50 flex items-center justify-center py-10 px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/brsrlaptop.png" // place your uploaded image inside public folder
            alt="BRSR Compliance Demo"
            width={600}
            height={400}
            className=" scale-[1.20]"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Simplify Your BRSR Compliance Journey
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Meeting SEBI`&apos;`s BRSR requirements doesn’t have to be a manual, time-consuming
            process. RePut automates the entire reporting cycle — from data collection 
            and validation to final submission in the prescribed format.
          </p>

          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            Our platform connects directly with your existing ERP, HR, and environmental
            monitoring systems to pull accurate ESG metrics in real time. Built-in templates
            aligned with BRSR indicators ensure every disclosure is complete, consistent, 
            and audit-ready. Stay compliant, improve data accuracy, and free up your teams
            to focus on ESG strategy rather than chasing spreadsheets. 
          </p>

          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed">
            With RePut, you can transform BRSR compliance into a competitive advantage.
          </p>

          {/* Button */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
          >
            Book for Demo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
