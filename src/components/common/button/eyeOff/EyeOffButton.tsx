import { EyeOffIcon } from "@/assets/icons";
import * as S from "./styled";

type EyeOffButtonProps = {
  onClick: () => void;
};

export default function EyeOffButton({ onClick }: EyeOffButtonProps) {
  return (
    <S.Button onClick={onClick}>
      <EyeOffIcon />
    </S.Button>
  );
}
