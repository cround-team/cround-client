"use client";

import SocialButton from "../button/social/SocialButton";
import * as S from "./styled";

type SocialSimpleBoxProps = {
  label: string;
};
export default function SocialSimpleBox({ label }: SocialSimpleBoxProps) {
  return (
    <S.Container>
      <S.Text>{label}</S.Text>
      <S.ButtonWrapper>
        <SocialButton label="카카오" />
        <SocialButton label="구글" />
      </S.ButtonWrapper>
    </S.Container>
  );
}
