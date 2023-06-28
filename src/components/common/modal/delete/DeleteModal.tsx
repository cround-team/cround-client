import { useEffect, useRef } from "react";

import { Button } from "../../button";
import Portal from "../../portal/Portal";
import Dim from "../dim/Dim";
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

  const handleClickOutside: EventListener = (e: Event) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Portal elementId="delete-modal" isMounted={isMounted}>
      <Dim>
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
      </Dim>
    </Portal>
  );
}