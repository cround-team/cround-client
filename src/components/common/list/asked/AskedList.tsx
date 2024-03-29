import * as S from "./styled";

type AskedListProps = {
  nickname: string;
  readStatus: string;
  text: string;
  updatedDate: string;
};

export default function AskedList({
  readStatus,
  nickname,
  text,
  updatedDate,
}: AskedListProps) {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Nickname>{nickname}</S.Nickname>
        <S.Text>{text}</S.Text>
        <S.Time>{updatedDate}</S.Time>
      </S.TextWrapper>
    </S.Container>
  );
}
