"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

type CaseStudy = {
  id: number;
  title: string;
  subtitle: string;
  client:string;
  description: string;
  goal: string;
  brand: string;
  tag: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Supplier traceability for EU textile compliance",
    subtitle: "",
    client:"European denim brand, mid-sized, apparel exporter from India",
    description:"Tier 1–4 suppliers (primary + secondary data)",
    goal: "Map and verify cotton-to-garment traceability to meet EU Digital Product Passport (DPP) requirements, while ensuring supplier ESG compliance.",
    brand: "",
    tag: "Textile",
    image: "/textilecase.png",
  },

    {
    id: 2,
    title: "Carbon footprint calculation for steel fabricator",
    subtitle: "",
    client:"Large infrastructure steel fabricator, India",
    description:"Energy, logistics, production data (Scope 1, 2, and partial Scope 3)",
    goal: "Calculate product-level carbon footprint to prepare for CBAM (Carbon Border Adjustment Mechanism) compliance and highlight emission reduction opportunities in energy sourcing and logistics.",
    brand: "",
    tag: "Textile",
    image: "/686434164.png",
  },
  {
    id: 3,
    title: "Plastic packaging EPR (Extended Producer Responsibility) strategy",
    subtitle: "",
    client:"Consumer goods manufacturer, Southeast Asia",
    description:"Packaging material data, recycling partners, and waste audits across 5 countries",
    goal: "Packaging material data, recycling partners, and waste audits across 5 countries.",
    brand: "",
    tag: "Textile",
    image: "/circepr.png",
  },

];

export default function CaseStudiesCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen  bg-green-50 py-12 flex flex-col items-center justify-center"  style={{ backgroundImage: "url('/policyBg.png')" }}>
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-sm px-3 py-1 bg-green-100 rounded-full text-green-800">
          Case Studies
        </span>
        <h2 className="text-3xl font-bold mt-4 text-black">Proven Strategies in Action</h2>
        <p className="text-black mt-2">
          See how we drive growth, innovation, and efficiency through real-world
          projects.
        </p>
      </div>

      {/* Case Study Card */}
      <div className="relative w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={caseStudies[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 bg-white rounded-2xl shadow-lg p-8 gap-6 items-center"
          >
            {/* Left Content */}
            <div className="" >
              <p className="text-black text-sm">
                0{caseStudies[current].id} {caseStudies[current].subtitle}
              </p>
              <h3 className="text-2xl font-bold mt-2 text-black">
                {caseStudies[current].title}
              </h3>
              <span className="text-xs border px-2 py-1  rounded-full text-green-700 border-green-700 mt-2 inline-block">
                {caseStudies[current].tag}
              </span>
              <h4 className="mt-6 font-semibold text-black">Client</h4>
              <p className="text-black mt-1">
                {caseStudies[current].client}
              </p>
              <h4 className="mt-6 font-semibold text-black">Data gathering</h4>
              <p className="text-black mt-1">
                {caseStudies[current].description}
              </p>
              <h4 className="mt-6 font-semibold text-black">Goal</h4>
              <p className="text-black mt-1">{caseStudies[current].goal}</p>
              <p className="text-black font-medium mt-6">
                {caseStudies[current].brand}
              </p>
            </div>

            {/* Right Image */}
            <div >


              <Image 
                src={caseStudies[current].image}
                alt={caseStudies[current].title}
                width={500}
                height={300}
                className="rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 flex justify-between items-center w-full px-4">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 md:-left-10 transform -translate-y-1/2 p-3 md:p-4 rounded-full bg-gray-300 shadow hover:bg-gray-100 text-black "
          >
            <ArrowLeft />
            
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 md:-right-10 transform -translate-y-1/2 p-3 md:p-4 rounded-full bg-gray-300 shadow hover:bg-gray-200 text-black"
          >
             <ArrowRight />
        
          </button>
        </div>
      </div>
    </div>
  );
}














// "use client"

// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Heart, MessageCircle, Eye } from 'lucide-react';
// import Image from 'next/image';

// interface BlogPost {
//   id: number;
//   title: string;
//   category: string;
//   date: string;
//   image: string;
//   excerpt?: string;
//   author?: string;
//   readTime?: string;
//   content?: string;
//   tags?: string[];
//   views?: number;
//   likes?: number;
//   comments?: number;
// }

