"use client";



import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function TestimonialsSection(){
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Carbonscan helped us trace over 60% of our raw materials in less than 3 months, with full verification. Their team understands both the tech and the real-world problems of sustainability.",
      name: "Seraphina Rossi",
      title: "CEO",
      company: "B77, Fashion brand",
      avatar: "/csrd.png",
      initials: "SR"
    },
    {
      id: 2,
      quote: "The platform's AI-driven insights transformed our sustainability reporting. We reduced our carbon footprint by 35% in the first year using their recommendations.",
      name: "Michael Chen",
      title: "Sustainability Director",
      company: "EcoTech Solutions",
      avatar: "/csrd.png",
      initials: "MC"
    },
    {
      id: 3,
      quote: "Outstanding support and incredible results. Their carbon accounting tools are industry-leading and helped us achieve our net-zero commitments ahead of schedule.",
      name: "Sarah Williams",
      title: "Chief Operations Officer",
      company: "Green Manufacturing Inc.",
      avatar: "/csrd.png",
      initials: "SW"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Brands Worldwide
          </h2>
        </div>

        {/* Testimonial Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <div className="w-2 h-2 border-l-2 border-t-2 border-gray-600 transform -rotate-45"></div>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <div className="w-2 h-2 border-r-2 border-t-2 border-gray-600 transform rotate-45"></div>
          </button>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute bottom-44 left-8 text-9xl text-[#193939] font-semibold leading-none">
              &ldquo;
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    width={128}
                    height={128}
                    src={currentData.avatar}
                    alt={`${currentData.name} avatar`}
                    className="w-full h-full object-cover transition-all duration-700"
                    key={currentData.id}
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-800 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {currentData.initials}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-xl lg:text-[24px] text-[#193939] font-normal leading-relaxed mb-6 transition-all duration-700">
                  &quot;{currentData.quote}&quot;
                </blockquote>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-normal text-gray-900 text-[20px] transition-all duration-700">
                    {currentData.name}, {currentData.title}
                  </h4>
                  <p className="text-gray-600 transition-all text-[18px] duration-700">
                    {currentData.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-green-100 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-8 w-12 h-12 bg-emerald-100 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-green-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        
      </div>
    </div>
  );
};

 