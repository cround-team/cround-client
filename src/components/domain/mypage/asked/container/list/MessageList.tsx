import Message from "./item/Message";
import * as S from "./styled";

interface Message {
  id: number;
  sender: number;
  receiver: number;
  text: string;
  updatedDate: string;
}

type MessageListProps = {
  date: string;
  data: any;
  source: number;
  target: number;
};

export default function MessageList({
  date,
  data,
  source,
  target,
}: MessageListProps) {
  return (
    <S.Container>
      <S.Date>{date}</S.Date>
      {data.map((message: Message) => (
        <Message
          key={message.updatedDate}
          text={message.text}
          time={"07:11"}
          sender={message.sender}
          receiver={message.receiver}
          source={source}
          target={target}
        />
      ))}
    </S.Container>
  );
}
