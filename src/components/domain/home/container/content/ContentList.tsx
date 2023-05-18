"use client";

import { ChevronRightBlackIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import * as S from "./styled";
import ContentCard from "@/components/common/card/content/ContentCard";

const CONTENTS = [
  {
    id: 1,
    title: "ASMR에 최적인 사운드를 설정 하는 방법과 장비 추천",
    platform: "유튜브",
    img: "/images/short1.png",
    profileImg: "/images/profile.png",
    name: "코코",
    desc: "유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작하기 전 가장 궁금했던 부분 중 하나였구요. 현재 20만 구독자를 모으는데 성공하면서 깨달은 것은",
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
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus illo sit assumenda ratione pariatur voluptates quas impedit numquam quos quibusdam corporis aut obcaecati sed dolorem minus repellendus, aperiam exercitationem error.",
    like: 1444,
    bookmark: 220,
  },
];

export default function ContentList() {
  return (
    <S.Section>
      <S.Link href={PATH.CONTENTS}>
        <h2>많은 사람들이 원한 정보들 바로 여기에!</h2>
        <ChevronRightBlackIcon />
      </S.Link>
      <S.CardWrapper>
        {CONTENTS.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </S.CardWrapper>
    </S.Section>
  );
}
