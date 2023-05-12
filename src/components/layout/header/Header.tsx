"use client";

import Link from "next/link";

import * as S from "./Header.styled";
import SearchInput from "@/components/common/input/search/SearchInput";
import Navigation from "@/components/layout/header/navigation/Navigation";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <h1>
          <Link href="">Cround</Link>
        </h1>
        <S.RightContainer>
          <SearchInput
            label="게시물 검색"
            placeholder="관심 있는 플랫폼 또는 정보 검색"
          />
          <S.OauthWrapper>
            <S.LoginLink href="/login">로그인</S.LoginLink>
            <S.SignupLink href="/signup">회원가입</S.SignupLink>
          </S.OauthWrapper>
        </S.RightContainer>
      </S.Container>
      <Navigation />
    </S.Header>
  );
}