// interface BlogDetailPageProps {
//   blogId?: number;
//   onBack?: () => void;
// }

// export default function BlogDetailPage({ blogId = 1, onBack }: BlogDetailPageProps){
//   const [isLiked, setIsLiked] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [currentBlog, setCurrentBlog] = useState<BlogPost | null>(null);

//   // Sample blog data - in a real app, this would be fetched based on blogId
//   const blogData: Record<number, BlogPost> = {
//     1: {
//       id: 1,
//       title: "Supplier of EUDR Products Do Not Need to integrate with any API",
//       category: "Environment Responsibility",
//       date: "August 20, 2022",
//       author: "Sarah Johnson",
//       readTime: "8 min read",
//       image: "/api/placeholder/800/400",
//       views: 1245,
//       likes: 89,
//       comments: 23,
//       tags: ["EUDR", "Sustainability", "API", "Compliance"],
//       excerpt: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime.",
//       content: `
//         <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>

//         <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

//         <h2>Research Your Destination</h2>
//         <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you plan your travel itinerary with confidence and avoid any cultural faux pas.</p>

//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum ut quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc.</p>

//         <h2>Plan Your Itinerary</h2>
//         <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid over-scheduling and ensure that you have time to relax and enjoy your journey.</p>

//         <p>Vivra sapien pellentesque habitant morbi tristique. Lectus vestibulum lorem magna bibendum. Nec ultrices dui sapien eget ante et nibh tellus molestie nunc. Tristique et egestas quis ipsum suscipit.</p>

//         <blockquote class="border-l-4 border-green-500 pl-4 italic my-6 text-black">
//           "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy."
//         </blockquote>

//         <h2>Health and Safety Considerations</h2>
//         <p>Your health and safety should always be a top priority when traveling. This includes getting necessary vaccinations, carrying a first-aid kit, and being aware of common scams and dangers in your destination.</p>

//         <p>Remember to stay hydrated, especially in hot climates, and be cautious about trying new foods that your stomach might not be accustomed to. Having travel insurance is also highly recommended to cover any unexpected medical expenses or trip cancellations.</p>
//       `
//     },
//     2: {
//       id: 2,
//       title: "Building Sustainable Supply Chains",
//       category: "Business Resilience",
//       date: "July 15, 2022",
//       author: "Michael Chen",
//       readTime: "6 min read",
//       image: "/api/placeholder/800/400",
//       views: 892,
//       likes: 67,
//       comments: 15,
//       tags: ["Supply Chain", "Sustainability", "Business"],
//       excerpt: "Creating resilient and sustainable supply chains in today's global economy.",
//       content: `
//         <p>Building sustainable supply chains has become a critical priority for businesses worldwide. In an era of increasing environmental awareness and regulatory requirements, companies must adapt their operations to meet new standards while maintaining efficiency and profitability.</p>

//         <h2>The Importance of Sustainability</h2>
//         <p>Sustainable supply chains not only benefit the environment but also provide long-term business advantages including cost savings, risk reduction, and improved brand reputation.</p>

//         <p>Companies that invest in sustainable practices often see improved operational efficiency, better relationships with stakeholders, and increased customer loyalty.</p>
//       `
//     }
//   };

//   useEffect(() => {
//     // Simulate fetching blog data based on blogId
//     const blog = blogData[blogId];
//     if (blog) {
//       setCurrentBlog(blog);
//     }
//   }, [blogId]);

//   const handleShare = () => {
//     // Implement share functionality
//     if (navigator.share) {
//       navigator.share({
//         title: currentBlog?.title,
//         url: window.location.href,
//       });
//     } else {
//       // Fallback: copy to clipboard
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link copied to clipboard!');
//     }
//   };

//   const toggleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   if (!currentBlog) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-black">Loading article...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b sticky top-0 z-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <button
//             onClick={onBack}
//             className="flex items-center text-black hover:text-black transition-colors duration-200 mb-2"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back
//           </button>
          
//           <div className="mb-3">
//             <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
//               {currentBlog.category}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Article Header */}
//         <header className="mb-8">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
//             {currentBlog.title}
//           </h1>
          
