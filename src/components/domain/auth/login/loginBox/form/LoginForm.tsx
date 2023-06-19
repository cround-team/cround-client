import useLoginForm from "@/components/domain/auth/login/loginBox/hooks/useLoginForm";
import { Input, PasswordInput, Button } from "@/components/common";
import * as S from "./styled";

export default function LoginForm() {
  const {
    form,
    valid,
    isDisableSubmit,
    message,
    handleChangeInput,
    handleSubmit,
  } = useLoginForm();

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        <Input
          isVisibleLabel={form.email.length > 0 ? true : false}
          isInvalid={valid.email}
          autoFocus
          label="이메일"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={handleChangeInput}
        />
        <PasswordInput
          isVisibleLabel={form.password.length > 0 ? true : false}
          isInvalid={valid.password}
          label="비밀번호"
          id="password"
          name="password"
          placeholder="비밀번호"
          inputMessage={message}
          onChange={handleChangeInput}
        />
      </S.InputContainer>
      <Button
        isDisabled={isDisableSubmit}
        label="로그인"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
