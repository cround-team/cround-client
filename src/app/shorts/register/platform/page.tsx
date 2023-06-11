"use client";

import useShortRegister from "@/hooks/form/useShortRegister";

import Label from "@/components/common/label/Label";
import PlatformForm from "@/components/common/form/platform/PlatformForm";
import * as S from "./styled";

export default function ShortRegisterPlatformPage() {
  const { handleSubmitPlatform } = useShortRegister();

  return (
    <S.Container>
      <Label label="등록하실 숏클래스에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm onSubmit={handleSubmitPlatform} />
    </S.Container>
  );
}
