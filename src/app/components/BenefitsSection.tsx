// import Image from "next/image";

// const benefits = [
//   {
//     title: "Create a competitive advantage:",
//     description:
//       "Be one of the first to comply with the regulation, start optimizing supplier partnerships and take full advantage of a sustainable and transparent supply chain.",
//   },
//   {
//     title: "Make decisions based on data:",
//     description:
//       "Data collection not only enables you to comply with the regulation, but also gives valuable business insights.",
//   },
//   {
//     title: "Enable circular systems:",
//     description:
//       "Capture data from every stage of a textile’s life cycle and implement better principles for reuse and recycling.",
//   },
//   {
//     title: "Ensure consumers trust:",
//     description:
//       "Consumers are seeking sustainable products, and by delivering them you future-proof your products.",
//   },
// ];

// export default function BenefitsSection() {
//   return (
//     <section className="w-full py-16 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-2">
//           Benefits of <br /> the Digital Passport
//         </h2>
//         <p className="text-gray-600 mb-12">
//           Beyond complying with the new regulation, with the Textile Passport you can also:
//         </p>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {benefits.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative bg-green-900 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-green-400/50"
//             >
//               {/* Corner icon */}
//               <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
//                 <div className="bg-white w-full h-full -rotate-45 origin-top-left translate-x-[50%] translate-y-[-50%]"></div>
//                 <Image
//                   src="/icon-doc.png" // Replace with your icon path
//                   alt="Icon"
//                   width={24}
//                   height={24}
//                   className="absolute top-4 right-4"
//                 />
//               </div>

//               <h3 className="font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-200">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="mt-12">
//           <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-600 transition">
//             Connect with us →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }









import Image from "next/image";
import { useContact } from "./ContactContext";


const benefits = [
  {
    title: "Create a competitive advantage:",
    description:
      "Be one of the first to comply with the regulation, start optimizing supplier partnerships and take full advantage of a sustainable and transparent supply chain.",
  },
  {
    title: "Make decisions based on data:",
    description:
      "Data collection not only enables you to comply with the regulation, but also gives valuable business insights",
  },
  {
    title: "Enable circular systems:",
    description:
      "Capture data from every stage of a Product life cycle and implement better principles for reuse and recycling.",
  },

  {
    title: "Ensure consumers trust:",
    description:
      "Consumers are seeking sustainable products, and by delivering them you future-proof your products.",
  },
];





export default function BenefitsSection() {

          const { scrollToContact } = useContact();
  
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-[48px] font-bold mb-2 text-black">
          Benefits of <br /> the Digital Passport
        </h2>
        <p className="text-gray-600 text-[18px] mb-12">
          Beyond complying with the new regulation, with the Textile Passport you can also:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-green-900 text-white p-6  shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ff9d]"
            >
              {/* White Diagonal Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 scale-[1.23] bg-white clip-corner">
                <Image
                  src="/badge.png" // replace with your icon
                  alt="Icon"
                  width={28}
                  height={28}
                  className="absolute top-3 right-3 "
                />
              </div>

              <h3 className="font-bold mb-2 text-[22px]">{item.title}</h3>
              <p className="text-gray-200 text-[18px]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button onClick={scrollToContact} className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-600 transition">
            Connect with us →
          </button>
        </div>
      </div>

      {/* Custom clip-path style */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  );
}
