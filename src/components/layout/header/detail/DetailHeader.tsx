import { useRouter } from "next/navigation";

import * as S from "./styled";
import PrevButton from "@/components/common/button/prev/PrevButton";

type DetailHeaderProps = {
  label: string;
  isIndicator?: boolean;
};

export default function DetailHeader({
  label,
  isIndicator,
}: DetailHeaderProps) {
  return (
    <S.Container>
      <PrevButton />
      <h2>{label}</h2>
      {isIndicator && <div>인디케이터</div>}
    </S.Container>
  );
}
