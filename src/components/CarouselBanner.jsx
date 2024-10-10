"use client";

import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "@/assets";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const CarouselBanner = () => {
  const bannerImages = [
    { title: "bannerOne", source: bannerImgOne },
    { title: "bannerTwo", source: bannerImgTwo },
    { title: "bannerThree", source: bannerImgThree },
    { title: "bannerFour", source: bannerImgFour },
    { title: "bannerFive", source: bannerImgFive },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {bannerImages.map((banner) => (
        <SwiperSlide key={banner.title}>
          <Image
            src={banner.source}
            alt={banner.title}
            className="w-full h-[300px] md:h-[calc(100vh-110px)] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselBanner;
