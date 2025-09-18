

// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext";


// export default function FoodDpp() {

//         const { scrollToContact } = useContact();
  

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/FoodDPP.png"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />

//       {/* Dark Overlay for readability */}
//       <div className="absolute inset-0 bg-black/30 z-10"></div>

//       {/* Content */}
//       <div className="relative z-15 flex h-full bottom-20">
//         {/* Left Panel - wider and more blur */}
//         <div className="w-3/5 flex items-center justify-center p-10">
//           <div className="bg-green-900/60 backdrop-blur-xl p-10 rounded-lg max-w-3xl text-white">
//             <h1 className="text-5xl font-bold mb-6">
//               The Food Passport - DPP
//             </h1>
//             {/* <p className="mb-2 text-lg leading-relaxed">
//               The Textile Passport is a <span className="font-bold">digital identity</span> for every garment, storing verified details on
//               materials, recycled content, and country of origin. With the Textile Passport, brands can create{" "}
//               <span className="font-bold">traceable and recyclable products</span>, map every stage of the supply chain,
//               and consolidate all important data—such as carbon footprint and ESG metrics—on one platform.
//             </p> */}
//             <p className="mb-2 text-lg leading-relaxed">
//               The Food Passport is a digital identity for every food product, storing verified details on ingredient origin, nutritional values, certifications, and packaging information. With the Food Passport, brands can ensure full traceability from farm to fork, monitor quality and safety across the supply chain, and consolidate all critical data—such as carbon footprint, food safety compliance, and ESG metrics—on one platform. Demonstrate compliance with international food safety, labeling, and sustainability regulations, while tracking sourcing, processing, and packaging methods across the food supply chain.
//             </p>



//             {/* <p className="mb-8 text-lg leading-relaxed">
//               Demonstrate compliance with <span className="font-bold">EU Digital Product Passport regulations</span>, GOTS, OEKO-TEX®, and other sustainability standards, while tracking critical materials and production methods across the textile supply chain.
//             </p> */}
//             <button onClick={scrollToContact}  className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-md font-semibold text-lg">
//               Get started →
//             </button>
//           </div>
//         </div>

    
//         </div>
//       </div>
  
//   );
// }
















import Image from "next/image";
import { useContact } from "../../../components/ContactContext";

export default function FoodDpp() {
  const { scrollToContact } = useContact();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/FoodDPP.png"
        alt="Background"
        fill
        className="z-0 object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex h-full bottom-20 
                      flex-col lg:flex-row items-center justify-center p-4 lg:p-10">
        
        {/* Left Panel */}
        <div className="w-full lg:w-3/5 flex items-center justify-center">
          <div className="bg-green-900/60 backdrop-blur-xl 
                          p-6 lg:p-10 rounded-lg text-white max-w-3xl">
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 
                           text-center lg:text-left">
              The Food Passport - DPP
            </h1>

            <p className="mb-6 text-base lg:text-lg leading-relaxed 
                          text-center lg:text-left">
              The Food Passport is a digital identity for every food product,
              storing verified details on ingredient origin, nutritional values,
              certifications, and packaging information. With the Food Passport,
              brands can ensure full traceability from farm to fork, monitor
              quality and safety across the supply chain, and consolidate all
              critical data—such as carbon footprint, food safety compliance, and
              ESG metrics—on one platform. Demonstrate compliance with international
              food safety, labeling, and sustainability regulations, while tracking
              sourcing, processing, and packaging methods across the food supply chain.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-green-400 hover:bg-green-500 text-black px-6 py-3 rounded-md font-semibold text-lg"
              >
                Get started →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
