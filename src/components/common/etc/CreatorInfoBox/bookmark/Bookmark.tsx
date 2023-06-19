import { BookmarkIcon } from "@/assets/icons";
import * as S from "./styled";

type BookmarkProps = {
  isBookmarked: boolean;
  id: number;
  count: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Bookmark({
  isBookmarked,
  id,
  count,
  onClick,
}: BookmarkProps) {
  return (
    <S.Container isBookmarked={isBookmarked}>
      <button onClick={(e) => onClick(e, id)}>
        <BookmarkIcon />
      </button>
      <span>{count}</span>
    </S.Container>
  );
}
