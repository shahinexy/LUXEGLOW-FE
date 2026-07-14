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
    <div>
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
        }}
        loop
        className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px] lg:h-[600px]"
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;