


"use client"; 
import Image from "next/image";
import { useContact } from "../components/ContactContext"; 
import { ExternalLink } from "lucide-react";

export default function HeroSection() {

  const { scrollToContact } = useContact();
  
  return (

    <div>

      <div className="w-full bg-[#1A3A3A] text-white flex items-center justify-start px-27 py-3 border-b-1 border-[#1f4343c4]">
      {/* <div className="flex items-center space-x-3  border-r-2 border-white">
        <div className="bg-[#A3D86D] rounded-md p-2 flex items-center    justify-center">
          <Image
            src="/leaf.png" // replace with your logo path
            alt="Carbon Software Logo"
            width={20}
            height={20}
          />
        </div>
        <span className="text-sm font-medium text-[14px]">Carbon Software</span>
      </div> */}

      <div className="flex items-center space-x-3">
  {/* Logo + Text */}
  <div className="flex items-center space-x-3 pr-6 border-r-3 border-white">
    <div className=" rounded-md p-2 flex items-center justify-center ">
      <Image
        src="/leaf.png"
        alt="Carbon Software Logo"
        width={30}
        height={30}
        className="w-[50] "
      />
    </div>
    <span className="text-sm font-medium text-[14px]">Carbon Software</span>
  </div>

  {/* Anything that comes after the line */}
  {/* <span className="text-sm text-[14px] font-medium text-white">Get Supply Chain Regulatory News 1× Month</span> */}
</div>

      {/* Middle: Message */}
      <div className="hidden md:block ml-20">
        <span className="text-sm text-[14px] font-medium mr-8">Get Supply Chain Regulatory News 1× Month</span>
      </div>

      {/* Right: Subscribe link */}
      <div className="flex items-center space-x-1 ">
        <div onClick={scrollToContact}>
        <a
          href="#"
          className="text-sm text-[14px] underline flex items-center hover:text-[#A3D86D]"
        >
          Subscribe Today
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        </div>
      </div>
      </div>


    
        <main className="relative h-[90vh] bg-[#1A3A3A] flex items-center px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* Background Image on Right */}




      <div className="absolute right-0 top-[53%]  -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-90">
        <Image
          // src="/homedash1.png" // 👈 replace with your actual image
          src="/dash2.png" // 👈 replace with your actual image
          alt="Dashboard Preview"
          width={600}
          height={500}
          className=""
        />
      </div>

      <div className="absolute right-90 top-[83%]  -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-90">
        <Image
          // src="/homedash1.png" // 👈 replace with your actual image
          src="/gola.png" // 👈 replace with your actual image
          alt="gola"
          width={110}
          height={110}
          className=""
        />
      </div>

      <div className="absolute left-[90%] top-[73%]  -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-40">
        <Image
          // src="/homedash1.png" // 👈 replace with your actual image
          src="/gola.png" // 👈 replace with your actual image
          alt="gola"
          width={110}
          height={110}
          className=""
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl space-y-2 text-left bottom-[90px]">
        {/* Badge */}
        <span className="inline-block bg-[#2f473f] text-[#8DD95B] text-sm font-medium px-4 py-1 rounded-full">
          Sustainability Platform
        </span>

        {/* Heading */}
        <h1 className="text-[60px] text-white sm:text-[60px] lg:text-[60px] font-bold leading-tight w-[1280px]">
          Smarter Carbon Accounting <br />&
          <span className="text-[#8DD95B]"> Informed Decisions</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed w-[600px] text-[18px]">
          Turn regulations into opportunities with one intelligent platform. Track
          and manage carbon accounting, carbon training, BURSA reporting, and Halal
          certification effortlessly.
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed w-[756px] text-[18px]">
          Go a step further with built-in support for carbon capture initiatives. <br/>
          Because true sustainability means preparing your business for tomorrow,
          today.
        </p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-sm text-black">Certified GHG Protocol compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-sm text-black">AI-enhanced interface</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button onClick={scrollToContact} className="bg-[#8DD95B] hover:bg-green-500 text-black px-6 py-3 rounded-full font-semibold transition">
            Request a Demo
          </button>
          <button onClick={scrollToContact} className="border border-[#8DD95B] text-[#8DD95B] hover:bg-[#8DD95B] hover:text-black px-6 py-3 rounded-full font-semibold transition">
            Explore The Platform
          </button>
        </div>
      </div>
        </main>

        </div>
  );
    
}