"use client";

import type { ContentCardData } from "@/types/card";
import TextBox from "../desc/textBox/TextBox";
import * as S from "./styled";

type ContentCardProps = {
  content: ContentCardData;
};

export default function ContentCard({ content }: ContentCardProps) {
  const { platform, title, desc } = content;

  return (
    <S.Article>
      <TextBox platform={platform} title={title} desc={desc} />
    </S.Article>
  );
}
