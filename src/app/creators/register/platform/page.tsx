"use client";

import Label from "@/components/common/label/Label";

import PlatformForm from "@/components/common/form/platform/PlatformForm";
import * as S from "./styled";

export default function CreatorRegisterPlatformPage() {
  return (
    <S.Container>
      <Label as="h3" label="활동 중이신 플랫폼을 1개 이상 선택해 주세요" />
      <PlatformForm />
    </S.Container>
  );
}
