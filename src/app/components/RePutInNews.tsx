// components/RePutInNews.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function RePutInNews() {
  const [activeTab, setActiveTab] = useState('Press');

  const pressData = [
    {
      id: 1,
      image: '/image1.png',
      logo: 'Inc42',
      date: '11/01/2025',
      title: "Exclusive: Morning Cart Founder's RePut.ai Bags Funding to Provide Supply Chain Management Solutions",
      description: "BigBasket-acquired grocery delivery platform Morning Cart's cofounder Anuj Bishnoi's new B2B SaaS venture RePut.ai has ...",
      readMoreLink: 'https://inc42.com/buzz/exclusive-morning-cart-founders-reput-ai-bags-funding-to-provide-supply-chain-management-solutions/'
    },
    {
      id: 2,
      image: '/image2.png',
      logo: 'ENTRACKR',
      date: '11/01/2025',
      title: 'RePut.ai closes $1 Mn in pre-seed round led by GrowthCap Ventures',
      description: "Founded by Anuj Bishnoi, Rohit Mahatma, and Amit Bhatia, RePut.ai empowers brands to validate, market, and scale their sustainability efforts...........",
      readMoreLink: 'https://entrackr.com/snippets/reputai-closes-1-mn-in-pre-seed-round-led-by-growthcap-ventures-8619352'
    },
    {
      id: 3,
      image: '/image3.png',
      logo: 'BEE BUSINESS',
      date: '15/01/2025',
      title: "Experienced Founders' New Startup RePut.ai Secures $1 Million in Pre-Seed Funding, Led by GrowthCap Ventures",
      description: 'Commenting on the investment, GrowthCap Ventures\' founder and general partner Prateek Agarwal, said, "This is not just an investment but a commitment to...',
      readMoreLink: 'https://www.zeebiz.com/startups/news-bengaluru-startup-reputai-bags-one-million-dollars-in-pre-seed-funding-led-by-growthcap-ventures-339042'
    },
    {
      id: 4,
      image: '/storyblog.png',
      logo: 'GrowthCap VC',
      date: '11/01/2025',
      title: 'RePut.ai closes $1M pre-seed funding round led by GrowthCap ventures.',
      description: 'Founded by Anuj Bishnoi, Rohit Mahatma, and Amit, RePut.ai leverages blockchain, digital product passports, and predictive analytics to transform supply chains.',
      readMoreLink: 'https://yourstory.com/2025/01/startup-news-and-updates-daily-roundup-january-13-2025'
    },
    {
      id: 5,
      image: '/image5.png',
      logo: 'RealityNXT',
      date: '19/01/2025',
      title: 'RePut.ai Raises Funding to Transform Supply Chain Management.',
      description: 'RePut.AI, a Bengaluru-based startup co-founded by the Morning Cart team, has successfully raised funding to enhance its supply chain management..........',
      readMoreLink: 'https://thekarostartup.com/reput-ai-raises-funding/'
    },
    {
      id: 6,
      image: '/image6.png',
      logo: 'Founders Ventures',
      date: '19/01/2025',
      title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
      description: 'RePut.ai, a startup focused on supply chain management solutions, has raised $1 million in pre-seed funding led by GrowthCap Ventures..............',
      readMoreLink: 'https://www.vccircle.com/bobabhai-quash-secure-early-stage-funding'
    }
  ];

  const eventsData = [
    {
      id: 1,
      image: '/event1.png',
      logo: 'IVCA Summit',
      date: '03/12/2024',
      title: 'RePut at the IVCA Summit 2024',
      description: 'We are thrilled to announce that RePut attended the prestigious IVCA Summit 2024! This landmark event brings together leaders, innovators, and visionaries from the world of venture capital, private equity, and alternative investments.......',
      readMoreLink: 'https://www.linkedin.com/posts/reput-ai_ivcasummit2024-sustainability-circulareconomy-activity-7273271800879337472-U3Te/?utm_source=share&utm_medium=member_android'
    }
  ];

  const blogsData = [
    {
      id: 1,
      image: '/growthCapVenture.png',
      logo: 'GrowthCap VC',
      date: '11/01/2025',
      title: 'Thrilled to welcome RePut.ai to the GrowthCap Ventures family!',
      description: 'Their mission to revolutionize supply chain transparency with Blockchain, Digital Product Passports (DPPs), and predictive analytics is exactly the kind of impactful I...',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7284504605961428994/?actorCompanyId=102696758'
    },
    {
      id: 2,
      image: '/realityNXT.png',
      logo: 'RealityNXT',
      date: '19/01/2025',
      title: 'Reput.ai, a Bengaluru-based supply chain solutions provider, has raised $1M in a pre-seed funding round led by GrowthCap Ventures.',
      description: 'Co-founders Anuj Bishnoi, Rohit Mahatma, and Amit are driving sustainability with advanced technologies, aiming to enhance traceability, carbon emission reduction, and a circular economy across industries...........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7286357289584791553/?actorCompanyId=102696758'
    },
    {
      id: 3,
      image: '/foundersCenture.png',
      logo: 'Founders Ventures',
      date: '19/01/2025',
      title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
      description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, the company plans to use the investment to enhance its technology platform, grow its team, and expand internationally................',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7285933233924378625/?actorCompanyId=102696758'
    },
    {
      id: 4,
      image: '/blogs3.png',
      logo: 'TechCrunch',
      date: '20/01/2025',
      title: 'Reput.ai Raises $1M to Drive Sustainability in Supply Chains!',
      description: 'With successful pilots already generating early revenues, RePut.ai is on a mission to help manufacturers trace their footprints and align with global sustainability goals. This funding marks a significant step forward in building a more sustainable and responsible supply chain ecosystem.......',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7285607525851312128/?actorCompanyId=102696758'
    },
    {
      id: 5,
      image: '/tie1.png',
      logo: 'Forbes',
      date: '22/01/2025',
      title: 'The Bengaluru-based startup B2B SaaS venture Reput.ai founded in April 2024 by Anuj Bishnoi, Rohit Mahatma and Amit Bishnoi has raised close to $1 Mn (INR 8.6 Cr)',
      description: 'The startup plans to deploy the freshly raised capital to shore up its tech stack, hire more and expand its footprint globally. ...........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7284866207332126720/?actorCompanyId=102696758'
    },
    {
      id: 6,
      image: '/CEOVine.png',
      logo: 'VentureBeat',
      date: '25/01/2025',
      title: 'Anuj Bishnoi’s B2B SaaS startup, Reput.ai, raises nearly $1 million in a pre-seed funding round led by GrowthCap Ventures.',
      description: 'With a strong focus on sustainability, the platform enables businesses to track carbon emissions and connect with verified recycling networks, promoting eco-friendly practices.........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7284484249909370880/?actorCompanyId=102696758'
    },
    {
      id: 7,
      image: '/saasNewa.png',
      logo: 'Sustainability Today',
      date: '28/01/2025',
      title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
      description: 'Reput.ai, a Bengaluru, India-based B2B SaaS startup, has emerged from stealth mode and raised $1 million (INR 8.6 Cr) in a pre-seed funding round...........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7285933233924378625/?actorCompanyId=102696758'
    },
    {
      id: 8,
      image: '/CEOVine.png',
      logo: 'Green Business',
      date: '30/01/2025',
      title: 'B2B SaaS Startup Reput.ai raises nearly $1 M in Pre-Seed funding round',
      description: 'The funding will be used primarily to increase its tech stack, hire more and expand its global presence. Reput.ai leverages AI and blockchain to offer supply chain management solutions for businesses and by enabling companies to track product procurement,..........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7284095665125634048/?actorCompanyId=102696758'
    },
    {
      id: 9,
      image: '/tie1.png',
      logo: 'Innovation Weekly',
      date: '02/02/2025',
      title: 'Morning Cart Co-founder’s New Startup Reput.ai Raises $1 M in Pre-Seed round led by GrowthCap',
      description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, RePut.ai leverages AI and blockchain technology to provide cutting-edge supply chain management solutions. Its platform enables businesses...........',
      readMoreLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7284081676052242434/?actorCompanyId=102696758'
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'Press':
        return pressData;
      case 'Events':
        return eventsData;
      case 'Blogs':
        return blogsData;
      default:
        return pressData;
    }
  };

  const getTotalResults = () => {
    switch (activeTab) {
      case 'Press':
        return 6;
      case 'Events':
        return 1;
      case 'Blogs':
        return 9;
      default:
        return 6;
    }
  };

  const handleReadMore = (link: string) => {
    // Redirect to the specified URL
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">RePut in News</h1>
      
      {/* Tab Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex space-x-0">
          {['Press', 'Events', 'Blogs'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium border transition-colors ${
                activeTab === tab
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              } ${
                index === 0 ? 'rounded-l-md' : index === 2 ? 'rounded-r-md' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-gray-500 text-sm">
          Total Result: {getTotalResults()}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentData().map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Card Image */}
            <div className="h-48 bg-gray-100 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              {/* Logo and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg text-gray-800">
                  {item.logo}
                </div>
                <div className="text-sm text-gray-500">
                  {item.date}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              {/* Read More Button */}
              <button
                onClick={() => handleReadMore(item.readMoreLink)}
                className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}








