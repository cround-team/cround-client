"use client";

import Image from "next/image";

import type { CreatorCardData } from "@/types/card";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type CreatorCardProps = {
  creator: CreatorCardData;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const {
    creatorId,
    description,
    platformActivityName,
    platformType,
    profileImage,
  } = creator;

  return (
    <S.Article>
      <S.Figure>
        <Image
          src={profileImage}
          fill={true}
          alt="profile"
          sizes={media.images.sizes}
        />
      </S.Figure>
      <S.TitleWrapper>
        <h3>{platformActivityName}</h3>
        <span>
          {platformType}
          <br />
          {"임시 테마"}
        </span>
      </S.TitleWrapper>
      <S.Desc>{description}</S.Desc>
    </S.Article>
  );
}
