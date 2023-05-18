"use client";

import Image from "next/image";

import type { CreatorCardData } from "@/types/card";
import { PATH } from "@/constants";
import LinkButton from "../../link/base/LinkButton";
import * as S from "./styled";

type CreatorCardProps = {
  creator: CreatorCardData;
};

export default function CreatorCard({ creator }: CreatorCardProps) {
  const { img, name, platform, theme } = creator;
  return (
    <S.Article>
      <S.Figure>
        <Image src={img} fill={true} alt="profile" />
      </S.Figure>
      <S.Desc>
        <h3>{name}</h3>
        <span>
          {platform}/{theme}
        </span>
      </S.Desc>
      <LinkButton
        href={PATH.CREATORS}
        label="질문하기"
        size="32"
        variant="primary"
      />
    </S.Article>
  );
}
