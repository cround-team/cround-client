"use client";

import {
  // GoogleIcon,
  GoogleMoIcon,
  // KakaoIcon,
  KakaoMoIcon,
} from "@/assets/icons";
import * as S from "./styled";

export type SocialLabels = "카카오" | "구글";

type SocialButtonProps = {
  label: SocialLabels;
};

export default function SocialButton({ label }: SocialButtonProps) {
  return (
    <S.Container>
      {label === "카카오" && (
        <S.KakaoButton>
          <KakaoMoIcon />
          <span>카카오로 회원가입하기</span>
        </S.KakaoButton>
      )}
      {label === "구글" && (
        <S.GoogleButton>
          <GoogleMoIcon />
          <span>구글로 회원가입하기</span>
        </S.GoogleButton>
      )}
      <S.Span>{label}</S.Span>
    </S.Container>
  );
}
