import { ChevronDownIcon } from "@/assets/icons/arrow";
import * as S from "./styled";

type MorePageButtonProps = {
  isDisabled: boolean;
  onClick: () => void;
};

export default function MorePageButton({
  isDisabled,
  onClick,
}: MorePageButtonProps) {
  return (
    <S.Button aria-disabled={isDisabled ? "true" : "false"} onClick={onClick}>
      더보기
      <ChevronDownIcon />
    </S.Button>
  );
}
