"use client";

import CreatorRegisterBase from "@/components/domain/creators/register/base/CreatorRegisterBase";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";
import * as S from "./styled";
import CreatorRegisterPlatform from "@/components/domain/creators/register/platform/CreatorRegisterPlatform";
import CreatorRegisterAddition from "@/components/domain/creators/register/addition/CreatorRegisterAddition";
import CreatorRegisterSuccess from "@/components/domain/creators/register/success/CreatorRegisterSuccess";

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
