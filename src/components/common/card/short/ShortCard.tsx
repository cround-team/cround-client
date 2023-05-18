"use client";

import Image from "next/image";

import type { ShortCardData } from "@/types/card";
import { PATH } from "@/constants";
import TextBox from "../desc/textBox/TextBox";
import UserBox from "../desc/userBox/UserBox";
import * as S from "./styled";

type ShortCardProps = {
  short: ShortCardData;
};

export default function ShortCard({ short }: ShortCardProps) {
  const { name, platform, img, profileImg, title, like, bookmark } = short;
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
