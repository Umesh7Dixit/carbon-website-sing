// import Image from "next/image";

// const industries = [
//   {
//     title: "Packed Food",
//     subtitle: "RePut.ai for",
//     image: "/chips.png", // your image path
//     icon: "/icon-food.png", // your icon path
//   },
//   {
//     title: "Personal care",
//     subtitle: "RePut.ai for",
//     image: "/personal-care.jpg",
//     icon: "/icon-care.png",
//   },
//   {
//     title: "Steel",
//     subtitle: "RePut.ai for",
//     image: "/steel.jpg",
//     icon: "/icon-steel.png",
//   },
// ];

// export default function IndustrySection() {
//   return (
//     <section className="bg-green-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">
//           Start preparing for the future <br /> of traceability today.
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {industries.map((item, idx) => (
//             <div
//               key={idx}
//               className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_20px_#00ff9d]"
//             >
//               {/* Image */}
//               <div className="relative w-full h-64">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//                 {/* White Diagonal Corner */}
//                 {/* <div className="absolute top-0 right-0 w-20 h-20 bg-white clip-corner">
//                   <Image
//                     src={item.icon}
//                     alt="Icon"
//                     width={28}
//                     height={28}
//                     className="absolute top-3 right-3"
//                   />
//                 </div> */}
//               </div>

//               {/* Text Content */}
//               <div className="p-4">
//                 <p className="text-gray-600">{item.subtitle}</p>
//                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
//                 <button className="relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
//                   <span className="flex items-center gap-2">
//                     Read More →
//                   </span>
//                   {/* Button corner effect */}
//                   <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom clip-path for diagonal corner */}
//       <style jsx>{`
//         .clip-corner {
//           clip-path: polygon(100% 0, 100% 100%, 0 0);
//         }
//       `}</style>
//     </section>
//   );
// }






















// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const industries = [
//   {
//     title: "Packed Food",
//     subtitle: "RePut.ai for",
//     image: "/chips.png", // your image path
//     icon: "/icon-food.png", // your icon path
//     slug: "food",
//   },
//   // {
//   //   title: "Personal care",
//   //   subtitle: "RePut.ai for",
//   //   image: "/beauty.png",
//   //   icon: "/icon-care.png",
//   // },
//   // {
//   //   title: "Steel",
//   //   subtitle: "RePut.ai for",
//   //   image: "/steel2.png",
//   //   icon: "/icon-steel.png",
//   // },
// ];

// export default function IndustrySection() {

//     const router = useRouter();

//   return (
//     <section className="bg-green-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
//           Start preparing for the future <br /> of traceability today.
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {industries.map((item, idx) => (
//             <div key={idx} className="text-center">
//               {/* Image Card */}
//               {/* <div
//                 className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_#00ff9d]"
//               > */}
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={400}
//                   height={300}
//                   className="object-cover w-full h-64  "
//                 />
//                 {/* White Diagonal Corner */}
//                 {/* <div className="absolute top-0 right-0 w-20 h-20 bg-white clip-corner">
//                   <Image
//                     src={item.icon}
//                     alt="Icon"
//                     width={28}
//                     height={28}
//                     className="absolute top-3 right-3"
//                   />
//                 </div> */}
//               {/* </div> */}

//               {/* Text */}
//               <div className="text-start ml-5">
//               <p className=" mt-4 text-black">{item.subtitle}</p>
//               <h3 className="text-2xl font-bold text-black">{item.title}</h3>
              

//               {/* Button */}
//               <button onClick={() => router.push(`/industries/${item.slug}`)} className="mt-4 relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
//                 <span className="flex gap-2">
//                   Read More →
//                 </span>
//                 {/* Small corner accent */}
//                 <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
//               </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Custom clip-path for diagonal corner */}
//       <style jsx>{`
//         .clip-corner {
//           clip-path: polygon(100% 0, 100% 100%, 0 0);
//         }
//       `}</style>
//     </section>
//   );
// }





"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const industries = [
  {
    title: "Packed Food",
    subtitle: "RePut.ai for",
    image: "/chips.png", 
    icon: "/icon-food.png",
    slug: "food",
  },
];

export default function IndustrySection() {
  const router = useRouter();

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black text-center">
          Start preparing for the future <br /> of traceability today.
        </h2>

        {/* Cards */}
        <div className="flex justify-center">
          {industries.map((item, idx) => (
            <div key={idx} className=" scale-[1.28] mt-10 text-center max-w-sm">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 mx-auto"
              />

              {/* Text */}
              <div className="mt-4 text-center">
                <p className="text-black">{item.subtitle}</p>
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>

                {/* Button */}
                <button
                  onClick={() => router.push(`/industries/${item.slug}`)}
                  className="mt-4 relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  <span className="flex gap-2 items-center justify-center">
                    Read More →
                  </span>
                  {/* Small corner accent */}
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}