// // components/RePutInNews.tsx
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// export default function RePutInNews() {
//   const [activeTab, setActiveTab] = useState('Press');

//   const pressData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'Inc42',
//       date: '11/01/2025',
//       title: "Exclusive: Morning Cart Founder's RePut.ai Bags Funding to Provide Supply Chain Management Solutions",
//       description: "BigBasket-acquired grocery delivery platform Morning Cart's cofounder Anuj Bishnoi's new B2B SaaS venture RePut.ai has ...",
//       readMoreLink: 'https://inc42.com/buzz/exclusive-morning-cart-founders-reput-ai-bags-funding-to-provide-supply-chain-management-solutions/'
//     },
//     {
//       id: 2,
//       image: '/api/placeholder/400/200',
//       logo: 'ENTRACKR',
//       date: '11/01/2025',
//       title: 'RePut.ai closes $1 Mn in pre-seed round led by GrowthCap Ventures',
//       description: "Founded by Anuj Bishnoi, Rohit Mahatma, and Amit Bhatia, RePut.ai empowers brands to validate, market, and scale their sustainability efforts...........",
//       readMoreLink: 'https://entrackr.com/2025/01/reput-ai-closes-1-mn-in-pre-seed-round-led-by-growthcap-ventures/'
//     },
//     {
//       id: 3,
//       image: '/api/placeholder/400/200',
//       logo: 'BEE BUSINESS',
//       date: '15/01/2025',
//       title: "Experienced Founders' New Startup RePut.ai Secures $1 Million in Pre-Seed Funding, Led by GrowthCap Ventures",
//       description: 'Commenting on the investment, GrowthCap Ventures\' founder and general partner Prateek Agarwal, said, "This is not just an investment but a commitment to...',
//       readMoreLink: 'https://beebusiness.in/experienced-founders-new-startup-reput-ai-secures-1-million-in-pre-seed-funding/'
//     },
//     {
//       id: 4,
//       image: '/api/placeholder/400/200',
//       logo: 'GrowthCap VC',
//       date: '11/01/2025',
//       title: 'Thrilled to welcome RePut.ai to the GrowthCap Ventures family!',
//       description: 'Their mission to revolutionize supply chain transparency with Blockchain, Digital Product Passports (DPPs), and predictive analytics is exactly the kind of impactful I...',
//       readMoreLink: 'https://www.linkedin.com/posts/growthcap-ventures_thrilled-to-welcome-reputai-to-the-growthcap-activity-7285942857463123968-pqLZ'
//     },
//     {
//       id: 5,
//       image: '/api/placeholder/400/200',
//       logo: 'RealityNXT',
//       date: '19/01/2025',
//       title: 'Reput.ai, a Bengaluru-based supply chain solutions provider, has raised $1M in a pre-seed funding round led by GrowthCap Ventures.',
//       description: 'Co-founders Anuj Bishnoi, Rohit Mahatma, and Amit are driving sustainability with advanced technologies, aiming to enhance traceability, carbon emission reduction, and a circular economy across industries...........',
//       readMoreLink: 'https://realitynxt.com/reput-ai-funding-growthcap-ventures-supply-chain-sustainability/'
//     },
//     {
//       id: 6,
//       image: '/api/placeholder/400/200',
//       logo: 'Founders Ventures',
//       date: '19/01/2025',
//       title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
//       description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, the company plans to use the investment to enhance its technology platform, grow its team, and expand internationally................',
//       readMoreLink: 'https://www.foundersventures.com/reput-ai-raises-1-million-pre-seed-funding/'
//     }
//   ];

