import Image from "next/image";

import kakaoLogo from "public/images/social/kakao.png";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

export default function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI}&response_type=code`;
  };
  return (
    <S.Button onClick={handleKakaoLogin}>
      <S.Figure>
        <Image
          src={kakaoLogo}
          fill
          alt="Kakao Login Button"
          sizes={media.images.sizes}
        />
      </S.Figure>
      <span>카카오로 로그인</span>
    </S.Button>
  );
}
