"use client";
import Image from "next/image";
import CountUp from "react-countup";

export default function PeopleImpact() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              "/abd.png",
              "/nojo.png",
              "/nioj.png",
              "/niohio.png",
              "/nilh.png",
              "/nio.png",
              "/buiio.png",
              "/nioopo.png",
              "/iohio.png",
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Team member ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right side - Text and Numbers */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our people and impact
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re a global team of climate experts, technologists and leaders
              with a passion to solve climate change.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <div className="text-3xl font-bold text-green-700">
                  <CountUp end={150000} separator="," duration={3} />+
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Tonnes of CO₂e emissions we manage for our customers, and
                  counting.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-green-700">
                  <CountUp end={25} duration={2} />+
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  The number of countries our customers operate in.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-green-700">
                  <CountUp end={18} duration={2.5} />
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Different nationalities and countries in our team.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-green-700">
                  <CountUp end={7} duration={2.5} />
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  The number of countries our team works across.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

