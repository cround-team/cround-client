"use client";

import SelectLink from "@/components/domain/signup/selectLink/SelectLink";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import SignupForm from "@/components/domain/signup/form/SignupForm";
import SignupTerms from "@/components/domain/signup/terms/SignupTerms";
import * as S from "./styled";

export default function SignupPage() {
  return (
    <S.Section>
      <SelectLink currentLink="signup" />
      <SignupForm />
      <SignupTerms />
      <SocialSimpleBox label="간편 회원가입" />
    </S.Section>
  );
}
