"use client";

import { usePanel } from "@/hooks";
import {
  ContentList,
  ReviewList,
  SelectTabs,
  ShortsList,
} from "@/components/common";
import InformativeBubbles from "@/components/domain/creators/detail/common/InformativeBubbles/InformativeBubbles";
import useCreatorDetail from "@/components/domain/creators/hooks/useCreatorDetail";
import MobileProfile from "@/components/domain/creators/detail/mobile/MobileProfile";
import TabletProfile from "@/components/domain/creators/detail/tablet/TabletProfile";
import DesktopProfile from "@/components/domain/creators/detail/desktop/DesktopProfile";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
    getShortListProps,
    getContentListProps,
    getReviewListProps,
    getBubblesProps,
  } = useCreatorDetail(params.slug);
  const [device, setDevice] = useState("mobile");
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  useEffect(() => {
    if (isTablet) {
      setDevice("tablet");
    } else if (isDesktop) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <S.Section>
      {device === "mobile" && <MobileProfile {...getProfileProps()} />}
      {device === "tablet" && <TabletProfile {...getProfileProps()} />}
      {device === "desktop" && <DesktopProfile {...getProfileProps()} />}
      <SelectTabs
        css={S.TabsStyles}
        tabs={TABS}
        selected={selectedPanel}
        onTabClick={handleChangePanel}
      />
      {selectedPanel === "숏클래스" && <ShortsList {...getShortListProps()} />}
      {selectedPanel === "콘텐츠" && <ContentList {...getContentListProps()} />}
      {selectedPanel === "리뷰" && (
        <ReviewList {...getReviewListProps()} creatorId={params.slug} />
      )}
      {device !== "desktop" && <InformativeBubbles {...getBubblesProps()} />}
    </S.Section>
  );
}
