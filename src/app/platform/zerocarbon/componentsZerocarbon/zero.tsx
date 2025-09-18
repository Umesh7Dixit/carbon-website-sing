// "use client";
// import { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext";
// import { useRouter } from "next/navigation"; 



// export default function Zero() {
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//           const { scrollToContact } = useContact();


//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollSpring = useSpring({
//     transform: windowHeight > 0 ? `scale(${1 + scrollY / windowHeight / 2})` : "scale(1)",
//     opacity: windowHeight > 0 ? Math.min(1, scrollY / windowHeight) : 1,
//     translateY:
//       windowHeight > 0 ? (scrollY > windowHeight ? `${scrollY - windowHeight}px` : "0px") : "0px",
//   });

//   const scrollSpringThirdSection = useSpring({
//     transform:
//       windowHeight > 0
//         ? scrollY > windowHeight * 2
//           ? "scale(1)"
//           : `scale(${1 + (scrollY - windowHeight) / windowHeight / 3})`
//         : "scale(1)",
//     opacity:
//       windowHeight > 0
//         ? scrollY > windowHeight * 2
//           ? 1
//           : Math.min(1, (scrollY - windowHeight) / windowHeight)
//         : 1,
//     translateY:
//       windowHeight > 0 ? (scrollY > windowHeight * 2 ? "0px" : `${scrollY - windowHeight}px`) : "0px",
//   });

//   const scrollSpringOurPlatform = useSpring({
//     opacity: windowHeight > 0 ? (scrollY > windowHeight ? 1 : Math.min(1, scrollY / windowHeight)) : 1,
//   });

//     const router = useRouter();
  

//   return (
//     <div className="font-sans leading-relaxed overflow-x-hidden">
//       {/* First Section */}
//       <section className="h-screen relative overflow-hidden bg-gray-100">
//         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center text-2xl">
//           <div className="flex items-center justify-center ml-46 mb-5 bg-white rounded-[25px] px-2 py-1 w-70   outline-2 outline-gray-200">
//             {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
//             <p className="ml-5  text-black text-lg ">AI Powered Technology</p>
//           </div>
//           <h1 className="text-[56px] mb-4 text-[#29442C] font-bold">ZERO Carbon</h1>
//           <p className="text-[24px] mb-4 text-[#071030] font-bold">All Your ESG & Compliance Needs — Effortlessly Handled</p>
//           <span className="ml-13 block w-[34em] justify-center items-center text-[16px] mb-5 text-[#071030]">
// The same traceability that builds trust also powers seamless ESG reporting.
//           </span>
//           <button onClick={scrollToContact}  className="px-5 py-2 text-white bg-[#29442C] rounded hover:bg-[#29442cd5] transition">
//             Request a demo
//           </button>
//         </div>
//         <div className="w-full h-1/2 flex justify-center items-center mt-[30em]">
//           {/* <Image src="/net-zero.png" alt="TraceChain" width={800} height={600} className="w-full h-3/5 object-cover" /> */}
//           <Image src="/zero1.png" alt="TraceChain" width={800} height={600} className="w-full h-3/5 object-cover" />
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="h-screen flex justify-center items-center relative overflow-hidden">
//         <animated.div style={scrollSpring} className="flex justify-center items-center w-full h-full">
//           {/* <Image src="/net-zero.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" /> */}
//           <Image src="/carbonzero2.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" />
//         </animated.div>
//       </section>

//       {/* Third Section */}
//       <section className="h-screen flex justify-center items-center bg-gray-50">
//         <animated.div style={scrollSpringThirdSection} className="flex justify-center items-center w-full h-full">
//           {/* <Image src="/netzero-bg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" /> */}
//           <Image src="/zerobgnew.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" />
//         </animated.div>
//       </section>

//       {/* Fourth Section */}
//       {/* <section className="h-screen flex justify-center items-center bg-gray-50">
//         <div className="relative left-1/4 -translate-x-1/2 text-2xl text-[#29442C]">
//           <h1 className="text-[16px] mb-4 text-[#29442C] rounded-[40px] w-[100px] px-2   outline-1 outline-[#29442C]">
//             TraceChain
//           </h1>
//           <h5 className="mb-4">Trace Every Tier, Every Time</h5>
//           <p className="text-base w-[34em] mb-4">
//             Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier...
//           </p>
//         </div>
//         <div className="flex justify-center items-center w-full h-full">
//           <Image src="/section-4.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" />
//         </div>
//       </section> */}

