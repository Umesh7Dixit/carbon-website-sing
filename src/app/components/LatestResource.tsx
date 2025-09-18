"use client";
import Image from "next/image";
import React from "react";

interface Resource {
  id: number;
  category: string;
  readTime: string;
  title: string;
  image: string;
  type: "guide" | "education";
}

export default function LatestResources(){
  // You can fetch this from an API in real-world usage
  const featured: Resource = {
    id: 1,
    category: "Guide",
    readTime: "6-minute read",
    title: "Your Guide to Product Carbon Footprints",
    image: "/latrec.png",
    type: "guide",
  };

  const resources: Resource[] = [
    {
      id: 2,
      category: "Education",
      readTime: "8-minute read",
      title: "Revision of the ESRS: Key Changes You Need to Know",
      image: "/rev12.png",
      type: "education",
    },
    {
      id: 3,
      category: "Education",
      readTime: "4-minute read",
      title:
        "The Rise of Greenhushing: Why Quiet Sustainability Isn’t the Answer",
      image: "/drefi.png",
      type: "education",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800">
          Discover our latest resources
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Left */}
          <div className="relative col-span-1 lg:col-span-1 group overflow-hidden rounded-xl shadow-lg">
            <Image
              src={featured.image}
              alt={featured.title}
              width={600}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4">
              <p className="text-sm text-green-600 font-medium">{featured.category}</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {featured.title}
              </h3>
            </div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {resources.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-4 gap-4 cursor-pointer"
              >
                <div className="relative flex-shrink-0 w-28 h-20 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="mt-1 text-gray-900 font-medium hover:text-green-600">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

