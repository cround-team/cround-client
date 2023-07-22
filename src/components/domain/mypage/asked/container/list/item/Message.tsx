import * as S from "./styled";

type MessageProps = {
  type: "mentee" | "creator";
  text: string;
  updatedDate: string;
};

export default function Message({ type, text, updatedDate }: MessageProps) {
  return (
    <>
      {type === "mentee" && (
        <S.MenteeContainer>
          <S.Time>{updatedDate}</S.Time>
          <S.MenteeText>{text}</S.MenteeText>
        </S.MenteeContainer>
      )}
    </>
  );
}
