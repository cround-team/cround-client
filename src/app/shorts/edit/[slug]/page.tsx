"use client";

import * as S from "./styled";

type ShortEditPageProps = {
  params: {
    slug: number;
  };
};

export default function ShortEditPage({ params }: ShortEditPageProps) {
  return (
    <S.Section>
      <div>Edit</div>
    </S.Section>
  );
}
