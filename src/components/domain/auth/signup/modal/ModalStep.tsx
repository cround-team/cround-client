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
import { BooleanMap } from "@/types/common";
import { signupApi } from "@/utils/api/auth";

const STEPS = ["nickname", "platforms", "success"];

type ModalStepProps = {
  data: {
    name: string;
    email: string;
    password: string;
    psw2: string;
  };
};

export default function ModalStep({ data }: ModalStepProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useImmer<BooleanMap>({
    nickname: true,
    platforms: false,
    success: false,
  });
  const [nickname, setNickname] = useState("");

  const [currentStep, setCurrentStep] = useState<SignupStep>("nickname");
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

  const handleSetNickname = (nickname: string) => {
    setNickname(nickname);
  };

  const handleSuccess = (platforms: string[]) => {
    const { name, email, password, psw2 } = data;

    const getResponse = async () => {
      try {
        const body = {
          username: name,
          nickname: nickname,
          email: email,
          password: password,
          confirmPassword: psw2,
          interestPlatform: platforms,
        };

        const response = await signupApi(body);
        response?.status === 201 && handleNextStep("platforms", "success");
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  const handlePushLogin = () => {
    router.push("/login");
  };

  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.Container>
          <Indicator steps={STEPS} current={currentStep} />
          {isMounted.nickname && (
            <NickNameStep
              name={data.name}
              onNextStep={handleNextStep}
              onSetNickname={handleSetNickname}
            />
          )}
          {isMounted.platforms && (
            <PlatformStep
              name={data.name}
              onPrevStep={handlePrevStep}
              onSuccess={handleSuccess}
            />
          )}
          {isMounted.success && (
            <SuccessSignup
              onPrevStep={handlePrevStep}
              onPushLogin={handlePushLogin}
            />
          )}
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
