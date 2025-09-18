// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const logos = [
//   '/client1.png',
//   '/client2.png',
//   '/client3.png',
//   '/client4.png',
//   '/client5.png',
//   '/client1.png',
//   '/client2.png',
//   // Add duplicates if needed for smoothness
// ];

// export default function ClientCarousel() {
//   return (
//     <div className="py-16 bg-white text-center">
//       <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1D3B] mb-2">
//         Our Clients
//       </h2>
//       <div className="w-20 h-1 bg-yellow-300 mx-auto mb-8 rounded-full" />

//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={5}
//         spaceBetween={30}
//         loop={true}
//         speed={8000}             // slower speed for smooth scroll
//         cssMode={true}           // enables smooth continuous scroll behavior
//         allowTouchMove={false}   // disable manual drag for continuous effect
//         autoplay={{
//           delay: 0,              // no delay between transitions
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//         }}
//       >
//         {logos.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex items-center justify-center">
//               <img
//                 src={src}
//                 alt={`Client ${index + 1}`}
//                 className="h-16 w-auto object-contain"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }









'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
  // Added duplicates for smoother infinite loop
];

export default function ClientCarousel() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1D3B] mb-2">
        Our Clients
      </h2>
      <div className="w-20 h-1 bg-yellow-300 mx-auto mb-8 rounded-full" />

      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          speed={3000}             // Reduced speed for smoother movement
          cssMode={false}          // Disabled cssMode for smoother animation
          allowTouchMove={false}   // Disabled manual dragging
          autoplay={{
            delay: 1,              // Minimal delay instead of 0
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((src, index) => (
            <SwiperSlide key={index}> 
              <div className="flex items-center justify-center">
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}