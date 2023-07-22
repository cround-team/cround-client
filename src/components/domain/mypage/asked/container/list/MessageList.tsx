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
  sender: number;
  receiver: number;
};

export default function MessageList({
  date,
  data,
  sender,
  receiver,
}: MessageListProps) {
  return (
    <S.Container>
      <S.Date>{date}</S.Date>
      {data.map((message: Message) => (
        <Message
          key={message.id}
          type={receiver === message.receiver ? "mentee" : "creator"}
          text={message.text}
          updatedDate={message.updatedDate}
        />
      ))}
    </S.Container>
  );
}
