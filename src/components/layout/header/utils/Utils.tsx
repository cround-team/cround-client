"use client";

import { BellIcon, HamburgerIcon } from "@/assets/icons";
import * as S from "./styled";

export default function Utils() {
  const handleBellClick = () => {};
  const handleMenuClick = () => {};
  return (
    <S.Container>
      <button onClick={() => handleBellClick()}>
        <BellIcon />
      </button>
      <button onClick={() => handleMenuClick()}>
        <HamburgerIcon />
      </button>
    </S.Container>
  );
}

{
  // 데스크탑.
  /* <SearchInput
    label="게시물 검색"
    placeholder="관심 있는 플랫폼 또는 정보 검색"
  />
  <S.Oauth>
    <S.LoginLink href="/login">로그인</S.LoginLink>
    <S.SignupLink href="/signup">회원가입</S.SignupLink>
  </S.Oauth> */
}
