"use client"



 
import React from "react";
// import PlatformHero from "../components/PlatformHero";
// import ProductFeatures from "../components/ProductFeature";

// export default function PlatformPage() {
//   return (
//     <main>
//       <PlatformHero />
//       <ProductFeatures />
 
//     </main>
//   );
// }
 





import Image from "next/image";
import Link from "next/link";

export default function PlatformPage() {
  const regulationsTop = [
    { image: "/carbonfootprint.png", title: "carbonfootprint", link: "/platform/corporateCarbon" },
    { image: "/productcarbonfootprnit.png", title: "productcarbonfootprnit", link: "/Regulations/BURSA" },
    { image: "/esgdisclosure.png", title: "esgdisclosure", link: "/platform/esg&carbonreporting" },
  ];

  const regulationsBottom = [
    { image: "/carboncapturingunit.png", title: "carboncapturingunit", link: "/platform/carboncapturingunit" },
    // { image: "/mspocard.png", title: "MSPO", link: "/regulations/mspo" },
    { image: "/carboncredit.png", title: "carboncredit", link: "/platform/carbonCredit" },
    { image: "/carbonTraining.png", title: "carbonTraining", link: "/Regulations/GHG" },
    { image: "/energyAudits.png", title: "energyAudits", link: "/platform/audit" },
    {
      image: "/compliance.png",
      title: "compliance",
      link: "/platform/compliance",
    },
  ];

  const stories = [
    {
      image: "/cock.png",
      title:
        "From hops to hotspots: Hop Nation's first step toward decarbonisation",
      category: "Brewing",
      link: "/stories/hop-nation",
    },
    {
      image: "/bottle.png",
      title:
        "From measurement to impact: How VITHIT is driving sustainability and winning tenders",
      category: "Beverages",
      link: "/stories/vithit",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Regulations Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          REGULATIONS
        </h1>

        {/* Row 1: 3 Cards + Customer Stories */}
        <div className="grid lg:grid-cols-4 gap-6 mb-2">
          {/* First 3 cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {regulationsTop.map((reg, idx) => (
              <Link
                key={idx}
                href={reg.link}
                className="overflow-hidden cursor-pointer transition h-full flex flex-col"
              >
                <div className="relative w-full h-40 md:h-48 lg:h-92">
                  <Image
                    src={reg.image}
                    alt={reg.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Customer Stories */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              CUSTOMER STORIES
            </h2>
            <div className="space-y-4">
              {stories.map((story, idx) => (
                <Link
                  key={idx}
                  href={story.link}
                  className="flex items-center p-3 gap-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.category}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-600 font-semibold uppercase mb-1">
                      {story.category}
                    </p>
                    <h3 className="text-xs text-gray-800 font-medium line-clamp-2">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              ))}
              <Link
                href="/stories"
                className="block text-blue-600 font-semibold text-sm hover:underline"
              >
                See all customer stories →
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: 5 Cards full width */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {regulationsBottom.map((reg, idx) => (
            <Link
              key={idx}
              href={reg.link}
              className="transition h-full flex flex-col cursor-pointer"
            >
              <div className="relative w-full h-40 md:h-48 lg:h-92">
                <Image
                  src={reg.image}
                  alt={reg.title}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}



