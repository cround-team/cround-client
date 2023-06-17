import { Roboto } from "next/font/google";
import Image from "next/image";

import googleLogo from "public/images/social/google.png";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    console.log("handleGoogleLogin");
  };

  return (
    <S.Button onClick={handleGoogleLogin}>
      <S.Figure>
        <Image
          src={googleLogo}
          fill
          alt="Google Login Button"
          sizes={media.images.sizes}
        />
      </S.Figure>
      <span className={roboto.className}>구글로 로그인</span>
    </S.Button>
  );
}
