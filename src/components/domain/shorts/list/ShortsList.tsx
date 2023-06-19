import type { ShortCardData } from "@/types/card";
import { MorePageButton, ShortCard } from "@/components/common";
import * as S from "./styled";

type ShortsListProps = {
  data: ShortCardData[];
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

export default function ShortsList({
  data,
  isNextPage,
  onFetchData,
  onLike,
  onCancelLike,
  onBookmark,
  onCancelBookmark,
}: ShortsListProps) {
  const handleAddList = () => onFetchData(data.at(-1)?.shortsId);

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((short: ShortCardData) => (
          <ShortCard
            key={short.shortsId}
            short={short}
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
