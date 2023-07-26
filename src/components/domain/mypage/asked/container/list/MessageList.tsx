import { PATH } from "@/constants";
import Message from "./item/Message";
import * as S from "./styled";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <S.Container isMargin={pathname.includes(PATH.MYPAGE.ASKED)}>
      <S.Date>{date}</S.Date>
      {data.map((message: Message) => (
        <Message
          key={message.id}
          type={receiver === message.receiver ? "right" : "left"}
          text={message.text}
          updatedDate={message.updatedDate}
        />
      ))}
    </S.Container>
  );
}
