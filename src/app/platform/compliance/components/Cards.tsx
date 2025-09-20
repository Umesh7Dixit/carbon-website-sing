"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/imgcards1.png", alt: "Card 1" },
  { src: "/imgcards2.png", alt: "Card 2" },
  { src: "/imgCards3.png", alt: "Card 3" },
  { src: "/imgCards4.png", alt: "Card 4" },
];

export default function Cards() {
  return (
    <main className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
