import CreatorCard from "@/components/common/card/creator/CreatorCard";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";
import * as S from "./styled";

import type { CreatorCardData } from "@/types/card";

type CreatorListProps = {
  data: CreatorCardData[];
  isNextPage: boolean;
  fetchCreatorsData: (id?: number) => void;
};

export default function CreatorList({
  data,
  fetchCreatorsData,
  isNextPage,
}: CreatorListProps) {
  const handleAddList = () => {
    fetchCreatorsData(data.at(-1)?.creatorId);
  };

  console.log("data", data);
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
