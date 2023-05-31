import SocialButton from "../button/social/SocialButton";
import * as S from "./styled";

export default function SocialSimpleBox() {
  return (
    <S.Container>
      <S.ButtonWrapper>
        <SocialButton label="카카오" />
        <SocialButton label="구글" />
      </S.ButtonWrapper>
    </S.Container>
  );
}
