"use client";

import { PropsWithChildren } from "react";
import { ShortRegisterProvider } from "@/context/ShortRegisterContext";

import * as S from "./styled";

export default function ShortRegisterLayout({ children }: PropsWithChildren) {
  return (
    <ShortRegisterProvider>
      <S.Section>{children}</S.Section>
    </ShortRegisterProvider>
  );
}
