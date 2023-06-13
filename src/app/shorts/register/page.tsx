"use client";

import ShortRegisterBase from "@/components/domain/shorts/register/base/ShortRegisterBase";
import ShortRegisterPlatform from "@/components/domain/shorts/register/platform/ShortRegisterPlatform";
import ShortRegisterSuccess from "@/components/domain/shorts/register/success/ShortRegisterSuccess";
import ShortRegisterUpload from "@/components/domain/shorts/register/upload/ShortRegisterUpload";
import useShortRegister from "@/hooks/form/useShortRegister";
import * as S from "./styled";

export default function ShortRegisterPage() {
  const {
    step,
    getBaseStepProps,
    getPlatformStepProps,
    getUploadStepProps,
    getSuccessStepProps,
  } = useShortRegister();

  return (
    <S.Section>
      {step === "base" && <ShortRegisterBase {...getBaseStepProps()} />}
      {step === "platform" && (
        <ShortRegisterPlatform {...getPlatformStepProps()} />
      )}
      {step === "upload" && <ShortRegisterUpload {...getUploadStepProps()} />}
      {step === "success" && (
        <ShortRegisterSuccess {...getSuccessStepProps()} />
      )}
    </S.Section>
  );
}
