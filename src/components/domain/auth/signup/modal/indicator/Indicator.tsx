"use client";
import * as S from "./styled";

type IndicatorProps = {
  steps: string[];
  current: string;
};

export default function Indicator({ steps, current }: IndicatorProps) {
  return (
    <S.Container>
      {Array.from(steps).map((el) => {
        return el === current ? (
          <S.ActiveBox key={el}></S.ActiveBox>
        ) : (
          <S.Box key={el}></S.Box>
        );
      })}
    </S.Container>
  );
}
