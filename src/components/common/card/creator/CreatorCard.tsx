"use client";

import Image from "next/image";

import type { CreatorCardData } from "@/types/card";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import Link from "next/link";
import { PATH } from "@/constants";

type CreatorCardProps = {
  creator: CreatorCardData;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const {
    creatorId,
    description,
    platformActivityName,
    platformType,
    platformTheme,
    profileImage,
  } = creator;

  return (
    <Link href={`${PATH.CREATORS.DETAIL}/${creatorId}`}>
      <S.Article>
        <S.Figure>
          <Image
            src={profileImage}
            fill={true}
            alt="profile"
            sizes={media.images.sizes}
            priority
          />
        </S.Figure>
        <S.TitleWrapper>
          <h3>{platformActivityName}</h3>
          <span>
            {platformType}
            <br />
            {platformTheme}
          </span>
        </S.TitleWrapper>
        <S.Desc>{description}</S.Desc>
      </S.Article>
    </Link>
  );
}
