import { SignupStep } from "@/types/signup";
import * as S from "./styled";

type IndicatorProps = {
  step: SignupStep;
};

const STEPS = ["nickName", "platforms", "themes", "success"];

export default function Indicator({ step }: IndicatorProps) {
  return (
    <S.Container>
      {Array.from(STEPS).map((el) => {
        return el === step ? (
          <S.ActiveBox key={el}></S.ActiveBox>
        ) : (
          <S.Box key={el}></S.Box>
        );
      })}
    </S.Container>
  );
}
