// components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    { number: "01.", title: "Onboarding" },
    { number: "02.", title: "Data Ingestion & Auto Schema" },
    { number: "03.", title: "Track & Trace Chain" },
    { number: "04.", title: "Monitoring & Reporting" },
  ];

  return (
    <div className="bg-black py-12">
      <h2 className="text-white text-3xl font-semibold text-center mb-12">
        How It Works
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <p className="text-white text-3xl font-bold mb-2">{step.number}</p>
            <p className="text-blue-600 font-semibold text-lg">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
