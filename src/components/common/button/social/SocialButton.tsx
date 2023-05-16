"use client";

import { GoogleMoIcon, KakaoMoIcon } from "@/assets/icons";
import * as S from "./styled";
import useCurrentPath from "@/hooks/useCurrentPath";
import { PATH } from "@/constants";

export type SocialLabels = "카카오" | "구글";

type SocialButtonProps = {
  label: SocialLabels;
};

export default function SocialButton({ label }: SocialButtonProps) {
  const currentPath = useCurrentPath();

  return (
    <S.Container>
      {label === "카카오" && (
        <S.KakaoButton>
          <KakaoMoIcon />
          {currentPath === PATH.LOGIN && <span>카카오로 로그인하기</span>}
          {currentPath === PATH.SIGNUP && <span>카카오로 회원가입하기</span>}
        </S.KakaoButton>
      )}
      {label === "구글" && (
        <S.GoogleButton>
          <GoogleMoIcon />
          {currentPath === PATH.LOGIN && <span>구글로 로그인하기</span>}
          {currentPath === PATH.SIGNUP && <span>구글로 회원가입하기</span>}
        </S.GoogleButton>
      )}
      <S.Span>{label}</S.Span>
    </S.Container>
  );
}
