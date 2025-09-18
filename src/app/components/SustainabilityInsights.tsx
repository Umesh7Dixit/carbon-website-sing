"use client";
import Image from "next/image";

interface InsightCard {
  img: string;
  category: string;
  date: string;
  title: string;
  readTime: string;
}

const insights: InsightCard[] = [
  {
    img: "/teans.png",
    category: "Compliance",
    date: "Sep 10, 2023",
    title: "Powering transformation across industries",
    readTime: "4 min",
  },
  {
    img: "/port.png",
    category: "Compliance",
    date: "Sep 10, 2023",
    title: "Powering transformation across industries",
    readTime: "4 min",
  },
  {
    img: "/co2.png",
    category: "Compliance",
    date: "Sep 10, 2023",
    title: "Powering transformation across industries",
    readTime: "4 min",
  },
];

export default function SustainabilityInsights () {
  return (
    <div className="w-full  bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 max-w-7xl mx-auto px-4 py-12">
        <span className="text-green-700 font-semibold italic">Sustainability</span>
        <span className="text-black"> Insight</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-12">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Image with category badge */}
            <div className="relative w-full h-48">
              <Image
                src={insight.img}
                alt={insight.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-white text-green-700 text-xs font-medium px-3 py-1 rounded-full shadow">
                {insight.category}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-4">
              <p className="text-gray-500 text-sm">{insight.date}</p>
              <h3 className="text-base font-medium text-gray-800 mt-1 mb-3">
                {insight.title}
              </h3>
              <div className="flex items-center text-gray-500 text-sm gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {insight.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};








 