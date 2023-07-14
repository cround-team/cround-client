"use client";

import { useDeviceType, usePanel } from "@/hooks";
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
  const { isDesktop, isTablet } = useDeviceType();

  const renderDeviceProfile = () => {
    if (isTablet) {
      return <TabletProfile {...getProfileProps()} />;
    } else if (isDesktop) {
      return <DesktopProfile {...getProfileProps()} />;
    } else {
      return <MobileProfile {...getProfileProps()} />;
    }
  };

  return (
    <S.Section>
      {renderDeviceProfile()}
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
      {!isDesktop && <InformativeBubbles {...getBubblesProps()} />}
    </S.Section>
  );
}
