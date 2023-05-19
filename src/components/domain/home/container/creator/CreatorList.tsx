"use client";

import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import CreatorCard from "@/components/common/card/creator/Card";
import * as S from "./styled";
import { getMainCreators } from "@/service/mock/test";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { CreatorCardData } from "@/types/card";
import CustomSwiper from "@/components/common/swiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";

type CreatorListProps = {
  creatorType: "a" | "b" | "c";
};

export default function CreatorList({ creatorType }: CreatorListProps) {
  const [creators, setCreators] = useState<CreatorCardData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMainCreators();
        setCreators(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Section>
      <S.Link href={PATH.CREATORS}>
        {creatorType === "a" && (
          <h2>🔥 크라운드의 새로운 파트너를 만나보세요! </h2>
        )}
        {creatorType === "b" && <h2>❤️ 00님이 관심 있어 할 크리에이터</h2>}
        {creatorType === "c" && (
          <h2>🔥 크리에이터로 핫데뷔 시켜줄 분들을 만나보세요!</h2>
        )}
        {/* {creatorType === "a" && (
          <h2>크라운드의 새로운 파트너를 만나보세요! 🔥</h2>
        )}
        {creatorType === "b" && <h2>00님이 관심 있어 할 크리에이터 ❤️</h2>}
        {creatorType === "c" && (
          <h2>크리에이터로 핫데뷔 시켜줄 분들을 만나보세요! ❤️</h2>
        )} */}
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {creators?.map((creator) => (
          <CreatorCard key={creator.name} creator={creator} />
        ))}
      </S.CardWrapper>

      {/* {creators && (
        <CustomSwiper isAutoPlay={true} isPagination={false}>
          {creators?.map((creator) => (
            <SwiperSlide>
              <CreatorCard key={creator.name} creator={creator} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      )} */}

      {/* 카드 리스트 뿌려주기 */}
    </S.Section>
  );
}
