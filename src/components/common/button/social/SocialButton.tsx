import { GoogleIcon, KakaoIcon } from "@/assets/icons";
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
          <KakaoIcon />
        </S.KakaoButton>
      )}
      {label === "구글" && (
        <S.GoogleButton>
          <GoogleIcon />
        </S.GoogleButton>
      )}
      <S.Span>{label}</S.Span>
    </S.Container>
  );
}
