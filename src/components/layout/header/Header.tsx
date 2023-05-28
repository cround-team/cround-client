"use client";

import Link from "next/link";

import { CroundLogoIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import Navigation from "@/components/layout/header/navigation/Navigation";
import Utils from "./utils/Utils";
import * as S from "./Header.styled";
import useRegisterHeader from "@/hooks/useRegisterHeader";

export default function Header() {
  const isRegisterPage = useRegisterHeader();

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
      {isRegisterPage && <div>000 등록 페이지</div>}
      <Navigation />
    </S.Header>
  );
}
