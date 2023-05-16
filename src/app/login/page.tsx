"use client";

import SelectLink from "@/components/domain/oauth/selectLink/SelectLink";
import LoginForm from "@/components/domain/login/form/LoginForm";
import FindPsw from "@/components/domain/login/findPsw/FindPsw";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import * as S from "./styled";

export default function LoginPage() {
  return (
    <S.Section>
      <SelectLink />
      <LoginForm />
      <FindPsw />
      <SocialSimpleBox />
    </S.Section>
  );
}
