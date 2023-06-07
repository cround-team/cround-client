import Image from "next/image";

import Button from "@/components/common/button/base/Button";
import * as S from "./styled";
import { media } from "@/styles/themes/foundations";

export default function Profile({}) {
  const handleFollowCreator = () => {};

  const handleAskQuestion = () => {};

  return (
    <S.Section>
      <S.Container>
        <S.TopWrapper>
          <S.Figure>
            <Image
              src="/images/profile2.jpg"
              alt="Profile Image"
              sizes={media.images.sizes}
              fill
              priority
            />
          </S.Figure>
          <S.ProfileText>
            <S.Nickname>코코</S.Nickname>
            <S.PlatformThemeGroup>
              <span>ASMR</span>
              <span>유튜브, 인스타그램, 틱톡</span>
            </S.PlatformThemeGroup>
          </S.ProfileText>
        </S.TopWrapper>
        <S.MiddleWrapper>
          <div>
            <span>4.9</span>
            <span>리뷰</span>
          </div>
          <div>
            <span>12명</span>
            <span>팔로워</span>
          </div>
          <div>
            <span>유튜브</span>
            <span>대표 플랫폼</span>
          </div>
        </S.MiddleWrapper>

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
      </S.Container>
    </S.Section>
  );
}
