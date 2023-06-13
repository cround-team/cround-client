import type { ContentCardData, CreatorCardData } from "@/types/card";

import CreatorCard from "@/components/common/card/creator/CreatorCard";
import MorePageButton from "@/components/common/button/morePage/MorePageButton";
import * as S from "./styled";
import ContentCard from "@/components/common/card/content/ContentCard";

type ContentListProps = {
  data: ContentCardData[];
  isNextPage: boolean;
  onFetchData: (id?: number) => void;
};

export default function ContentList({
  data,
  isNextPage,
  onFetchData,
}: ContentListProps) {
  const handleAddList = () => {
    onFetchData(data.at(-1)?.boardId);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {data.map((content: ContentCardData) => (
          <ContentCard
            key={content.boardId}
            content={content}
            isShowCreatorInfo={true}
          />
        ))}
      </S.Wrapper>
      <MorePageButton isDisabled={!isNextPage} onClick={handleAddList} />
    </S.Container>
  );
}
