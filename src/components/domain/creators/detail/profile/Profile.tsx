import Image from "next/image";

import { Button } from "@/components/common";
import { media } from "@/styles/themes/foundations";
import { conversionPlatform } from "@/utils/conversion";
import * as S from "./styled";
import { CheckIcon } from "@/assets/icons";

type ProfileProps = {
  profileImage: string;
  creatorNickname: string;
  activityPlatforms: string[];
  platformHeadTheme: string;
  avgRating: string;
  followersCount: number;
  platformHeadType: string;
  followed: boolean;
  onFollow: () => void;
  onUnFollow: () => void;
};

export default function Profile({
  profileImage,
  creatorNickname,
  activityPlatforms,
  platformHeadTheme,
  avgRating,
  followersCount,
  platformHeadType,
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
        <S.TopWrapper>
          <S.Figure>
            <Image
              src={profileImage}
              alt="Profile Image"
              sizes={media.images.sizes}
              fill
              priority
            />
          </S.Figure>
          <S.ProfileText>
            <S.Nickname>{creatorNickname}</S.Nickname>
            <S.PlatformThemeGroup>
              <span>{conversionPlatform(activityPlatforms).join(", ")}</span>
              <span>{platformHeadTheme}</span>
            </S.PlatformThemeGroup>
          </S.ProfileText>
        </S.TopWrapper>
        <S.MiddleWrapper>
          <div>
            <span>{avgRating}</span>
            <span>리뷰</span>
          </div>
          <div>
            <span>{followersCount.toLocaleString()}명</span>
            <span>팔로워</span>
          </div>
          <div>
            <span>{platformHeadType}</span>
            <span>대표 플랫폼</span>
          </div>
        </S.MiddleWrapper>
        <S.ButtonWrapper>
          {followed && (
            <S.FollowingButton onClick={onUnFollow}>
              팔로우 중
              <CheckIcon />
            </S.FollowingButton>
          )}
          {!followed && (
            <Button
              label="팔로우하기"
              size="32"
              variant="ghost"
              onClick={onFollow}
            />
          )}

          <Button
            label="질문하기"
            size="32"
            variant="primary"
            onClick={handleAskQuestion}
          />
        </S.ButtonWrapper>
      </S.Container>
    </S.Section>
  );
}
