import type { ReviewCardData } from "@/types";
import { ReviewCard } from "../../card";
import { MorePageButton } from "../../button";
import * as S from "./styled";

type ReviewListProps = {
  isOwned: boolean;
  isNextPage?: boolean;
  data: ReviewCardData[];
  onFetchData?: (id?: number) => void;
};

export default function ReviewList({
  isOwned,
  isNextPage,
  data,
  onFetchData,
}: ReviewListProps) {
  const handleAddList = () => {
    onFetchData && onFetchData(data.at(-1)?.memberId);
  };

  return (
    <S.Container>
      {!isOwned && <S.WriteButton>리뷰 작성하기</S.WriteButton>}
      <S.Wrapper>
        {data?.map((review: ReviewCardData) => (
          <ReviewCard key={review.memberId} review={review} />
        ))}
      </S.Wrapper>
      {data && onFetchData && (
        <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
      )}
    </S.Container>
  );
}
