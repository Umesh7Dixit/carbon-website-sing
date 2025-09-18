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
          Carbon Border Adjustment Mechanism (CBAM) 
        </span>{" "}
        and Malaysia&apos;s planned{" "}
        <span className="text-green-500 font-medium">
         carbon tax
        </span>{" "}
        mark a decisive shift toward pricing carbon and aligning trade with global climate policies. Exporters and high-emission industries must now demonstrate credible carbon reporting to secure market access and manage future tax exposures.
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
        For Malaysian businesses, early preparation is crucial. Companies that adapt quickly can position themselves as{" "}
        <span className="text-green-500 font-medium">
          low-carbon leaders
        </span>
        , unlock access to{" "}
        <span className="text-green-500 font-medium">
          green financing
        </span>{" "}
        , and strengthen trust with regulators, investors, and international buyers.
      </p>
    </section>
  );
}
