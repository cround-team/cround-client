"use client";

import { useState } from "react";

import {
  GoogleLoginButton,
  KakaoLoginButton,
  SelectTabs,
} from "@/components/common";
import { LoginBox, SignupBox } from "@/components/domain";
import * as S from "./styled";

const TABS = ["로그인", "회원가입"];

export default function AuthPage() {
  const [selected, setSelected] = useState<string>(TABS[0]);
  const handleTabClick = (selected: string) => setSelected(selected);
  return (
    <S.Section>
      <SelectTabs
        css={S.MarginBottom}
        tabs={TABS}
        selected={selected}
        onTabClick={handleTabClick}
      />
      {selected === "로그인" && <LoginBox />}
      {selected === "회원가입" && <SignupBox />}
      <S.Social>
        <KakaoLoginButton />
        <GoogleLoginButton />
      </S.Social>
    </S.Section>
  );
}
