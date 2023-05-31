"use client";

import Link from "next/link";

import { ChevronRightIcon } from "@/assets/icons/arrow";
import { PATH } from "@/constants";
import * as S from "./styled";

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
