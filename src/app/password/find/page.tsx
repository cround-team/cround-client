"use client";

import { useRouter } from "next/navigation";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import * as S from "./styled";
import { PATH } from "@/constants";
import { useState } from "react";
import { emailValidCheck } from "@/utils/validation";

export default function PasswordFindPage() {
  const [email, setEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validCheck() && //유효한 이메일인지 확인 후 router.push()
    // router.push(PATH.PASSWORD.SEND);
  };

  const validCheck = () => {
    if (email === "") {
      setIsValid(false);
      setInputMessage("비어있는 항목을 입력해주세요");

      return false;
    } else if (!emailValidCheck(email)) {
      setIsValid(false);
      setInputMessage("이메일 형식이 올바르지 않습니다");

      return false;
    } else if (emailValidCheck(email)) {
      setIsValid(true);
      setInputMessage("");

      return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <h2>비밀번호 찾기</h2>
        <p>
          회원가입할 때 등록한 이메일을 입력하시면,
          <br />
          비밀번호 재설정 링크를 보내드립니다.
        </p>
      </S.TitleWrapper>
      <S.Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          isVisibleLabel={email.length > 0 ? true : false}
          isInvalid={isValid}
          inputMessage={inputMessage}
          label="이메일"
          id="email"
          name="email"
          placeholder="이메일 입력"
          onChange={handleInputChange}
        />
        <Button label="링크 전송" size="56" variant="primary" />
      </S.Form>
    </S.Container>
  );
}
