"use client";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type BreakPoints = {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

type SwiperProps = {
  isPagination?: boolean;
  isAutoPlay?: boolean;
  slidesPerView: number;
  spaceBetween: number;
  breakPoints: BreakPoints;
  centeredSlides?: boolean;
  children: React.ReactNode;
};

export default function CustomSwiper({
  isPagination,
  isAutoPlay,
  slidesPerView,
  spaceBetween,
  breakPoints,
  centeredSlides = false,
  children,
}: SwiperProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const autoPlay = {
    delay: 3000,
    disableOnInteraction: false,
  };

  return (
    <Swiper
      pagination={isPagination ? pagination : false}
      autoplay={isAutoPlay ? autoPlay : false}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakPoints}
      centeredSlides={centeredSlides}
      // initialSlide={1}
    >
      {children}
    </Swiper>
  );
}
