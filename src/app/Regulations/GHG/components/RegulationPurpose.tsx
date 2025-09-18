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
        The<span className="text-green-500 font-medium">{" "}
          GHG Reporting Framework 
        </span>{" "}
        is the global benchmark for emissions transparency, helping companies measure, manage, and disclose their carbon footprint across{" "}
        <span className="text-green-500 font-medium">
           Scope 1, 2, and material Scope 3 emissions.
        </span>
         
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For businesses, robust GHG reporting is critical to satisfying investor{" "}
        <span className="text-green-500 font-medium">
          expectations, enhancing operational resilience, and maintaining competitiveness
        </span>
         in markets where emissions transparency and carbon management influence access to financing and stakeholder trust.
      </p>
    </section>
  );
}
