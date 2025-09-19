"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Customer Centricity",
    image: "/customer34.png", // put your image in public folder
    description:
      "We live and build for our customers. Their challenges shape our roadmap, and their success is our north star. Every interaction is rooted in empathy, partnership, and value creation.",
  },
  {
    title: "Swiftness and Agility",
    image: "/swift.png", // put your image in public folder
    description:
      "We move fast, with intention. Our teams are empowered to make decisions, adapt quickly, and deliver meaningful results without layers of complexity or bureaucracy.",
  },
  {
    title: "Code Meets Climate",
    image: "/code.png", // put your image in public folder
    description:
      "This is where enterprise-grade engineering meets deep climate expertise. We blend product-first thinking with hands-on domain expertise to architect systems that are scalable, intelligent, and grounded in science.",
  },
];

export default function DifferentiatesUs(){
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          What <span className="text-green-500 italic">Differentiates</span> Us ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-40 h-40 relative mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Title */}
              <h3 className="text-[30px] font-semibold text-[#1A3A3A]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#1A3A3A] text-base leading-relaxed text-[18px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

