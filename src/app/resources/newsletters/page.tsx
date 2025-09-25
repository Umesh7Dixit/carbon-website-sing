'use client';

// import React, { useState, useMemo } from 'react';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';

// Types
interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
}

// Sample data
const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    date: 'August 20, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Latest updates on EUDR compliance requirements and API integration standards.'
  },
  {
    id: '2',
    title: 'New Sustainability Standards Transform Supply Chain Management',
    date: 'August 20, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'How new sustainability standards are reshaping supply chain operations globally.'
  },
  {
    id: '3',
    title: 'Digital Innovation Drives Environmental Compliance Forward',
    date: 'August 20, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Exploring how digital transformation is enhancing environmental compliance efforts.'
  },
  {
    id: '4',
    title: 'Forest Management Technology Advances in 2022',
    date: 'August 18, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Revolutionary technologies changing forest management and conservation practices.'
  },
  {
    id: '5',
    title: 'Supply Chain Transparency: The New Business Imperative',
    date: 'August 16, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Why transparency has become crucial for modern supply chain operations.'
  },
  {
    id: '6',
    title: 'Carbon Footprint Reduction Strategies for Enterprises',
    date: 'August 14, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Practical approaches to reducing corporate carbon emissions effectively.'
  },
  {
    id: '7',
    title: 'Regulatory Compliance in the Digital Age',
    date: 'August 12, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Navigating complex regulations with digital tools and platforms.'
  },
  {
    id: '8',
    title: 'Sustainable Sourcing: Best Practices for 2022',
    date: 'August 10, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Guidelines for implementing sustainable sourcing practices in your organization.'
  },
  {
    id: '9',
    title: 'AI-Powered Environmental Monitoring Solutions',
    date: 'August 8, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'How artificial intelligence is revolutionizing environmental monitoring.'
  },
  {
    id: '10',
    title: 'Trade Compliance Updates: What You Need to Know',
    date: 'August 6, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Latest updates in international trade compliance requirements.'
  },
  {
    id: '11',
    title: 'Green Technology Adoption Trends',
    date: 'August 4, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'Current trends in green technology adoption across industries.'
  },
  {
    id: '12',
    title: 'ESG Reporting Standards Evolution',
    date: 'August 2, 2022',
    image: '/api/placeholder/300/200',
    excerpt: 'How ESG reporting standards continue to evolve and impact businesses.'
  }
];

export default  function Newsletters(){
  const [email, setEmail] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  
  const itemsPerPage = 3;
  
  // Calculate pagination
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Handle pagination
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription Section */}
        <div className="  p-8 mb-16 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
          <div className="absolute top-8 right-16 w-8 h-8 bg-green-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-50 rounded-full opacity-60"></div>
          <div className="absolute bottom-8 left-20 w-6 h-6 bg-green-100 rounded-full opacity-40"></div>

          <div className="relative z-10 text-center">
            {/* Newsletter Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </span>
            </div>

            {/* Title and Description */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay in the loop
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The latest updates, insights, and stories—straight to your inbox.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <br/>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 disabled:bg-green-600 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
            </form>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                Thank you for subscribing! You&apos;ll receive our latest updates soon.
              </div>
            )}
          </div>
        </div>

        {/* Latest News Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Latest News
          </h2>

          {/* News Items */}
          <div className="space-y-8">
            {currentNews.map((newsItem, index) => (
              <div
                key={newsItem.id}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="md:w-64 flex-shrink-0">
                  <div className="w-full h-48 md:h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-t from-green-200/30 to-green-100/30 flex items-center justify-center">
                      <div className="text-green-600/70 text-sm font-medium">
                        News Image {startIndex + index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-2">
                    {newsItem.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                    {newsItem.title}
                  </h3>
                  {newsItem.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {newsItem.excerpt}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Page Info */}
              <div className="text-sm text-gray-600 order-2 sm:order-1">
                Showing {startIndex + 1} to {Math.min(endIndex, newsData.length)} of {newsData.length} articles
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2 order-1 sm:order-2">
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          currentPage === pageNumber
                            ? 'bg-green-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
