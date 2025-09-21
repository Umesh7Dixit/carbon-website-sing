"use client"

import React, { useState } from 'react';
// import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useContact } from "../components/ContactContext"; 


export default function CarbonZeroPlatform(){
  const [activeTab, setActiveTab] = useState('Training');
    const { scrollToContact } = useContact();
  

  const tabs = ['Training', 'Measure', 'Analyse', 'Plan', 'Reduce', 'Earn'];

  const TrainingContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Training</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Build Climate Skills</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Empower your workforce with practical training on carbon literacy, 
            ESG, and sustainability practices. Turn awareness into actionable 
            climate leadership.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={600}
            height={400}
            src="/training.png"
            alt="Training session with people in a modern office environment, showing workplace sustainability education"
            className="w-full h-80 lg:h-96 object-cover"
          />
          {/* Certificate overlay */}
          {/* <div className="absolute top-4 right-4 bg-green-800 text-white p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-bold">CERTIFICATE</div>
            <div className="text-xs opacity-90">OF COMPLETION</div>
            <div className="text-xs mt-1 opacity-80">Climate Training</div>
          </div> */}
        </div>
      </div>
    </div>
  );

  const MeasureContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Measure</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Track What Matters</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Capture accurate Scope 1, 2, and 3 emissions data with our AI-powered 
            carbon accounting tools, ensuring compliance and transparency.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={600}
            height={400}
            src="/kpkfro.png"
            alt="Carbon emissions dashboard showing analytics, charts, and sustainability metrics on computer screens"
            className="w-full h-80 lg:h-96 object-cover"
          />
          {/* Dashboard overlay */}
          {/* <div className="absolute top-4 left-4 right-4 grid grid-cols-2 gap-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="text-xs font-medium text-gray-700">Total CO2e</div>
              <div className="text-sm font-bold text-green-600">2,450 MT</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <div className="text-xs font-medium text-gray-700">Reduction</div>
              <div className="text-sm font-bold text-green-600">12.5%</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

    const AnalysisContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Analyse</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Turn Data Into Insight</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Dive deep into emissions hotspots with automated dashboards, benchmarking, and scenario analysis to identify key opportunities.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={500}
            height={350}
            src="/analyse.png"
            alt="Training session with people in a modern office environment, showing workplace sustainability education"
            className="w-full h-80 lg:h-96 object-contain"
          />
          {/* Certificate overlay */}
          {/* <div className="absolute top-4 right-4 bg-green-800 text-white p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-bold">CERTIFICATE</div>
            <div className="text-xs opacity-90">OF COMPLETION</div>
            <div className="text-xs mt-1 opacity-80">Climate Training</div>
          </div> */}
        </div>
      </div>
    </div>
  );

    const PlanContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Plan</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Roadmap to Net Zero</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Set science-based targets and design decarbonization strategies tailored to your sector, operations, and long-term goals.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={600}
            height={400}
            src="/plann.png"
            alt="Training session with people in a modern office environment, showing workplace sustainability education"
            className="w-full h-80 lg:h-96 object-cover"
          />
          {/* Certificate overlay */}
          {/* <div className="absolute top-4 right-4 bg-green-800 text-white p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-bold">CERTIFICATE</div>
            <div className="text-xs opacity-90">OF COMPLETION</div>
            <div className="text-xs mt-1 opacity-80">Climate Training</div>
          </div> */}
        </div>
      </div>
    </div>
  );

    const ReduceContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Reduce</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Cut Carbon, Boost Efficiency</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Implement effective carbon reduction initiatives, optimize energy use, and engage suppliers to minimize your value chain footprint.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={600}
            height={400}
            src="/reduce.png"
            alt="Training session with people in a modern office environment, showing workplace sustainability education"
            className="w-full h-80 lg:h-96 object-cover"
          />
          {/* Certificate overlay */}
          {/* <div className="absolute top-4 right-4 bg-green-800 text-white p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-bold">CERTIFICATE</div>
            <div className="text-xs opacity-90">OF COMPLETION</div>
            <div className="text-xs mt-1 opacity-80">Climate Training</div>
          </div> */}
        </div>
      </div>
    </div>
  );

  
    const EarnContent = () => (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Earn</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">Unlock New Value</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Monetize your sustainability efforts by generating verified carbon credits and accessing green financing opportunities.
          </p>
        </div>
        <button onClick={scrollToContact} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          Learn more
        </button>
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image
            width={600}
            height={400}
            src="/earn.png"
            alt="Training session with people in a modern office environment, showing workplace sustainability education"
            className="w-full h-80 lg:h-96 object-contain"
          />
          {/* Certificate overlay */}
          {/* <div className="absolute top-4 right-4 bg-green-800 text-white p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-xs font-bold">CERTIFICATE</div>
            <div className="text-xs opacity-90">OF COMPLETION</div>
            <div className="text-xs mt-1 opacity-80">Climate Training</div>
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            How Carbon Zero Works
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empower your sustainability journey with clear, actionable steps — from training teams to 
            earning through climate action.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border overflow-x-auto">
            <div className="flex space-x-1 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-green-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 transition-all duration-500">
          {activeTab === 'Training' && <TrainingContent />}
          {activeTab === 'Measure' && <MeasureContent />}
          {activeTab === 'Analyse' && <AnalysisContent />}
          {activeTab === 'Plan' && <PlanContent />}
          {activeTab === 'Reduce' && <ReduceContent />}
          {activeTab === 'Earn' && <EarnContent />}
          
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          {/* <div className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 cursor-pointer group transition-colors duration-300">
            <span className="font-medium">Explore all features</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
