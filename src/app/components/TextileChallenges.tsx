
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation"; 


// export default function TextileChallenges() {


//     const router = useRouter();


//   const features = [
//     {
//       title: "RePut Tracechain",
//       highlight: "Tracechain",
//       description:
//         "Gain fully supply chain visibility with blockchain- verification data. From raw material to finished product",
//       // img: "/tracing.png",
//       // img: "/tracedash.png",
//       // img: "/tier123.png",
//       img: "/web2.png",
//       slug: "tracechain",
//     },
//     {
//       title: "RePut Zero Carbon",
//       highlight: "Zero Carbon",
//       description:
//         "Track carbon emissions across the value chain with blockchain-backed data. Empower reduction with verified insights and reporting.",
//       // img: "/dashb.png",
//       // img: "/zerodash.png",
//       img: "/carbondash.png",
//       slug: "zerocarbon",
//     },
//     {
//       title: "RePut",
//       highlight: "Circle",
//       description:
//         "Build circular system with verified recycler networks, real-time recovery data and digital proof of impact.",
//       img: "/carbon.png",
//       slug: "/circle",
//     },

//   ];

//   return (
//     <section className="bg-white py-16 px-6 md:px-16 w-full">


//        <div className="flex flex-col md:flex-row items-center gap-10    m-20">
//         {/* Left Text */}
//         <div className="text-center md:text-left w-[930px]  text-[52x]">
//           <h2 className="text-black text-3xl md:text-4xl font-semibold">
//             Build For{" "}
//             <span className="text-green-600 font-bold">Every Step</span> <br />
//             Proven at{" "}
//             <span className="text-green-600 font-bold">Every Layer</span>
//           </h2>
//           <p className="text-black mt-4 text-[22px] font-bold text-sm md:text-base">
//             A unified traceable & sustainability platform built on blockchain and powered by AI
//           </p>
//         </div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex-shrink-0 w-full md:w-[40%] "
//         >
//           <Image
//             src="/rHeader.png" // replace with your actual image
//             alt="Intro Image"
//             width={200}
//             height={180}
//             className="rounded-lg  object-cover ml-[60%]"
//           />
//         </motion.div>
//       </div>


//       {/* Features */}
//       <div className="flex flex-col items-center justify-center gap-28 relative">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row items-start gap-66 ${
//               index % 2 === 1 ? "md:flex-row-reverse" : ""
//             } relative`}
//           >
//             {/* Green Dot */}
//             <div
//               className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white z-10"
//             ></div>

//             {/* Image */}
//             {/* <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0"
//             >
//               <Image
//                 src={feature.img}
//                 alt={feature.title}
//                 width={500}
//                 height={300}
//                 className="rounded-lg object-cover"
//               />
//             </motion.div> */}

// {/* Image */}
// <motion.div
//   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.5 }}
//   className="flex-shrink-0"
// >
//   <div className="transform scale-[1.23] mx-8"> {/* ✅ 23% bigger */}
//     <Image
//       src={feature.img}
//       alt={feature.title}
//       width={500}
//       height={300}
//       className="rounded-lg object-cover"
//     />
//   </div>
// </motion.div>




//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-md m-25"
//             >
//               {/* <h3 className=" text-black text-[46px]  font-semibold">
//                 RePut{" "}
//                 <span className="text-green-600">{feature.highlight}</span>
//                 <sup>™</sup>
//               </h3> */}

//                 <h3 className="text-black text-[46px] font-semibold whitespace-nowrap">
//   RePut <span className="text-green-600">{feature.highlight}</span>
//   <sup>™</sup>
// </h3>


//               <p className="text-gray-600 mt-2 text-[20px]">{feature.description}</p>
//               <button  onClick={() => router.push(`/platform/${feature.slug}`)} className="mt-4 px-5 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition">
//                 Explore More
//               </button>
//             </motion.div>
//           </div>
//         ))}

//         {/* Vertical dotted line */}
//         <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-green-500"></div>
//       </div>
//     </section>
//   );
// }












"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TextileChallenges() {
  const router = useRouter();

  const features = [
    {
      title: "RePut Tracechain",
      highlight: "Tracechain",
      description:
        "Gain fully supply chain visibility with blockchain- verification data. From raw material to finished product",
      img: "/web2.png",
      slug: "tracechain",
    },
    {
      title: "RePut Zero Carbon",
      highlight: "Zero Carbon",
      description:
        "Track carbon emissions across the value chain with blockchain-backed data. Empower reduction with verified insights and reporting.",
      img: "/carbondash.png",
      slug: "zerocarbon",
    },
    {
      title: "RePut",
      highlight: "Circle",
      description:
        "Build circular system with verified recycler networks, real-time recovery data and digital proof of impact.",
      img: "/carbon.png",
      slug: "/circle",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 w-full">
      {/* Top Heading */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Left Text */}
        <div className="text-center md:text-left w-full md:w-2/3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Build For{" "}
            <span className="text-green-600 font-bold">Every Step</span> <br />
            Proven at{" "}
            <span className="text-green-600 font-bold">Every Layer</span>
          </h2>
          <p className="text-black mt-4 text-sm sm:text-base md:text-lg font-medium">
            A unified traceable & sustainability platform built on blockchain
            and powered by AI
          </p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="/rHeader.png"
            alt="Intro Image"
            width={300}
            height={220}
            className="rounded-lg object-contain"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center justify-center gap-20 relative">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } relative`}
          >
            {/* Green Dot */}
            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white z-10"></div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={450}
                height={280}
                className="rounded-lg object-contain"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
                RePut{" "}
                <span className="text-green-600">{feature.highlight}</span>
                <sup>™</sup>
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
                {feature.description}
              </p>
              <button
                onClick={() => router.push(`/platform/${feature.slug}`)}
                className="mt-4 px-5 py-2 bg-green-500 text-white text-sm md:text-base font-medium rounded hover:bg-green-600 transition"
              >
                Explore More
              </button>
            </motion.div>
          </div>
        ))}

        {/* Vertical dotted line (only desktop) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-green-500"></div>
      </div>
    </section>
  );
}
