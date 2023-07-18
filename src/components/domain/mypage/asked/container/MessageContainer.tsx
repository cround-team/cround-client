import { useEffect, useRef } from "react";
import { Messages } from "../hooks/useAskedDetail";
import AskedForm from "./form/AskedForm";
import MessageList from "./list/MessageList";
import * as S from "./styled";

type MessageContainerProps = {
  creatorNickname: string;
  platformHeadType: string;
  platformHeadTheme: string;
  profileImage: string;
  messages: Messages;
  sender: number;
  receiver: number;
};

export default function MessageContainer({
  creatorNickname,
  platformHeadType,
  platformHeadTheme,
  profileImage,
  messages,
  sender,
  receiver,
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
      <S.UserInfo>
        <S.Name>{creatorNickname}</S.Name>
        <S.PlatformThemeGroup>
          {platformHeadType} / {platformHeadTheme}
        </S.PlatformThemeGroup>
      </S.UserInfo>
      <S.Wrapper ref={wrapperRef}>
        {Object.keys(messages).map((date) => (
          <MessageList
            key={date}
            date={date}
            data={messages[date]}
            sender={sender}
            receiver={receiver}
            profileImage={profileImage}
          />
        ))}
        <AskedForm id={receiver} />
      </S.Wrapper>
    </S.Container>
  );
}
