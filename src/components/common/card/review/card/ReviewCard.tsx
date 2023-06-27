"use client";

import useRatingStarts from "@/hooks/useRatingStars";
import * as S from "./styled";

type ReviewCardProps = {
  review: {
    memberId: number;
    nickname: string;
    rating: number;
    content: string;
    createdAt: string;
  };
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const { memberId, nickname, rating, content, createdAt } = review;
  const stars = useRatingStarts(rating);

  return (
    <S.Article>
      <S.NameRatingGroup>
        <S.Name>{nickname}</S.Name>
        <S.Rating>{stars}</S.Rating>
      </S.NameRatingGroup>
      <S.Content>{content}</S.Content>
    </S.Article>
  );
}
