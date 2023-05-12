"use client";

import { EyeOffIcon } from "@/assets/icons";
import * as S from "./styled";
import { useImmer } from "use-immer";

export default function LoginForm() {
  const [user, setUser] = useImmer({
    email: "",
    psw: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <div>
            <label>이메일</label>
            <input
              name="email"
              placeholder="이메일"
              autoFocus
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              name="psw"
              placeholder="비밀번호"
              onChange={handleInputChange}
            />
            <button type="button">
              <EyeOffIcon />
            </button>
          </div>
        </S.InputContainer>
        <S.SubmitButton onClick={handleSubmit}>로그인</S.SubmitButton>
      </S.Form>
    </>
  );
}
