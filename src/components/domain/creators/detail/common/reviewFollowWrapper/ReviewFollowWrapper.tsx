import * as S from "./styled";

type ReviewFollowWrapperProps = {
  avgRating: string;
  followersCount: number;
  platformHeadType: string;
};

export default function ReviewFollowWrapper({
  avgRating,
  followersCount,
  platformHeadType,
}: ReviewFollowWrapperProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <span>{avgRating}</span>
        <span>리뷰</span>
      </S.Wrapper>
      <S.Wrapper>
        <span>{followersCount.toLocaleString()}명</span>
        <span>팔로워</span>
      </S.Wrapper>
      <S.Wrapper>
        <span>{platformHeadType}</span>
        <span>대표 플랫폼</span>
      </S.Wrapper>
    </S.Container>
  );
}
