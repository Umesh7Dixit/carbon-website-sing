import Image from "next/image";

export default function OurJourney() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Content */}
        <div className="md:w-[55%] space-y-6">
          <p className="text-sm text-[#0c1f3f] font-medium">About us</p>
          <h2 className="text-5xl font-bold text-[#0c1f3f] leading-tight">Our Journey</h2>
          <div className="space-y-5 text-[#333] text-base leading-relaxed">
            <p>
              Our founding team, composed of seasoned entrepreneurs with a track record of successful exits,
              has come together with a shared vision: to create a world-class product that revolutionizes the way
              businesses manage and monitor their supply chains.
            </p>
            <p>
              Our innovative platform integrates cutting-edge blockchain technology, ensuring immutable and
              verifiable records of every transaction. Coupled with advanced AI algorithms, we provide real-time
              insights and predictive analytics, empowering businesses to make informed decisions and optimize
              their operations.
            </p>
            <p>
              From raw materials to finished products, our solution offers complete visibility and accountability,
              reducing risks and enhancing trust across the supply chain.
            </p>
            <p>
              Headquartered in Bengaluru, we are committed to delivering excellence on a global scale. Join us on our journey
              to redefine supply chain management and set new standards for integrity and performance.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[35%] w-full ">
          <div className="rounded-xl w-[75%] overflow-hidden">
            <Image
              src="/publicImg.png" // Replace with correct path
              alt="Team discussion"
              width={520}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-gray-300">
        {[
          { value: "12+", label: "Brands" },
          { value: "5+", label: "Countries" },
          { value: "8MT+", label: "Emissions Diverted" },
          { value: "112+", label: "Suppliers" }
        ].map((stat, index) => (
          <div key={index} className="px-4">
            <h3 className="text-3xl font-bold text-[#0c1f3f]">{stat.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
