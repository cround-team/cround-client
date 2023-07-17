import * as S from "./styled";

type MessageProps = {
  text: string;
  time: string;
  sender: number;
  receiver: number;
  source: number;
  target: number;
};

export default function Message({
  text,
  time,
  sender,
  receiver,
  source,
  target,
}: MessageProps) {
  return (
    <S.Container>
      <S.Time>{time}</S.Time>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