//   const eventsData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'IVCA Summit',
//       date: '03/12/2024',
//       title: 'RePut at the IVCA Summit 2024',
//       description: 'We are thrilled to announce that RePut attended the prestigious IVCA Summit 2024! This landmark event brings together leaders, innovators, and visionaries from the world of venture capital, private equity, and alternative investments.......',
//       readMoreLink: '#'
//     }
//   ];

//   const blogsData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'GrowthCap VC',
//       date: '11/01/2025',
//       title: 'Thrilled to welcome RePut.ai to the GrowthCap Ventures family!',
//       description: 'Their mission to revolutionize supply chain transparency with Blockchain, Digital Product Passports (DPPs), and predictive analytics is exactly the kind of impactful I...',
//       readMoreLink: '#'
//     },
//     {
//       id: 2,
//       image: '/api/placeholder/400/200',
//       logo: 'RealityNXT',
//       date: '19/01/2025',
//       title: 'Reput.ai, a Bengaluru-based supply chain solutions provider, has raised $1M in a pre-seed funding round led by GrowthCap Ventures.',
//       description: 'Co-founders Anuj Bishnoi, Rohit Mahatma, and Amit are driving sustainability with advanced technologies, aiming to enhance traceability, carbon emission reduction, and a circular economy across industries...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 3,
//       image: '/api/placeholder/400/200',
//       logo: 'Founders Ventures',
//       date: '19/01/2025',
//       title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
//       description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, the company plans to use the investment to enhance its technology platform, grow its team, and expand internationally................',
//       readMoreLink: '#'
//     },
//     {
//       id: 4,
//       image: '/api/placeholder/400/200',
//       logo: 'TechCrunch',
//       date: '20/01/2025',
//       title: 'Supply Chain Transparency: The Future of Sustainable Business',
//       description: 'How blockchain and digital product passports are revolutionizing the way companies track and verify their sustainability efforts across global supply chains...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 5,
//       image: '/api/placeholder/400/200',
//       logo: 'Forbes',
//       date: '22/01/2025',
//       title: 'Digital Product Passports: A Game Changer for Environmental Compliance',
//       description: 'Exploring how DPPs are helping businesses meet regulatory requirements while building consumer trust through transparent sustainability reporting...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 6,
//       image: '/api/placeholder/400/200',
//       logo: 'VentureBeat',
//       date: '25/01/2025',
//       title: 'The Rise of Predictive Analytics in Supply Chain Management',
//       description: 'Advanced analytics and AI are transforming how companies predict and prevent supply chain disruptions while optimizing sustainability outcomes...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 7,
//       image: '/api/placeholder/400/200',
//       logo: 'Sustainability Today',
//       date: '28/01/2025',
//       title: 'Circular Economy: From Concept to Implementation',
//       description: 'Real-world case studies showing how technology platforms are enabling companies to transition from linear to circular business models...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 8,
//       image: '/api/placeholder/400/200',
//       logo: 'Green Business',
//       date: '30/01/2025',
//       title: 'Carbon Footprint Tracking: The Technology Behind the Numbers',
//       description: 'Deep dive into the technical infrastructure required for accurate carbon emission tracking and reporting across complex supply chains...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 9,
//       image: '/api/placeholder/400/200',
//       logo: 'Innovation Weekly',
//       date: '02/02/2025',
//       title: 'Blockchain for Transparency: Beyond Cryptocurrency',
//       description: 'How blockchain technology is being applied to solve real-world problems in supply chain verification and sustainability validation...........',
//       readMoreLink: '#'
//     }
//   ];

