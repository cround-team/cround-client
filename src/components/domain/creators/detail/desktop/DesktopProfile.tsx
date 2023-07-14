import ReviewFollowWrapper from "../common/reviewFollowWrapper/ReviewFollowWrapper";
import BaseWrapper from "../common/baseWrapper/BaseWrapper";
import ButtonWrapper from "../common/buttonWrapper/ButtonWrapper";
import AvatarWrapper from "../common/avatarWrapper/AvatarWrapper";
import Introduce from "../common/introduce/Introduce";
import * as S from "./styled";
import InformativeBubbles from "../common/InformativeBubbles/InformativeBubbles";
import { Tag } from "@/components/common";

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
      <S.Introduce>
        <div>
          <h3>{creatorNickname}님의 인사말</h3>
          <p>{description}</p>
        </div>
        <S.IntroduceWrapper>
          <Tag tags={tags} />
          <ButtonWrapper
            isOwned={isOwned}
            followed={followed}
            onFollow={onFollow}
            onUnFollow={onUnFollow}
            onAskQuestion={handleAskQuestion}
          />
        </S.IntroduceWrapper>
      </S.Introduce>
    </S.Section>
  );
}
