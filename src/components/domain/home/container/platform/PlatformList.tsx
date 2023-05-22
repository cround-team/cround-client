"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import CustomSwiper from "@/components/common/swiper/CustomSwiper";
import * as S from "./styled";

const PLATFORMS = [
  {
    src: "/images/platform/youtube.png",
    size: 48,
    alt: "youtube",
  },
  {
    src: "/images/platform/instagram.png",
    size: 48,
    alt: "instagram",
  },
  {
    src: "/images/platform/tiktok.png",
    size: 48,
    alt: "tiktok",
  },
  {
    src: "/images/platform/twitch.png",
    size: 48,
    alt: "twitch",
  },
  {
    src: "/images/platform/afreeca.png",
    size: 48,
    alt: "afreeca",
  },
  {
    src: "/images/platform/blog.png",
    size: 48,
    alt: "blog",
  },
  {
    src: "/images/platform/podcast.png",
    size: 48,
    alt: "podcast",
  },
  {
    src: "/images/platform/spoon.png",
    size: 48,
    alt: "spoon",
  },
  {
    src: "/images/platform/zepeto.png",
    size: 48,
    alt: "zepeto",
  },
  {
    src: "/images/platform/emoticon.png",
    size: 48,
    alt: "emoticon",
  },
  {
    src: "/images/platform/webtoon.png",
    size: 48,
    alt: "webtoon",
  },
  {
    src: "/images/platform/nft.png",
    size: 48,
    alt: "nft",
  },
];

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
                <Image
                  src={el.src}
                  width={el.size}
                  height={el.size}
                  alt={el.alt}
                />
              </S.Figure>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </S.Wrapper>
    </S.Section>
  );
}
