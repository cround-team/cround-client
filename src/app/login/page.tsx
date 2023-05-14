"use client";

import SelectLink from "@/components/domain/signup/signupBox/selectLink/SelectLink";
import LoginForm from "@/components/domain/login/form/LoginForm";
import FindPsw from "@/components/domain/login/findPsw/FindPsw";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import * as S from "./styled";

export default function LoginPage() {
  return (
    <S.Section>
      <SelectLink currentLink="login" />
      <LoginForm />
      <FindPsw />
      <SocialSimpleBox label="간편 로그인" />
    </S.Section>
  );
}
