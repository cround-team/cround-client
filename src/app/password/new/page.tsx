"use client";

import { useImmer } from "use-immer";

import Input from "@/components/common/input/base/Input";
import * as S from "./styled";
import Button from "@/components/common/button/base/Button";
import type { StringMap } from "@/types/common";
import { useState } from "react";

const INPUTS = [
  {
    label: "비밀번호",
    id: "psw",
    util: "eyeOff",
    isMessage: false,
    placeholder: "비밀번호",
  },
  {
    label: "비밀번호 확인",
    id: "psw2",
    util: "eyeOff",
    isMessage: true,
    placeholder: "비밀번호를 확인해 주세요",
  },
];

export default function PasswordNewPage() {
  const [user, setUser] = useImmer<StringMap>({
    psw: "",
    psw2: "",
  });
  const [inputMessage, setInputMessage] = useState("");
  const [invalid, setInvalid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "psw" || name === "psw2") {
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
          {INPUTS.map((input, idx) => (
            <Input
              key={input.id}
              type="password"
              styles="oauth"
              inputMessage={input.isMessage ? inputMessage : ""}
              isVisibleLabel={user[input.id].length > 0 ? true : false}
              isInvalid={invalid}
              autoFocus={idx === 0}
              label={input.label}
              id={input.id}
              name={input.id}
              placeholder={input.placeholder}
              util={input.util}
              onChange={handleInputChange}
            />
          ))}
        </S.InputContainer>
        <Button label="비밀번호 변경" size="56" variant="primary" />
      </S.Form>
    </S.Container>
  );
}
