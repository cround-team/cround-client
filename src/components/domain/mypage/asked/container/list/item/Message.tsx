import { useAuthContext } from "@/context/AuthContext";
import * as S from "./styled";

type MessageProps = {
  type: "right" | "left";
  text: string;
  updatedDate: string;
};

export default function Message({ type, text, updatedDate }: MessageProps) {
  const { user } = useAuthContext();
  return (
    <>
      {type === "right" && (
        <S.RightContainer>
          <S.Time>{updatedDate}</S.Time>
          <S.RightText
            aria-current={user.roleName === "creator" ? "true" : "false"}
          >
            {text}
          </S.RightText>
        </S.RightContainer>
      )}
      {type === "left" && (
        <S.LeftContainer>
          <S.LeftText
            aria-current={user.roleName === "creator" ? "false" : "true"}
          >
            {text}
          </S.LeftText>
          <S.Time>{updatedDate}</S.Time>
        </S.LeftContainer>
      )}
    </>
  );
}
