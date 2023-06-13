import { Button, RegisterInput, TextArea } from "@/components/common";
import React from "react";

import * as S from "./styled";

type ContentRegisterBaseType = {
  isDisabledSubmit: boolean;
  title: string;
  description: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function ContentRegisterBase({
  isDisabledSubmit,
  title,
  description,
  handleSubmit,
  handleChangeForm,
}: ContentRegisterBaseType) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <RegisterInput
          label="콘텐츠의 제목을 입력해 주세요."
          autoFocus
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
        isDisabled={isDisabledSubmit}
        label="다음"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
