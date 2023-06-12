"use client";

import { useCreatorRegisterContext } from "@/context/CreatorRegisterContext";
import Button from "@/components/common/button/base/Button";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import TextArea from "@/components/common/textarea/TextArea";
import Avatar from "@/components/common/avatar/Avatar";
import * as S from "./styled";
import useCreatorRegister from "@/hooks/form/useCreatorRegister";

export default function CreatorRegisterBasePage() {
  const {
    formData: { nickname, description },
    handleChangeForm,
  } = useCreatorRegisterContext();
  const {
    handleSubmitBase,
    isBaseDisabled,
    previewImage,
    fileInputRef,
    handleFileChange,
  } = useCreatorRegister();

  return (
    <S.Form onSubmit={handleSubmitBase}>
      <Avatar
        css={S.Avatar}
        previewImage={previewImage}
        fileRef={fileInputRef}
        alt="My profile image"
        onFileChange={handleFileChange}
      />
      <RegisterInput
        autoFocus={true}
        css={S.Nickname}
        label="크리에이터 닉네임"
        size="md"
        id="nickname"
        name="nickname"
        placeholder="닉네임을 입력해 주세요"
        validMessage="한글, 영어, 또는 숫자로 2글자 이상 6글자 이내"
        value={nickname}
        onChange={handleChangeForm}
      />
      <TextArea
        css={S.Description}
        label="크리에이터 소개글"
        id="description"
        name="description"
        placeholder="간단한 소개글을 입력해 주세요"
        value={description}
        onChange={handleChangeForm}
      />
      <Button
        isDisabled={isBaseDisabled}
        label="다음"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
