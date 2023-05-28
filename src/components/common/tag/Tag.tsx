"use client";

import * as S from "./styled";

type TagProps = {
  tags: string[];
};

export default function Tag({ tags }: TagProps) {
  return (
    <S.Container>
      {tags.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.Container>
  );
}
