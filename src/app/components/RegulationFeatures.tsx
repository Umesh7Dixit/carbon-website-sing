 



import Image from "next/image";

export default function RegulationFeatures() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10 bg-white space-y-6">



          {/* DPP */}
      <div className="w-[920px] h-[400px] mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="md:w-1/2 md:pl-8">
            <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Product Safety Law
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Registration, Evaluation, Authorisation, and Restriction of Chemicals</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>An EU regulation aimed at ensuring the safe use of chemicals to protect human health and the environment.</li>
            <li>Mandates manufacturers, importers, and downstream users to register substances produced or imported in volumes of one tonne or more per year.</li>
            <li>Businesses must submit detailed dossiers on chemical properties, exposure risks, and safety measures to the European Chemicals Agency (ECHA).</li>
            <li>Safety information should be communicated downstream.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/reach_.png"
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
            <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Product Safety Law
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Corporate Sustainability Due Diligence Directive</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Companies operating in the EU should identify, prevent, mitigate, and account for adverse human rights and environmental impacts within their supply chains such as labour violations and deforestation.</li>
            <li>Firms must conduct risk assessments, implement preventive measures, and disclose due diligence findings.</li>
            <li>Non-compliance can lead to legal penalties and reputational damage.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/csdd.png"
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
            <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Data Privacy Law
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">General Data Protection Regulation</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>GDPR governs data privacy in the EU and applies to all entities processing personal data of EU residents, regardless of the company’s location.</li>
            <li>Businesses must implement robust data protection practices and maintain detailed records of data processing activities.</li>
            <li>Data breaches must be reported within 72 hours to authorities and affected parties.</li>
            <li>All stakeholders, including third-party vendors, should adhere to stringent data security protocols to prevent breaches.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/gdpr.png"
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
            <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Environmental Regulation
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Carbon Disclosure Project</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Voluntary disclosure system to report environmental impacts, including carbon emissions, water security, and deforestation.</li>
            <li>Encourages companies to engage suppliers in reducing emissions, setting science-based targets, and adopting renewable energy.</li>
            <li>Improves regulatory readiness for carbon accounting frameworks.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/cdp.png"
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
            <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Carbon Emission Regulation
          </div>
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Science-Based Targets initiative</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Guides companies in setting carbon reduction targets aligned with the Paris Agreement’s goal of limiting global warming to 1.5°C.</li>
            <li>Businesses are required to submit targets for validation, demonstrate progress, and publicly disclose performance.</li>
            <li>Includes Scope 1, 2, and 3 emissions, encompassing both direct and indirect emissions in the supply chain.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/sbt.png"
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
          <div className="inline-block bg-[#0c1f3f] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Post Purchase Regulation
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Extended Producer Responsibility</h2>
          <ul className="list-disc pl-6 text-[#333] space-y-2">
            <li>Assigns producers the responsibility for managing the post-consumer phase of their products including financing or organizing collection, recycling, and environmentally sound disposal.</li>
            <li>Incentivize producers to design eco-friendly products and reduce material usage.</li>
            <li>Involves partnerships with waste management firms and regulators.</li>
          </ul>
        </div>
        <div className="md:w-1/2 h-full">
          <Image
            src="/epr.png"
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
