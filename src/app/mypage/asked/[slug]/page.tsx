"use client";

import MessageContainer from "@/components/domain/mypage/asked/container/MessageContainer";
import useAskedDetail from "@/components/domain/mypage/asked/hooks/useAskedDetail";
import * as S from "./styled";
import { RefreshIcon } from "@/assets/icons";
import { useAuthContext } from "@/context/AuthContext";

type ContentDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function MyAskedDetailPage({ params }: ContentDetailPageProps) {
  const { messages, sender, receiver, nickname, onFetchData } = useAskedDetail(
    params.slug
  );
  const { user } = useAuthContext();

  return (
    <S.Section>
      <S.MessageHeader
        headerColor={user.roleName === "creator" ? "black" : "red"}
      >
        <span>
          <strong>{nickname}</strong>님과 쪽지중
        </span>
      </S.MessageHeader>
      <MessageContainer
        messages={messages}
        memberId={params.slug}
        sender={sender}
        receiver={receiver}
        nickname={nickname}
        onFetchData={onFetchData}
      />
    </S.Section>
  );
}
