 



import Image from "next/image";

export default function TechnologyFeatures() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 bg-white space-y-6">
      {/* ERP Integration */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">ERP Integration</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Integrates OCR APIs for converting physical documents into digital data.</li>
            <li>Uses public database APIs to enrich ERP systems with external data.</li>
            <li>Automates data collection through APIs to reduce manual input and improve efficiency.</li>
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

      {/* DPP */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Digital Product Passport (DPP)</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Stores essential product data in a secure, digital format for transparency.</li>
            <li>Leverages blockchain integration to ensure tamper-proof and trustworthy information.</li>
            <li>Provides comprehensive data on product specifications and sustainability throughout the supply chain.</li>
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

      {/* Real-time Monitoring */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Real-time Monitoring & Automated Reporting</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Provides reliable system insights for issue detection.</li>
            <li>Generates accurate, on-demand reports to support decision-making.</li>
            <li>Enables businesses to take informed action by delivering real-time data.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/real_time.png"
            alt="Real-time Monitoring"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Centralized Data Management */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Centralized Data Management System</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Combines data from various sources into one platform, reducing redundancy.</li>
            <li>Ensures consistent data organization for better decision-making.</li>
            <li>Streamlines operations by unifying disparate data systems.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/technologyCard4_.png"
            alt="Centralized Data Management"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cloud Architecture */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Scalable Cloud-based Architecture</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Handles growing data and user demands without lag.</li>
            <li>Adapts to business needs with cost-efficient scaling.</li>
            <li>Ensures seamless integration with both legacy and emerging technologies.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/transaction.png"
            alt="Cloud Architecture"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* IoT Technology */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">IoT Technology</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Uses sensors to monitor environmental factors (e.g., temperature, humidity) in real-time.</li>
            <li>Provides actionable data for predictive maintenance and reducing downtime.</li>
            <li>Automates alerts to notify stakeholders about any supply chain anomalies.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/techCard1.png"
            alt="IoT Technology"
            width={720}
            height={400}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
