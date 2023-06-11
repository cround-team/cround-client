"use client";

import useContentRegister from "@/hooks/form/useContentRegister";

import Label from "@/components/common/label/Label";
import PlatformForm from "@/components/common/form/platform/PlatformForm";
import * as S from "./styled";

export default function ContentRegisterPlatformPage() {
  const { handleSubmitApi } = useContentRegister();

  return (
    <S.Container>
      <Label label="등록하실 콘텐츠에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm onSubmit={handleSubmitApi} />
    </S.Container>
  );
}
