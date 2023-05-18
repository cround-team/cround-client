"use client";

import Image from "next/image";

import type { ContentCardData } from "@/types/card";
import TextBox from "../desc/textBox/TextBox";
import UserBox from "../desc/userBox/UserBox";
import * as S from "./styled";

type ContentCardProps = {
  content: ContentCardData;
};

export default function ContentCard({ content }: ContentCardProps) {
  const { name, platform, img, title, profileImg, desc, like, bookmark } =
    content;
  return (
    <S.Article>
      <S.Figure>
        <Image src={img} fill={true} alt="profile" />
      </S.Figure>
      <TextBox platform={platform} title={title} />
      <UserBox
        profileImg={profileImg}
        name={name}
        like={like}
        bookmark={bookmark}
      />
    </S.Article>
  );
}
