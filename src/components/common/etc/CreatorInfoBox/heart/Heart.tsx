import { HeartIcon } from "@/assets/icons";
import * as S from "./styled";
import { contentLikeApi } from "@/utils/api/content";
import { useState } from "react";

type HeartProps = {
  isLiked: boolean;
  count: number;
  onClick: () => void;
};

export default function Heart({ isLiked, count, onClick }: HeartProps) {
  return (
    <S.Container isLiked={isLiked}>
      <button onClick={onClick}>
        <HeartIcon />
      </button>
      <span>{count}</span>
    </S.Container>
  );
}
