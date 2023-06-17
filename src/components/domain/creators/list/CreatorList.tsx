import type { CreatorCardData } from "@/types/card";

import CreatorCard from "@/components/common/card/creator/CreatorCard";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";
import * as S from "./styled";

type CreatorListProps = {
  data: CreatorCardData[];
  isNextPage: boolean;
  onFetchData: (id?: number) => void;
};

export default function CreatorList({
  data,
  onFetchData,
  isNextPage,
}: CreatorListProps) {
  const handleAddList = () => {
    onFetchData(data.at(-1)?.creatorId);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((creator: CreatorCardData) => (
          <CreatorCard key={creator.creatorId} creator={creator} />
        ))}
      </S.Wrapper>
      <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
    </S.Container>
  );
}
