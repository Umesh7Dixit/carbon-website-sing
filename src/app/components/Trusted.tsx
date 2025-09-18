"use client";

import Image from "next/image";

export default function Trusted() {
  return (
    <section className="bg-[#0e2f2c] py-12 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
        Trusted By Global Organisation
      </h2>

      {/* Logos Scroller */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* Duplicate logos for infinite loop effect */}
          <div className="flex gap-16 min-w-full justify-around">
            <Image src="/bestinet.png" alt="Logo 1" width={180} height={60} />
            {/* <Image src="/brixton.png" alt="Logo 1" width={180} height={60} w-[21%] h-[60%]  /> */}
            <Image src="/mon.png" alt="Logo 2" width={180} height={60} />
            <Image src="/delphis.png" alt="Logo 3" width={180} height={60} />
            <Image src="/taisin.png" alt="Logo 4" width={180} height={60} />
            <Image src="/vit.png" alt="Logo 5" width={180} height={60} />
            <Image src="/sui.png" alt="Logo 6" width={180} height={60} />
          </div>
          <div className="flex gap-16 min-w-full justify-around">
            {/* <Image src="/futureeco.png" alt="Logo 2" width={180} height={60} /> */}
            <Image src="/futureeco.png" alt="Logo 2" width={180} height={60} />
            <Image src="/simedarby.png" alt="Logo 1" width={180} height={60} />
            <Image src="/myown.png" alt="Logo 3" width={180} height={60} />
            <Image src="/aia.png" alt="Logo 4" width={180} height={60} />
            <Image src="/lordlog.png" alt="Logo 5" width={180} height={60} />
            <Image src="/gEasr.png" alt="Logo 6" width={180} height={60} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 text-sm mt-6">
        Powered by CarbonScan.ai
      </p>
    </section>
  );
}
