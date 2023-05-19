"use client";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ContentCardData, CreatorCardData, ShortCardData } from "@/types/card";
import { PropsWithChildren } from "react";

//   pagination?: {
//     clickable: boolean;
//     renderBullet: (index: number, className: string) => string;
//   };

type SwiperProps = {
  isPagination?: boolean;
  isAutoPlay?: boolean;
  // items: CreatorCardData[] | ShortCardData[] | ContentCardData[] | undefined;
  children: React.ReactNode;
};

export default function CustomSwiper({
  isPagination,
  isAutoPlay,
  // items,
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
    >
      {children}
    </Swiper>
  );
}
