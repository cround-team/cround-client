"use client";

import { Modal } from "@/components/common";
import { XBtnIcon } from "@/assets/icons";
import * as S from "./styled";

type TermsModalProps = {
  title: string;
  onSetIsMounted?: () => void;
  children: React.ReactNode;
};

export default function TermsModal({
  title,
  onSetIsMounted,
  children,
}: TermsModalProps) {
  return (
    <Modal isMounted={true}>
      <S.Layout>
        <S.Container>
          <h1>{title}</h1>
          {onSetIsMounted && (
            <S.CloseButton onClick={onSetIsMounted}>
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
