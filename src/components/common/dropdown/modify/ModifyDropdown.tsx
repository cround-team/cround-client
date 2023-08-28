import { useClickOutside } from "@/hooks";
import * as S from "./styled";
import { useRef } from "react";

type ModifyDropdownProps = {
  onOpenDeleteModal: () => void;
  onGoEditPage: () => void;
  onToggleDropdown: () => void;
};

export default function ModifyDropdown({
  onOpenDeleteModal,
  onGoEditPage,
  onToggleDropdown,
}: ModifyDropdownProps) {
  const containerRef = useRef(null);
  useClickOutside(containerRef, onToggleDropdown);
  return (
    <S.Container ref={containerRef}>
      <S.ListContainer>
        <li>
          <button onClick={onGoEditPage}>편집하기</button>
        </li>
        <li>
          <button onClick={onOpenDeleteModal}>삭제하기</button>
        </li>
      </S.ListContainer>
    </S.Container>
  );
}
