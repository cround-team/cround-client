"use client";

import { usePanel } from "@/hooks";
import {
  ContentList,
  ReviewList,
  SelectTabs,
  ShortsList,
} from "@/components/common";
import InformativeBubbles from "@/components/domain/creators/detail/InformativeBubbles/InformativeBubbles";
import Introduce from "@/components/domain/creators/detail/introduce/Introduce";
import Profile from "@/components/domain/creators/detail/profile/Profile";
import useCreatorDetail from "@/components/domain/creators/hooks/useCreatorDetail";
import * as S from "./styled";

type CreatorDetailPageProps = {
  params: {
    slug: number;
  };
};

const TABS = ["숏클래스", "콘텐츠", "리뷰"];

export default function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  const { selectedPanel, handleChangePanel } = usePanel(TABS[0]);
  const {
    getProfileProps,
    getIntroduceProps,
    getShortListProps,
    getContentListProps,
    getReviewListProps,
    getBubblesProps,
  } = useCreatorDetail(params.slug);

  return (
    <S.Section>
      <Profile {...getProfileProps()} />
      <Introduce {...getIntroduceProps()} />
      <SelectTabs
        tabs={TABS}
        selected={selectedPanel}
        onTabClick={handleChangePanel}
      />
      {selectedPanel === "숏클래스" && <ShortsList {...getShortListProps()} />}
      {selectedPanel === "콘텐츠" && <ContentList {...getContentListProps()} />}
      {selectedPanel === "리뷰" && (
        <ReviewList {...getReviewListProps()} creatorId={params.slug} />
      )}
      <InformativeBubbles {...getBubblesProps()} />
    </S.Section>
  );
}
