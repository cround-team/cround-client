"use client";

import Link from "next/link";

import useCurrentPath from "@/hooks/useCurrentPath";
import { PATH } from "@/constants";
import * as S from "./styled";

export default function SelectLink() {
  const pathname = useCurrentPath();

  return (
    <S.ListContainer>
      <S.List isActive={pathname === PATH.LOGIN}>
        <Link href={PATH.LOGIN}>로그인</Link>
      </S.List>
      <S.List isActive={pathname === PATH.SIGNUP}>
        <Link href={PATH.SIGNUP}>회원가입</Link>
      </S.List>
    </S.ListContainer>
  );
}
