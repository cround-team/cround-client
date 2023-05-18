"use client";

import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import * as S from "./styled";
import ShortCard from "@/components/common/card/short/ShortCard";

const SHORTS = [
  {
    id: 1,
    title: "ASMR에 최적인 사운드를 설정 하는 방법과 장비 추천",
    platform: "유튜브",
    img: "/images/short1.png",
    profileImg: "/images/profile.png",
    name: "코코",
    like: 16,
    bookmark: 24,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing",
    platform: "트위치",
    img: "/images/short1.png",
    profileImg: "/images/mago.png",
    name: "쿠쿠",
    like: 1444,
    bookmark: 220,
  },
];

export default function ShortList() {
  return (
    <S.Section>
      <S.Link href={PATH.SHORTS}>
        <h2>크리에이터가 직접 알려주는 꿀팁!</h2>
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {SHORTS.map((short) => (
          <ShortCard key={short.id} short={short} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
