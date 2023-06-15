"use client";

import type { ContentCardData } from "@/types/card";
import { PATH } from "@/constants";
import * as S from "./styled";
import { CreatorInfoBox, TextBox } from "../../etc";

type ContentCardProps = {
  content: ContentCardData;
  isShowCreatorInfo?: boolean;
};

export default function ContentCard({
  content,
  isShowCreatorInfo,
}: ContentCardProps) {
  const {
    boardId,
    title,
    content: desc,
    platformType,
    profileImage,
    author,
    likesCount,
    bookmarksCount,
    liked,
    bookmarked,
  } = content;

  return (
    <S.LinkCard href={`${PATH.CONTENTS.DETAIL}/${boardId}`}>
      <S.Article>
        <S.InfoGroup>
          <TextBox platform={platformType} title={title} desc={desc} />
          {isShowCreatorInfo && (
            <CreatorInfoBox
              profileImage={profileImage}
              author={author}
              liked={liked}
              likesCount={likesCount}
              bookmarked={bookmarked}
              bookmarksCount={bookmarksCount}
            />
          )}
        </S.InfoGroup>
      </S.Article>
    </S.LinkCard>
  );
}
