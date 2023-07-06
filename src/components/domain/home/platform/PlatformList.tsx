"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { PLATFORMS } from "@/constants/platforms";
import CustomSwiper from "@/components/common/swiper/CustomSwiper";
import * as S from "./styled";
import { media } from "@/styles/themes/foundations";

const BREAK_POINTS = {
  360: {
    slidesPerView: 5,
    spaceBetween: 24,
  },
  600: {
    slidesPerView: 7,
    spaceBetween: 32,
  },
  800: {
    slidesPerView: 10,
    spaceBetween: 42,
  },
  1200: {
    slidesPerView: 12,
    spaceBetween: 56.7,
  },
};

export default function PlatformList() {
  return (
    <S.Section>
      <S.Wrapper>
        <CustomSwiper
          isPagination={false}
          isAutoPlay={false}
          slidesPerView={5}
          spaceBetween={24}
          breakPoints={BREAK_POINTS}
        >
          {PLATFORMS.map((el, idx) => (
            <SwiperSlide key={idx}>
              <S.Figure>
                <Image
                  src={el.src}
                  fill
                  sizes={media.images.sizes}
                  alt={el.id}
                />
              </S.Figure>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </S.Wrapper>
    </S.Section>
  );
}
