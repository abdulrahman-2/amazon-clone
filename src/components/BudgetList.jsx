"use client";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
  Budget_1,
  Budget_2,
  Budget_3,
  Budget_4,
  Budget_5,
  Budget_6,
  Budget_7,
  Budget_8,
  Budget_9,
} from "../assets/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Title from "./title/Title";

const BudgetList = () => {
  const budgets = [
    { id: 1, img: Budget_1 },
    { id: 2, img: Budget_2 },
    { id: 3, img: Budget_3 },
    { id: 4, img: Budget_4 },
    { id: 5, img: Budget_5 },
    { id: 6, img: Budget_6 },
    { id: 7, img: Budget_7 },
    { id: 8, img: Budget_8 },
    { id: 9, img: Budget_9 },
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

export default BudgetList;
