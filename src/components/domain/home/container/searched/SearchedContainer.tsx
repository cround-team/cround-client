import type { ContentCardData, CreatorCardData, ShortCardData } from "@/types";
import { PATH } from "@/constants";
import { CreatorList } from "@/components/domain/creators";
import { ShortsList } from "@/components/domain/shorts";
import { ContentList } from "@/components/domain/contents";
import ListTitle from "../title/ListTitle";
import NotList from "@/components/common/etc/notList/NotList";
import * as S from "./styled";

type CreatorsProps = {
  data: CreatorCardData[];
};
type ShortsProps = {
  data: ShortCardData[];
};
type ContentsProps = {
  data: ContentCardData[];
};

type SearchedContainerProps = {
  searched: string;
  getCreatorListProps: (op?: Partial<CreatorsProps>) => CreatorsProps;
  getShortListProps: (op?: Partial<ShortsProps>) => ShortsProps;
  getContentListProps: (op?: Partial<ContentsProps>) => ContentsProps;
};

export default function SearchedContainer({
  searched,
  getCreatorListProps,
  getShortListProps,
  getContentListProps,
}: SearchedContainerProps) {
  return (
    <S.Container>
      {!!getCreatorListProps().data.length && (
        <S.ListWrapper>
          <ListTitle
            isRenderImg={false}
            href={PATH.CREATORS.LIST}
            label="크리에이터"
            css={S.Icon}
          />
          <CreatorList {...getCreatorListProps()} />
        </S.ListWrapper>
      )}
      {!!getShortListProps().data.length && (
        <S.ListWrapper>
          <ListTitle
            isRenderImg={false}
            href={PATH.SHORTS.LIST}
            label="숏클래스"
            css={S.Icon}
          />
          <ShortsList {...getShortListProps()} />
        </S.ListWrapper>
      )}
      {!!getContentListProps().data.length && (
        <S.ListWrapper>
          <ListTitle
            isRenderImg={false}
            href={PATH.CONTENTS.LIST}
            label="콘텐츠"
            css={S.Icon}
          />
          <ContentList {...getContentListProps()} />
        </S.ListWrapper>
      )}
      {!getCreatorListProps().data.length && (
        <NotList label="크리에이터" searched={searched} />
      )}
      {!getShortListProps().data.length && (
        <NotList label="숏클래스" searched={searched} />
      )}
      {!getContentListProps().data.length && (
        <NotList label="콘텐츠" searched={searched} />
      )}
    </S.Container>
  );
}