//   const getCurrentData = () => {
//     switch (activeTab) {
//       case 'Press':
//         return pressData;
//       case 'Events':
//         return eventsData;
//       case 'Blogs':
//         return blogsData;
//       default:
//         return pressData;
//     }
//   };

//   const getTotalResults = () => {
//     switch (activeTab) {
//       case 'Press':
//         return 6;
//       case 'Events':
//         return 1;
//       case 'Blogs':
//         return 9;
//       default:
//         return 6;
//     }
//   };

//   const handleReadMore = (link: string) => {
//     // Redirect to the specified URL
//     if (link && link !== '#') {
//       window.open(link, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 bg-white w-full">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">RePut in News</h1>
      
//       {/* Tab Navigation */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex space-x-0">
//           {['Press', 'Events', 'Blogs'].map((tab, index) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-2 font-medium border transition-colors ${
//                 activeTab === tab
//                   ? 'bg-blue-500 text-white border-blue-500'
//                   : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
//               } ${
//                 index === 0 ? 'rounded-l-md' : index === 2 ? 'rounded-r-md' : ''
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="text-gray-500 text-sm">
//           Total Result: {getTotalResults()}
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {getCurrentData().map((item) => (
//           <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//             {/* Card Image */}
//             <div className="h-48 bg-gray-100 relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
            
//             {/* Card Content */}
//             <div className="p-6">
//               {/* Logo and Date */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="font-bold text-lg text-gray-800">
//                   {item.logo}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   {item.date}
//                 </div>
//               </div>
              
//               {/* Title */}
//               <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
//                 {item.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                 {item.description}
//               </p>
              
//               {/* Read More Button */}
//               <button
//                 onClick={() => handleReadMore(item.readMoreLink)}
//                 className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }















// // components/RePutInNews.tsx
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// export default function RePutInNews() {
//   const [activeTab, setActiveTab] = useState('Press');

//   const pressData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'Inc42',
//       date: '11/01/2025',
//       title: "Exclusive: Morning Cart Founder's RePut.ai Bags Funding to Provide Supply Chain Management Solutions",
//       description: "BigBasket-acquired grocery delivery platform Morning Cart's cofounder Anuj Bishnoi's new B2B SaaS venture RePut.ai has ...",
//       readMoreLink: '#'
//     },
//     {
//       id: 2,
//       image: '/api/placeholder/400/200',
//       logo: 'ENTRACKR',
//       date: '11/01/2025',
//       title: 'RePut.ai closes $1 Mn in pre-seed round led by GrowthCap Ventures',
//       description: "Founded by Anuj Bishnoi, Rohit Mahatma, and Amit Bhatia, RePut.ai empowers brands to validate, market, and scale their sustainability efforts...........",
//       readMoreLink: '#'
//     },
//     {
//       id: 3,
//       image: '/api/placeholder/400/200',
//       logo: 'BEE BUSINESS',
//       date: '15/01/2025',
//       title: "Experienced Founders' New Startup RePut.ai Secures $1 Million in Pre-Seed Funding, Led by GrowthCap Ventures",
//       description: 'Commenting on the investment, GrowthCap Ventures\' founder and general partner Prateek Agarwal, said, "This is not just an investment but a commitment to...',
//       readMoreLink: '#'
//     },
//     {
//       id: 4,
//       image: '/api/placeholder/400/200',
//       logo: 'GrowthCap VC',
//       date: '11/01/2025',
//       title: 'Thrilled to welcome RePut.ai to the GrowthCap Ventures family!',
//       description: 'Their mission to revolutionize supply chain transparency with Blockchain, Digital Product Passports (DPPs), and predictive analytics is exactly the kind of impactful I...',
//       readMoreLink: '#'
//     },
//     {
//       id: 5,
//       image: '/api/placeholder/400/200',
//       logo: 'RealityNXT',
//       date: '19/01/2025',
//       title: 'Reput.ai, a Bengaluru-based supply chain solutions provider, has raised $1M in a pre-seed funding round led by GrowthCap Ventures.',
//       description: 'Co-founders Anuj Bishnoi, Rohit Mahatma, and Amit are driving sustainability with advanced technologies, aiming to enhance traceability, carbon emission reduction, and a circular economy across industries...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 6,
//       image: '/api/placeholder/400/200',
//       logo: 'Founders Ventures',
//       date: '19/01/2025',
//       title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
//       description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, the company plans to use the investment to enhance its technology platform, grow its team, and expand internationally................',
//       readMoreLink: '#'
//     }
//   ];

//   const eventsData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'IVCA Summit',
//       date: '03/12/2024',
//       title: 'RePut at the IVCA Summit 2024',
//       description: 'We are thrilled to announce that RePut attended the prestigious IVCA Summit 2024! This landmark event brings together leaders, innovators, and visionaries from the world of venture capital, private equity, and alternative investments.......',
//       readMoreLink: '#'
//     }
//   ];

//   const blogsData = [
//     {
//       id: 1,
//       image: '/api/placeholder/400/200',
//       logo: 'GrowthCap VC',
//       date: '11/01/2025',
//       title: 'Thrilled to welcome RePut.ai to the GrowthCap Ventures family!',
//       description: 'Their mission to revolutionize supply chain transparency with Blockchain, Digital Product Passports (DPPs), and predictive analytics is exactly the kind of impactful I...',
//       readMoreLink: '#'
//     },
//     {
//       id: 2,
//       image: '/api/placeholder/400/200',
//       logo: 'RealityNXT',
//       date: '19/01/2025',
//       title: 'Reput.ai, a Bengaluru-based supply chain solutions provider, has raised $1M in a pre-seed funding round led by GrowthCap Ventures.',
//       description: 'Co-founders Anuj Bishnoi, Rohit Mahatma, and Amit are driving sustainability with advanced technologies, aiming to enhance traceability, carbon emission reduction, and a circular economy across industries...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 3,
//       image: '/api/placeholder/400/200',
//       logo: 'Founders Ventures',
//       date: '19/01/2025',
//       title: 'Reput.ai raises $1 Million in Pre-Seed Funding Round',
//       description: 'Founded in April 2024 by Anuj Bishnoi, Rohit Mahatma, and Amit Bishnoi, the company plans to use the investment to enhance its technology platform, grow its team, and expand internationally................',
//       readMoreLink: '#'
//     },
//     {
//       id: 4,
//       image: '/api/placeholder/400/200',
//       logo: 'TechCrunch',
//       date: '20/01/2025',
//       title: 'Supply Chain Transparency: The Future of Sustainable Business',
//       description: 'How blockchain and digital product passports are revolutionizing the way companies track and verify their sustainability efforts across global supply chains...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 5,
//       image: '/api/placeholder/400/200',
//       logo: 'Forbes',
//       date: '22/01/2025',
//       title: 'Digital Product Passports: A Game Changer for Environmental Compliance',
//       description: 'Exploring how DPPs are helping businesses meet regulatory requirements while building consumer trust through transparent sustainability reporting...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 6,
//       image: '/api/placeholder/400/200',
//       logo: 'VentureBeat',
//       date: '25/01/2025',
//       title: 'The Rise of Predictive Analytics in Supply Chain Management',
//       description: 'Advanced analytics and AI are transforming how companies predict and prevent supply chain disruptions while optimizing sustainability outcomes...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 7,
//       image: '/api/placeholder/400/200',
//       logo: 'Sustainability Today',
//       date: '28/01/2025',
//       title: 'Circular Economy: From Concept to Implementation',
//       description: 'Real-world case studies showing how technology platforms are enabling companies to transition from linear to circular business models...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 8,
//       image: '/api/placeholder/400/200',
//       logo: 'Green Business',
//       date: '30/01/2025',
//       title: 'Carbon Footprint Tracking: The Technology Behind the Numbers',
//       description: 'Deep dive into the technical infrastructure required for accurate carbon emission tracking and reporting across complex supply chains...........',
//       readMoreLink: '#'
//     },
//     {
//       id: 9,
//       image: '/api/placeholder/400/200',
//       logo: 'Innovation Weekly',
//       date: '02/02/2025',
//       title: 'Blockchain for Transparency: Beyond Cryptocurrency',
//       description: 'How blockchain technology is being applied to solve real-world problems in supply chain verification and sustainability validation...........',
//       readMoreLink: '#'
//     }
//   ];

//   const getCurrentData = () => {
//     switch (activeTab) {
//       case 'Press':
//         return pressData;
//       case 'Events':
//         return eventsData;
//       case 'Blogs':
//         return blogsData;
//       default:
//         return pressData;
//     }
//   };

//   const getTotalResults = () => {
//     switch (activeTab) {
//       case 'Press':
//         return 6;
//       case 'Events':
//         return 1;
//       case 'Blogs':
//         return 9;
//       default:
//         return 6;
//     }
//   };

//   const handleReadMore = (link: string) => {
//     // You can implement navigation logic here
//     console.log('Redirecting to:', link);
//     // For example: router.push(link) or window.open(link, '_blank')
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">RePut in News</h1>
      
//       {/* Tab Navigation */}
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex space-x-0">
//           {['Press', 'Events', 'Blogs'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-2 font-medium border transition-colors ${
//                 activeTab === tab
//                   ? 'bg-blue-500 text-white border-blue-500'
//                   : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <div className="text-gray-500 text-sm">
//           Total Result: {getTotalResults()}
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {getCurrentData().map((item) => (
//           <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//             {/* Card Image */}
//             <div className="h-48 bg-gray-100 relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
            
//             {/* Card Content */}
//             <div className="p-6">
//               {/* Logo and Date */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="font-bold text-lg text-gray-800">
//                   {item.logo}
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   {item.date}
//                 </div>
//               </div>
              
//               {/* Title */}
//               <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
//                 {item.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                 {item.description}
//               </p>
              
//               {/* Read More Button */}
//               <button
//                 onClick={() => handleReadMore(item.readMoreLink)}
//                 className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }