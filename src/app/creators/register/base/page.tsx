"use client";

import Button from "@/components/common/button/base/Button";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import TextArea from "@/components/common/textarea/TextArea";
import Avatar from "@/components/common/avatar/Avatar";
import { useUploadImage } from "@/hooks/useUploadImage";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";
import * as S from "./styled";

export default function CreatorRegisterBasePage() {
  const { selectedImage, previewImage, fileInputRef, handleImageUpload } =
    useUploadImage();

  const {
    inputValues,
    errorMessage,
    isDisabled,
    validMessage,

    handleChangeForm,
    handleSubmit,
  } = useCreatorRegister();

  return (
    <S.Form onSubmit={handleSubmit}>
      <Avatar
        css={S.Avatar}
        src={previewImage}
        alt="My profile image"
        fileRef={fileInputRef}
        onFileChange={handleImageUpload}
      />
      <RegisterInput
        label="크리에이터 닉네임"
        autoFocus={true}
        css={S.Nickname}
        id="nickname"
        name="nickname"
        placeholder="닉네임을 입력해 주세요"
        validMessage={validMessage}
        errorMessage={errorMessage}
        onChange={handleChangeForm}
      />
      <TextArea
        css={S.Description}
        id="desc"
        name="desc"
        value={inputValues.desc}
        placeholder="간단한 소개글을 입력해 주세요"
        label="크리에이터 소개글"
        onChange={handleChangeForm}
      />
      <Button
        isDisabled={isDisabled}
        label="다음"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
