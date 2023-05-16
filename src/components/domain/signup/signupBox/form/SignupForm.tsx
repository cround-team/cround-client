"use client";

import { useState } from "react";

import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import ModalStep from "../../modal/ModalStep";
import * as S from "./styled";

const INPUTS = [
  {
    label: "이름",
    id: "name",
  },
  {
    label: "이메일",
    id: "email",
  },
  {
    label: "비밀번호",
    id: "password",
    util: "eyeOff",
  },
  {
    label: "비밀번호 확인",
    id: "psw2",
    placeholder: "비밀번호를 확인해 주세요.",
    util: "eyeOff",
  },
];

export default function SignupForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("우선 성공 로직");
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          {INPUTS.map((input, idx) => (
            <Input
              key={input.id}
              autoFocus={idx === 0}
              label={input.label}
              id={input.id}
              name={input.id}
              placeholder={input.placeholder ?? input.label}
              util={input.util}
              onChange={handleInputChange}
            />
          ))}
          <S.PswGuide>영문자, 숫자, 특수문자 포함 최소 8~20자</S.PswGuide>
        </S.InputContainer>
        <Button
          label="가입하기"
          size="56"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
      {isModalOpen && <ModalStep />}
    </>
  );
}
