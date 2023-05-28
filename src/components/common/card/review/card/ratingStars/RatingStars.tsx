"use client";

import useRatingStarts from "@/hooks/useRatingStars";
import * as S from "./styled";

type RatingStarsProps = {
  rating: number;
};

export default function RatingStars({ rating }: RatingStarsProps) {
  const stars = useRatingStarts(rating);
  return <S.Container>{stars}</S.Container>;
}
