"use client";
import Image from "next/image";

export default function CarbonSoftware() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-white text-gray-800">
      {/* Text Content */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#8DD95B]">Carbon Accounting Software</span>{" "}
          Built From Experience
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We’ve been helping Malaysian businesses track their carbon footprint
          and cut emissions <strong>with 10+ years</strong> of proven expertise.
        </p>
        <p className="text-gray-600 mb-2">
          From manufacturing and palm oil to transport and exporters, we partner
          with organizations of all sizes—whether local enterprises or global
          players.
        </p>
        <p className="text-gray-600">
          Alongside our carbon accounting platform, we provide global-standard
          training programs developed in line with top international
          institutions, ensuring your teams are prepared for the future of
          sustainability.
        </p>
      </div>

      {/* Single Image Section */}
      <div className="relative mt-12 flex justify-center items-center">
        {/* Circle Background */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-green-100 rounded-full -z-10 right-10 top-10"></div>

        {/* Only One Image */}
        <Image
          src="/exp.png" // replace with your uploaded single image
          alt="CarbonScan Dashboard"
          width={850}
          height={500}
          className=""
        />
      </div>
    </section>
  );
}
