import Image from "next/image";

export default function TechnologyPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Optimized Background Image */}
      <Image
        src="/technologyLayer1.png" // Make sure this image is inside /public
        alt="Technology Background"
        fill // Fills the parent container
        className="object-cover"
        priority // Loads image ASAP for LCP
      />

       
    </div>
  );
}
