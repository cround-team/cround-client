"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import kakaoLogo from "public/images/social/kakao.png";
import googleLogo from "public/images/social/google.png";
import { PATH } from "@/constants";
import * as S from "./styled";
import { media } from "@/styles/themes/foundations";
import { Roboto } from "next/font/google";
import {
  KAKAO_AUTH_URL,
  KAKAO_CLIENT_ID,
  KAKAO_TEST_URL,
  OAUTH_REDIRECT_URI,
} from "@/service/kakaoOauth";
import { kakaoSocialApi } from "@/utils/api/auth";
import Link from "next/link";

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

  const handleOauthKakao = () => {
    const getResponse = async () => {
      try {
        const params = {
          client_id: KAKAO_CLIENT_ID,
          redirect_uri: OAUTH_REDIRECT_URI,
          response_type: "code",
          scope: "account_email,profile_nickname",
        };
        const response = await kakaoSocialApi(params);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  if (label === "카카오") {
    return (
      <>
        <Link href={KAKAO_TEST_URL}>테스트</Link>
        <S.KakaoButton onClick={() => handleOauthKakao()}>
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
      </>
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
