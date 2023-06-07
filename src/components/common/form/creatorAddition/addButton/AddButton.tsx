import { PlusIcon } from "@/assets/icons";
import * as S from "./styled";

type AddButtonProps = {
  id: string;
  onClick: (id: string) => void;
};

export default function AddButton({ id, onClick }: AddButtonProps) {
  return (
    <S.Button type="button" onClick={() => onClick(id)}>
      <PlusIcon />
    </S.Button>
  );
}
