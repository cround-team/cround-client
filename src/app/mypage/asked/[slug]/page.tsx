"use client";

import MessageContainer from "@/components/domain/mypage/asked/container/MessageContainer";
import useAskedDetail from "@/components/domain/mypage/asked/hooks/useAskedDetail";
import * as S from "./styled";

type ContentDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function MyAskedDetailPage({ params }: ContentDetailPageProps) {
  const { messages, sender, receiver, nickname } = useAskedDetail(params.slug);

  return (
    <S.Section>
      <MessageContainer
        messages={messages}
        memberId={params.slug}
        sender={sender}
        receiver={receiver}
        nickname={nickname}
      />
    </S.Section>
  );
}
