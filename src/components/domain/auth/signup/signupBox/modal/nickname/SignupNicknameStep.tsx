import type { SignupMessage, SignupValid } from "@/types/signup";
import { Button, Input } from "@/components/common";
import * as S from "./styled";

type SignupNicknameStepProps = {
  name: string;
  nickname: string;
  valid: SignupValid;
  message: SignupMessage;
  isDisabledSubmit: boolean;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SignupNicknameStep({
  name,
  nickname,
  valid,
  message,
  isDisabledSubmit,
  handleChangeInput,
  handleSubmit,
}: SignupNicknameStepProps) {
  return (
    <>
      <S.Title>
        안녕하세요 {name}님!
        <br />
        크라운드에서 활동하실 닉네임을 정해주세요
      </S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input
          autoFocus={true}
          isVisibleLabel={nickname.length > 0 ? true : false}
          isInvalid={valid.nickname}
          label="닉네임"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          inputMessage={message.nickname}
          onChange={handleChangeInput}
        />
        <Button
          isDisabled={isDisabledSubmit}
          label="다음"
          size="48"
          variant="primary"
        />
      </S.Form>
    </>
  );
}
