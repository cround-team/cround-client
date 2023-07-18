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
  profileImage?: string;
};

export default function MessageList({
  date,
  data,
  sender,
  receiver,
  profileImage,
}: MessageListProps) {
  return (
    <S.Container>
      <S.Date>{date}</S.Date>
      {data.map((message: Message) => (
        <Message
          key={message.updatedDate}
          type={receiver === message.receiver ? "mentee" : "creator"}
          text={message.text}
          time={"07:11"}
          profileImage={profileImage}
        />
      ))}
    </S.Container>
  );
}
