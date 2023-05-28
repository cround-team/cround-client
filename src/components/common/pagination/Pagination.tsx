"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons/arrow";
import * as S from "./styled";

const TEST_NUM = [1, 2, 3, 4, 5];

export default function Pagination() {
  return (
    <S.Container>
      <S.ChevronButton aria-disabled="true">
        <ChevronLeftIcon />
      </S.ChevronButton>
      <S.PageNumWrapper>
        {TEST_NUM.map((num) => (
          <S.PageNumButton key={num}>{num}</S.PageNumButton>
        ))}
      </S.PageNumWrapper>
      <S.ChevronButton aria-disabled="false">
        <ChevronRightIcon />
      </S.ChevronButton>
    </S.Container>
  );
}
