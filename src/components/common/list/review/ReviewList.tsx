import type { ReviewCardData } from "@/types";
import { useModal } from "@/hooks";
import { ReviewCard } from "../../card";
import { MorePageButton } from "../../button";
import { ReviewModal } from "../../modal";
import * as S from "./styled";

type ReviewListProps = {
  isOwned: boolean;
  isNextPage?: boolean;
  data: ReviewCardData[];
  creatorId: number;
  onFetchData?: (id?: number) => void;
};

export default function ReviewList({
  isOwned,
  isNextPage,
  data,
  creatorId,
  onFetchData,
}: ReviewListProps) {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  const handleAddList = () => {
    onFetchData && onFetchData(data.at(-1)?.memberId);
  };

  return (
    <>
      <S.Container>
        {!isOwned && (
          <S.WriteButton onClick={handleOpenModal}>리뷰 작성하기</S.WriteButton>
        )}
        <S.Wrapper>
          {data?.map((review: ReviewCardData) => (
            <ReviewCard key={review.memberId} review={review} />
          ))}
        </S.Wrapper>
        {data && onFetchData && (
          <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
        )}
      </S.Container>
      {isOpenModal && (
        <ReviewModal
          isMounted={isOpenModal}
          creatorId={creatorId}
          onClose={handleCloseModal}
          onFetchData={onFetchData}
        />
      )}
    </>
  );
}
