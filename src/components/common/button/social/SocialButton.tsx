"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import kakaoLogo from "public/images/social/kakao.png";
import googleLogo from "public/images/social/google.png";
import { PATH } from "@/constants";
import * as S from "./styled";
import { media } from "@/styles/themes/foundations";
import { Roboto } from "next/font/google";

export type SocialLabels = "카카오" | "구글";

type SocialButtonProps = {
  label: SocialLabels;
};

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function SocialButton({ label }: SocialButtonProps) {
  const pathname = usePathname();

  if (label === "카카오") {
    return (
      <S.KakaoButton>
        <S.Figure>
          <Image
            src={kakaoLogo}
            fill
            alt="Kakao Login Button"
            sizes={media.images.sizes}
          />
        </S.Figure>
        {pathname === PATH.LOGIN && <span>카카오로 로그인</span>}
        {pathname === PATH.SIGNUP && <span>카카오로 회원가입</span>}
      </S.KakaoButton>
    );
  } else if (label === "구글") {
    return (
      <S.GoogleButton>
        <S.Figure>
          <Image
            src={googleLogo}
            fill
            alt="Google Login Button"
            sizes={media.images.sizes}
          />
        </S.Figure>
        {pathname === PATH.LOGIN && (
          <span className={roboto.className}>구글로 로그인</span>
        )}
        {pathname === PATH.SIGNUP && (
          <span className={roboto.className}>구글로 회원가입</span>
        )}
      </S.GoogleButton>
    );
  } else {
    return null;
  }
}
