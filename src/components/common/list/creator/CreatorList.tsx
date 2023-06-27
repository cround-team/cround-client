import type { CreatorCardData } from "@/types/card";
import { CreatorCard, MorePageButton } from "@/components/common";
import * as S from "./styled";

type CreatorListProps = {
  data: CreatorCardData[];
  isNextPage?: boolean;
  onFetchData?: (id?: number) => void;
};

export default function CreatorList({
  data,
  onFetchData,
  isNextPage,
}: CreatorListProps) {
  const handleAddList = () => {
    onFetchData && onFetchData(data.at(-1)?.creatorId);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((creator: CreatorCardData) => (
          <CreatorCard key={creator.creatorId} creator={creator} />
        ))}
      </S.Wrapper>
      {onFetchData && (
        <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
      )}
    </S.Container>
  );
}
