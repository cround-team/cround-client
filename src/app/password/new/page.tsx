"use client";

import { Button, PasswordInput } from "@/components/common";
import useNewPassword from "@/components/domain/password/hooks/useNewPassword";
import * as S from "./styled";

export default function PasswordNewPage() {
  const { user, inputMessage, invalid, handleChange, handleSubmit } =
    useNewPassword();
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
            onChange={handleChange}
          />
          <PasswordInput
            isVisibleLabel={user.confirmPassword.length > 0 ? true : false}
            isInvalid={invalid}
            label="비밀번호 확인"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="비밀번호를 확인해 주세요"
            onChange={handleChange}
            inputMessage={inputMessage}
          />
        </S.InputContainer>
        <Button label="비밀번호 변경" size="56" variant="primary" />
      </S.Form>
    </S.Container>
  );
}
