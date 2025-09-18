"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const cards = [
    {
      category: "Multiple Methods",
      title: "Global Recognition",
      description:
        "Our platform is built on proven methodologies and validated research. Every metric and report is anchored in robust data practices, ensuring accuracy, consistency, and trustworthiness for decision-making.",
      // images: ["/gri.png", "/green.png", "/pcaf.png", "/issb.png"],
      // images: ["/defra.png", "/green.png"],
      images: ["/newDefra.png", "/newGHG.png"],
    },
    {
      category: "Knowledge Leadership",
      title: "Experts at the Core",
      description:
        "Our team brings together sustainability strategists, engineers, and innovators with deep expertise across climate, energy, and technology domains.",
      // images: ["/goals4.png", "/bh3.png"],
      images: ["/iis.png", "/newsus.png"],
    },
    {
      category: "Expert Team",
      title: "Globally Trusted Standards ",
      description:
        "Recognized for aligning with internationally accepted sustainability frameworks, we bring unmatched credibility and transparency—helping organizations meet compliance requirements while building trust with stakeholders.",
      // images: ["/sbt22.png", "/cii3.png"],
      images: ["/confnew.png", "/sbtnew.png"],
    },
    {
      category: "Security First",
      title: "Data You Can Trust",
      description:
        "Your information is safeguarded with enterprise-grade systems designed for resilience, confidentiality, and compliance with the highest digital protection standards.",
      // images: ["/iso77.png", "/iso33.png"],
      images: ["/ceni.png", "/memfo.png"],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className=" text-black text-3xl md:text-4xl font-semibold">
          Sustainably Empowering{" "}
          <span className="text-green-600 italic font-bold">The Future</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Leading the global transition to sustainability through science-backed
          solutions and transparent reporting
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition text-[#29442C]"
          >
            {/* Category */}
            <p className="  text-sm font-medium text-[#29442C]">{card.category}</p>

            {/* Title */}
            <h3 className="text-xl font-bold text-[20px] text-[#29442C] mt-1">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[#29442C] text-[16px] mt-2 text-sm">{card.description}</p>

            {/* Logos */}
            <div className="flex flex-wrap gap-20 mt-6 ml-20">
              {card.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="logo"
                  width={130}
                  height={120}
                  className="object-contain "
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
