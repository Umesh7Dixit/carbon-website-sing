// components/RePutBenefits.tsx
import Image from 'next/image';

export default function RePutBenefits() {
  const features = [
    {
      title: 'Security',
      description:
        'Gain scalability without compromising privacy. Stay compliant with the latest data privacy regulations, including EU GDPR, CSA STAR, CCPA, and other global standards.',
      icon: '/security.png',
    },
    {
      title: 'Chain of Custody Traceability',
      description:
        'Trace your supply chains from raw materials to finished products. Ensure end-to-end visibility and fulfill various importer guidelines for human rights and sustainability.',
      icon: '/box.png',
    },
    {
      title: 'Resiliency Scoring',
      description:
        'Our highly configurable risk and resiliency scoring solutions help to assess risks regarding suppliers, sites, and workflows across different sources.',
      icon: '/resiliance.png',
    },
    {
      title: 'Non-synchronous QR Codes',
      description:
        'Log and track material flow using data that can be verified later. Keep track of shipping data at various transit points even if there is no connectivity.',
      icon: '/qr.png',
    },
    {
      title: 'CAPA Management',
      description:
        'Address supplier-related issues for enhanced collaboration and improved performance, and stay aligned with critical regulatory standards like ISO, FDA, and more.',
      icon: '/capa.png',
    },
    {
      title: 'Modular Design',
      description:
        'Our platform and its modular patches provide you with tailored solutions that increase agility and flexibility and enable you to reach economies of scale.',
      icon: '/modularDesign.png',
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ 
        backgroundImage: 'url("/blueBg.png")',
        backgroundColor: '#1a4b6b'
      }}
    >
      <div className="flex items-center min-h-screen">
        {/* Left side - Industrial illustration and title */}
        <div className="flex-1 px-6 lg:px-12">
          {/* Industrial illustration */}
          <div className="mb-8">
            <Image
              src="/tracebility.png"
              alt="Industrial Supply Chain"
              width={400}
              height={250}
              className="w-full max-w-md"
            />
          </div>
          
          {/* Title and description */}
          <div className="max-w-lg">
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4">
              Why should you choose RePut?
            </h2>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed">
              Experience the power of a unified platform designed to meet all your supply chain traceability and sustainability needs. Our cutting-edge solutions empower you to overcome modern supply chain challenges with confidence and ease.
            </p>
          </div>
        </div>

        {/* Right side - Features grid */}
        <div className="flex-1 px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-2xl">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-lg lg:text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}