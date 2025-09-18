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
          TCFD Framework 
        </span>{" "}
        is the leading global standard for climate risk disclosure, guiding companies to integrate {" "}
        <span className="text-green-500 font-medium">
         governance, strategy, and risk management
        </span>{" "}
         with climate considerations
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For businesses, adopting <span className="text-green-500 font-medium">TCFD</span> is essential to meeting{" "}
        <span className="text-green-500 font-medium">
          investor demands, improving resilience against climate risks, and sustaining long-term competitiveness
        </span>{" "}
        in markets where transparency on climate impacts drives access to capital.
      </p>
    </section>
  );
}
