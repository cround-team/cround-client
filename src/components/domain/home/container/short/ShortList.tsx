"use client";

import { useEffect, useState } from "react";

import type { ShortCardData } from "@/types/card";
import { ChevronRightBlackIcon } from "@/assets/icons/arrow";
import { PATH } from "@/constants";
import ShortCard from "@/components/common/card/short/ShortCard";
import { getMainShorts } from "@/service/mock/test";
import * as S from "./styled";
import CustomSwiper from "@/components/common/swiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const BREAK_POINTS = {
  360: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
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

export default function ShortList() {
  const [shorts, setShorts] = useState<ShortCardData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMainShorts();
        setShorts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <S.Link href={PATH.SHORTS}>
        <h2>
          <Image
            width={16}
            height={16}
            src="/images/title/video.png"
            alt="video"
          />
          크리에이터가 직접 알려주는 꿀팁!
        </h2>
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {/* <CustomSwiper
          slidesPerView={1}
          spaceBetween={16}
          breakPoints={BREAK_POINTS}
          centeredSlides={true}
        >
          {shorts?.map((short) => (
            <SwiperSlide key={short.id}>
              <ShortCard key={short.id} short={short} />
            </SwiperSlide>
          ))}
        </CustomSwiper> */}
        {shorts?.map((short) => (
          <ShortCard key={short.id} short={short} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
