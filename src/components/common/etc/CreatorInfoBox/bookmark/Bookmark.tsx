import { BookmarkIcon } from "@/assets/icons";
import * as S from "./styled";

type BookmarkProps = {
  isBookmarked: boolean;
  count: number;
  onClick: () => void;
};

export default function Bookmark({
  isBookmarked,
  count,
  onClick,
}: BookmarkProps) {
  return (
    <S.Container isBookmarked={isBookmarked}>
      <button onClick={onClick}>
        <BookmarkIcon />
      </button>
      <span>{count}</span>
    </S.Container>
  );
}
