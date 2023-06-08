"use client";

import { PropsWithChildren } from "react";
import * as S from "./styled";
import { ShortRegisterProvider } from "@/context/ShortRegisterContext";

export default function ShortsRegisterLayout({ children }: PropsWithChildren) {
  return (
    <ShortRegisterProvider>
      <S.Section>{children}</S.Section>
    </ShortRegisterProvider>
  );
}
