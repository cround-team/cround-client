import { useEffect, useRef } from "react";

import { Messages } from "../hooks/useAskedDetail";
import AskedForm from "./form/AskedForm";
import MessageList from "./list/MessageList";
import * as S from "./styled";
import { usePathname } from "next/navigation";
import { PATH } from "@/constants";

type MessageContainerProps = {
  messages: Messages;
  memberId: number;
  sender: number;
  receiver: number;
  nickname: string;
  onFetchData: () => void;
};

export default function MessageContainer({
  messages,
  memberId,
  sender,
  receiver,
  nickname,
  onFetchData,
}: MessageContainerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const container = wrapperRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <S.Container>
      <S.Wrapper
        ref={wrapperRef}
        isScroll={!pathname.includes(PATH.MYPAGE.ASKED)}
      >
        {Object.keys(messages).map((date) => (
          <MessageList
            key={date}
            date={date}
            data={messages[date]}
            sender={sender}
            receiver={receiver}
          />
        ))}
        <AskedForm
          css={pathname.includes(PATH.MYPAGE.ASKED) ? S.LargeSize : S.SmallSize}
          memberId={memberId}
          onFetchData={onFetchData}
        />
      </S.Wrapper>
    </S.Container>
  );
}
