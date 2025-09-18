 



import Image from "next/image";

export default function ProductFeatures() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 bg-white space-y-6">

              {/* DPP */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Digital Product Passports and Blockchain Integration</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Store product information in digital certificates to ensure transparency and regulatory compliance.</li>
            <li>Use blockchain to secure and guarantee data integrity, making it tamper-proof.</li>
            <li>Consolidate all product-related details for easy access and verification.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/dpp_.png"
            alt="Digital Product Passport"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>






      {/* ERP Integration */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">ERP Integration and APIs</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Integrate your ERP system with our platform to unify supply chain processes.</li>
            <li>UUse dedicated APIs for real-time updates on warehouse, product, and pallet data</li>
            <li>Improve team communication and streamline workflows across all operational stages.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/technologycard5.png"
            alt="ERP Integration"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>





      {/* Centralized Data Management */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">IOT Integration</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Centralize data from IoT devices to monitor key parameters like location and temperature.</li>
            <li>Use continuous monitoring to gain insights that optimize asset protection and operations</li>
            <li>Respond proactively to environmental changes with real-time data tracking.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/iot2.png"
            alt="Centralized Data Management"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>


            {/* Real-time Monitoring */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Sub-tier Mapping</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Manage and track supplier data across all tiers for comprehensive oversight</li>
            <li>Ensure compliance with regulations and manage risks in the supply chain.</li>
            <li>Integrate multi-tier supplier information directly into your ERP system via API.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/subTier.png"
            alt="Real-time Monitoring"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>





      {/* IoT Technology */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Third-Party Audit and Management</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Conduct Quality, Compliance, Sustainability, and Ethical Audits for data accuracy.</li>
            <li>Use secure APIs to query publicly available databases for third-party verification.</li>
            <li>Perform independent audits when reliable data is unavailable to ensure integrity.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/audit2.png"
            alt="IoT Technology"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>


      
      {/* Cloud Architecture */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Prescriptive Analytics</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>HProvide real-time data to enhance network efficiency and anticipate issues.</li>
            <li>Monitor multiple operational parameters to track shipments with precision.</li>
            <li>Enable proactive decision-making to avoid disruptions and mitigate risks.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/perspective.png"
            alt="Cloud Architecture"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>




    </section>
  );
}