//          <div className="min-h-screen bg-white flex">
//             {/* Left Content */}
//             <div className="w-1/2 flex flex-col justify-center px-12 space-y-8">
//               <div className="flex items-center space-x-2 ">
//                 {/* <span className="text-xl">🚀</span> */}
//                                 <span className="mb-4 text-[#29442C] rounded-[40px] w-[120px] px-2  outline-1 outline-[#29442C] text-[16px]">ZERO Carbon</span>

//               </div>
      
//               <div className="space-y-6">
//                 <div className="flex space-x-4">
//                   <Image src="/ai-driven.png" alt="AI" width={50} height={40} />
//                   <div>
//                     <h3 className="font-bold text-[24px] text-[#29442C]">AI-Driven Hot Spots</h3>
//                     <p className="text-gray-600 text-[16px]">
//                       Detect and address risk areas instantly with predictive and
//                       prescriptive analytics.
//                     </p>
//                   </div>
//                 </div>
      
//                 <div className="flex space-x-4">
//                   <Image src="/data-icon.png" alt="Data" width={50} height={40} />
//                   <div>
//                     <h3 className="font-bold text-[24px] text-[#29442C]">Faster Data Collection</h3>
//                     <p className="text-gray-600 text-[16px]">
//                       RePut uniquely reduces ESG data collection time, freeing up
//                       resources for action.
//                     </p>
//                   </div>
//                 </div>
      
//                 <div className="flex space-x-4">
//                   <Image src="/licenses-icon.png" alt="Licenses" width={50} height={40} />
//                   <div>
//                     <h3 className="font-bold text-[24px] text-[#29442C]">All Licenses in One Place</h3>
//                     <p className="text-gray-600 text-[16px]">
//                       Centralized storage for certifications and compliance documents.
//                     </p>
//                   </div>
//                 </div>
      
//                 <div className="flex space-x-4">
//                   <Image src="/global-icon.png" alt="Global" width={50} height={40} />
//                   <div>
//                     <h3 className="font-bold text-[24px] text-[#29442C]">Global Standards Coverage</h3>
//                     <p className="text-gray-600 text-[16px]">
//                       Easily meet reporting requirements for: CBAM, GRI, CDSR, and
//                       regional compliance for UK, USA, and more.
//                     </p>
//                   </div>
//                 </div>
      
//                 <div className="flex space-x-4">
//                   <Image src="/regulations-icon.png" alt="Regulations" width={50} height={40} />
//                   <div>
//                     <h3 className="font-bold text-[24px] text-[#29442C]">Stay Ahead of Regulations</h3>
//                     <p className="text-gray-600 text-[16px]">
//                       Proactively comply with evolving ESG laws while building trust and
//                       transparency.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
      
//             {/* Right Side Image */}
//             <div className="w-1/2 flex items-center justify-center ">
//               <Image
//                 src="/section-4-zero.png"
//                 alt="Dashboard Preview"
//                 width={600}
//                 height={500}
//                 className="rounded-lg"
//               />
//             </div>
//           </div>

//       {/* Our Platform */}
//       <section className="text-center py-12 bg-gradient-to-b from-[#29442C] to-white">
//         <div className="flex justify-between items-center mb-8 text-white px-5">
//           <div className="flex items-center bg-white rounded-[25px] p-1 pr-2">
//             {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
//             <p className="ml-2 text-black text-[24px]">RePut.ai</p>
//           </div>
//           <h2 className="text-4xl ml-2 font-bold">Our Platform</h2>
//         </div>
//         <div className="flex  justify-center">
//           <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
//             {/* <Image onClick={() => router.push(`/platform/circle`)} src="/circle.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" /> */}
//             <Image onClick={() => router.push(`/platform/circle`)} src="/ajk.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" />
//             <h3 className="mt-2 text-[24px] text-black  mr-15  font-bold">RePut Circle</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
//             <Image onClick={() => router.push(`/platform/tracechain`)} src="/ab.png" alt="RePut Circle" width={100} height={100} className="w-4/5 rounded-lg" />
//             <h3 className="mt-2 text-[24px] text-black  mr-15  font-bold">Tracechain</h3>
//           </animated.div>
 
