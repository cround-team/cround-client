"use client";

import DefaultSignup from "@/components/domain/signup/default/DefaultSignup";
import SelectLink from "@/components/domain/signup/selectLink/SelectLink";
import * as S from "./styled";

export default function SignupPage() {
  return (
    <S.Section>
      <SelectLink currentLink="signup" />
      <DefaultSignup />
    </S.Section>
  );
}
