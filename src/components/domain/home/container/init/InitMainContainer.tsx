import type { ContentCardData, CreatorCardData, ShortCardData } from "@/types";
import { PATH } from "@/constants";
import { ContentList, CreatorList, ShortsList } from "@/components/common";
import ListTitle from "../title/ListTitle";
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

type InitMainContainerProps = {
  getLatestCreatorListProps: (op?: Partial<CreatorsProps>) => CreatorsProps;
  getInterestCreatorListProps: (op?: Partial<CreatorsProps>) => CreatorsProps;
  getRandomCreatorListProps: (op?: Partial<CreatorsProps>) => CreatorsProps;
  getShortListProps: (op?: Partial<ShortsProps>) => ShortsProps;
  getContentListProps: (op?: Partial<ContentsProps>) => ContentsProps;
};

export default function InitMainContainer({
  getLatestCreatorListProps,
  getInterestCreatorListProps,
  getRandomCreatorListProps,
  getShortListProps,
  getContentListProps,
}: InitMainContainerProps) {
  return (
    <S.Container>
      {/* 맞춤 크리에이터  */}
      <S.ListWrapper>
        <ListTitle
          href={PATH.CREATORS.LIST}
          src="/images/title/chat.png"
          label="크라운드의 새로운 파트너를 만나보세요!"
          alt="Chat icon"
        />
        <CreatorList {...getLatestCreatorListProps()} />
      </S.ListWrapper>
      <S.ListWrapper>
        <ListTitle
          href={PATH.CREATORS.LIST}
          src="/images/title/heart.png"
          label="코코님이 관심 있어 할 크리에이터"
          alt="Heart icon"
        />
        <CreatorList {...getInterestCreatorListProps()} />
      </S.ListWrapper>
      <S.ListWrapper>
        <ListTitle
          href={PATH.CREATORS.LIST}
          src="/images/title/fire.png"
          label="크리에이터로 핫데뷔를 도와드릴게요!"
          alt="Fire icon"
        />
        <CreatorList {...getRandomCreatorListProps()} />
      </S.ListWrapper>

      {/* 맞춤 숏클래스  */}
      <S.ListWrapper>
        <ListTitle
          href={PATH.SHORTS.LIST}
          src="/images/title/video.png"
          label="크리에이터가 직접 알려주는 꿀팁!"
          alt="Youtube icon"
        />
        <ShortsList {...getShortListProps()} />
      </S.ListWrapper>

      {/* 맞춤 콘텐츠  */}
      <S.ListWrapper>
        <ListTitle
          href={PATH.CONTENTS.LIST}
          src="/images/title/book.png"
          label="많은 사람들이 원한 정보들 바로 여기에!"
          alt="Book icon"
        />
        <ContentList {...getContentListProps()} />
      </S.ListWrapper>
    </S.Container>
  );
}
