"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {

  const slides = [
    {
      id: 1,
      image: "/slider_images/body-cream.png",
      link: "/product/body-cream",
      alt: "LUXEGLOW Lightning Body Cream"
    },
    {
      id: 2,
      image: "/slider_images/face-wash.png",
      link: "/product/face-wash",
      alt: "LUXEGLOW Face Wash"
    },
    {
      id: 3,
      image: "/slider_images/sheet-mask.png",
      link: "/product/sheet-mask",
      alt: "LUXEGLOW Sheet Mask"
    }
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop
        className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={slide.link} className="block w-full h-full relative">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                quality={80}
              />
            </Link>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Hidden on Mobile */}
        <div className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20">
          <button className="swiper-button-prev !relative !w-8 !h-8 md:!w-10 md:!h-10 !bg-black/20 backdrop-blur-sm rounded-full hover:!bg-black/40 transition-all !text-white !flex items-center justify-center">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20">
          <button className="swiper-button-next !relative !w-8 !h-8 md:!w-10 md:!h-10 !bg-black/20 backdrop-blur-sm rounded-full hover:!bg-black/40 transition-all !text-white !flex items-center justify-center">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;