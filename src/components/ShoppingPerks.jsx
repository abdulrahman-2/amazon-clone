"use client";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
  perks_1,
  perks_2,
  perks_3,
  perks_4,
  perks_5,
  perks_6,
  perks_7,
  perks_8,
  perks_9,
} from "../assets/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const ShoppingPerks = () => {
  const budgets = [
    { id: 1, img: perks_1 },
    { id: 2, img: perks_2 },
    { id: 3, img: perks_3 },
    { id: 4, img: perks_4 },
    { id: 5, img: perks_5 },
    { id: 6, img: perks_6 },
    { id: 7, img: perks_7 },
    { id: 8, img: perks_8 },
    { id: 9, img: perks_9 },
  ];

  return (
    <div className="container mx-auto mb-5 p-3 -mt-1">
      <div className="relative bg-white rounded-md p-3 md:p-5">
        <div className="mb-5 flex items-center gap-5">
          <h3 className="text-xl font-semibold">Enjoy your shopping perks</h3>
          <Link
            href="/budget"
            className="text-[#057487] hover:underline hover:text-red-500"
          >
            Start shopping
          </Link>
        </div>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-perks",
            prevEl: ".prev-perks",
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
              <div>
                <Image
                  src={budget.img}
                  alt={budget.id}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigateBtn">
          <button className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] left-0 prev-perks h-24 bg-white/60 rounded-e-lg">
            <MdArrowBackIos size={30} />
          </button>
          <button className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] right-0 next-perks h-24 bg-white/60 rounded-s-lg">
            <MdArrowForwardIos size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPerks;
