"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { PLATFORMS } from "@/constants/platforms";
import CustomSwiper from "@/components/common/swiper/CustomSwiper";
import * as S from "./styled";

const BREAK_POINTS = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
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
                <Image src={el.src} width={48} height={48} alt={el.id} />
              </S.Figure>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </S.Wrapper>
    </S.Section>
  );
}
