"use client";

import {
  ContentRegisterBase,
  ContentRegisterPlatform,
  ContentRegisterSuccess,
  useContentRegister,
} from "@/components/domain";
import * as S from "./styled";

export default function ContentRegisterPage() {
  const { step, getBaseStepProps, getPlatformStepProps, getSuccessStepProps } =
    useContentRegister();

  return (
    <S.Section>
      {step === "base" && <ContentRegisterBase {...getBaseStepProps()} />}
      {step === "platform" && (
        <ContentRegisterPlatform {...getPlatformStepProps()} />
      )}
      {step === "success" && (
        <ContentRegisterSuccess {...getSuccessStepProps()} />
      )}
    </S.Section>
  );
}
