import { useState } from "react";

import { SignupStep } from "@/types/signup";
import * as S from "./styled";
import Input from "@/components/common/input/base/Input";
import Button from "@/components/common/button/base/Button";
import { nicknameCheck } from "@/utils/validation";
import { nicknameDupCheckApi } from "@/utils/api/auth";

type NickNameStepProps = {
  name: string;
  onNextStep: (cur: SignupStep, next: SignupStep) => void;
  onSetNickname: (nickname: string) => void;
};

export default function NickNameStep({
  name,
  onNextStep,
  onSetNickname,
}: NickNameStepProps) {
  const [nickname, setNickname] = useState("");
  const [inputMessage, setInputMessage] = useState(
    "한글, 영어, 또는 숫자로 2글자 이상 6글자 이내"
  );
  const [invalid, setInvalid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validCheck();
    isValid && nicknameDupCheck();
  };

  const validCheck = () => {
    if (nickname === "") {
      setInvalid(false);
      setInputMessage("비어있는 항목을 입력해주세요");

      return false;
    } else if (!nicknameCheck(nickname)) {
      setInvalid(false);
      setInputMessage("닉네임 형식이 올바르지 않습니다");

      return false;
    }

    if (nicknameCheck(nickname)) {
      setInputMessage("한글, 영어, 또는 숫자로 2글자 이상 6글자 이내");
      return true;
    }
  };

  const nicknameDupCheck = async () => {
    try {
      const body = {
        nickname,
      };
      const response = await nicknameDupCheckApi(body);
      if (response.status === 200) {
        setInvalid(true);
        setInputMessage("한글, 영어, 또는 숫자로 2글자 이상 6글자 이내");
        onSetNickname(nickname);
        onNextStep("nickname", "platforms");
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setInvalid(false);
        setInputMessage(error.response.data.message);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <S.Title>
        안녕하세요 {name}님!
        <br />
        크라운드에서 활동하실 닉네임을 정해주세요
      </S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          isVisibleLabel={nickname.length > 0 ? true : false}
          isInvalid={invalid}
          styles="oauth"
          label="닉네임"
          id="nickname"
          name="nickname"
          placeholder="닉네임을 입력해 주세요"
          inputMessage={inputMessage}
          onChange={handleInputChange}
        />
        <Button
          label="다음"
          size="48"
          variant="primary"
          onClick={handleSubmit}
        />
      </S.Form>
    </>
  );
}
