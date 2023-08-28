import * as S from "./styled";

type IndicatorProps = {
  className?: string;
  steps: string[];
  current: string | null;
};

export default function Indicator({
  className,
  steps,
  current,
}: IndicatorProps) {
  return (
    <S.Container className={className}>
      {Array.from(steps).map((el) => {
        if (el === current) {
          return <S.ActiveBox key={el}></S.ActiveBox>;
        } else {
          return <S.Box key={el}></S.Box>;
        }
      })}
    </S.Container>
  );
}
