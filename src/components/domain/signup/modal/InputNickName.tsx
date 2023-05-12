"use client";

import { useState } from "react";

import { SignupStep } from "@/types/signup";
import Modal from "@/components/common/modal/Modal";
import * as S from "./styled";
import Indicator from "./indicator/Indicator";

type InputNickNameProps = {
  isMounted: boolean;
  cur: SignupStep;
  next: SignupStep;
  handleNextStep: (cur: SignupStep, next: SignupStep) => void;
};

export default function InputNickName({
  isMounted,
  cur,
  next,
  handleNextStep,
}: InputNickNameProps) {
  const [nickName, setNickName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Next => PickPlatForms");
    handleNextStep(cur, next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <Modal isMounted={isMounted}>
      <S.Layout>
        <S.Container>
          <Indicator step={cur} />
          <S.TextWrapper>
            <h2>
              안녕하세요 000님!
              <br />
              크라운드에서 활동하실 닉네임을 정해주세요
            </h2>
          </S.TextWrapper>
          <S.Form onSubmit={handleSubmit}>
            <input
              placeholder="닉네임을 입력해 주세요"
              autoFocus
              value={nickName}
              onChange={handleInputChange}
            />
            <S.NextButton>다음</S.NextButton>
          </S.Form>
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
