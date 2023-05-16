"use client";

import Link from "next/link";

import { ChevronRightIcon } from "@/assets/icons";
import * as S from "./styled";
import { PATH } from "@/constants";

export default function FindPsw() {
  return (
    <S.Container>
      <Link href={PATH.PASSWORD.FIND}>
        비밀번호 찾기
        <ChevronRightIcon />
      </Link>
    </S.Container>
  );
}
