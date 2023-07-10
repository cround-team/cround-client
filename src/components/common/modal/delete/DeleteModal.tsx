import { useRef } from "react";

import { useClickOutside } from "@/hooks";
import { Button } from "../../button";
import Modal from "../Modal";
import * as S from "./styled";

type DeleteModalProps = {
  isMounted: boolean;
  children: React.ReactNode;
  onDelete: () => void;
  onClose: () => void;
};

export default function DeleteModal({
  isMounted,
  children,
  onDelete,
  onClose,
}: DeleteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  return (
    <Modal isMounted={isMounted}>
      <S.Container ref={modalRef}>
        {children}
        <S.ButtonWrapper>
          <Button
            type="button"
            label="취소"
            variant="ghost"
            size="32"
            onClick={onClose}
          />
          <Button
            type="button"
            label="삭제하기"
            variant="primary"
            size="32"
            onClick={onDelete}
          />
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
}