//           {/* Meta Information */}
//           <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-black mb-6">
//             <div className="flex items-center">
//               <Calendar className="w-4 h-4 mr-2" />
//               {currentBlog.date}
//             </div>
//             {currentBlog.readTime && (
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 {currentBlog.readTime}
//               </div>
//             )}
//             {currentBlog.author && (
//               <div className="flex items-center">
//                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
//                   <span className="text-xs font-medium text-green-600">
//                     {currentBlog.author.charAt(0)}
//                   </span>
//                 </div>
//                 By {currentBlog.author}
//               </div>
//             )}
//           </div>

//           {/* Stats and Actions */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
//             {/* Stats */}
//             <div className="flex items-center gap-4 sm:gap-6 text-sm text-black">
//               <div className="flex items-center">
//                 <Eye className="w-4 h-4 mr-1" />
//                 {currentBlog.views?.toLocaleString()} views
//               </div>
//               <div className="flex items-center">
//                 <MessageCircle className="w-4 h-4 mr-1" />
//                 {currentBlog.comments} comments
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={toggleLike}
//                 className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
//                   isLiked
//                     ? 'bg-red-100 text-red-600 hover:bg-red-200'
//                     : 'bg-gray-100 text-black hover:bg-gray-200'
//                 }`}
//               >
//                 <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
//                 {/* <span className="text-sm">{currentBlog.likes + (isLiked ? 1 : 0)}</span> */}
//               </button>

//               <button
//                 onClick={toggleBookmark}
//                 className={`p-2 rounded-lg transition-all duration-200 ${
//                   isBookmarked
//                     ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
//                     : 'bg-gray-100 text-black hover:bg-gray-200'
//                 }`}
//               >
//                 <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
//               </button>

//               <button
//                 onClick={handleShare}
//                 className="p-2 bg-gray-100 text-black hover:bg-gray-200 rounded-lg transition-colors duration-200"
//               >
//                 <Share2 className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </header>

//         {/* Featured Image */}
//         <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
//           {/* <img
//             src={currentBlog.image}
//             alt={currentBlog.title}
//             className="w-full h-64 sm:h-80 lg:h-96 object-cover"
//           /> */}

//           <Image
//             src={currentBlog.image}
//             alt={currentBlog.title}
//             width={800}
//             height={400}
//             className="w-full h-64 sm:h-80 lg:h-96 object-cover"
//           />
//         </div>

//         {/* Article Content */}
//         <div 
//           className="text-black prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-p:text-black prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:p-4 prose-blockquote:rounded-lg"
//           dangerouslySetInnerHTML={{ __html: currentBlog.content || '' }}
//         />

//         {/* Tags */}
//         {currentBlog.tags && currentBlog.tags.length > 0 && (
//           <div className="mt-12 pt-8 border-t">
//             <h3 className="text-sm font-medium text-black mb-4">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {currentBlog.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 text-xs font-medium text-black bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Author Bio (Optional) */}
//         {currentBlog.author && (
//           <div className="mt-12 pt-8 border-t">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
//                 <span className="text-lg font-medium text-green-600">
//                   {currentBlog.author.charAt(0)}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-black mb-1">{currentBlog.author}</h3>
//                 <p className="text-sm text-black mb-3">
//                   Environmental sustainability expert with over 10 years of experience in supply chain management and regulatory compliance.
//                 </p>
//                 <div className="flex gap-3">
//                   <button className="text-xs text-green-600 hover:text-green-700 font-medium">
//                     Follow
//                   </button>
//                   <button className="text-xs text-black hover:text-black font-medium">
//                     More articles
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Comments Section */}
//         <div className="mt-12 pt-8 border-t">
//           <h3 className="text-xl font-semibold text-black mb-6">
//             Comments ({currentBlog.comments})
//           </h3>
          
//           {/* Comment Form */}
//           <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
//             <textarea
//               placeholder="Share your thoughts..."
//               rows={4}
//               className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
//             />
//             <div className="flex justify-end mt-3">
//               <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
//                 Post Comment
//               </button>
//             </div>
//           </div>

//           {/* Sample Comments */}
//           <div className="space-y-6">
//             {[1, 2, 3].map((comment) => (
//               <div key={comment} className="flex gap-4">
//                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-sm font-medium text-black">U</span>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="font-medium text-gray-900 text-sm">User {comment}</span>
//                     <span className="text-xs text-black">2 days ago</span>
//                   </div>
//                   <p className="text-sm text-black mb-2">
//                     Great article! This really helped me understand the importance of sustainable supply chain management.
//                   </p>
//                   <button className="text-xs text-black hover:text-black">Reply</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// // export default BlogDetailPage;