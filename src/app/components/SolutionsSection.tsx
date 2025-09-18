 

"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

export default function SolutionsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { id: 1, value: 5, label: "Used across", suffix: "+ Countries" },
    { id: 2, value: 12, label: "Used by", suffix: "+ Brands" },
    { id: 3, value: 112, label: "", suffix: "+ suppliers Onboarded" },
  ];

  const logos = [
    { id: 1, src: "/client1.png", alt: "Vedanta" },
    // { id: 2, src: "/client2.png", alt: "Vidya Herbs" },
    { id: 2, src: "/kumar.png", alt: "kumar organic" },
    { id: 3, src: "/Aditya_Birla.png", alt: "Aditya_Birla" },
    { id: 4, src: "/client4.png", alt: "Griffith" },
    { id: 5, src: "/tesco2.png", alt: "tesco2" },
    { id: 6, src: "/client3.png", alt: "Gokaldas Exports" },
    // { id: 7, src: "/client5.png", alt: "MTR" },
  ];

  return (
    <section className="bg-white py-12 px-6" ref={ref}>
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-gray-800 italic">
          Trusted by{" "}
          <span className="text-green-700 font-semibold">Global brands</span>{" "}
          <span className="text-gray-600">
            Across Industries, Geographies, and sizes
          </span>
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-b from-green-100 to-green-50 rounded-lg shadow p-6 text-center"
          >
            <p className="text-lg font-semibold text-gray-700">
              {item.label}{" "}
              <span className="font-bold text-black">
                {inView ? <CountUp end={item.value} duration={2} /> : 0}
                {item.suffix}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Logos - Smooth Infinite Scroll */}
      <div className="relative w-full overflow-hidden mt-12 mb-12">
        <div className="flex animate-marquee gap-12">
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={170}
              height={110}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}











// "use client";

// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";
// import Image from "next/image";

// export default function SolutionsSection() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   const stats = [
//     { id: 1, value: 5, label: "Used across", suffix: "+ Countries" },
//     { id: 2, value: 12, label: "Used by", suffix: "+ Brands" },
//     { id: 3, value: 112, label: "", suffix: "+ suppliers Onboarded" },
//   ];

//   const logos = [
//     { id: 1, src: "/client1.png", alt: "Vedanta" },
//     { id: 2, src: "/kumar.png", alt: "kumar organic" },
//     { id: 3, src: "/Aditya_Birla.png", alt: "Aditya_Birla" },
//     { id: 4, src: "/client4.png", alt: "Griffith" },
//     { id: 5, src: "/tesco2.png", alt: "tesco2" },
//     { id: 6, src: "/client3.png", alt: "Gokaldas Exports" },
//   ];

//   return (
//     <section
//       className="bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-12"
//       ref={ref}
//     >
//       {/* Heading */}
//       <div className="text-center mb-8">
//         <p className="text-gray-800 italic text-base sm:text-lg md:text-xl">
//           Trusted by{" "}
//           <span className="text-green-700 font-semibold">Global brands</span>{" "}
//           <span className="text-gray-600">
//             Across Industries, Geographies, and sizes
//           </span>
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
//         {stats.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gradient-to-b from-green-100 to-green-50 rounded-lg shadow p-5 sm:p-6 text-center"
//           >
//             <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
//               {item.label}{" "}
//               <span className="font-bold text-black text-lg sm:text-xl md:text-2xl">
//                 {inView ? <CountUp end={item.value} duration={2} /> : 0}
//                 {item.suffix}
//               </span>
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Logos - Smooth Infinite Scroll */}
//       <div className="relative w-full overflow-hidden mt-10">
//         <div className="flex animate-marquee gap-8 sm:gap-12 items-center">
//           {logos.concat(logos).map((logo, index) => (
//             <Image
//               key={index}
//               src={logo.src}
//               alt={logo.alt}
//               width={130}
//               height={80}
//               className="object-contain w-24 sm:w-32 md:w-40 h-auto"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
