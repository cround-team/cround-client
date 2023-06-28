import * as S from "./styled";

type ModifyDropdownProps = {
  onOpenDeleteModal: () => void;
  onGoEditPage: () => void;
};

export default function ModifyDropdown({
  onOpenDeleteModal,
  onGoEditPage,
}: ModifyDropdownProps) {
  return (
    <S.Container>
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
