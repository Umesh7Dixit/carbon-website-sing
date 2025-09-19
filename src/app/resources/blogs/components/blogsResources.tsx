'use client';

import React, { useState, useMemo } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';

// Types
interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt?: string;
}

// Sample data
const articles: Article[] = [
  {
    id: '1',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Supplier of EUDR Products Do Not Need to integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '4',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '5',
    title: 'Supplier of EUDR Products Do Not Need to Integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Supplier of EUDR Products Do Not Need to integrate with any API',
    category: 'Environment Responsibility',
    date: 'August 20, 2022',
    readTime: '5 min read'
  },
  {
    id: '7',
    title: 'Business Resilience Strategies for Modern Enterprises',
    category: 'Business Resilience',
    date: 'August 18, 2022',
    readTime: '7 min read'
  },
  {
    id: '8',
    title: 'Digital Transformation in Forest Management',
    category: 'Deforestation',
    date: 'August 15, 2022',
    readTime: '6 min read'
  },
  {
    id: '9',
    title: 'Industry Trends Report 2022: Key Insights',
    category: 'Industry Trends',
    date: 'August 12, 2022',
    readTime: '8 min read'
  },
  {
    id: '10',
    title: 'Labor Rights in Supply Chain Management',
    category: 'Labor and Human Rights',
    date: 'August 10, 2022',
    readTime: '6 min read'
  },
  {
    id: '11',
    title: 'Policy Updates: Environmental Regulations',
    category: 'Policy',
    date: 'August 8, 2022',
    readTime: '4 min read'
  }
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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















// // components/BlogResources.tsx
// import React, { useState, useMemo } from 'react';
// import { Search, Calendar, ArrowRight } from 'lucide-react';
// import Image from 'next/image';

// interface BlogPost {
//   id: number;
//   title: string;
//   category: string;
//   date: string;
//   image: string;
//   excerpt?: string;
// }

// interface Category {
//   id: string;
//   label: string;
//   count?: number;
// }

// export default function BlogResources(){
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');

//   // Sample blog data - in a real app, this would come from an API or database
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
//     {
//       id: 1,
//       title: "Supplier of EUDR Products Do Not Need to integrate with any API",
//       category: "Environment Responsibility",
//       date: "August 20, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 2,
//       title: "Supplier of EUDR Products Do Not Need to integrate with any API",
//       category: "Environment Responsibility", 
//       date: "August 20, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 3,
//       title: "Supplier of EUDR Products Do Not Need to integrate with any API",
//       category: "Environment Responsibility",
//       date: "August 20, 2022", 
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 4,
//       title: "Building Sustainable Supply Chains",
//       category: "Business Resilience",
//       date: "July 15, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 5,
//       title: "Preventing Deforestation Through Technology",
//       category: "Deforestation",
//       date: "June 10, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 6,
//       title: "Industry Trends in ESG Compliance",
//       category: "Industry Trends",
//       date: "May 25, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 7,
//       title: "Labor Rights in Global Supply Chains",
//       category: "Labor and Human Rights",
//       date: "April 30, 2022",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       id: 8,
//       title: "Corporate Policy Updates for 2022",
//       category: "Policy",
//       date: "March 18, 2022",
//       image: "/api/placeholder/400/250"
//     }
//   ]);

//   const categories: Category[] = [
//     { id: 'All', label: 'All' },
//     { id: 'Business Resilience', label: 'Business Resilience' },
//     { id: 'Deforestation', label: 'Deforestation' },
//     { id: 'Environment Responsibility', label: 'Environment Responsibility' },
//     { id: 'Industry Trends', label: 'Industry Trends' },
//     { id: 'Labor and Human Rights', label: 'Labor and Human Rights' },
//     { id: 'Policy', label: 'Policy' }
//   ];

//   // Filter blog posts based on search term and active category
//   const filteredPosts = useMemo(() => {
//     return blogPosts.filter(post => {
//       const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            post.category.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      
//       return matchesSearch && matchesCategory;
//     });
//   }, [blogPosts, searchTerm, activeCategory]);

//   // Function to add a new blog post (for demonstration)
//   const addNewBlogPost = () => {
//     const newPost: BlogPost = {
//       id: blogPosts.length + 1,
//       title: `New Blog Post ${blogPosts.length + 1}`,
//       category: "Environment Responsibility",
//       date: new Date().toLocaleDateString('en-US', { 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric' 
//       }),
//       image: "/api/placeholder/400/250"
//     };
//     setBlogPosts(prev => [...prev, newPost]);
//   };

//   const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
//     <div  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
//       <div className="relative overflow-hidden">
//         <Image 
//             src={post.image}
//             alt={post.title}
//             width={400}
//             height={250}
//             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>
      
//       <div className="p-6">
//         <div className="mb-3">
//           <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
//             {post.category}
//           </span>
//         </div>
        
//         <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
//           {post.title}
//         </h3>
        
//         <div className="flex items-center justify-between">
//           <div className="flex items-center text-sm text-gray-500">
//             <Calendar className="w-4 h-4 mr-2" />
//             {post.date}
//           </div>
          
//           <button className="flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors duration-200">
//             Read More
//             <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (

    
//     <div className="relative min-h-screen bg-gray-50 py-12" style={{ backgroundImage: "url('/policyBg.png')"}}>

        

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
//             Our blog
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Resources and Insights
//           </h1>
          
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             The latest industry news, interviews, technologies, and resources.
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="relative max-w-md mx-auto mb-8">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search className="h-5 w-5 text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             />
//         </div>

//         {/* Categories Filter */}
//         <div className="mb-12">
//           <h3 className="text-sm font-medium text-gray-700 mb-4">Categories</h3>
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//               key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     activeCategory === category.id
//                     ? 'bg-green-600 text-white shadow-md'
//                     : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Latest Articles Section */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900">Latest articles</h2>
            
//             {/* Demo button to add new posts */}
//             <button
//               onClick={addNewBlogPost}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
//             >
//               Add New Post
//             </button>
//           </div>

//           {/* Results count */}
//           <p className="text-sm text-gray-500 mb-6">
//             Showing {filteredPosts.length} of {blogPosts.length} articles
//             {activeCategory !== 'All' && ` in "${activeCategory}"`}
//             {searchTerm && ` matching "${searchTerm}"`}
//           </p>

//           {/* Blog Grid */}
//           {filteredPosts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredPosts.map((post) => (
//                   <BlogCard key={post.id} post={post} />
//               ))}
//             </div>
//           ) : (
//               <div className="text-center py-12">
//               <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
//                 <Search className="w-8 h-8 text-gray-400" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
//               <p className="text-gray-500">
//                 Try adjusting your search or filter criteria
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Load More Button (if needed for pagination) */}
//         {filteredPosts.length >= 6 && (
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-medium">
//               Load More Articles
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
