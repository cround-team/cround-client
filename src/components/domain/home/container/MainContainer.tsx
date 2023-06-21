"use client";

import { SearchInput } from "@/components/common";
import useMainList from "../hooks/useMainList";
import InitMainContainer from "./init/InitMainContainer";
import SearchedContainer from "./searched/SearchedContainer";
import * as S from "./styled";

export default function MainContainer() {
  const {
    searched,
    getLatestCreatorListProps,
    getInterestCreatorListProps,
    getRandomCreatorListProps,
    getCreatorListProps,
    getShortListProps,
    getContentListProps,
    getSearchProps,
  } = useMainList();
  return (
    <S.Section>
      <SearchInput
        {...getSearchProps()}
        label="검색창"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      {!searched && (
        <InitMainContainer
          getLatestCreatorListProps={getLatestCreatorListProps}
          getInterestCreatorListProps={getInterestCreatorListProps}
          getRandomCreatorListProps={getRandomCreatorListProps}
          getShortListProps={getShortListProps}
          getContentListProps={getContentListProps}
        />
      )}
      {searched && (
        <SearchedContainer
          searched={searched}
          getCreatorListProps={getCreatorListProps}
          getShortListProps={getShortListProps}
          getContentListProps={getContentListProps}
        />
      )}
    </S.Section>
  );
}
