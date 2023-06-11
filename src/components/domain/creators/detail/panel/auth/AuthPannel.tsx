import { useRouter } from "next/navigation";
import * as S from "./styled";
import { useEffect, useState } from "react";
import SelectTabs from "@/components/common/tab/SelectTabs";
import LoginForm from "@/components/domain/auth/login/form/LoginForm";
import FindPsw from "@/components/domain/auth/login/findPsw/FindPsw";
import SignupForm from "@/components/domain/auth/signup/signupBox/form/SignupForm";
import SignupTerms from "@/components/domain/auth/signup/signupBox/terms/SignupTerms";

const TABS = ["로그인", "회원가입"];

export default function AuthPannel() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>(TABS[0]);
  const handleTabClick = (selected: string) => {
    setSelected(selected);
  };

  return (
    <S.Container>
      <SelectTabs
        css={S.MarginBottom}
        tabs={TABS}
        selected={selected}
        onTabClick={handleTabClick}
      />
      {selected === "로그인" && (
        <>
          <LoginForm />
          <FindPsw />
        </>
      )}
      {selected === "회원가입" && (
        <>
          <SignupForm />
          <SignupTerms />
        </>
      )}
    </S.Container>
  );
}
