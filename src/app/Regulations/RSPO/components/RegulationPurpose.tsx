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
           The RSPO Certification Standard 
        </span>{" "}
        is a globally recognized sustainability initiative, ensuring palm oil production is  {" "}
        <span className="text-green-500 font-medium">
          environmentally responsible, socially just, and economically sustainable.
        </span>{" "}
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For businesses, RSPO certification is critical to meeting   {" "}
        <span className="text-green-500 font-medium">
          international market expectations,
        </span>
         enhancing{" "}
        <span className="text-green-500 font-medium">
          supply chain transparency,
        </span>{" "}
        and securing 
        <span className="text-green-500 font-medium">
           long-term competitiveness 
        </span>{" "}
        in an era of growing demand for sustainable sourcing.
      </p>
    </section>
  );
}
