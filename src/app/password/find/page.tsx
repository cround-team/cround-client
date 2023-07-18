"use client";

import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";

import * as S from "./styled";
import useFindPassword from "@/components/domain/password/hooks/useFindPassword";

export default function PasswordFindPage() {
  const { email, inputMessage, isValid, handleSubmit, handleChange } =
    useFindPassword();

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
          onChange={handleChange}
        />
        <Button label="링크 전송" size="56" variant="primary" />
      </S.Form>
    </S.Container>
  );
}
