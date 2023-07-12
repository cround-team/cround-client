import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "@/assets/icons/arrow";
import * as S from "./styled";

export default function PrevButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <S.Button onClick={handleClick}>
      <ChevronLeftIcon />
    </S.Button>
  );
}
