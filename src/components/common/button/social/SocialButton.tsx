"use client";

import { usePathname } from "next/navigation";

import { GoogleMoIcon, KakaoMoIcon } from "@/assets/icons";
import { PATH } from "@/constants";
import * as S from "./styled";

export type SocialLabels = "카카오" | "구글";

type SocialButtonProps = {
  label: SocialLabels;
};

export default function SocialButton({ label }: SocialButtonProps) {
  const pathname = usePathname();

  return (
    <S.Container>
      {label === "카카오" && (
        <S.KakaoButton>
          <KakaoMoIcon />
          {pathname === PATH.LOGIN && <span>카카오로 로그인하기</span>}
          {pathname === PATH.SIGNUP && <span>카카오로 회원가입하기</span>}
        </S.KakaoButton>
      )}
      {label === "구글" && (
        <S.GoogleButton>
          <GoogleMoIcon />
          {pathname === PATH.LOGIN && <span>구글로 로그인하기</span>}
          {pathname === PATH.SIGNUP && <span>구글로 회원가입하기</span>}
        </S.GoogleButton>
      )}
      <S.Span>{label}</S.Span>
    </S.Container>
  );
}
