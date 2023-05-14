"use client";

import { useImmer } from "use-immer";

import { SignupStep } from "@/types/signup";
import InputNickName from "./InputNickName/InputNickName";
import PickPlatforms from "./pickPlatforms/PickPlatforms";
import PickThemes from "./PickThemes";
import SuccessSignup from "./SuccessSignup";
import Modal from "@/components/common/modal/Modal";
import { useState } from "react";
import Indicator from "./indicator/Indicator";

import * as S from "./styled";

export default function ModalStep() {
  const [isMounted, setIsMounted] = useImmer({
    nickName: true,
    platforms: false,
    themes: false,
    success: false,
  });
  const [currentStep, setCurrentStep] = useState("");
  const handlePrevStep = <T extends SignupStep>(cur: T, prev: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[prev] = !draft[prev];
    });
  };

  const handleNextStep = <T extends SignupStep>(cur: T, next: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[next] = !draft[next];
    });
  };

  return (
    <>
      <Modal isMounted={true}>
        <S.Layout>
          <S.Container>
            <Indicator step="nickName" />
            {isMounted.nickName && (
              <InputNickName handleNextStep={handleNextStep} />
            )}
            {isMounted.platforms && (
              <PickPlatforms
                handlePrevStep={handlePrevStep}
                handleNextStep={handleNextStep}
              />
            )}
            {/* {isMounted.themes && (
              <PickThemes
                isMounted={isMounted.themes}
                cur="themes"
                prev="platforms"
                next="success"
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
              />
            )}
            {isMounted.success && (
              <SuccessSignup
                isMounted={isMounted.success}
                cur="success"
                prev="themes"
                handlePrevStep={handlePrevStep}
              />
            )} */}
          </S.Container>
        </S.Layout>
      </Modal>
    </>
  );
}
