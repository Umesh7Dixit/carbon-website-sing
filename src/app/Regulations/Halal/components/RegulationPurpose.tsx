"use client";

export default function RegulationPurpose() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Regulation <span className="text-green-500">Purpose</span>
      </h2>

      {/* First Paragraph */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
        The<span className="text-green-500 font-medium">
           The Halal Certification Standard        
        </span>{" "}
        is a globally recognized framework that ensures products and services are  {" "}
        <span className="text-green-500 font-medium">
         religiously compliant, hygienically produced, and ethically managed
        </span>{" "}
         across industries such as food, cosmetics, pharmaceuticals, and logistics. 
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For businesses, Halal certification is critical to meeting{" "}
        <span className="text-green-500 font-medium">
          international market expectations
        </span>
        , building{" "}
        <span className="text-green-500 font-medium">
          consumer trust, 
        </span>{" "}
        and securing
        <span className="text-green-500 font-medium">
           long-term competitiveness
        </span>{" "}
        in the rapidly growing global Halal economy.
      </p>
    </section>
  );
}
