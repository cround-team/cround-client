"use client";

import Image from "next/image";
import { BookmarkIcon, HeartIcon } from "@/assets/icons";

import * as S from "./styled";

type UserBoxProps = {
  profileImg: string;
  name: string;
  like: number;
  bookmark: number;
};

export default function UserBox({
  profileImg,
  name,
  like,
  bookmark,
}: UserBoxProps) {
  return (
    <S.Container>
      <S.LeftContainer>
        <figure>
          <Image src={profileImg} alt="shortClass" fill />
        </figure>
        <span>{name}</span>
      </S.LeftContainer>
      <S.RightContainer>
        <div>
          <HeartIcon />
          <span>{like}</span>
        </div>
        <div>
          <BookmarkIcon />
          <span>{bookmark}</span>
        </div>
      </S.RightContainer>
    </S.Container>
  );
}
