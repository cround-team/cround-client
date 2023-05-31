import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "@/assets/icons/arrow";
import * as S from "./styled";

export default function PrevButton() {
  const router = useRouter();
  return (
    <S.Button onClick={() => router.back()}>
      <ChevronLeftIcon />
    </S.Button>
  );
}
