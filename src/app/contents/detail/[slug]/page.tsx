"use client";

import useContentDetail from "@/components/domain/contents/hooks/useContentDetail";
import { CreatorInfoBox } from "@/components/common/etc";
import * as S from "./styled";

type ContentDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function ContentDetailPage({ params }: ContentDetailPageProps) {
  const {
    baseInfo,
    creatorInfo,
    handleBookmark,
    handleCancelBookmark,
    handleLike,
    handleCancelLike,
  } = useContentDetail({
    id: params.slug,
  });

  return (
    <S.Section>
      <S.TextWrapper>
        <span>{baseInfo.platformType}</span>
        <h3>{baseInfo.title}</h3>
        <pre>{baseInfo.content}</pre>
      </S.TextWrapper>
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
