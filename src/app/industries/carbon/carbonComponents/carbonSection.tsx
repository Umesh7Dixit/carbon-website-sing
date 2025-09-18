import Image from "next/image";

export default function CarbonSection() {
  return (
    <section className="w-full bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl shadow-green-400">

          {/* Laptop mockup */}
          <div className="relative z-10 h-[400px] md:h-[500px] flex justify-center items-center overflow-hidden max-w-2xl mx-auto mb-20 mt-20">
            <Image
              src="/carbontrace.png"
              alt="Laptop Dashboard"
              width={400}
              height={200}
              // className="drop-shadow-2xl"
            />
             
          {/* </div> */}
        </div>

        {/* Right Side - Text */}
        <div className="bg-green-50 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            DPP & Carbon<br/> Dashboard with RePut.ai
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To bring textile products to market in the EU and other regulated regions, brands must build a{" "}
            <span className="font-semibold">transparent, compliant, and sustainable supply chain</span> with all
            essential product and emissions data in one place. RePut.ai’s{" "}
            <span className="font-semibold">Digital Product Passport</span> and{" "}
            <span className="font-semibold">Carbon Dashboard</span> work together to collect, verify, and share data
            across the supply chain—including material composition, GHG emissions, recycled content, and ESG
            metrics—ensuring that every supplier meets regulatory and certification requirements.
          </p>
          <button className="bg-[#07130C] text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition flex items-center gap-2 w-fit">
            Book for Demo →
          </button>
        </div>
      </div>
    </section>
  );
}





