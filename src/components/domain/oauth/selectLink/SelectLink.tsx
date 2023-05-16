"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PATH } from "@/constants";
import * as S from "./styled";

export default function SelectLink() {
  const pathname = usePathname();

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
