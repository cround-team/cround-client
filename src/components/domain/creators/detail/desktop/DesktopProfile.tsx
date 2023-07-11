import ReviewFollowWrapper from "../common/reviewFollowWrapper/ReviewFollowWrapper";
import BaseWrapper from "../common/baseWrapper/BaseWrapper";
import ButtonWrapper from "../common/buttonWrapper/ButtonWrapper";
import AvatarWrapper from "../common/avatarWrapper/AvatarWrapper";
import Introduce from "../common/introduce/Introduce";
import * as S from "./styled";
import InformativeBubbles from "../common/InformativeBubbles/InformativeBubbles";

type ProfileProps = {
  isOwned: boolean;
  profileImage: string;
  creatorNickname: string;
  description: string;
  tags: string[];
  activityPlatforms: string[];
  platformHeadTheme: string;
  avgRating: string;
  followersCount: number;
  platformHeadType: string;
  platformUrl: string;
  followed: boolean;
  onFollow: () => void;
  onUnFollow: () => void;
};

export default function DesktopProfile({
  isOwned,
  profileImage,
  creatorNickname,
  description,
  tags,
  activityPlatforms,
  platformHeadTheme,
  avgRating,
  followersCount,
  platformHeadType,
  platformUrl,
  followed,
  onFollow,
  onUnFollow,
}: ProfileProps) {
  const handleAskQuestion = () => {
    alert("준비중입니다.");
  };

  return (
    <S.Section>
      <S.Container>
        <S.Wrapper>
          {profileImage && <AvatarWrapper profileImage={profileImage} />}
          <S.BaseReviewFollowGroup>
            <BaseWrapper
              creatorNickname={creatorNickname}
              activityPlatforms={activityPlatforms}
              platformHeadTheme={platformHeadTheme}
            />
            <ReviewFollowWrapper
              avgRating={avgRating}
              followersCount={followersCount}
              platformHeadType={platformHeadType}
            />
          </S.BaseReviewFollowGroup>
        </S.Wrapper>
        <InformativeBubbles
          creatorNickname={creatorNickname}
          platformUrl={platformUrl}
        />
      </S.Container>
      <ButtonWrapper
        isOwned={isOwned}
        followed={followed}
        onFollow={onFollow}
        onUnFollow={onUnFollow}
        onAskQuestion={handleAskQuestion}
      />
      <Introduce
        creatorNickname={creatorNickname}
        description={description}
        tags={tags}
      />
    </S.Section>
  );
}
