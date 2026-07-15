/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { HiOutlineStar } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      text: "The body cream is amazing! My skin has never felt smoother. I've been using it for 2 weeks and I can already see the difference.",
      rating: 5,
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Jessica K.",
      text: "The shampoo stopped my hair fall in just 2 weeks! My hair feels stronger and looks shinier than ever before.",
      rating: 5,
      location: "London, UK",
    },
    {
      id: 3,
      name: "Emily R.",
      text: "Love the sheet masks! My skin looks so radiant and glowing. It's now a staple in my skincare routine.",
      rating: 4,
      location: "Sydney, Australia",
    },
    {
      id: 4,
      name: "Amina B.",
      text: "The face serum is incredible! My dark spots have faded significantly and my skin tone is much more even.",
      rating: 5,
      location: "Dubai, UAE",
    },
    {
      id: 5,
      name: "Grace O.",
      text: "I've tried many body lotions but this one is by far the best. It keeps my skin hydrated all day without feeling greasy.",
      rating: 5,
      location: "Lagos, Nigeria",
    },
    {
      id: 6,
      name: "Maria S.",
      text: "The Argan Oil Conditioner has transformed my dry, damaged hair. It's now soft, silky, and manageable.",
      rating: 4,
      location: "Toronto, Canada",
    },
  ];

  // Don't render slider on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-24 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our <span className="text-primary">Customers Say</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          loop={reviews.length > 3}
          className="testimonial-slider"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex items-center gap-0.5 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar
                      key={i}
                      className={`text-lg ${i < review.rating ? "fill-current" : ""
                        }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &quot;{review.text}&quot;
                </p>

                {/* Customer Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Swiper Navigation */}
      <style jsx>{`
        :global(.testimonial-slider .swiper-button-prev),
        :global(.testimonial-slider .swiper-button-next) {
          color: black;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        :global(.testimonial-slider .swiper-button-prev:hover),
        :global(.testimonial-slider .swiper-button-next:hover) {
          background: black;
          color: white;
        }

        :global(.testimonial-slider .swiper-button-prev::after),
        :global(.testimonial-slider .swiper-button-next::after) {
          font-size: 16px;
          font-weight: bold;
        }

        :global(.testimonial-slider .swiper-pagination-bullet) {
          background: #d1d5db;
          opacity: 1;
        }

        :global(.testimonial-slider .swiper-pagination-bullet-active) {
          background: black;
        }

        @media (max-width: 768px) {
          :global(.testimonial-slider .swiper-button-prev),
          :global(.testimonial-slider .swiper-button-next) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;