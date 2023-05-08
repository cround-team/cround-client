"use client";

import { useState } from "react";

import { SignupStep } from "@/types/signup";
import Modal from "@/components/common/modal/Modal";
import * as S from "./styled";
import Indicator from "./indicator/Indicator";
import { ModalArrowLeftIcon } from "@/assets/icons";
import { useImmer } from "use-immer";

type InputNickNameProps = {
  isMounted: boolean;
  cur: SignupStep;
  prev: SignupStep;
  next: SignupStep;
  handleNextStep: <T extends SignupStep>(cur: T, next: T) => void;
  handlePrevStep: <T extends SignupStep>(cur: T, prev: T) => void;
};

export default function PickPlatforms({
  isMounted,
  cur,
  prev,
  next,
  handleNextStep,
  handlePrevStep,
}: InputNickNameProps) {
  const [data, setData] = useState("");
  const [platforms, setPlatforms] = useImmer([
    {
      name: "유튜브1",
    },
    {
      name: "유튜브2",
    },
    {
      name: "유튜브3",
    },
    {
      name: "유튜브4",
    },
    {
      name: "유튜브5",
    },
    {
      name: "유튜브6",
    },
    {
      name: "유튜브7",
    },
    {
      name: "유튜브8",
    },
    {
      name: "유튜브9",
    },
  ]);

  return (
    <Modal isMounted={isMounted}>
      <S.Layout>
        <S.Container>
          <S.PrevButton onClick={() => handlePrevStep(cur, prev)}>
            <ModalArrowLeftIcon />
          </S.PrevButton>
          <Indicator step={cur} />
          <S.TextWrapper>
            <h2>관심 있는 플랫폼을 1개 이상 선택해주세요</h2>
            <p>00님에게 맞는 추천 목록을 보여드릴게요</p>
          </S.TextWrapper>
          <S.PickWrapper>
            {platforms.map((el) => (
              <S.PlatformButton key={el.name}>
                <p>{el.name}</p>
              </S.PlatformButton>
            ))}
          </S.PickWrapper>
          <S.NextButton onClick={() => handleNextStep(cur, next)}>
            다음
          </S.NextButton>
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
