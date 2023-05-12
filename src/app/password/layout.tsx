"use client";

import { PropsWithChildren } from "react";

import * as S from "./styled";

export default function FindPasswordLayout({ children }: PropsWithChildren) {
  return (
    <S.Section>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Section>
  );
}
