"use client";

import {
  AuthPannel,
  GoogleLoginButton,
  KakaoLoginButton,
} from "@/components/common";
import * as S from "./styled";

export default function AuthPage() {
  return (
    <S.Section>
      <AuthPannel />
      <S.Social>
        <KakaoLoginButton />
        <GoogleLoginButton />
      </S.Social>
    </S.Section>
  );
}
