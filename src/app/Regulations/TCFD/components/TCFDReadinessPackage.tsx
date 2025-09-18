import React from 'react';
import { FileText, MapPin, GraduationCap } from 'lucide-react';

export default function TCFDReadinessPackage(){
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Leaf Icon */}
          

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight mb-8 max-w-4xl mx-auto">
             Simplify Your Climate Reporting with Carbon-Zero.ai
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare your business for TCFD-aligned disclosures in just 3 months with our Climate Readiness Toolkit:
          </p>
        </div>

        {/* Package Items */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Compliance Readiness Report */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center justify-center">
              <span className="mr-2">🌍</span>
              Climate Alignment Audit
            </h3>
            <p className="text-gray-600">
              Review how your strategy, governance, and risk management meet TCFD recommendations.
            </p>
          </div>

          {/* Traceability Gap Analysis */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center justify-center">
              {/* <span className="mr-2">📍</span> */}
              🔎 Disclosure Gap Assessment
            </h3>
            <p className="text-gray-600">
              Pinpoint missing climate data, scenario analysis, and reporting weaknesses.
            </p>
          </div>

          {/* Knowledge Base & Training */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center justify-center">
              {/* <span className="mr-2">🎓</span> */}
              📚 Resource Hub
            </h3>
            <p className="text-gray-600">
              Get templates, frameworks, and expert guidance to embed climate reporting across your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
