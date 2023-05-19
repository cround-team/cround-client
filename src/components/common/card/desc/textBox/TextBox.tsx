"use client";

import * as S from "./styled";

type TextBoxProps = {
  platform: string;
  title: string;
  desc?: string;
};

export default function TextBox({ platform, title, desc }: TextBoxProps) {
  return (
    <S.Container>
      <span>{platform}</span>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
    </S.Container>
  );
}
