"use client";

import { useContentRegisterContext } from "@/context/ContentRegisterContext";
import useContentRegister from "@/hooks/form/useContentRegister";
import RegisterInput from "@/components/common/input/register/RegisterInput";
import TextArea from "@/components/common/textarea/TextArea";
import Button from "@/components/common/button/base/Button";
import * as S from "./styled";

export default function ContentRegisterBasePage() {
  const {
    formData: { title, description },
    handleChangeForm,
  } = useContentRegisterContext();
  const { isBaseDisabled, handleSubmitBase } = useContentRegister();

  return (
    <S.Form onSubmit={handleSubmitBase}>
      <S.InputWrapper>
        <RegisterInput
          label="콘텐츠의 제목을 입력해 주세요."
          autoFocus={true}
          size="sm"
          id="title"
          name="title"
          value={title}
          placeholder="제목을 입력해 주세요"
          onChange={handleChangeForm}
        />
        <TextArea
          id="description"
          name="description"
          placeholder="내용을 입력해 주세요"
          label="콘텐츠에 관한 내용을 입력해 주세요."
          value={description}
          onChange={handleChangeForm}
        />
      </S.InputWrapper>
      <Button
        isDisabled={isBaseDisabled}
        label="다음"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
