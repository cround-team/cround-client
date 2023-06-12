"use client";

import Label from "@/components/common/label/Label";

import PlatformForm from "@/components/common/form/platform/PlatformForm";
import * as S from "./styled";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";

export default function CreatorRegisterPlatformPage() {
  const { handleSubmitPlatform } = useCreatorRegister();
  return (
    <S.Container>
      <Label label="활동 중이신 플랫폼을 1개 이상 선택해 주세요" />
      <PlatformForm onSubmit={handleSubmitPlatform} />
    </S.Container>
  );
}
