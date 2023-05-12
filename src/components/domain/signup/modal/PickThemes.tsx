"use client";

import { useState } from "react";
import { useImmer } from "use-immer";

import { SignupStep } from "@/types/signup";
import Modal from "@/components/common/modal/Modal";
import { ModalArrowLeftIcon } from "@/assets/icons";

import * as S from "./styled";
import Indicator from "./indicator/Indicator";

type InputNickNameProps = {
  isMounted: boolean;
  cur: SignupStep;
  prev: SignupStep;
  next: SignupStep;
  handleNextStep: <T extends SignupStep>(cur: T, next: T) => void;
  handlePrevStep: <T extends SignupStep>(cur: T, prev: T) => void;
};

export default function PickThemes({
  isMounted,
  cur,
  prev,
  next,
  handleNextStep,
  handlePrevStep,
}: InputNickNameProps) {
  const [data, setData] = useState("");
  const [themes, setThemes] = useImmer([
    {
      name: "전체",
    },
    {
      name: "반려동물",
    },
    {
      name: "예술",
    },
    {
      name: "뷰티",
    },
    {
      name: "요리",
    },
    {
      name: "학습",
    },
    {
      name: "패션",
    },
    {
      name: "금융",
    },
    {
      name: "게임",
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
            <h2>관심 있는 테마를 1개 이상 선택해주세요</h2>
            <p>00님에게 적합한 테마를 보여드릴게요</p>
          </S.TextWrapper>
          <S.PickWrapper>
            {themes.map((el) => (
              <S.ThemeButton key={el.name}>
                <p>{el.name}</p>
              </S.ThemeButton>
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
