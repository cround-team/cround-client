"use client";

import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import CreatorCard from "@/components/common/card/creator/Card";
import * as S from "./styled";

const CREATORS = [
  {
    name: "코코",
    platform: "유튜브",
    theme: "ASMR",
    img: "/images/profile.png",
  },
  {
    name: "쿠쿠",
    platform: "트위치",
    theme: "게임",
    img: "/images/mago.png",
  },
];

type CreatorListProps = {
  creatorType: "a" | "b" | "c";
};

export default function CreatorList({ creatorType }: CreatorListProps) {
  return (
    <S.Section>
      <S.Link href={PATH.CREATORS}>
        {creatorType === "a" && <h2>크라운드의 새로운 파트너를 만나보세요!</h2>}
        {creatorType === "b" && <h2>00님이 관심 있어 할 크리에이터</h2>}
        {creatorType === "c" && (
          <h2>크리에이터로 핫데뷔 시켜줄 분들을 만나보세요!</h2>
        )}
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {CREATORS.map((creator) => (
          <CreatorCard key={creator.name} creator={creator} />
        ))}
      </S.CardWrapper>
      {/* 카드 리스트 뿌려주기 */}
    </S.Section>
  );
}
