import { useRef } from "react";

import { useClickOutside } from "@/hooks";
import useWriteReview from "@/components/domain/creators/hooks/useWriteReview";
import Modal from "../Modal";
import TextArea from "../../textarea/TextArea";
import { Button } from "../../button";
import * as S from "./styled";
import { XClose2Icon } from "@/assets/icons";

type ReviewModalProps = {
  isMounted: boolean;
  creatorId: number;
  onClose: () => void;
  onFetchData?: (id?: number) => void;
};

export default function ReviewModal({
  isMounted,
  creatorId,
  onClose,
  onFetchData,
}: ReviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    isDisabledSubmit,
    review,
    stars,
    handleChange,
    handleSubmit,
    handleStarClick,
  } = useWriteReview({ creatorId, onFetchData, onClose });
  useClickOutside(modalRef, onClose);

  return (
    <Modal isMounted={isMounted}>
      <S.Container ref={modalRef}>
        <S.CloseButton type="button" onClick={onClose}>
          <XClose2Icon />
        </S.CloseButton>
        <S.Head>
          <h3>creatorNickname과의 시간은 어떠셨나요?</h3>
          <p>별점을 선택해 주세요!</p>
        </S.Head>
        <S.Form onSubmit={handleSubmit}>
          <S.Rating>
            {stars.map((star) => (
              <button
                key={star.index}
                type="button"
                onClick={(e) => handleStarClick(e, star.status, star.index)}
              >
                {star.status ? <S.FilledStarIcon /> : <S.EmptyStarIcon />}
              </button>
            ))}
          </S.Rating>
          <TextArea
            id="review"
            name="review"
            value={review}
            styles="review"
            placeholder="후기를 작성해 주세요"
            label=""
            onChange={handleChange}
          />
          <Button
            isDisabled={isDisabledSubmit}
            label="완료"
            variant="primary"
            size="56"
          />
        </S.Form>
      </S.Container>
    </Modal>
  );
}
