import React, { useState } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  // description: string;
  isActive: boolean;
  color: string;
  textColor: string;
}

export default function RSPOTimeline(){
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timelineData: TimelineItem[] = [
    {
      year: '2004',
      // title: 'EUDR Adoption',
      title: 'RSPO (Roundtable on Sustainable Palm Oil) established as a global multi-stakeholder initiative.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2008',
      // title: 'Large Companies Compliance',
      title: 'First RSPO-certified sustainable palm oil (CSPO) enters the market.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2013',
      // title: 'SME Inclusion',
      title: 'Certification expands to cover smallholders, processors, and traders, strengthening global supply chain accountability.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2018',
      // title: 'Full Enforcement',
      title: 'Revised RSPO Principles & Criteria (P&C) adopted, raising standards on deforestation, peatland protection, and labor rights.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2020',
      // title: 'ACE',
      title: 'Increasing demand from global buyers for RSPO-certified palm oil, with certification becoming a prerequisite for market access in many regions.',
      isActive: false,
      color: 'bg-green-400',
      textColor: 'text-green-400'
    },
    {
      year: '2025+',
      // title: 'Market Preference',
      title: 'Broader adoption expected, with stricter compliance, third-party verification, and integration into corporate sustainability strategies.',
      isActive: true,
      color: 'bg-slate-700',
      textColor: 'text-slate-700'
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
            Phased rollout of Bursa Malaysia’s ESG reporting requirements:
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

  
      </div>
    </div>
  );
};
