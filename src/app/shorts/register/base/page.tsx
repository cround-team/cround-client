"use client";

import RegisterInput from "@/components/common/input/register/RegisterInput";
import TextArea from "@/components/common/textarea/TextArea";
import Button from "@/components/common/button/base/Button";
import useShortRegister from "@/hooks/form/useShortRegister";
import * as S from "./styled";
import { useShortRegisterContext } from "@/context/ShortRegisterContext";

export default function ShortRegisterBasePage() {
  const { inputValues, isBaseDisabled, handleChangeForm, handleSubmitBase } =
    useShortRegister();

  const { formData } = useShortRegisterContext();

  return (
    <S.Form onSubmit={handleSubmitBase}>
      <S.InputWrapper>
        <RegisterInput
          label="숏클래스의 제목을 입력해 주세요."
          autoFocus={true}
          id="title"
          name="title"
          size="sm"
          placeholder="제목을 입력해 주세요"
          validMessage={""}
          errorMessage={""}
          onChange={handleChangeForm}
        />
        <TextArea
          id="desc"
          name="desc"
          value={inputValues.desc}
          placeholder="내용을 입력해 주세요"
          label="숏클래스에 관한 내용을 입력해 주세요."
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
