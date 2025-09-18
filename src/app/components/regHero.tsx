import Image from "next/image";

export default function RegHero() {
  return (
    <div className="relative h-screen w-full">
      {/* Optimized Background Image */}
      <Image
        src="/regImage.png" // Make sure this image is inside /public
        alt="regImage Background"
        fill // Fills the parent container
        className="object-cover"
        priority // Loads image ASAP for LCP
      />

       
    </div>
  );
}
