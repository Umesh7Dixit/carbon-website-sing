import React, { useState } from 'react';
import { ChevronDown, X, Eye, FileText, BarChart3, Globe, Thermometer, TrendingUp } from 'lucide-react';
import { useContact } from "../../../components/ContactContext"; 

interface ReportTemplate {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface FormData {
  companyName: string;
  sector: string;
  country: string;
  year: string;
}

interface AssistantQuestion {
  id: string;
  question: string;
  options: string[];
  selectedOption?: string;
}

export default function ESGComplianceApp(){
    const { scrollToContact } = useContact();

  const [currentScreen, setCurrentScreen] = useState<'main' | 'assistant'>('main');
  const [selectedTemplate, setSelectedTemplate] = useState<ReportTemplate | null>(null);
  const [formData, setFormData] = useState<FormData>({
    companyName: 'CarbonScan.ai',
    sector: 'Technology',
    country: 'Malaysia',
    year: '2025'
  });
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<AssistantQuestion>({
    id: '1',
    question: 'What are the key components of the organizational climate strategy?',
    options: ['Zero Response', 'CDP Limited', 'EU & Bursa', 'Policy bank'],
    selectedOption: undefined
  });

  const reportTemplates: ReportTemplate[] = [
    {
      id: 'eu-csrd',
      title: 'EU CSRD Compliance Toolkit',
      description: 'Streamline disclosures for the EU Green Deal. Supports structured assurance of ESG data.',
      icon: <FileText className="w-6 h-6" />,
      color: 'text-blue-600'
    },
    {
      id: 'bursa-malaysia',
      title: 'Bursa Malaysia Sustainability Reporting',
      description: 'Align ESG outcomes with financial metrics to meet Bursa Malaysia\'s regulatory framework.',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'text-green-600'
    },
    {
      id: 'gri-universal',
      title: 'GRI Universal Standards Report',
      description: 'Comprehensive reporting on social, environmental, and governance performance.',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-blue-500'
    },
    {
      id: 'cdp-climate',
      title: 'CDP Climate Disclosure Pack',
      description: 'Structured reporting for emissions, energy, and climate-related impact for all stakeholders.',
      icon: <Thermometer className="w-6 h-6" />,
      color: 'text-red-500'
    },
    {
      id: 'sasb-financial',
      title: 'SASB Financial-Grade ESG Summary',
      description: 'Standardized, investor-focused ESG data presentation to support capital markets trust.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-purple-600'
    }
  ];

  const sectorOptions = ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Energy', 'Retail'];
  const countryOptions = ['Malaysia', 'Singapore', 'Indonesia', 'Thailand', 'Philippines', 'Vietnam'];
  const yearOptions = ['2025', '2024', '2023', '2022', '2021'];

  const handleGenerateReport = (template: ReportTemplate) => {
    setSelectedTemplate(template);
    setCurrentScreen('assistant');
  };

  const handleDropdownToggle = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleDropdownSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setDropdownOpen(null);
  };

  const handleOptionSelect = (option: string) => {
    setCurrentQuestion(prev => ({ ...prev, selectedOption: option }));
  };

  const handleUseResponse = () => {
    // Simulate moving to next question or completing
    alert('Response saved! Moving to next question or completing report generation.');
  };

  const renderDropdown = (field: keyof FormData, options: string[], placeholder: string) => (
    <div className="relative">
      <button
        onClick={() => handleDropdownToggle(field)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent flex items-center justify-between"
      >
        <span className={formData[field] ? 'text-gray-900' : 'text-gray-500'}>
          {formData[field] || placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      
      {dropdownOpen === field && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleDropdownSelect(field, option)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const MainScreen = () => (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart ESG Compliance Reporting
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Instantly generate audit-ready, regulation-aligned ESG and carbon reports. CarbonScan.ai 
            streamlines data workflows, enhances accuracy, and helps you meet investor and market 
            expectations with ease.
          </p>
          <button onClick={scrollToContact} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore Report Types
          </button>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
              {renderDropdown('sector', sectorOptions, 'Select Sector')}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              {renderDropdown('country', countryOptions, 'Select Country')}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              {renderDropdown('year', yearOptions, 'Select Year')}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              <span>+</span>
              New Custom Report
            </button>
          </div>
        </div>

        {/* Available Report Templates */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Report Templates</h2>
          
          <div className="space-y-4">
            {reportTemplates.map((template) => (
              <div
                key={template.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`${template.color} mt-1`}>
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{template.title}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleGenerateReport(template)}
                    className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Generate Report
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-2 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AssistantScreen = () => (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart ESG Compliance Reporting
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Instantly generate audit-ready, regulation-aligned ESG and carbon reports. CarbonScan.ai 
            streamlines data workflows, enhances accuracy, and helps you meet investor and market 
            expectations with ease.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore Report Types
          </button>
        </div>

        {/* Form Section (same as main screen but with overlay) */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 opacity-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={formData.companyName}
                disabled
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
              <div className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600">
                {formData.sector}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <div className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600">
                {formData.country}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <div className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600">
                {formData.year}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 opacity-75">
              <span>+</span>
              New Custom Report
            </button>
          </div>
        </div>

        {/* CarbonScan Assistant Modal */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">CarbonScan Assistant</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Get auto-generated, personalized ESG disclosures based on keywords, previous reports, and global frameworks.
                </p>
              </div>
              <button
                onClick={() => setCurrentScreen('main')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4">{currentQuestion.question}</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        currentQuestion.selectedOption === option
                          ? 'bg-green-100 border-green-500 text-green-700'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="inline-flex space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">1 of 3 steps to let ai generate a brief</p>
                </div>
              </div>

              {/* Sample Response Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h5 className="font-medium text-gray-900 mb-3">Sample Response from Organizations</h5>
                <p className="text-sm text-gray-600 mb-3">Our organizational climate strategy encompasses four key pillars:</p>
                
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Carbon neutrality targets with science-based reduction pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Renewable energy transition across all operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Supply chain decarbonization initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Climate risk assessment and adaptation measures</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-4">
                  We target achieving net-zero emissions by 2030 through a combination of direct emission reductions, energy efficiency improvements, and verified carbon offset programs.
                </p>

                <p className="text-sm text-gray-600">
                  Our governance framework includes quarterly climate committee meetings and annual climate risk disclosure aligned with TCFD recommendations.
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleUseResponse}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  disabled={!currentQuestion.selectedOption}
                >
                  Use this response
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Report Templates (dimmed) */}
        <div className="bg-white rounded-xl shadow-sm p-6 opacity-30">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Available Report Templates</h2>
          
          <div className="space-y-4">
            {reportTemplates.slice(-2).map((template) => (
              <div
                key={template.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`${template.color} mt-1`}>
                    {template.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{template.title}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                    Generate Report
                  </button>
                  <button className="text-gray-400 p-2">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return currentScreen === 'main' ? <MainScreen /> : <AssistantScreen />;
};
