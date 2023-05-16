"use client";

import { useState } from "react";
import { useImmer } from "use-immer";

import type { SignupStep } from "@/types/signup";
import Modal from "@/components/common/modal/Modal";
import NickNameStep from "./NickNameStep/NickNameStep";
import PlatformStep from "./PlatformStep/PlatformStep";
import SuccessSignup from "./SuccessStep/SuccessStep";
import Indicator from "./indicator/Indicator";

import * as S from "./styled";
import { useRouter } from "next/navigation";

const STEPS = ["nickname", "platforms", "success"];

export default function ModalStep() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useImmer({
    nickName: true,
    platforms: false,
    success: false,
  });
  const [currentStep, setCurrentStep] = useState<SignupStep>("nickName");
  const handlePrevStep = <T extends SignupStep>(cur: T, prev: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[prev] = !draft[prev];
    });
    setCurrentStep(prev);
  };

  const handleNextStep = <T extends SignupStep>(cur: T, next: T) => {
    setIsMounted((draft) => {
      draft[cur] = !draft[cur];
      draft[next] = !draft[next];
    });
    setCurrentStep(next);
  };

  const handleSuccess = () => {
    router.push("/login");
  };

  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.Container>
          <Indicator type="modal" steps={STEPS} current={currentStep} />
          {isMounted.nickName && <NickNameStep onNextStep={handleNextStep} />}
          {isMounted.platforms && (
            <PlatformStep
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
            />
          )}
          {isMounted.success && (
            <SuccessSignup
              onPrevStep={handlePrevStep}
              onSuccess={handleSuccess}
            />
          )}
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
