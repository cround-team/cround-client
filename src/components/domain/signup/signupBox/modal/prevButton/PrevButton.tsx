import type { SignupStep } from "@/types/signup";
import { ModalArrowLeftIcon } from "@/assets/icons";
import * as S from "./styled";

type PrevButtonProps = {
  onClick?: <T extends SignupStep>(cur: T, prev: T) => void;
};

export default function PrevButton({ onClick }: PrevButtonProps) {
  return (
    <>
      <S.Button onClick={onClick}>
        <ModalArrowLeftIcon />
      </S.Button>
    </>
  );
}
