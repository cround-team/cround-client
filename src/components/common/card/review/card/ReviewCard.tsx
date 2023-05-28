"use client";

import useRatingStarts from "@/hooks/useRatingStars";
import * as S from "./styled";

type ReviewCardProps = {
  name: string;
  rating: number;
  content: string;
};

export default function ReviewCard({ name, rating, content }: ReviewCardProps) {
  const stars = useRatingStarts(rating);
  return (
    <S.Article>
      <S.NameRatingGroup>
        <S.Name>{name}</S.Name>
        <S.Rating>{stars}</S.Rating>
      </S.NameRatingGroup>
      <S.Content>{content}</S.Content>
    </S.Article>
  );
}
