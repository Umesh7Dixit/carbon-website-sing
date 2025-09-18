// import Image from "next/image";

// export default function Globe3D() {
//   return (

//     <div
//       className="relative"
//       style={{ width: "min(35vw, 35vh)", height: "min(50vw, 50vh)" }}
//     >
//       <iframe
//         src="/globe.html"
//         title="3D Globe"
//         className="absolute inset-0 w-full h-full border-0 z-0"
//       />

//       <Image
//         src="/greenBorder.png"         
//         alt="Forest ring"
//         fill
//         priority
//         className="pointer-events-none select-none z-10"
//         style={{
//           objectFit: "contain",
//           transform: "scale(0.94)",
//         }}
//       />

//         <div className="absolute w-5/3 h-5/3 z-20" style={{ bottom: "-55%", left: "-15%" }}>
//             <Image
//                src="/Shadow.png"         
//                alt="shadow ring"
//                fill
//                priority
//                className="pointer-events-none select-none z-10"
//                style={{
//                  objectFit: "contain",
//                  transform: "scale(0.94)",
//                }}
//              />
//         </div>


//         <div className="absolute w-2/3 h-1/3 z-20" style={{ bottom: "-15%", left: "-20%" }}>
//             <Image
//               src="/cbam2.png"         
//               alt="cbam2"
//               fill
//               priority
//               className="pointer-events-none select-none z-10"
//               style={{
//                 objectFit: "contain",
//                 transform: "scale(0.94)",
//               }}
//             />
//         </div>


//         <div className="absolute w-1/3 h-1/3 z-20" style={{ bottom: "-24%", right: "-40%" }}>
//             <Image
//               src="/c.png"         
//               alt="cbam2"
//               fill
//               priority
//               className="pointer-events-none select-none z-10"
//               style={{
//                 objectFit: "contain",
//                 transform: "scale(0.94)",
//               }}
//             />
//         </div>

//      </div>
//   );
// }








import Image from "next/image";

export default function Globe3D() {
  return (
    <div
      className="relative isolate"
      style={{ width: "min(35vw, 35vh)", height: "min(50vw, 50vh)" }}
    >

      {/* BACKGROUND SHADOW (behind iframe) */}
      <div
        className="absolute z-[-1] pointer-events-none w-[190%] h-[166%]"
        style={{ bottom: "-55%", left: "-45%" }}
      >
        <Image
          src="/Shadow.png"
          alt="shadow ring"
          fill
          priority
          className="select-none"
          style={{ objectFit: "contain", transform: "scale(0.94)" }}
        />
      </div>

      {/* IFRAME (transparent content) */}
      <iframe
        src="/globe.html"
        title="3D Globe"
        className="absolute inset-0 w-full h-full border-0 z-0"
      />

      {/* TOP BORDER OVERLAY */}
      <Image
        src="/greenBorder.png"
        alt="Forest ring"
        fill
        priority
        className="pointer-events-none select-none z-10"
        style={{ objectFit: "contain", transform: "scale(0.91)" }}
      />

      {/* LEFT BADGE */}
      <div
        className="absolute w-2/3 h-1/3 z-20"
        style={{ bottom: "-15%", left: "-20%" }}
      >
        <Image
          // src="/cbam2.png"
          // src="/cbamnew2.png"
          src="/mvr.png"
          alt="cbam2"
          fill
          priority
          className="pointer-events-none select-none"
          style={{ objectFit: "contain", transform: "scale(0.94)" }}
        />
      </div>

      {/* RIGHT BADGE */}
      <div
        className="absolute w-1/3 h-1/3 z-20"
        style={{ bottom: "-24%", right: "-40%" }}
      >
        <Image
          // src="/c.png"
          src="/kekbk.png"
          alt="csssl"
          fill
          priority
          className="pointer-events-none select-none scale-[1.4]"
          style={{ objectFit: "contain", transform: "scale(1.2)" }}
        />
      </div>

      <div
        className="absolute w-1/3 h-1/3 z-20"
        style={{ bottom: "50%", right: "-60%" }}
      >
        <Image
          // src="/ghgearth.png"
          src="/ghgcdd.png"
          alt="c"
          fill
          priority
          className="pointer-events-none select-none scale-[1.4]"
          style={{ objectFit: "contain", transform: "scale(0.94)" }}
        />
      </div>
    </div>
  );
}
