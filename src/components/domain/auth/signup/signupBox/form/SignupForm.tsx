import type { SignupForm, SignupMessage, SignupValid } from "@/types";
import { Input, PasswordInput, Button } from "@/components/common";
import * as S from "./styled";

type SignupFormProps = {
  form: SignupForm;
  valid: SignupValid;
  message: SignupMessage;
  isDisabledSubmit: boolean;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SignupForm({
  form,
  valid,
  message,
  isDisabledSubmit,
  handleChangeInput,
  handleSubmit,
}: SignupFormProps) {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputContainer>
        <Input
          isVisibleLabel={form.name.length > 0 ? true : false}
          isInvalid={valid.name}
          autoFocus
          label="이름"
          name="name"
          id="name"
          placeholder="이름"
          inputMessage={message.name}
          onChange={handleChangeInput}
        />
        <Input
          isVisibleLabel={form.email.length > 0 ? true : false}
          isInvalid={valid.email}
          label="이메일"
          name="email"
          id="email"
          placeholder="이메일"
          inputMessage={message.email}
          onChange={handleChangeInput}
        />
        <PasswordInput
          isVisibleLabel={form.password.length > 0 ? true : false}
          isInvalid={valid.password}
          label="비밀번호"
          id="password"
          name="password"
          placeholder="비밀번호"
          inputMessage={message.password}
          onChange={handleChangeInput}
        />
        <PasswordInput
          isVisibleLabel={form.confirmPassword.length > 0 ? true : false}
          isInvalid={valid.confirmPassword}
          label="비밀번호 확인"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="비밀번호를 확인해주세요"
          inputMessage={message.confirmPassword}
          onChange={handleChangeInput}
        />
      </S.InputContainer>
      <Button
        isDisabled={isDisabledSubmit}
        label="가입하기"
        size="56"
        variant="primary"
      />
    </S.Form>
  );
}
