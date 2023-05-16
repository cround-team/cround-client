"use client";
import { usePathname } from "next/navigation";

import { PATH } from "@/constants";
import SocialButton from "../button/social/SocialButton";
import * as S from "./styled";

export default function SocialSimpleBox() {
  const pathname = usePathname();
  return (
    <S.Container>
      {pathname === PATH.LOGIN && <S.Text>간편 로그인</S.Text>}
      {pathname === PATH.SIGNUP && <S.Text>간편 회원가입</S.Text>}
      <S.ButtonWrapper>
        <SocialButton label="카카오" />
        <SocialButton label="구글" />
      </S.ButtonWrapper>
    </S.Container>
  );
}
