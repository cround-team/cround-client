import { useEffect, useRef } from "react";

import { Messages } from "../hooks/useAskedDetail";
import AskedForm from "./form/AskedForm";
import MessageList from "./list/MessageList";
import * as S from "./styled";

type MessageContainerProps = {
  messages: Messages;
  sender: number;
  receiver: number;
  nickname: string;
};

export default function MessageContainer({
  messages,
  sender,
  receiver,
  nickname,
}: MessageContainerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wrapperRef.current;
    if (container) {
      console.log(container.scrollHeight);
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <S.Container>
      <S.Wrapper ref={wrapperRef}>
        {Object.keys(messages).map((date) => (
          <MessageList
            key={date}
            date={date}
            data={messages[date]}
            sender={sender}
            receiver={receiver}
          />
        ))}
        <AskedForm id={receiver} />
      </S.Wrapper>
    </S.Container>
  );
}
