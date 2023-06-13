"use client";

import ContentRegisterBase from "@/components/domain/contents/register/base/ContentRegisterBase";
import ContentRegisterPlatform from "@/components/domain/contents/register/platform/ContentRegisterPlatform";
import ContentRegisterSuccess from "@/components/domain/contents/register/success/ContentRegisterSuccess";
import useContentRegister from "@/hooks/form/useContentRegister";
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
