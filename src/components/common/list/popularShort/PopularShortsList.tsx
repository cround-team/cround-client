import type { ShortCardData } from "@/types/card";
import { ShortCard } from "@/components/common";
import * as S from "./styled";

type PopularShortsListProps = {
  data: ShortCardData[];
  label: string;
  onLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onBookmark: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelBookmark: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export default function PopularShortsList({
  data,
  label,
  onLike,
  onCancelLike,
  onBookmark,
  onCancelBookmark,
}: PopularShortsListProps) {
  return (
    <S.Container>
      <S.Title>{label}</S.Title>
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
    </S.Container>
  );
}
