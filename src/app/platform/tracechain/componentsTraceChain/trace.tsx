// "use client";
// import { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
// import Image from "next/image";
// import { useContact } from "../../../components/ContactContext";
// import { useRouter } from "next/navigation"; 
// import { CheckCircle, Zap, Globe, ShieldCheck, Link } from "lucide-react";


// export default function Trace() {
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
//           <div className="flex items-center justify-center ml-33 mb-5 bg-white rounded-[25px] px-2 py-1 w-70   outline-2 outline-gray-200">
//             {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
//             <p className="ml-2 text-black text-lg">AI Powered Technology</p>
//           </div>
//           <h1 className=" mb-4 text-[#29442C] text-[56px] font-semibold">TraceChain</h1>
//           <p className="text-lg mb-4 text-[#071030] text-[18px] font-bold">Trace Every Tier, Every Time</p>
//           <span className="block w-[34em] text-[16px] mb-5 text-[#071030]  ">
//             Build a digital twin of your supply chain for full, real-time visibility and end-to-end traceability.
//           </span>
//           <button onClick={scrollToContact}  className="px-5 py-2 text-white bg-[#29442C] rounded hover:bg-[#29442cd5] transition">
//             Request a demo
//           </button>
//         </div>
//         <div className="w-full h-1/2 flex justify-center items-center mt-[30em]">
//           <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-full h-3/5 object-cover" />
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="h-screen flex justify-center items-center relative overflow-hidden">
//         <animated.div style={scrollSpring} className="flex justify-center items-center w-full h-full">
//           <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-[69%] h-[65%] object-contain transition-all duration-1000 ease-out" />
//         </animated.div>
//       </section>

//       {/* Third Section */}
//       <section className="h-screen  flex justify-center items-center bg-gray-50 mb-20">
//         <animated.div style={scrollSpringThirdSection} className="flex justify-center items-center w-full h-full">
//           <Image src="/tracechain-bg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" />
//         </animated.div>
//       </section>

//       {/* Fourth Section */}
//       <section className="h-screen  flex justify-center items-center bg-gray-50">
//         <div className="relative mt-10 left-1/4 -translate-x-1/2 text-2xl text-[#29442C]">
//           <h1 className="text-[16px] mb-4 text-[#29442C] rounded-[40px] w-[100px] px-2  outline-1 outline-[#29442C]">
//             TraceChain
//           </h1>
//           {/* <h5 className="mb-4 text-[24px]">Trace Every Tier, Every Time</h5> */}
//           {/* <p className="text-base w-[34em] mb-4 text-[16px]">
//              Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier. Our platform gives you full visibility into every supplier, enabling you to track production in real time, assess performance, and manage resource allocation with precision. Detect issues early, make informed decisions faster, and strengthen supply chain resilience through transparent, end-to-end traceability.
//           </p> */}
//           {/* <p className="text-base w-[34em] mb-4 text-[16px]">
//             Trace Every Tier, Every Time
// Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier. Our platform gives you full visibility into every supplier, enabling you to track production in real time, assess performance, and manage resource allocation with precision. Detect issues early, make informed decisions faster, and strengthen supply chain resilience through transparent, end-to-end traceability.
// Why TraceChain?
// Consumer Trust & Transparency – Strengthen brand reputation by proving product authenticity and offering full traceability from source to shelf.
// AI-Driven Intelligence – Predict disruptions before they occur and gain proactive insights into supply chain risks.
// Sustainability & Compliance – Track ESG metrics across suppliers and ensure alignment with global reporting standards.
// Cost & Risk Optimization – Reduce inefficiencies, manage risks, and improve supplier performance with data-backed decisions.
// Seamless Integration – Connect effortlessly with ERP and procurement systems, creating a scalable, future-ready supply chain.
//           </p> */}

//         <div className="text-base w-[34em] mb-4 text-[16px] leading-relaxed">
//       <p className="font-semibold text-lg mb-2">
//         Trace Every Tier, Every Time
//       </p>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>
//           Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier.
//         </li>
//         <li>
//           Full visibility into every supplier to track production in real time, assess performance, and manage resource allocation with precision.
//         </li>
//         <li>
//           Detect issues early, make faster decisions, and strengthen supply chain resilience with end-to-end traceability.
//         </li>
//       </ul>

