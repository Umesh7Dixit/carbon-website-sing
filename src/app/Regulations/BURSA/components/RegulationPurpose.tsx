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
           Enhanced Sustainability Reporting Framework 
        </span>{" "}
        is Bursa Malaysia’s flagship move to align listed companies with {" "}
        <span className="text-green-500 font-medium">
          global ESG disclosure standards
        </span>{" "}
        and provide investors with clear, comparable data.
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For Malaysian businesses, this is key as investors demand credible ESG reporting. Early adopters can stand out as{" "}
        <span className="text-green-500 font-medium">
          sustainability leaders
        </span>
        , attract{" "}
        <span className="text-green-500 font-medium">
          green financing
        </span>{" "}
        , and build long-term investor trust.
      </p>
    </section>
  );
}
