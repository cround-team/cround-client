import useIndicator from "@/hooks/useIndicator";
import { Indicator } from "@/components/common";
import PrevButton from "./prev/PrevButton";
import * as S from "./styled";

type DetailHeaderProps = {
  label: string;
};

export default function StepHeader({ label }: DetailHeaderProps) {
  const { steps, current } = useIndicator({ label });

  return (
    <S.Container>
      <PrevButton />
      <h2>{label}</h2>
      {steps.length > 0 && <Indicator steps={steps} current={current} />}
    </S.Container>
  );
}
