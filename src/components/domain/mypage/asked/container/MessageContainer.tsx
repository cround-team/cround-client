import { Messages } from "../hooks/useAsked";
import AskedForm from "./form/AskedForm";
import MessageList from "./list/MessageList";
import * as S from "./styled";

type MessageContainerProps = {
  creatorNickname: string;
  platformHeadType: string;
  platformHeadTheme: string;
  messages: Messages;
  source: number;
  target: number;
};

export default function MessageContainer({
  creatorNickname,
  platformHeadType,
  platformHeadTheme,
  messages,
  source,
  target,
}: MessageContainerProps) {
  return (
    <S.Container>
      <S.UserInfo>
        <S.Name>{creatorNickname}</S.Name>
        <S.PlatformThemeGroup>
          {platformHeadType} / {platformHeadTheme}
        </S.PlatformThemeGroup>
      </S.UserInfo>
      <S.Wrapper>
        {Object.keys(messages).map((date) => (
          <MessageList
            key={date}
            date={date}
            data={messages[date]}
            source={source}
            target={target}
          />
        ))}
        <AskedForm />
      </S.Wrapper>
    </S.Container>
  );
}
