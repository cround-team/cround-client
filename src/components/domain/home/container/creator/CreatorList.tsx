"use client";

import { ChevronRightBlackIcon } from "@/assets/icons/arrow";
import { PATH } from "@/constants";
import CreatorCard from "@/components/common/card/creator/Card";

import { getMainCreators } from "@/service/mock/test";
import { useEffect, useState } from "react";
import { CreatorCardData } from "@/types/card";
import Image from "next/image";
import * as S from "./styled";

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
          <h2>
            <Image
              width={16}
              height={16}
              src="/images/title/chat.png"
              alt="chat"
            />
            크라운드의 새로운 파트너를 만나보세요!
          </h2>
        )}
        {creatorType === "b" && (
          <h2>
            <Image
              width={16}
              height={16}
              src="/images/title/heart.png"
              alt="heart"
            />
            크라운더님이 관심 있어 할 크리에이터
          </h2>
        )}
        {creatorType === "c" && (
          <h2>
            <Image
              width={16}
              height={16}
              src="/images/title/fire.png"
              alt="fire"
            />
            크리에이터로 핫데뷔를 도와드릴게요!
          </h2>
        )}
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {creators?.map((creator) => (
          <CreatorCard key={creator.name} creator={creator} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
