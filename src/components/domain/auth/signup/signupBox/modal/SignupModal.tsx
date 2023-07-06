"use client";

import { ReactNode } from "react";

import { IndicatorModal, Modal } from "@/components/common";
import { SignupStep } from "@/types";
import * as S from "./styled";

type SignupModalProps = {
  isMounted: boolean;
  step: SignupStep;
  children: ReactNode;
};

const STEPS = ["nickname", "platform", "success"];

export default function SignupModal({
  isMounted,
  step,
  children,
}: SignupModalProps) {
  return (
    <Modal isMounted={isMounted}>
      <S.Layout>
        <S.Container>
          <IndicatorModal steps={STEPS} current={step} />
          {children}
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
