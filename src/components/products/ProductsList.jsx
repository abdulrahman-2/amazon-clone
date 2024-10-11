"use client";

import { useRef } from "react";
import { fetchProducts } from "@/redux/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "@/app/loading";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const ProductsList = ({ start, end, title, linkName }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto mb-5 p-3">
      <div className="relative bg-white rounded-md p-3 md:p-5">
        {loading ? (
          <Loading color="black" width={80} height={80} />
        ) : error ? (
          <div className="text-red-500">
            Failed to load products. Please try again.
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center gap-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <Link
                href="/budget"
                className="text-[#057487] hover:underline hover:text-red-500"
              >
                {linkName}
              </Link>
            </div>
            <Swiper
              spaceBetween={10}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
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
              {products.slice(start, end).map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
        <div className="navigateBtn">
          <button
            ref={prevRef}
            className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] left-0 h-24 bg-white/60 rounded-e-lg"
          >
            <MdArrowBackIos size={30} />
          </button>
          <button
            ref={nextRef}
            className="absolute w-16 flex items-center justify-center shadow-md z-20 top-1/2 translate-y-[-50%] right-0 h-24 bg-white/60 rounded-s-lg"
          >
            <MdArrowForwardIos size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
