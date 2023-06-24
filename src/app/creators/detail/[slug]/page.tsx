"use client";

import InformativeBubbles from "@/components/domain/creators/detail/InformativeBubbles/InformativeBubbles";
import Introduce from "@/components/domain/creators/detail/introduce/Introduce";
import Profile from "@/components/domain/creators/detail/profile/Profile";
import CreatorDetailPannel from "@/components/common/panel/creatorDetail/CreatorDetailPannel";
import * as S from "./styled";
import useCreatorDetail from "@/components/domain/creators/hooks/useCreatorDetail";
import { useState } from "react";
import { SelectTabs } from "@/components/common";
import { ContentList, ShortsList } from "@/components/domain";

type CreatorDetailPageProps = {
  params: {
    slug: number;
  };
};

const TABS = ["숏클래스", "콘텐츠", "리뷰"];

export default function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  const [selectedPanel, setSelectPanel] = useState(TABS[0]);
  const {
    getProfileProps,
    getIntroduceProps,
    getShortListProps,
    getContentListProps,
    getReviewListProps,
  } = useCreatorDetail(params.slug);

  const handleTabClick = (selected: string) => {
    setSelectPanel(selected);
  };

  return (
    <S.Section>
      {/* 프로필 컴포넌트 */}
      <Profile {...getProfileProps()} />
      {/* (자기소개 + 태그) 컴포넌트*/}
      <Introduce {...getIntroduceProps()} />

      <SelectTabs
        tabs={TABS}
        selected={selectedPanel}
        onTabClick={handleTabClick}
      />
      {selectedPanel === "숏클래스" && <ShortsList {...getShortListProps()} />}
      {selectedPanel === "콘텐츠" && <ContentList {...getContentListProps()} />}
      {/* {selectedPanel === "리뷰" && <Review} */}

      {/* 탭 패널 컴포넌트 (숏클래스, 콘텐츠, 리뷰) */}
      {/* <CreatorDetailPannel current={selectedPanel} onSelect={handleSelectPanel} /> */}
      {/* 메세지 컴포넌트 */}
      <InformativeBubbles />
    </S.Section>
  );
}
