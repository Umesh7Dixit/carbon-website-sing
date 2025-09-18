




export default function MissionVisionSection() {
  return (
    <section
      className="relative bg-cover bg-center  flex items-center py-20"
      style={{ backgroundImage: "url('/aboutBackground.png')" }} // <-- your background image path
    >
      <div className="bg-white/60 backdrop-blur-sm w-full h-full absolute top-0 left-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
          Future of Supply Chains
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Mission",
              description:
                "Our mission is to transform supply chains worldwide by providing unparalleled visibility, enabling companies to meet their sustainability goals, and fostering a circular economy. By focusing on sustainable practices in high-impact industries, we empower organizations to minimize carbon emissions, recycle responsibly, and proactively address disruptions, creating a greener future for all.",
            },
            {
              title: "Vision",
              description:
                "To create a future where all supply chains are traceable, transparent, sustainable and circular. We want to create a future where companies can be confident about their supply chains and are empowered to operate efficiently, effectively and ethically.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md text-left hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
