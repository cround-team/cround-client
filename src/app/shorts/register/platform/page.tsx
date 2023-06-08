"use client";

import Label from "@/components/common/label/Label";
import * as S from "./styled";
import PlatformForm from "@/components/common/form/platform/PlatformForm";
import usePlatform from "@/hooks/form/usePlatform";
import useShortRegister from "@/hooks/form/useShortRegister";
import { useShortRegisterContext } from "@/context/ShortRegisterContext";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";
import { useEffect } from "react";

export default function ShortRegisterPlatformPage() {
  const { handleSubmitPlatform } = useShortRegister();
  const { formData } = useShortRegisterContext();
  const router = useRouter();

  useEffect(() => {
    if (!formData.desc || !formData.title) {
      router.push(PATH.SHORTS.REGISTER.BASE);
    }
  }, []);

  return (
    <S.Container>
      <Label label="등록하실 숏클래스에 해당하는 플랫폼을 선택해 주세요." />
      <PlatformForm onSubmit={handleSubmitPlatform} />
    </S.Container>
  );
}
