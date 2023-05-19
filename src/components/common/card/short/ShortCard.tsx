"use client";

import Image from "next/image";

import type { ShortCardData } from "@/types/card";
import TextBox from "../desc/textBox/TextBox";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type ShortCardProps = {
  short: ShortCardData;
};

export default function ShortCard({ short }: ShortCardProps) {
  const { platform, img, title } = short;
  return (
    <S.Article>
      <S.Figure>
        <Image src={img} fill={true} alt="profile" sizes={media.images.sizes} />
      </S.Figure>
      <TextBox platform={platform} title={title} />
    </S.Article>
  );
}
