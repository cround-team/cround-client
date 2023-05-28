import Image from "next/image";

import Button from "@/components/common/button/base/Button";
import * as S from "./styled";
import { ChevronLeftIcon } from "@/assets/icons/arrow";

export default function Profile({}) {
  const handleFollowCreator = () => {};

  const handleAskQuestion = () => {};

  return (
    <S.Section>
      <S.PrevButton>
        <ChevronLeftIcon />
      </S.PrevButton>
      <S.ProfileContainer>
        <S.ProfileWrapper>
          <S.Figure>
            <Image
              src="/images/profile2.jpg"
              width={100}
              height={100}
              alt="Profile Image"
              priority
            />
          </S.Figure>
          <S.ProfileText>
            <S.Nickname>코코</S.Nickname>
            <S.PlatformThemeGroup>
              <span>유튜브</span>
              <span>ASMR</span>
            </S.PlatformThemeGroup>
            <S.RatingFollowGroup>
              <div>
                <span>후기</span>
                <span>4.8</span>
              </div>
              <div>
                <span>팔로워</span>
                <span>12명</span>
              </div>
            </S.RatingFollowGroup>
          </S.ProfileText>
        </S.ProfileWrapper>
        <S.ButtonWrapper>
          <Button
            label="팔로우하기"
            size="32"
            variant="ghost"
            onClick={handleFollowCreator}
          />
          <Button
            label="질문하기"
            size="32"
            variant="primary"
            onClick={handleFollowCreator}
          />
        </S.ButtonWrapper>
      </S.ProfileContainer>
    </S.Section>
  );
}
