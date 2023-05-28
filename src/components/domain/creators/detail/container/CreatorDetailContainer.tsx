"use client";

import Profile from "../profile/Profile";
import Introduce from "../introduce/Introduce";
import InformativeBubbles from "../InformativeBubbles/InformativeBubbles";
import Panel from "../panel/Panel";
import * as S from "./styled";

export default function CreatorDetailContainer() {
  return (
    <S.Section>
      {/* 프로필 컴포넌트 */}
      <Profile />
      {/* (자기소개 + 태그) 컴포넌트*/}
      <Introduce />
      {/* 탭 패널 컴포넌트 (숏클래스, 콘텐츠, 리뷰) */}
      <Panel />
      {/* 메세지 컴포넌트 */}
      <InformativeBubbles />
    </S.Section>
  );
}
