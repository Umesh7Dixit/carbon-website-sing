import Image from "next/image";
import { useContact } from "../../components/ContactContext";

export default function DashboardSection() {
          const { scrollToContact } = useContact();
  
  return (
    <section className="w-full bg-green-50 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left Side - Mockup with background */}
        <div className="relative  h-[400px] md:h-[500px] flex justify-center items-center overflow-hidden max-w-2xl mx-auto mb-20 mt-20">
          {/* Background */}
          <Image
            src="/bglp.png" // place your uploaded image here
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />

          {/* Laptop mockup */}
          <div className="relative z-10 transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/lprhone.png"
              alt="Laptop Dashboard"
              width={500}
              height={300}
              className="drop-shadow-2xl"
            />
            {/* Phone overlay */}
            {/* <div className="absolute top-6 right-[-40px] md:right-[-50px] transform hover:scale-105 transition duration-300">
              <Image
                src="/phone.png"
                alt="Phone Dashboard"
                width={150}
                height={300}
                className="drop-shadow-2xl"
              />
            </div> */}
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="bg-green-50 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-[48px] font-bold mb-4 text-black">
            DPP & Carbon<br/> Dashboard with RePut.ai
          </h2> 
          <p className="text-gray-700 text-[18px] mb-6 leading-relaxed">
            To bring textile products to market in the EU and other regulated regions, brands must build a{" "}
            <span className="font-semibold">transparent, compliant, and sustainable supply chain</span> with all
            essential product and emissions data in one place. RePut.ai’s{" "}
            <span className="font-semibold">Digital Product Passport</span> and{" "}
            <span className="font-semibold">Carbon Dashboard</span> work together to collect, verify, and share data
            across the supply chain—including material composition, GHG emissions, recycled content, and ESG
            metrics—ensuring that every supplier meets regulatory and certification requirements.
          </p>
          <button onClick={scrollToContact} className="bg-[#07130C] text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition flex items-center gap-2 w-fit">
            Book for Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