//       <p className="font-semibold text-lg mt-6 mb-2">Why TraceChain?</p>
//       <ul className="space-y-3">
//         <li className="flex items-start gap-2">
//           <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
//           <span>
//             <strong>Consumer Trust & Transparency</strong> – Strengthen brand reputation by proving product authenticity and offering full traceability from source to shelf.
//           </span>
//         </li>
//         <li className="flex items-start gap-2">
//           <Zap className="w-5 h-5 text-yellow-500 mt-1" />
//           <span>
//             <strong>AI-Driven Intelligence</strong> – Predict disruptions before they occur and gain proactive insights into supply chain risks.
//           </span>
//         </li>
//         <li className="flex items-start gap-2">
//           <Globe className="w-5 h-5 text-blue-500 mt-1" />
//           <span>
//             <strong>Sustainability & Compliance</strong> – Track ESG metrics across suppliers and ensure alignment with global reporting standards.
//           </span>
//         </li>
//         <li className="flex items-start gap-2">
//           <ShieldCheck className="w-5 h-5 text-red-500 mt-1" />
//           <span>
//             <strong>Cost & Risk Optimization</strong> – Reduce inefficiencies, manage risks, and improve supplier performance with data-backed decisions.
//           </span>
//         </li>
//         <li className="flex items-start gap-2">
//           <Link className="w-5 h-5 text-purple-500 mt-1" />
//           <span>
//             <strong>Seamless Integration</strong> – Connect effortlessly with ERP and procurement systems, creating a scalable, future-ready supply chain.
//           </span>
//         </li>
//       </ul>
//     </div>

//         </div>
//         <div className="flex justify-center items-center w-full h-full">
//           <Image src="/section-4.png" alt="TraceChain" width={1000} height={800} className="w-[75%] h-[75%] object-cover transition-all duration-1000 ease-out" />
//         </div>
//       </section>

//       {/* Our Platform */}
//       <section className="text-center py-12 bg-gradient-to-b from-[#29442C] to-white">
//         <div className="flex justify-between items-center mb-8 text-white px-5">
//           <div className="flex items-center bg-white rounded-[25px] p-1 pr-2">
//             {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
//             <p className="ml-2 text-black text-lg">RePut.ai</p>
//           </div>
//           <h2 className="text-4xl ml-2 font-bold">Our Platform</h2>
//         </div>
//         <div className="flex  justify-center">
//           <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
//             {/* <Image onClick={() => router.push(`/platform/circle`)} src="/reput-circle.png" alt="RePut Circle" width={100} height={100} className="w-4/5 rounded-lg" /> */}
//             <Image onClick={() => router.push(`/platform/circle`)} src="/ajk.png" alt="RePut Circle" width={100} height={100} className="w-4/5 rounded-lg" />
//             <h3 className="mt-2 text-lg text-black  mr-15  font-bold">RePut Circle</h3>
//           </animated.div>
//           <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
//             {/* <Image onClick={() => router.push(`/platform/zerocarbon`)} src="/zero-carbon.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" /> */}
//             <Image onClick={() => router.push(`/platform/zerocarbon`)} src="/carddCirvc.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" />
//             <h3 className="mt-2 text-lg text-black  mr-15  font-bold">Zero Carbon</h3>
//           </animated.div>
//           {/* <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
//             <Image src="/flex-dpp.png" alt="Flex-DPP" width={200} height={200} className="w-4/5 rounded-lg" />
//             <h3 className="mt-2 text-lg text-black mr-15 font-bold">Flex-DPP</h3>
//           </animated.div> */}
//         </div>
//       </section>

