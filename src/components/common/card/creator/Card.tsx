"use client";

import Image from "next/image";

import type { CreatorCardData } from "@/types/card";
import { PATH } from "@/constants";
import * as S from "./styled";

type CreatorCardProps = {
  creator: CreatorCardData;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const { img, name, platform, theme, desc } = creator;
  return (
    <S.Article>
      <S.Figure>
        <Image src={img} fill={true} alt="profile" />
      </S.Figure>
      <S.TitleWrapper>
        <h3>{name}</h3>
        <span>
          {platform}/{theme}
        </span>
      </S.TitleWrapper>
      <S.Desc>{desc}</S.Desc>
    </S.Article>
  );
}
