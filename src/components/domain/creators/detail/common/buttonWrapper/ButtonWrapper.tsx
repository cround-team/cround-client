import { CheckIcon } from "@/assets/icons";
import { Button } from "@/components/common";
import * as S from "./styled";
import { useDeviceType } from "@/hooks";

type ButtonWrapperProps = {
  isOwned: boolean;
  followed: boolean;
  onUnFollow: () => void;
  onFollow: () => void;
  onAskQuestion: () => void;
};

export default function ButtonWrapper({
  isOwned,
  followed,
  onUnFollow,
  onFollow,
  onAskQuestion,
}: ButtonWrapperProps) {
  const { isMobile } = useDeviceType();

  if (!isOwned) {
    return (
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
          onClick={onAskQuestion}
        />
      </S.Container>
    );
  } else {
    return <></>;
  }
}
