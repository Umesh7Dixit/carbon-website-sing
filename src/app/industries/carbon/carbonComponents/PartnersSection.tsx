import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Text Blocks */}
        <div className="space-y-12 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Accelerate Your Clients Sustainability Journey
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              By partnering with us, you can help your clients meet sustainability
              goals and comply with key regulations faster than ever before. Our
              extensive network and industry expertise give your clients a significant
              advantage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trusted by Global Partners
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              By partnering with us, you can help your clients meet sustainability
              goals and comply with key regulations faster than ever before. Our
              extensive network and industry expertise give your clients a significant
              advantage.
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-10 border-t border-gray-200 pt-10 shadow-xl shadow-green-100 w-full"> */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10     pt-10   w-full">
          <Image src="/tata.png" alt="TATA" width={120} height={60} />
          <Image src="/fs.png" alt="First Steps" width={140} height={60} />
          <Image src="/zodaic.png" alt="Zodiac" width={140} height={60} />
          <Image src="/b77.png" alt="B77" width={100} height={60} />
          <Image src="/birla.png" alt="Aditya Birla" width={160} height={60} />
          <Image src="/tesco.png" alt="Tesco" width={140} height={60} />
        </div>
      </div>
    </section>
  );
}
