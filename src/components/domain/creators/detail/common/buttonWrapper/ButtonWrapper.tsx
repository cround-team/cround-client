import { CheckIcon } from "@/assets/icons";
import { Button } from "@/components/common";

import * as S from "./styled";
import { AskedModal } from "@/components/domain/mypage";

type ButtonWrapperProps = {
  isOwned: boolean;
  isAskModalOpen: boolean;
  followed: boolean;
  receiver: number;
  onUnFollow: () => void;
  onFollow: () => void;
  onOpenAskModal: () => void;
  onCloseAskModal: () => void;
};

export default function ButtonWrapper({
  isOwned,
  isAskModalOpen,
  followed,
  receiver,
  onUnFollow,
  onFollow,
  onOpenAskModal,
  onCloseAskModal,
}: ButtonWrapperProps) {
  if (!isOwned) {
    return (
      <>
        <S.Container>
          {followed && (
            <S.FollowingButton onClick={onUnFollow}>
              팔로우 중
              <CheckIcon />
            </S.FollowingButton>
          )}
          {!followed && (
            <Button
              css={S.CustomButton}
              label="팔로우하기"
              size="32"
              variant="ghost"
              onClick={onFollow}
            />
          )}
          <Button
            css={S.CustomButton}
            label="질문하기"
            size="32"
            variant="primary"
            onClick={onOpenAskModal}
          />
        </S.Container>
        {isAskModalOpen && (
          <AskedModal creatorId={receiver} onClose={onCloseAskModal} />
        )}
      </>
    );
  } else {
    return <></>;
  }
}
