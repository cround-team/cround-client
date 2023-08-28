import * as S from "./styled";

type IndicatorModalProps = {
  className?: string;
  steps: string[];
  current: string;
};

export default function IndicatorModal({
  className,
  steps,
  current,
}: IndicatorModalProps) {
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
