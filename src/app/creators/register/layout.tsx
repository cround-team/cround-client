"use client";

import { PropsWithChildren } from "react";
import * as S from "./styled";

export default function RegisterLayout({ children }: PropsWithChildren) {
  return <S.Section>{children}</S.Section>;
}
