"use client";

import { PropsWithChildren } from "react";
import * as S from "./styled";
import { CreatorRegisterProvider } from "@/context/CreatorRegisterContext";

export default function RegisterLayout({ children }: PropsWithChildren) {
  return (
    <CreatorRegisterProvider>
      <S.Section>{children}</S.Section>
    </CreatorRegisterProvider>
  );
}
