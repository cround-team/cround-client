"use client";

import * as S from "./styled";

type DimProps = {
  children: React.ReactNode;
};

export default function Dim({ children }: DimProps) {
  return <S.Dim>{children}</S.Dim>;
}
