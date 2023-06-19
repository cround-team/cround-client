import type { ContentCardData } from "@/types/card";
import { ContentCard, MorePageButton } from "@/components/common";
import * as S from "./styled";

type ContentListProps = {
  data: ContentCardData[];
  isNextPage: boolean;
  onFetchData: (id?: number) => void;
  onLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onBookmark: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelBookmark: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export default function ContentList({
  data,
  isNextPage,
  onFetchData,
  onLike,
  onCancelLike,
  onBookmark,
  onCancelBookmark,
}: ContentListProps) {
  const handleAddList = () => onFetchData(data.at(-1)?.boardId);

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((content: ContentCardData) => (
          <ContentCard
            key={content.boardId}
            content={content}
            isShowCreatorInfo={true}
            onLike={onLike}
            onCancelLike={onCancelLike}
            onBookmark={onBookmark}
            onCancelBookmark={onCancelBookmark}
          />
        ))}
      </S.Wrapper>
      <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
    </S.Container>
  );
}
