"use client";

import { YoutubeShort } from "@/components/common";
import { CreatorInfoBox } from "@/components/common/etc";
import useShortDetail from "@/hooks/detail/useShortDetail";
import * as S from "./styled";

type ShortDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function ShortDetailPage({ params }: ShortDetailPageProps) {
  const {
    baseInfo,
    creatorInfo,
    handleBookmark,
    handleCancelBookmark,
    handleLike,
    handleCancelLike,
  } = useShortDetail({ id: params.slug });
  return (
    <S.Section>
      <YoutubeShort css={S.Video} videoId="O-D7g3ajzRM" />
      {/* <S.Platform>{baseInfo.platformType}}</S.Platform>
      <S.Title>{baseInfo.title}</S.Title>
      <S.Content>{baseInfo.content}</S.Content> */}
      <S.Platform>유튜브</S.Platform>
      <S.Title>ASMR에 최적인 사운드를 설정하는 방법과 장비 추천</S.Title>
      <S.Content>
        ASMR에 도전하고 싶은데 방음부터 장비 설정까지 막막하지 않으신가요? 그런
        분들을 위해 제 경험을 담은 꿀팁을 준비했습니다!
      </S.Content>
      <CreatorInfoBox
        data={creatorInfo}
        onBookmark={handleBookmark}
        onCancelBookmark={handleCancelBookmark}
        onLike={handleLike}
        onCancelLike={handleCancelLike}
      />
    </S.Section>
  );
}
