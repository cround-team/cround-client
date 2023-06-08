"use client";

import { useShortRegisterContext } from "@/context/ShortRegisterContext";
import * as S from "./styled";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import useShortRegister from "@/hooks/form/useShortRegister";
import { useEffect } from "react";
import { PATH } from "@/constants";
import { useRouter } from "next/navigation";
import Label from "@/components/common/label/Label";
import ImageUploadBox from "@/components/domain/shorts/register/ImageUploadBox/ImageUploadBox";
import Button from "@/components/common/button/base/Button";
import { useUploadImage } from "@/hooks/useUploadImage";

export default function ShortRegisterUploadPage() {
  const { formData } = useShortRegisterContext();
  const { inputValues, isUploadDisabled, handleChangeForm, handleSubmitVideo } =
    useShortRegister();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!formData.desc || !formData.title) {
  //       router.push(PATH.SHORTS.REGISTER.BASE);
  //     }
  //   }, []);

  useEffect(() => {
    console.log(formData);
  });

  const handlePrevStep = () => {
    router.back();
  };

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  return (
    <S.Form>
      <S.Thumbnail>
        <Label label="숏클래스의 썸네일을 등록해 주세요." />
        <ImageUploadBox
          fileRef={fileInputRef}
          onFileChange={handleFileChange}
        />
      </S.Thumbnail>
      <RegisterInput
        label="숏클래스의 url을 등록해 주세요."
        size="md"
        id="url"
        name="url"
        css={S.MarginBottom}
        placeholder="url을 등록해 주세요"
        onChange={handleChangeForm}
      />
      <S.ButtonWrapper>
        <Button
          type="button"
          label="이전"
          size="56"
          variant="ghost"
          css={S.PrevButton}
          onClick={handlePrevStep}
        />
        <Button
          label="다음"
          size="56"
          variant="primary"
          css={S.NextButton}
          isDisabled={isUploadDisabled}
        />
      </S.ButtonWrapper>
    </S.Form>
  );
}
