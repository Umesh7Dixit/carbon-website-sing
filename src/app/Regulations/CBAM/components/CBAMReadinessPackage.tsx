import React from 'react';
import { FileText, MapPin, GraduationCap } from 'lucide-react';

export default function CBAMReadinessPackage(){
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Leaf Icon */}
          

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight mb-8 max-w-4xl mx-auto">
             CBAM & Carbon Tax Compliance doesn’t have to be overwhelming.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your business ready in just 3 months with Carbon-Zero.ai’s Compliance Readiness Package, including:
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
              <span className="mr-2">📋</span>
              Readiness Report
            </h3>
            <p className="text-gray-600">
              Assessing how your emissions data, supply chain, and reporting align with CBAM and Malaysia’s carbon pricing framework.
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
              <span className="mr-2">📍</span>
              Gap Analysis
            </h3>
            <p className="text-gray-600">
              Identifying missing data, verification gaps, and areas for improvement to reduce compliance risks.
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
              <span className="mr-2">🎓</span>
              Knowledge Base 
            </h3>
            <p className="text-gray-600">
              Access to best practices, templates, and training resources to strengthen carbon reporting and prepare for upcoming levies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