//       {/* Get In Touch */}
//       {/* <section className="flex justify-between items-center p-12 bg-white">
//         <div className="w-1/2">
//           <h2 className="text-2xl mb-2">Get In Touch</h2>
//           <p className="text-base mb-5">We’re here to help you elevate your business...</p>
//           <form>
//             <input type="text" name="name" placeholder="Enter your name" className="w-full p-2 my-2 border border-gray-300 rounded" />
//             <input type="email" name="email" placeholder="e.g. johndoe@gmail.com" className="w-full p-2 my-2 border border-gray-300 rounded" />
//             <textarea name="message" placeholder="Type your message..." className="w-full p-2 my-2 border border-gray-300 rounded" />
//             <button type="submit" className="px-5 py-2 bg-green-600 text-white rounded mt-2">Submit</button>
//           </form>
//         </div>
//         <div className="w-2/5">
//           <Image src="/contact-us.png" alt="Contact Image" width={600} height={400} className="w-full rounded-lg" />
//         </div>
//       </section> */}
//     </div>
//   );
// }




















 "use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { useContact } from "../../../components/ContactContext";
import { useRouter } from "next/navigation"; 
import { CheckCircle, Zap, Globe, ShieldCheck, Link } from "lucide-react";


export default function Trace() {
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
          <div className="flex items-center justify-center ml-33 mb-5 bg-white rounded-[25px] px-2 py-1 w-70 md:w-70 outline-2 outline-gray-200">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-2 text-black text-sm md:text-lg">AI Powered Technology</p>
          </div>
          <h1 className="mb-4 text-[#29442C] text-[32px] md:text-[56px] font-semibold">TraceChain</h1>
          <p className="text-sm md:text-lg mb-4 text-[#071030] text-[14px] md:text-[18px] font-bold">Trace Every Tier, Every Time</p>
          <span className="block w-full md:w-[34em] text-[14px] md:text-[16px] mb-5 text-[#071030] px-4 md:px-0">
            Build a digital twin of your supply chain for full, real-time visibility and end-to-end traceability.
          </span>
          <button onClick={scrollToContact} className="px-4 md:px-5 py-2 text-white bg-[#29442C] rounded hover:bg-[#29442cd5] transition text-sm md:text-base">
            Request a demo
          </button>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center mt-[20em] md:mt-[30em]">
          <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-[90%] md:w-full h-2/5 md:h-3/5 object-cover" />
        </div>
      </section>

      {/* Second Section */}
      <section className="h-screen flex justify-center items-center relative overflow-hidden">
        <animated.div style={scrollSpring} className="flex justify-center items-center w-full h-full">
          <Image src="/scroll-trace.png" alt="TraceChain" width={800} height={600} className="w-[85%] md:w-[69%] h-[50%] md:h-[65%] object-contain transition-all duration-1000 ease-out" />
        </animated.div>
      </section>

      {/* Third Section */}
      <section className="h-screen flex justify-center items-center bg-gray-50 mb-20">
        <animated.div style={scrollSpringThirdSection} className="flex justify-center items-center w-full h-full">
          <Image src="/tracechain-bg.png" alt="TraceChain" width={1200} height={800} className="w-full h-auto object-cover" />
        </animated.div>
      </section>

      {/* Fourth Section */}
      <section className="h-auto md:h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 py-8 md:py-0">
        <div className="relative left-0 md:left-1/4 md:-translate-x-1/2 text-2xl text-[#29442C] px-4 md:px-0 mb-8 md:mb-0">
          <h1 className="text-[14px] mt-40 md:text-[16px] mb-4 text-[#29442C] rounded-[40px] w-[80px] md:w-[100px] px-2 outline-1 outline-[#29442C]">
            TraceChain
          </h1>

          <div className="text-sm md:text-base w-full md:w-[34em] mb-4 text-[14px] md:text-[16px] leading-relaxed">
            <p className="font-semibold text-base md:text-lg mb-2">
              Trace Every Tier, Every Time
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2">
              <li>
                Build a complete digital twin of your supply chain — from raw materials to the nᵗʰ tier.
              </li>
              <li>
                Full visibility into every supplier to track production in real time, assess performance, and manage resource allocation with precision.
              </li>
              <li>
                Detect issues early, make faster decisions, and strengthen supply chain resilience with end-to-end traceability.
              </li>
            </ul>

            <p className="font-semibold text-base md:text-lg mt-6 mb-2">Why TraceChain?</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Consumer Trust & Transparency</strong> – Strengthen brand reputation by proving product authenticity and offering full traceability from source to shelf.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>AI-Driven Intelligence</strong> – Predict disruptions before they occur and gain proactive insights into supply chain risks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Sustainability & Compliance</strong> – Track ESG metrics across suppliers and ensure alignment with global reporting standards.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Cost & Risk Optimization</strong> – Reduce inefficiencies, manage risks, and improve supplier performance with data-backed decisions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Link className="w-4 mb-50 h-4 md:w-5 md:h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Seamless Integration</strong> – Connect effortlessly with ERP and procurement systems, creating a scalable, future-ready supply chain.
                </span>
              </li>
            </ul>
          </div>

        </div>
        <div className="flex justify-center items-center w-full h-full">
          <Image src="/section-4.png" alt="TraceChain" width={1000} height={800} className="w-[90%] md:w-[75%] h-[60%] md:h-[75%] object-cover transition-all duration-1000 ease-out" />
        </div>
      </section>

      {/* Our Platform */}
      <section className="text-center py-8 md:py-12 bg-gradient-to-b from-[#29442C] to-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 text-white px-4 md:px-5">
          <div className="flex items-center bg-white rounded-[25px] p-1 pr-2 mb-4 md:mb-0">
            {/* <Image src="/rocket-icon.png" alt="Rocket Icon" width={20} height={20} /> */}
            <p className="ml-2 text-black text-base md:text-lg">RePut.ai</p>
          </div>
          <h2 className="text-2xl md:text-4xl ml-0 md:ml-2 font-bold">Our Platform</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-0 px-4 md:px-0">
          <animated.div style={scrollSpringOurPlatform} className="w-full md:w-[27%] text-center">
            {/* <Image onClick={() => router.push(`/platform/circle`)} src="/reput-circle.png" alt="RePut Circle" width={100} height={100} className="w-4/5 rounded-lg" /> */}
            <Image onClick={() => router.push(`/platform/circle`)} src="/ajk.png" alt="RePut Circle" width={100} height={100} className="w-3/5 md:w-4/5 mx-auto rounded-lg cursor-pointer" />
            <h3 className="mt-2 text-base md:text-lg text-black font-bold">RePut Circle</h3>
          </animated.div>
          <animated.div style={scrollSpringOurPlatform} className="w-full md:w-[27%] text-center">
            {/* <Image onClick={() => router.push(`/platform/zerocarbon`)} src="/zero-carbon.png" alt="Zero Carbon" width={200} height={200} className="w-4/5 rounded-lg" /> */}
            <Image onClick={() => router.push(`/platform/zerocarbon`)} src="/carddCirvc.png" alt="Zero Carbon" width={200} height={200} className="w-3/5 md:w-4/5 mx-auto rounded-lg cursor-pointer" />
            <h3 className="mt-2 text-base md:text-lg text-black font-bold">Zero Carbon</h3>
          </animated.div>
          {/* <animated.div style={scrollSpringOurPlatform} className="w-[27%] text-center">
            <Image src="/flex-dpp.png" alt="Flex-DPP" width={200} height={200} className="w-4/5 rounded-lg" />
            <h3 className="mt-2 text-lg text-black mr-15 font-bold">Flex-DPP</h3>
          </animated.div> */}
        </div>
      </section>

      {/* Get In Touch */}
      {/* <section className="flex justify-between items-center p-12 bg-white">
        <div className="w-1/2">
          <h2 className="text-2xl mb-2">Get In Touch</h2>
          <p className="text-base mb-5">We're here to help you elevate your business...</p>
          <form>
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-2 my-2 border border-gray-300 rounded" />
            <input type="email" name="email" placeholder="e.g. johndoe@gmail.com" className="w-full p-2 my-2 border border-gray-300 rounded" />
            <textarea name="message" placeholder="Type your message..." className="w-full p-2 my-2 border border-gray-300 rounded" />
            <button type="submit" className="px-5 py-2 bg-green-600 text-white rounded mt-2">Submit</button>
          </form>
        </div>
        <div className="w-2/5">
          <Image src="/contact-us.png" alt="Contact Image" width={600} height={400} className="w-full rounded-lg" />
        </div>
      </section> */}
    </div>
  );
}