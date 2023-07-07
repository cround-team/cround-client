"use client";

import { useImmer } from "use-immer";
import { useState } from "react";

import { Button, PasswordInput } from "@/components/common";
import * as S from "./styled";
import { VALID_MSG } from "@/constants";

export default function PasswordNewPage() {
  const [user, setUser] = useImmer({
    password: "",
    confirmPassword: "",
  });
  const [inputMessage, setInputMessage] = useState("");
  const [invalid, setInvalid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" || name === "confirmPassword") {
      setUser((draft) => {
        draft[name] = value;
      });
    }
  };
  return (
    <S.Container>
      <S.Title>비밀번호를 변경해주세요.</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <PasswordInput
            isVisibleLabel={user.password.length > 0 ? true : false}
            isInvalid={invalid}
            autoFocus
            label="비밀번호"
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleInputChange}
          />
          <PasswordInput
            isVisibleLabel={user.confirmPassword.length > 0 ? true : false}
            isInvalid={invalid}
            label="비밀번호 확인"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="비밀번호를 확인해 주세요"
            onChange={handleInputChange}
            inputMessage={VALID_MSG.PSW_TIP}
          />
        </S.InputContainer>
        <Button label="비밀번호 변경" size="56" variant="primary" />
      </S.Form>
    </S.Container>
  );
}
