// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function AnimatedOctagon() {
//   // List of images to rotate in center
//   const images = ["/detect.png","/s1.png", "/s22.png", "/s3.png", "/s5.png"]


//   const [currentIndex, setCurrentIndex] = useState(0);
//   //  const [fade, setFade] = useState(true);

//   // Change image every 3 seconds
//      useEffect(() => {
//     const interval = setInterval(() => {

//       setTimeout(() => {
//         // change image after fade out
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 500); // 0.5s fade duration
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-8 relative">
//       <div className="relative w-[450px] h-[450px] mb-50">
//         {/* Outer rotating container */}
//         <div className="absolute inset-0 animate-spin-slow">
//           {/* Outer octagon */}
//           <div
//             className="absolute inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Middle octagon */}
//           <div
//             className="absolute inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Inner octagon */}
//           <div
//             className="absolute inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />

//           {/* Floating dots - outer ring */}
//           <div className="absolute top-12 left-1/2 w-3 h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute top-20 right-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
//           <div className="absolute right-12 top-1/2 w-3 h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute bottom-20 right-16 w-4 h-4 bg-slate-500 rounded-full animate-pulse" />
//           <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute bottom-20 left-16 w-4 h-4 bg-slate-400 rounded-full animate-pulse" />
//           <div className="absolute left-12 top-1/2 w-3 h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute top-20 left-16 w-4 h-4 bg-slate-600 rounded-full animate-pulse" />

//           {/* Floating dots - middle ring */}
//           <div className="absolute top-24 left-1/2 w-3 h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 right-24 w-3 h-3 bg-green-600 rounded-full animate-pulse delay-300" />
//           <div className="absolute right-24 top-1/2 w-3 h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 right-24 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-32 left-24 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute top-32 left-24 w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

//           {/* Icon containers - positioned as a triangle */}
//           {/* Top */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f1.png"
//                 alt="f1"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-left */}
//           <div className="absolute bottom-0 left-12 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f2.png"
//                 alt="f2"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-right */}
//           <div className="absolute bottom-0 right-12 translate-y-1/2">
//             <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f3.png"
//                 alt="f3"
//                 width={80}
//                 height={80}
//                 className="rounded-xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Central content - static octagonal frame */}
//         <div
//           className="absolute inset-32 overflow-hidden shadow-2xl border-4 border-transparent "
//           style={{
//             clipPath:
//               "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//           }}
//         >
//           {images.map((img, index) => (
//             <Image
//               key={index}
//               src={img}
//               alt={`Center ${index}`}
//               fill
//               className={`object-cover absolute transition-opacity duration-1000 ease-in-out ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//               priority={index === currentIndex}
//             />
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-t " />
//         </div>
//       </div>
//     </div>
//   );
// }


















// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function AnimatedOctagon() {
//   // List of images to rotate in center
//   const images = ["/detect.png","/s1.png", "/s22.png", "/s3.png", "/s5.png"]

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeout(() => {
//         // change image after fade out
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 500); // 0.5s fade duration
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-8 relative">
//       <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mb-50">
//         {/* Outer rotating container */}
//         <div className="absolute inset-0 animate-spin-slow">
//           {/* Outer octagon */}
//           <div
//             className="absolute inset-4 sm:inset-6 lg:inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Middle octagon */}
//           <div
//             className="absolute inset-8 sm:inset-12 lg:inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />
//           {/* Inner octagon */}
//           <div
//             className="absolute inset-12 sm:inset-16 lg:inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
//             style={{
//               clipPath:
//                 "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//             }}
//           />

//           {/* Floating dots - outer ring */}
//           <div className="absolute top-6 sm:top-8 lg:top-12 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute top-12 sm:top-16 lg:top-20 right-8 sm:right-12 lg:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-600 rounded-full animate-pulse" />
//           <div className="absolute right-6 sm:right-8 lg:right-12 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-8 sm:right-12 lg:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded-full animate-pulse" />
//           <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
//           <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-8 sm:left-12 lg:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-400 rounded-full animate-pulse" />
//           <div className="absolute left-6 sm:left-8 lg:left-12 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
//           <div className="absolute top-12 sm:top-16 lg:top-20 left-8 sm:left-12 lg:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-600 rounded-full animate-pulse" />

//           {/* Floating dots - middle ring */}
//           <div className="absolute top-12 sm:top-18 lg:top-24 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute top-18 sm:top-24 lg:top-32 right-12 sm:right-18 lg:right-24 w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-pulse delay-300" />
//           <div className="absolute right-12 sm:right-18 lg:right-24 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-18 sm:bottom-24 lg:bottom-32 right-12 sm:right-18 lg:right-24 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute bottom-12 sm:bottom-18 lg:bottom-24 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
//           <div className="absolute bottom-18 sm:bottom-24 lg:bottom-32 left-12 sm:left-18 lg:left-24 w-2 h-2 sm:w-3 sm:h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
//           <div className="absolute left-12 sm:left-18 lg:left-24 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
//           <div className="absolute top-18 sm:top-24 lg:top-32 left-12 sm:left-18 lg:left-24 w-2 h-2 sm:w-3 sm:h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

//           {/* Icon containers - positioned as a triangle */}
//           {/* Top */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f1.png"
//                 alt="f1"
//                 width={50}
//                 height={50}
//                 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-left */}
//           <div className="absolute bottom-0 left-6 sm:left-8 lg:left-12 translate-y-1/2">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f2.png"
//                 alt="f2"
//                 width={50}
//                 height={50}
//                 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl shadow-lg"
//               />
//             </div>
//           </div>

//           {/* Bottom-right */}
//           <div className="absolute bottom-0 right-6 sm:right-8 lg:right-12 translate-y-1/2">
//             <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
//               <Image
//                 src="/f3.png"
//                 alt="f3"
//                 width={50}
//                 height={50}
//                 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Central content - static octagonal frame */}
//         <div
//           className="absolute inset-16 sm:inset-20 lg:inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
//           style={{
//             clipPath:
//               "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
//           }}
//         >
//           {images.map((img, index) => (
//             <Image
//               key={index}
//               src={img}
//               alt={`Center ${index}`}
//               fill
//               className={`object-cover absolute transition-opacity duration-1000 ease-in-out ${
//                 index === currentIndex ? "opacity-100" : "opacity-0"
//               }`}
//               priority={index === currentIndex}
//             />
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-t" />
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnimatedOctagon() {
  // List of images to rotate in center
  const images = ["/detect.png","/s1.png", "/s22.png", "/s3.png", "/s5.png"]

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        // change image after fade out
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 500); // 0.5s fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4 sm:p-8 relative">
      <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] mb-50">
        {/* Outer rotating container */}
        <div className="absolute inset-0 animate-spin-slow">
          {/* Outer octagon */}
          <div
            className="absolute inset-4 sm:inset-6 lg:inset-8 border-2 border-green-200/40 bg-gradient-to-br from-green-50/30 to-green-100/20"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          {/* Middle octagon */}
          <div
            className="absolute inset-8 sm:inset-12 lg:inset-16 border-2 border-green-300/50 bg-gradient-to-br from-green-100/40 to-green-200/30"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          {/* Inner octagon */}
          <div
            className="absolute inset-12 sm:inset-16 lg:inset-24 border-2 border-green-400/60 bg-gradient-to-br from-green-200/50 to-green-300/40"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />

          {/* Floating dots - outer ring */}
          <div className="absolute top-6 sm:top-8 lg:top-12 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-slate-400 rounded-full -translate-x-1/2 animate-pulse" />
          <div className="absolute top-12 sm:top-16 lg:top-20 right-8 sm:right-12 lg:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-600 rounded-full animate-pulse" />
          <div className="absolute right-6 sm:right-8 lg:right-12 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-8 sm:right-12 lg:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded-full animate-pulse" />
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full -translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-8 sm:left-12 lg:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-400 rounded-full animate-pulse" />
          <div className="absolute left-6 sm:left-8 lg:left-12 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full -translate-y-1/2 animate-pulse" />
          <div className="absolute top-12 sm:top-16 lg:top-20 left-8 sm:left-12 lg:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-slate-600 rounded-full animate-pulse" />

          {/* Floating dots - middle ring */}
          <div className="absolute top-12 sm:top-18 lg:top-24 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-200 rounded-full -translate-x-1/2 animate-pulse delay-300" />
          <div className="absolute top-18 sm:top-24 lg:top-32 right-12 sm:right-18 lg:right-24 w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-pulse delay-300" />
          <div className="absolute right-12 sm:right-18 lg:right-24 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-slate-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
          <div className="absolute bottom-18 sm:bottom-24 lg:bottom-32 right-12 sm:right-18 lg:right-24 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-12 sm:bottom-18 lg:bottom-24 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full -translate-x-1/2 animate-pulse delay-300" />
          <div className="absolute bottom-18 sm:bottom-24 lg:bottom-32 left-12 sm:left-18 lg:left-24 w-2 h-2 sm:w-3 sm:h-3 bg-slate-400 rounded-full animate-pulse delay-300" />
          <div className="absolute left-12 sm:left-18 lg:left-24 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full -translate-y-1/2 animate-pulse delay-300" />
          <div className="absolute top-18 sm:top-24 lg:top-32 left-12 sm:left-18 lg:left-24 w-2 h-2 sm:w-3 sm:h-3 bg-slate-600 rounded-full animate-pulse delay-300" />

          {/* Icon containers - positioned as a triangle */}
          {/* Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-slate-700 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f1.png"
                alt="f1"
                width={50}
                height={50}
                className="w-10 h-6 sm:w-12 sm:h-12 md:w-16 md:h-14 lg:w-20  rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-0 left-4 sm:left-6 md:left-8 lg:left-12 translate-y-1/2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f2.png"
                alt="f2"
                width={50}
                height={50}
                className="w-10 h-6 sm:w-12 sm:h-12 md:w-16 md:h-14 lg:w-20  rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Bottom-right */}
          <div className="absolute bottom-0 right-4 sm:right-6 md:right-8 lg:right-12 translate-y-1/2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-4 border-transparent">
              <Image
                src="/f3.png"
                alt="f3"
                width={50}
                height={50}
                className="w-10 h-6 sm:w-12 sm:h-12 md:w-16 md:h-14 lg:w-20  rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Central content - static octagonal frame */}
        <div
          className="absolute inset-12 sm:inset-16 md:inset-20 lg:inset-32 overflow-hidden shadow-2xl border-4 border-transparent"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Center ${index}`}
              fill
              className={`object-cover absolute transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === currentIndex}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t" />
        </div>
      </div>
    </div>
  );
}