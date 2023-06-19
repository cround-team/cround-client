import { HeartIcon } from "@/assets/icons";
import * as S from "./styled";

type HeartProps = {
  isLiked: boolean;
  id: number;
  count: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Heart({ isLiked, id, count, onClick }: HeartProps) {
  return (
    <S.Container isLiked={isLiked}>
      <button onClick={(e) => onClick(e, id)}>
        <HeartIcon />
      </button>
      <span>{count}</span>
    </S.Container>
  );
}
