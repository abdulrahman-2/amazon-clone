"use client";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
  guide_1,
  guide_2,
  guide_3,
  guide_4,
  guide_5,
  guide_6,
  guide_7,
  guide_8,
  guide_9,
} from "../assets/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Title from "./title/Title";

const GuideList = () => {
  const budgets = [
    { id: 1, img: guide_1 },
    { id: 2, img: guide_2 },
    { id: 3, img: guide_3 },
    { id: 4, img: guide_4 },
    { id: 5, img: guide_5 },
    { id: 6, img: guide_6 },
    { id: 7, img: guide_7 },
    { id: 8, img: guide_8 },
    { id: 9, img: guide_9 },
  ];

  return (
    <div className="container mx-auto mb-5 p-3 -mt-5">
      <div className="relative bg-white rounded-md p-3 md:p-5">
        <Title
          title={"Save more with the Budget Store"}
          link={"Shop all deals"}
        />
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-budget",
            prevEl: ".prev-budget",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {budgets.map((budget) => (
            <SwiperSlide key={budget.id}>
              <div className="relative w-full h-[220px]">
                <Image
                  src={budget.img}
                  alt={`Budget item ${budget.id}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, 
                         (max-width: 768px) 33vw, 
                         (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigateBtn">
          <button className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] left-0 prev-budget h-24 bg-white/60 rounded-e-lg">
            <MdArrowBackIos size={30} />
          </button>
          <button className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] right-0 next-budget h-24 bg-white/60 rounded-s-lg">
            <MdArrowForwardIos size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideList;
