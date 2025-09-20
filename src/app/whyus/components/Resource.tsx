"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const resources = [
  {
    type: "Guide",
    title: "Your Guide to Product Carbon Footprints",
    image: "/guideni.png", // put in /public folder
    link: "#",
  },
];

const articles = [
  {
    category: "Education",
    time: "8-minute read",
    title: "Revision of the ESRS: Key Changes You Need to Know",
    image: "/treen.png", // /public
    link: "#",
  },
  {
    category: "Education",
    time: "6-minute read",
    title:
      "The Rise of Greenhushing: Why Quiet Sustainability Isn’t the Answer",
    image: "/cniie.png",
    link: "#",
  },
];

export default function Resource() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Discover our latest resources
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left big guide */}
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg cursor-pointer flex flex-col items-center"
            >
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full self-start mb-4">
                {resource.type}
              </span>
              <div className="relative w-75 h-75">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                {resource.title}
              </h3>
            </motion.div>
          ))}

          {/* Right small articles */}
          <div className="flex flex-col gap-6">
            {articles.map((article, index) => (
              <motion.a
                href={article.link}
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl shadow hover:shadow-md flex items-center gap-4 p-4 cursor-pointer"
              >
                {/* Left icon */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500">• {article.time}</span>
                  </div>
                  <h4 className="text-gray-900 font-medium">{article.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
