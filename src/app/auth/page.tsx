"use client";

import { useState } from "react";

import { KakaoLoginButton, SelectTabs } from "@/components/common";
import { LoginBox, SignupBox } from "@/components/domain";
import * as S from "./styled";

const TABS = ["로그인", "회원가입"];

export default function AuthPage() {
  const [selected, setSelected] = useState<string>(TABS[0]);
  const handleClickTab = (selected: string) => setSelected(selected);

  return (
    <S.Section>
      <SelectTabs
        css={S.MarginBottom}
        tabs={TABS}
        selected={selected}
        onClickTab={handleClickTab}
      />
      {selected === "로그인" && <LoginBox />}
      {selected === "회원가입" && <SignupBox />}
      <S.Social>
        <KakaoLoginButton />
      </S.Social>
    </S.Section>
  );
}