//         </div>
//       </section>
 
//     </div>
//   );
// }

 







"use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext";
import { useRouter } from "next/navigation"; 



export default function Zero() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
          const { scrollToContact } = useContact();


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollSpring = useSpring({
    transform: windowHeight > 0 ? `scale(${1 + scrollY / windowHeight / 2})` : "scale(1)",
    opacity: windowHeight > 0 ? Math.min(1, scrollY / windowHeight) : 1,
    translateY:
      windowHeight > 0 ? (scrollY > windowHeight ? `${scrollY - windowHeight}px` : "0px") : "0px",
  });

  const scrollSpringThirdSection = useSpring({
    transform:
      windowHeight > 0
        ? scrollY > windowHeight * 2
          ? "scale(1)"
          : `scale(${1 + (scrollY - windowHeight) / windowHeight / 3})`
        : "scale(1)",
    opacity:
      windowHeight > 0
        ? scrollY > windowHeight * 2
          ? 1
          : Math.min(1, (scrollY - windowHeight) / windowHeight)
        : 1,
    translateY:
      windowHeight > 0 ? (scrollY > windowHeight * 2 ? "0px" : `${scrollY - windowHeight}px`) : "0px",
  });

  const scrollSpringOurPlatform = useSpring({
    opacity: windowHeight > 0 ? (scrollY > windowHeight ? 1 : Math.min(1, scrollY / windowHeight)) : 1,
  });

    const router = useRouter();
  

  return (
    <div className="font-sans leading-relaxed overflow-x-hidden">
      {/* First Section */}
      <section className="h-screen relative overflow-hidden bg-gray-100">
        <div className="absolute top-[20%] md:top-[20%] left-1/2 -translate-x-1/2 text-center text-2xl px-4 md:px-0">
          <div className="flex items-center justify-center ml-46 md:ml-46 mb-5 bg-white rounded-[25px] px-2 py-1 w-70 outline-2 outline-gray-200">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-5 md:ml-5 text-black text-sm md:text-lg">AI Powered Technology</p>
          </div>
          <h1 className="text-[32px] md:text-[56px] mb-4 text-[#29442C] font-bold">ZERO Carbon</h1>
          <p className="text-[16px] md:text-[24px] mb-4 text-[#071030] font-bold px-2 md:px-0">All Your ESG & Compliance Needs — Effortlessly Handled</p>
          <span className="ml-0 md:ml-13 block w-full md:w-[34em] justify-center items-center text-[14px] md:text-[16px] mb-5 text-[#071030] px-4 md:px-0">
            The same traceability that builds trust also powers seamless ESG reporting.
          </span>
          <button onClick={scrollToContact} className="px-4 md:px-5 py-2 text-white bg-[#29442C] rounded hover:bg-[#29442cd5] transition text-sm md:text-base">
            Request a demo
          </button>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center mt-[20em] md:mt-[30em]">
          {/* <Image src="/net-zero.png" alt="TraceChain" width={800} height={600} className="w-full h-3/5 object-cover" /> */}
          {/* <Image src="/zero1.png" alt="TraceChain" width={800} height={600} className="w-[90%] md:w-full h-2/5 md:h-3/5 object-cover" /> */}
          <Image src="/traceonenew.png" alt="TraceChain" width={800} height={600} className="w-[90%] md:w-full h-2/5 md:h-3/5 object-cover" />
        </div>
      </section>

      {/* Second Section */}
      <section className="h-screen flex justify-center items-center relative overflow-hidden">
        <animated.div style={scrollSpring} className="flex justify-center items-center w-full h-full">
          {/* <Image src="/net-zero.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" /> */}
          {/* <Image src="/carbonzero2.png" alt="TraceChain" width={800} height={600} className="w-[85%] md:w-[69%] h-[50%] md:h-[65%] object-contain transition-all duration-1000 ease-out" /> */}
          <Image src="/carbonteonew.png" alt="TraceChain" width={800} height={600} className="w-[85%] md:w-[69%] h-[50%] md:h-[65%] object-contain transition-all duration-1000 ease-out" />
        </animated.div>
      </section>

      {/* Third Section */}
      <section className="h-screen flex justify-center items-center bg-gray-50">
        <animated.div style={scrollSpringThirdSection} className="flex justify-center items-center w-full h-full">
          {/* <Image src="/netzero-bg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" /> */}
          {/* <Image src="/zerobgnew.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" /> */}
          <Image src="/newcarbnonbg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" />
        </animated.div>
      </section>

      {/* Fourth Section */}
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 space-y-6 md:space-y-8 py-8 md:py-0">
          <div className="flex items-center space-x-2">
            {/* <span className="text-xl">🚀</span> */}
            <span className="mb-4 text-[#29442C] rounded-[40px] w-[120px] px-2 outline-1 outline-[#29442C] text-[14px] md:text-[16px]">ZERO Carbon</span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex space-x-3 md:space-x-4">
              <Image src="/ai-driven.png" alt="AI" width={50} height={40} className="w-10 h-8 md:w-[50px] md:h-[40px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[18px] md:text-[24px] text-[#29442C]">AI-Driven Hot Spots</h3>
                <p className="text-gray-600 text-[14px] md:text-[16px]">
                  Detect and address risk areas instantly with predictive and
                  prescriptive analytics.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Image src="/data-icon.png" alt="Data" width={50} height={40} className="w-10 h-8 md:w-[50px] md:h-[40px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[18px] md:text-[24px] text-[#29442C]">Faster Data Collection</h3>
                <p className="text-gray-600 text-[14px] md:text-[16px]">
                  RePut uniquely reduces ESG data collection time, freeing up
                  resources for action.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Image src="/licenses-icon.png" alt="Licenses" width={50} height={40} className="w-10 h-8 md:w-[50px] md:h-[40px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[18px] md:text-[24px] text-[#29442C]">All Licenses in One Place</h3>
                <p className="text-gray-600 text-[14px] md:text-[16px]">
                  Centralized storage for certifications and compliance documents.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Image src="/global-icon.png" alt="Global" width={50} height={40} className="w-10 h-8 md:w-[50px] md:h-[40px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[18px] md:text-[24px] text-[#29442C]">Global Standards Coverage</h3>
                <p className="text-gray-600 text-[14px] md:text-[16px]">
                  Easily meet reporting requirements for: CBAM, GRI, CDSR, and
                  regional compliance for UK, USA, and more.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Image src="/regulations-icon.png" alt="Regulations" width={50} height={40} className="w-10 h-8 md:w-[50px] md:h-[40px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[18px] md:text-[24px] text-[#29442C]">Stay Ahead of Regulations</h3>
                <p className="text-gray-600 text-[14px] md:text-[16px]">
                  Proactively comply with evolving ESG laws while building trust and
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-0 py-8 md:py-0">
          <Image
            src="/section-4-zero.png"
            alt="Dashboard Preview"
            width={600}
            height={500}
            className="rounded-lg w-full md:w-auto h-auto max-w-[500px] md:max-w-none"
          />
        </div>
      </div>

      {/* Our Platform */}
      <section className="text-center py-8 md:py-12 bg-gradient-to-b from-[#29442C] to-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 text-white px-4 md:px-5">
          <div className="flex items-center bg-white rounded-[25px] p-1 pr-2 mb-4 md:mb-0">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-2 text-black text-[18px] md:text-[24px]">RePut.ai</p>
          </div>
          <h2 className="text-2xl md:text-4xl ml-0 md:ml-2 font-bold">Our Platform</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-0 px-4 md:px-0">
          <animated.div style={scrollSpringOurPlatform} className="w-full md:w-[27%] text-center">
            {/* <Image onClick={() => router.push(`/platform/circle`)} src="/circle.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" /> */}
            <Image onClick={() => router.push(`/platform/circle`)} src="/ajk.png" alt="Zero Carbon" width={200} height={200} className="w-3/5 md:w-4/5 mx-auto rounded-lg cursor-pointer" />
            <h3 className="mt-2 text-[18px] md:text-[24px] text-black font-bold">RePut Circle</h3>
          </animated.div>
          <animated.div style={scrollSpringOurPlatform} className="w-full md:w-[27%] text-center">
            <Image onClick={() => router.push(`/platform/tracechain`)} src="/ab.png" alt="RePut Circle" width={100} height={100} className="w-3/5 md:w-4/5 mx-auto rounded-lg cursor-pointer" />
            <h3 className="mt-2 text-[18px] md:text-[24px] text-black font-bold">Tracechain</h3>
          </animated.div>
        </div>
      </section>
    </div>
  );
}