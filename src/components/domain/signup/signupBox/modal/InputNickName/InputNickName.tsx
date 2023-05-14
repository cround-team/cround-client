"use client";

import { useState } from "react";

import { SignupStep } from "@/types/signup";
import * as S from "./styled";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";

type InputNickNameProps = {
  handleNextStep?: (cur: SignupStep, next: SignupStep) => void;
};

export default function InputNickName({ handleNextStep }: InputNickNameProps) {
  const [nickName, setNickName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Next => PickPlatForms");
    handleNextStep && handleNextStep("nickName", "platforms");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <>
      <S.Title>
        안녕하세요 000님!
        <br />
        크라운드에서 활동하실 닉네임을 정해주세요
      </S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input
          id="nickName"
          name="nickName"
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          autoFocus
          onChange={handleInputChange}
        />
        <Button
          label="다음"
          size="48"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
    </>
  );
}
