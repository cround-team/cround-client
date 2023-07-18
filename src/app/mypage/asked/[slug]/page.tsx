"use client";

import MessageContainer from "@/components/domain/mypage/asked/container/MessageContainer";
import * as S from "./styled";
import useAskedDetail from "@/components/domain/mypage/asked/hooks/useAskedDetail";

type ContentDetailPageProps = {
  params: {
    slug: number;
  };
};

export default function MyAskedDetailPage({ params }: ContentDetailPageProps) {
  const {
    messages,
    sender,
    receiver,
    creatorNickname,
    platformHeadType,
    platformHeadTheme,
    profileImage,
  } = useAskedDetail();
  return (
    <S.Section>
      <MessageContainer
        creatorNickname={creatorNickname}
        platformHeadType={platformHeadType}
        platformHeadTheme={platformHeadTheme}
        messages={messages}
        profileImage={profileImage}
        sender={sender}
        receiver={receiver}
      />
    </S.Section>
  );
}
