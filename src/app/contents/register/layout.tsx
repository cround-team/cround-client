"use client";

import { PropsWithChildren } from "react";

import { ContentRegisterProvider } from "@/context/ContentRegisterContext";
import * as S from "./styled";

export default function ContentRegisterLayout({ children }: PropsWithChildren) {
  return (
    <ContentRegisterProvider>
      <S.Section>{children}</S.Section>
    </ContentRegisterProvider>
  );
}
