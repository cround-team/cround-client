import { useEffect, useRef } from "react";

import { Messages } from "../hooks/useAskedDetail";
import AskedForm from "./form/AskedForm";
import MessageList from "./list/MessageList";
import * as S from "./styled";

type MessageContainerProps = {
  messages: Messages;
  memberId: number;
  sender: number;
  receiver: number;
  nickname: string;
};

export default function MessageContainer({
  messages,
  memberId,
  sender,
  receiver,
  nickname,
}: MessageContainerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wrapperRef.current;
    if (container) {
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
        <AskedForm memberId={memberId} />
      </S.Wrapper>
    </S.Container>
  );
}
