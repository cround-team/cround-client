"use client";

import SelectLink from "@/components/domain/oauth/selectLink/SelectLink";
import SocialSimpleBox from "@/components/common/social/SocialSimpleBox";
import SignupForm from "@/components/domain/signup/signupBox/form/SignupForm";
import SignupTerms from "@/components/domain/signup/signupBox/terms/SignupTerms";
import * as S from "./styled";

export default function SignupPage() {
  return (
    <S.Section>
      <SelectLink />
      <SignupForm />
      <SignupTerms />
      <SocialSimpleBox />
    </S.Section>
  );
}
