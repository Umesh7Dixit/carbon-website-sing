'use client';

import React, { useState, useMemo } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Types
interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image:string
  excerpt?: string;
}

// Sample data
const articles: Article[] = [
  {
    id: '1',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/treede.png',
  },
  {
    id: '2',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/crojo.png',
  },
  {
    id: '3',
    title: 'Supplier of EUDR Products Do Not Need to integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/newspaper.png',
  },
  {
    id: '4',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/womesn.png',
  },
  {
    id: '5',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/cnero.png',
  },
  {
    id: '6',
    title: 'Supplier of EUDR Products Do Not Need to integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read',
    image:'/croo.png',
  },
  // {
  //   id: '7',
  //   title: 'Business Resilience Strategies for Modern Enterprises',
  //   category: 'Business Resilience',
  //   date: 'August 18, 2022',
  //   readTime: '7 min read',
  //   image:'',
  // },
  // {
  //   id: '8',
  //   title: 'Digital Transformation in Forest Management',
  //   category: 'Deforestation',
  //   date: 'August 15, 2022',
  //   readTime: '6 min read',
  //   image:'',
  // },
  // {
  //   id: '9',
  //   title: 'Industry Trends Report 2022: Key Insights',
  //   category: 'Industry Trends',
  //   date: 'August 12, 2022',
  //   readTime: '8 min read',
  //   image:'',
  // },
  // {
  //   id: '10',
  //   title: 'Labor Rights in Supply Chain Management',
  //   category: 'Labor and Human Rights',
  //   date: 'August 10, 2022',
  //   readTime: '6 min read',
  //   image:'',
  // },
  // {
  //   id: '11',
  //   title: 'Policy Updates: Environmental Regulations',
  //   category: 'Policy',
  //   date: 'August 8, 2022',
  //   readTime: '4 min read',
  //   image:'',
  // }
];

const categories = [
  'All',
  'Business Resilience',
  'Deforestation',
  'Environment Responsibility',
  'Industry Trends',
  'Labor and Human Rights',
  'Policy'
];

export default function Blogs(){
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Environment Responsibility': 'bg-green-100 text-green-800',
      'Business Resilience': 'bg-blue-100 text-blue-800',
      'Deforestation': 'bg-orange-100 text-orange-800',
      'Industry Trends': 'bg-purple-100 text-purple-800',
      'Labor and Human Rights': 'bg-red-100 text-red-800',
      'Policy': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Blog Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Our blog
            </span>
          </div>

          {/* Title and Description */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resources and insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full text-black pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                placeholder="Search articles..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest articles
        </h2>

        {/* Results count */}
        <div className="mb-6 text-center text-gray-600">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 */}
                 <Image src={article.image} width={400} height={400} alt={article.date} />
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center text-green-600 group-hover:text-green-700">
                    <span className="mr-1">{article.readTime}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};









 