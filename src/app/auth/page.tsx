"use client";

import React from "react";

import * as S from "./styled";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import AuthPannel from "@/components/domain/creators/detail/panel/auth/AuthPannel";

export default function AuthPage() {
  return (
    <S.Section>
      <AuthPannel />
      <SocialSimpleBox />
    </S.Section>
  );
}
