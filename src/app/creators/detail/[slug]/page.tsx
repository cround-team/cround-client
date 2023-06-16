"use client";

import InformativeBubbles from "@/components/domain/creators/detail/InformativeBubbles/InformativeBubbles";
import Introduce from "@/components/domain/creators/detail/introduce/Introduce";

import Profile from "@/components/domain/creators/detail/profile/Profile";

import * as S from "./styled";
import CreatorDetailPannel from "@/components/common/panel/creatorDetail/CreatorDetailPannel";

type CreatorDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  return (
    <S.Section>
      {/* 프로필 컴포넌트 */}
      <Profile />
      {/* (자기소개 + 태그) 컴포넌트*/}
      <Introduce />
      {/* 탭 패널 컴포넌트 (숏클래스, 콘텐츠, 리뷰) */}
      <CreatorDetailPannel />
      {/* 메세지 컴포넌트 */}
      <InformativeBubbles />
    </S.Section>
  );
}
