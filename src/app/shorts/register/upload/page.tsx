"use client";

import useShortRegister from "@/hooks/form/useShortRegister";
import { useShortRegisterContext } from "@/context/ShortRegisterContext";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import Label from "@/components/common/label/Label";
import ImageUploadBox from "@/components/domain/shorts/register/ImageUploadBox/ImageUploadBox";
import Button from "@/components/common/button/base/Button";
import * as S from "./styled";

export default function ShortRegisterUploadPage() {
  const {
    formData: { url },
    handleChangeForm,
  } = useShortRegisterContext();
  const {
    isUploadDisabled,
    fileInputRef,
    previewImage,
    handlePrevStep,
    handleFileChange,
    handleSubmitApi,
  } = useShortRegister();

  return (
    <S.Form onSubmit={handleSubmitApi}>
      <S.Thumbnail>
        <Label label="숏클래스의 썸네일을 등록해 주세요." />
        <ImageUploadBox
          fileRef={fileInputRef}
          previewImage={previewImage}
          onFileChange={handleFileChange}
        />
      </S.Thumbnail>
      <RegisterInput
        css={S.MarginBottom}
        label="숏클래스의 url을 등록해 주세요."
        size="md"
        id="url"
        name="url"
        placeholder="url을 등록해 주세요"
        value={url}
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
