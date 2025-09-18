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
        <span className="text-green-500 font-medium">
          The EUDR is the EU’s flagship regulation
        </span>{" "}
        to tackle global deforestation and forest degradation by ensuring only{" "}
        <span className="text-green-500 font-medium">
          deforestation-free and legal products
        </span>{" "}
        are traded in the EU market.
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For Malaysia, this regulation is particularly significant for{" "}
        <span className="text-green-500 font-medium">
          palm oil and rubber exports
        </span>
        , where the EU is a critical trading partner. Businesses that move early
        to align with EUDR can position themselves as{" "}
        <span className="text-green-500 font-medium">
          leaders in sustainable trade
        </span>{" "}
        and secure long-term EU market access.
      </p>
    </section>
  );
}
