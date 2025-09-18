import React, { useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  // description: string;
  isActive: boolean;
  color: string;
  textColor: string;
}

export default function CBAMTimeline(){
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timelineData: TimelineItem[] = [
    {
      year: '2023-2025',
      // title: 'EUDR Adoption',
      title: 'CBAM transitional phase with mandatory emissions reporting',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2025',
      // title: 'Large Companies Compliance',
      title: 'Malaysia advances carbon pricing via Voluntary Carbon Market (VCM)',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2026',
      // title: 'SME Inclusion',
      title: 'Full CBAM implementation with carbon levy payments',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: 'Late 2020s',
      // title: 'Full Enforcement',
      title: 'Late 2020s: Malaysia introduces national carbon tax under NETR',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2026+',
      // title: 'ACE',
      title: 'Expansion of CBAM scope and stricter verification requirements.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    } 
  ];

  const handleItemClick = (index: number) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-4">
            Phased Rollout of CBAM and Malaysia’s Carbon Tax Requirements:
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line for mobile */}
          <div className="md:hidden absolute left-8 top-8 bottom-8 w-0.5 bg-green-300"></div>
          
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-1 bg-green-300"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedItem === index ? 'scale-105' : ''
                }`}
                onClick={() => handleItemClick(index)}
              >
                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`relative z-10 flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      {/* <span className="text-white font-bold text-sm">
                        {item.year}
                      </span> */}
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-md p-4 border-l-4 border-green-400">
                      <h3 className="font-semibold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      {/* <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p> */}
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:block">
                  <div className="flex items-center">
                    {/* Year circle */}
                    <div
                      className={`relative z-10 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-all duration-300 hover:scale-110`}
                    >
                      <span className="text-white font-bold text-sm">
                        {item.year}
                      </span>
                    </div>

                    {/* Content card */}
                    <div className="ml-8 flex-1 bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-400 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <h3 className="text-[18px] text-slate-800 mb-2">
                            {item.title}
                          </h3>
                          {/* <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p> */}
                        </div>
                        {/* {item.year === '2024' && (
                          <div className="mt-4 lg:mt-0 lg:ml-4">
                            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                              30 December 2024
                            </span>
                          </div>
                        )}
                        {item.year === '2025' && (
                          <div className="mt-4 lg:mt-0 lg:ml-4">
                            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                              30 June 2025
                            </span>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded details for mobile */}
                {selectedItem === index && (
                  <div className="md:hidden mt-4 bg-green-50 rounded-lg p-4 border border-green-200 animate-pulse">
                    <p className="text-sm text-green-700 font-medium">
                      Click to collapse details
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        {/* <div className="mt-16 bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-400">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              Key Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="font-medium text-blue-700">Forest-risk commodities:</span>
                <br />Cattle, cocoa, coffee, palm oil, soy, wood, rubber
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <span className="font-medium text-green-700">Compliance required:</span>
                <br />Due diligence and risk assessment systems
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <span className="font-medium text-orange-700">Penalties:</span>
                <br />Fines up to 4% of annual turnover
              </div>
            </div>
          </div>
        </div> */}
        <h2 className='text-black font-medium'>
          Early preparation is essential, as both CBAM and Malaysia’s carbon tax will reshape cost structures, trade competitiveness, and investor expectations.
        </h2>
      </div>
    </div>
  );
};
