// "use client"; // add this if you are using App Router
// import Image from "next/image";
// import { useRouter } from "next/navigation"; 

// const industries = [
//   {
//     title: "Textile",
//     subtitle: "RePut.ai for",
//     image: "/tryShirt.png",
//     icon: "/icon-food.png",
//     slug: "textile", // add slug for cleaner URLs
//   },
//   // {
//   //   title: "Personal care",
//   //   subtitle: "RePut.ai for",
//   //   image: "/beauty.png",
//   //   icon: "/icon-care.png",
//   //   slug: "personal-care",
//   // },
//   // {
//   //   title: "Steel",
//   //   subtitle: "RePut.ai for",
//   //   image: "/steel2.png",
//   //   icon: "/icon-steel.png",
//   //   slug: "steel",
//   // },
// ];

// export default function OtherSections() {
//   const router = useRouter();

//   return (
//     <section className="bg-green-50 py-16 px-6">
//       <div className="max-w-6xl mx-auto justify-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
//           Start preparing for the future <br /> of traceability today.
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {industries.map((item, idx) => (
//             <div key={idx} className="text-center">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={400}
//                 height={300}
//                 className="object-cover w-full h-64"
//               />

//               {/* Text */}
//               <div className="text-start ml-5">
//                 <p className="mt-4 text-black">{item.subtitle}</p>
//                 <h3 className="text-2xl font-bold text-black">{item.title}</h3>

//                 {/* Button */}
//                 <button
//                   onClick={() => router.push(`/industries/${item.slug}`)}
//                   className="mt-4 relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                 >
//                   <span className="flex gap-2">Read More →</span>
//                   {/* Small corner accent */}
//                   <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










 "use client"; // add this if you are using App Router
import Image from "next/image";
import { useRouter } from "next/navigation"; 

const industries = [
  {
    title: "Textile",
    subtitle: "RePut.ai for",
    image: "/tryShirt.png",
    icon: "/icon-food.png",
    slug: "textile", // add slug for cleaner URLs
  },
  // {
  //   title: "Personal care",
  //   subtitle: "RePut.ai for",
  //   image: "/beauty.png",
  //   icon: "/icon-care.png",
  //   slug: "personal-care",
  // },
  // {
  //   title: "Steel",
  //   subtitle: "RePut.ai for",
  //   image: "/steel2.png",
  //   icon: "/icon-steel.png",
  //   slug: "steel",
  // },
];

export default function OtherSections() {
  const router = useRouter();

  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black text-center">
          Start preparing for the future <br /> of traceability today.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 mt-10 ml-130 scale-[1.28] sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {industries.map((item, idx) => (
            <div key={idx} className="text-center max-w-sm">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />

              {/* Text */}
              <div className="text-center mt-4">
                <p className="text-black">{item.subtitle}</p>
                <h3 className="text-2xl font-bold text-black">{item.title}</h3>

                {/* Button */}
                <button
                  onClick={() => router.push(`/industries/${item.slug}`)}
                  className="mt-4 relative bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  <span className="flex gap-2 items-center justify-center">Read More →</span>
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