"use client";

import Link from "next/link";

import { CroundLogoIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import Navigation from "@/components/layout/header/navigation/Navigation";
import Utils from "./utils/Utils";
import * as S from "./Header.styled";

export default function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={PATH.ROOT}>
            <CroundLogoIcon />
          </Link>
        </S.Logo>
        <Utils />
      </S.Wrapper>
      <Navigation />
    </S.Header>
  );
}
