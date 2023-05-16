"use client";

import { useImmer } from "use-immer";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import * as S from "./styled";

const INPUTS = [
  {
    label: "이메일",
    id: "email",
  },
  {
    label: "비밀번호",
    id: "psw",
    util: "eyeOff",
  },
];

export default function LoginForm() {
  const [user, setUser] = useImmer({
    email: "",
    psw: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("로그인 성공!! (임시)");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email" || name === "psw") {
      setUser((draft) => {
        draft[name] = value;
      });
    }
  };

  return (
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
      <Button
        label="로그인"
        size="56"
        variant="primary"
        onClick={handleSubmit}
      />
    </S.Form>
  );
}
