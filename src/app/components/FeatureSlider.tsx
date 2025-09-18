'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const features = [
  {
    icon: '/iot.png',
    title: 'Digital Product Passports and Blockchain Integration',
    description:
      'Make your data tamper proof with blockchain integration and consolidate all the information about the product through digitally stored certificates using the DPPs.',
  },
  {
    icon: '/audit.png',
    title: 'ERP Integration & APIs',
    description:
      'Access dedicated APIs for real-time warehouse, product, case, and pallet data, and enjoy streamlined workflows across every stage with robust ERP Integration.',
  },
  {
    icon: '/analytics.png',
    title: 'Sub-tier Mapping',
    description:
      'Seamless mapping and management of supplier data across every tier—from 1st to nth—so you can ensure comprehensive oversight at all levels.',
  },
  {
    icon: '/iot.png',
    title: 'Supplier Verification',
    description:
      'Enable transparency by verifying supplier credentials and certifications across the chain.',
  },
  {
    icon: '/audit.png',
    title: 'Carbon Footprint Tracking',
    description:
      'Track CO2 emissions at every production stage with automated, audit-ready records.',
  },
];

export default function FeatureSlider() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/homeImageThree.jpg')" }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-center px-6">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center md:text-left mb-12 px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              RePut’s all encompassing and world class features
            </h2>
            <p className="uppercase tracking-wide text-sm text-gray-200 font-semibold mb-2">
              Uniting innovation and sustainability
            </p>
            <p className="max-w-3xl text-gray-100 mx-auto md:mx-0">
              In the intricate world of fashion, your supply chain should be as coordinated as your latest collection.
              Reput’s unified platform is your workroom for supply chain mastery.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-end items-center mb-4 gap-4">
            <button className="swiper-button-prev bg-white text-black p-2 rounded-full shadow hover:bg-gray-200">
              <FaArrowLeft />
            </button>
            <button className="swiper-button-next bg-white text-black p-2 rounded-full shadow hover:bg-gray-200">
              <FaArrowRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform h-full flex flex-col justify-between min-h-[320px]">
                  {feature.icon && (
                    <img src={feature.icon} alt="Icon" className="h-8 w-8 mb-4" />
                  )}
                  <div>
                    <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-700">{feature.description}</p>
                  </div>
                  <button className="text-sm font-semibold mt-6 flex items-center gap-2 text-blue-600 hover:underline">
                    Learn more <FaArrowRight />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}





// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { FaArrowRight } from 'react-icons/fa';

// const features = [
//   {
//     icon: '/iot.png',
//     title: 'Digital Product Passports and Blockchain Integration',
//     description:
//       'Make your data tamper proof with blockchain integration and consolidate all the information about the product through digitally stored certificates using the DPPs.',
//   },
//   {
//     icon: '/audit.png',
//     title: 'ERP Integration & APIs',
//     description:
//       'Access dedicated APIs for real-time warehouse, product, case, and pallet data, and enjoy streamlined workflows across every stage with robust ERP Integration.',
//   },
//   {
//     icon: '/analytics.png',
//     title: 'Sub-tier Mapping',
//     description:
//       'Seamless mapping and management of supplier data across every tier—from 1st to nth—so you can ensure comprehensive oversight at all levels.',
//   },
//   // Add more slides if needed
// ];

// export default function FeatureSlider() {
//   return (
//     <div
//       className="h-screen bg-cover bg-center text-white relative py-16 px-6"
//       style={{ backgroundImage: "url('/homeImageThree.jpg')" }} // Use your uploaded image path
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           RePut’s all encompassing and world class features
//         </h2>
//         <p className="uppercase tracking-wider text-sm text-gray-200 mb-2 font-semibold">
//           Uniting innovation and sustainability
//         </p>
//         <p className="max-w-3xl text-gray-100 mb-12">
//           In the intricate world of fashion, your supply chain should be as coordinated as your latest collection.
//           Reput’s unified platform is your workroom for supply chain mastery.
//         </p>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {features.map((feature, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform h-full flex flex-col justify-between">
//                 {/* Icon (optional) */}
//                 {feature.icon && (
//                   <img src={feature.icon} alt="Icon" className="h-8 w-8 mb-4" />
//                 )}
//                 <div>
//                   <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
//                   <p className="text-sm text-gray-700">{feature.description}</p>
//                 </div>
//                 <button className="text-sm font-semibold mt-6 flex items-center gap-2 text-blue-600 hover:underline">
//                   Learn more <FaArrowRight />
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
