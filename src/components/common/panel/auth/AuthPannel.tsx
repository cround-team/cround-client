import { useState } from "react";

import { LoginBox, SignupBox } from "@/components/domain";
import SelectTabs from "@/components/common/tab/SelectTabs";
import * as S from "./styled";

const TABS = ["로그인", "회원가입"];

export default function AuthPannel() {
  const [selected, setSelected] = useState<string>(TABS[0]);
  const handleTabClick = (selected: string) => setSelected(selected);

  return (
    <S.Container>
      <SelectTabs
        css={S.MarginBottom}
        tabs={TABS}
        selected={selected}
        onTabClick={handleTabClick}
      />
      {selected === "로그인" && <LoginBox />}
      {selected === "회원가입" && <SignupBox />}
    </S.Container>
  );
}
