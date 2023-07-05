"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import bannerInstaImg from "public/images/banner-insta.png";
import bannerYoutubeImg from "public/images/banner-youtube.png";
import bannerInstaDeskImg from "public/images/banner-insta-desk.png";
import bannerAdPostImg from "public/images/banner-ad-post.png";
import * as S from "./styled";
import { useMediaQuery } from "react-responsive";
import { media } from "@/styles/themes/foundations";

const SLIDES = [
  {
    label: "insta",
    src: {
      desktop: bannerInstaDeskImg,
      mobile: bannerInstaImg,
    },
    alt: "Instagram Banner",
    title: `인스타그램,\n팔로우 수 어떻게 늘리지?`,
    sub: `한 달 만에 2000 팔로우 달성에 성공할 수 있었던\n꿀팁 들으러 가기`,
  },
  {
    label: "youtube",
    src: {
      desktop: bannerYoutubeImg,
      mobile: bannerYoutubeImg,
    },

    alt: "Youtube Banner",
    title: `유튜브, 어떻게\n시작해야 할지 막막하다면?`,
    sub: `n만 구독자를 보유한 유튜버에게 직접 조언\n구하러 가기`,
  },
  {
    label: "adPost",
    src: {
      desktop: bannerAdPostImg,
      mobile: bannerAdPostImg,
    },
    alt: "adPost Banner",
    title: `애드포스트,\n따라만 하고 승인 받자!`,
    sub: `애드포스트로 쏠쏠하게 용돈 버는 노하우\n알아보러 가기`,
  },
];

export default function Banner() {
  const isDesktop = useMediaQuery({
    query: "(min-width:1200px)",
  });

  console.log(isDesktop);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <S.Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
    >
      {SLIDES.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <S.Wrapper aria-label={slide.label}>
            <S.TextWrapper>
              <S.Title aria-label={slide.label}>{slide.title}</S.Title>
              <S.Sub aria-label={slide.label}>{slide.sub}</S.Sub>
            </S.TextWrapper>
            <S.Figure aria-label={slide.label}>
              <Image
                src={isDesktop ? slide.src.desktop : slide.src.mobile}
                alt={slide.alt}
                priority
              />
            </S.Figure>
          </S.Wrapper>
        </SwiperSlide>
      ))}
    </S.Swiper>
  );
}
