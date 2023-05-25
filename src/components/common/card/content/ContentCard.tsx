"use client";

import type { ContentCardData } from "@/types/card";
import TextBox from "../desc/textBox/TextBox";
import * as S from "./styled";
import CreatorInfoBox from "../desc/CreatorInfoBox/CreatorInfoBox";

type ContentCardProps = {
  content: ContentCardData;
  isShowCreatorInfo?: boolean;
};

export default function ContentCard({
  content,
  isShowCreatorInfo,
}: ContentCardProps) {
  const { platform, title, desc, profileImg, name, like, bookmark } = content;

  return (
    <S.Article>
      <S.InfoGroup>
        <TextBox platform={platform} title={title} desc={desc} />
        {isShowCreatorInfo && (
          <CreatorInfoBox
            profileImg={profileImg}
            name={name}
            like={like}
            bookmark={bookmark}
          />
        )}
      </S.InfoGroup>
    </S.Article>
  );
}
