"use client";

import Image from "next/image";

import { SignupStep } from "@/types/signup";
import Modal from "@/components/common/modal/Modal";
import { ModalArrowLeftIcon } from "@/assets/icons";
import * as S from "./styled";
import Indicator from "./indicator/Indicator";

import succeessImgSrc from "/public/images/successSignup.png";

type InputNickNameProps = {
  isMounted: boolean;
  cur: SignupStep;
  prev: SignupStep;
  handlePrevStep: <T extends SignupStep>(cur: T, prev: T) => void;
};

export default function SuccessSignup({
  isMounted,
  cur,
  prev,
  handlePrevStep,
}: InputNickNameProps) {
  const handleSignup = () => {
    alert("가입 완료");
  };
  return (
    <Modal isMounted={isMounted}>
      <S.Layout>
        <S.Container>
          <S.PrevButton onClick={() => handlePrevStep(cur, prev)}>
            <ModalArrowLeftIcon />
          </S.PrevButton>
          <Indicator step={cur} />
          <S.TextWrapper>
            <h2>크라운드에 오신 걸 환영합니다!</h2>
            <p>
              크리에이터가 되기 위해 필요한 정보를
              <br />
              크라운드에서 찾아보세요!
            </p>
          </S.TextWrapper>
          <figure>
            <Image src={succeessImgSrc} alt="Allura Back in Town" />
          </figure>
          <S.NextButton onClick={handleSignup}>완료</S.NextButton>
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
