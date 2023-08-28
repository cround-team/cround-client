import * as S from "./styled";

type LabelProps = {
  as?: "h3" | "label";
  label: string;
  tipMessage?: string;
};

export default function Label({ as = "label", label, tipMessage }: LabelProps) {
  return (
    <S.Label>
      {label}
      {tipMessage && <S.TipMessage>{tipMessage}</S.TipMessage>}
    </S.Label>
  );
}
