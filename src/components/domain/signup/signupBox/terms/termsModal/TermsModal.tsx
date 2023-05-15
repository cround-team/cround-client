"use client";

import type { termsType, termsTitle } from "../SignupTerms";

import Modal from "@/components/common/modal/Modal";
import { XBtnIcon } from "@/assets/icons";
import * as S from "./styled";

type TermsModalProps = {
  isMounted: boolean;
  termsType: termsType;
  title: termsTitle;
  onSetIsMounted?: (type: termsType) => void;
  children: React.ReactNode;
};

export default function TermsModal({
  isMounted,
  termsType,
  title,
  onSetIsMounted,
  children,
}: TermsModalProps) {
  return (
    <Modal isMounted={isMounted}>
      <S.Layout>
        <S.Container>
          <h1>{title}</h1>
          {onSetIsMounted && (
            <S.CloseButton onClick={() => onSetIsMounted(termsType)}>
              <XBtnIcon />
            </S.CloseButton>
          )}
          <S.ScrollWrapper>
            <S.Wrapper>{children}</S.Wrapper>
          </S.ScrollWrapper>
        </S.Container>
      </S.Layout>
    </Modal>
  );
}
