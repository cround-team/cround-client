"use client";

import CreatorRegisterPlatform from "@/components/domain/creators/register/platform/CreatorRegisterPlatform";
import CreatorRegisterBase from "@/components/domain/creators/register/base/CreatorRegisterBase";
import CreatorRegisterAddition from "@/components/domain/creators/register/addition/CreatorRegisterAddition";
import CreatorRegisterSuccess from "@/components/domain/creators/register/success/CreatorRegisterSuccess";
import useCreatorRegister from "@/components/domain/creators/hooks/useCreatorRegister";
import * as S from "./styled";

export default function CreatorRegisterPage() {
  const {
    step,
    getBaseStepProps,
    getPlatformStepProps,
    getAdditionStepProps,
    getSuccessStepProps,
  } = useCreatorRegister();

  return (
    <S.Section>
      {step === "base" && <CreatorRegisterBase {...getBaseStepProps()} />}
      {step === "platform" && (
        <CreatorRegisterPlatform {...getPlatformStepProps()} />
      )}
      {step === "addition" && (
        <CreatorRegisterAddition {...getAdditionStepProps()} />
      )}
      {step === "success" && (
        <CreatorRegisterSuccess {...getSuccessStepProps()} />
      )}
    </S.Section>
  );
}
