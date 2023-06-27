"use client";

import { useState } from "react";

import { SelectTabs } from "@/components/common";
import { ContentList, ShortsList } from "@/components/domain";
import InformativeBubbles from "@/components/domain/creators/detail/InformativeBubbles/InformativeBubbles";
import Introduce from "@/components/domain/creators/detail/introduce/Introduce";
import Profile from "@/components/domain/creators/detail/profile/Profile";
import useCreatorDetail from "@/components/domain/creators/hooks/useCreatorDetail";
import ReviewList from "@/components/common/list/review/ReviewList";
import * as S from "./styled";

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
    getBubblesProps,
  } = useCreatorDetail(params.slug);

  const handleTabClick = (selected: string) => {
    setSelectPanel(selected);
  };

  return (
    <S.Section>
      <Profile {...getProfileProps()} />
      <Introduce {...getIntroduceProps()} />
      <SelectTabs
        tabs={TABS}
        selected={selectedPanel}
        onTabClick={handleTabClick}
      />
      {selectedPanel === "숏클래스" && <ShortsList {...getShortListProps()} />}
      {selectedPanel === "콘텐츠" && <ContentList {...getContentListProps()} />}
      {selectedPanel === "리뷰" && <ReviewList {...getReviewListProps()} />}
      <InformativeBubbles {...getBubblesProps()} />
    </S.Section>
  );
}
