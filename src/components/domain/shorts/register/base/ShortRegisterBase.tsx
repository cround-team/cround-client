import React from "react";
import * as S from "./styled";
import { Button, RegisterInput, TextArea } from "@/components/common";

type ShortRegisterBaseProps = {
  isDisabledSubmit: boolean;
  title: string;
  description: string;
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ShortRegisterBase({
  isDisabledSubmit,
  title,
  description,
  handleChangeForm,
  handleSubmit,
}: ShortRegisterBaseProps) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <RegisterInput
          label="숏클래스의 제목을 입력해 주세요."
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
          label="숏클래스에 관한 내용을 입력해 주세요."
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
