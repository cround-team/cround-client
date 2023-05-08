"use client";

import { PropsWithChildren } from "react";

import * as S from "./styled";

export default function Dim({ children }: PropsWithChildren) {
  return <S.Dim>{children}</S.Dim>;
}
