import type { ShortCardData } from "@/types/card";

import MorePageButton from "@/components/common/button/morePage/MorePageButton";
import ShortCard from "@/components/common/card/short/ShortCard";
import * as S from "./styled";

type ShortsListProps = {
  data: ShortCardData[];
  isNextPage: boolean;
  onFetchData: (id?: number) => void;
};

export default function ShortsList({
  data,
  isNextPage,
  onFetchData,
}: ShortsListProps) {
  const handleAddList = () => {
    onFetchData(data.at(-1)?.shortsId);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((short: ShortCardData) => (
          <ShortCard key={short.shortsId} short={short} isShowCreatorInfo />
        ))}
      </S.Wrapper>
      <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
    </S.Container>
  );
}
