"use client";

import { useImmer } from "use-immer";

import Input from "@/components/common/input/base/Input";
import * as S from "./styled";
import Button from "@/components/common/button/base/Button";

const INPUTS = [
  {
    label: "비밀번호",
    id: "psw",
    util: "eyeOff",
  },
  {
    label: "비밀번호를 확인해 주세요",
    id: "psw2",
    util: "eyeOff",
  },
];

export default function PasswordNewPage() {
  const [user, setUser] = useImmer({
    psw: "",
    psw2: "",
  });

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
    <>
      <S.Title>비밀번호를 변경해주세요.</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          {INPUTS.map((input, idx) => (
            <Input
              key={input.id}
              autoFocus={idx === 0}
              label={input.label}
              id={input.id}
              name={input.id}
              placeholder={input.label}
              util={input.util}
              onChange={handleInputChange}
            />
          ))}
        </S.InputContainer>
        <S.PswGuide>영문자, 숫자, 특수문자 포함 최소 8~20자</S.PswGuide>
        <Button
          label="비밀번호 변경"
          size="56"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
    </>
  );
}
