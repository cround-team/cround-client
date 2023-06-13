"use client";

import type { Sorts } from "@/types/service";
import SearchInput from "@/components/common/input/search/SearchInput";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "@/components/domain/creators/list/CreatorList";
import * as S from "./styled";
import useListPage from "@/hooks/useListPage";

const OPTIONS: Sorts[] = ["신규순", "팔로워순", "리뷰순"];
const LIST_TYPE = "creators";

export default function CreatorsPage() {
  const {
    list,
    isNextPage,
    handleSelectPlatform,
    handleSelectSort,
    fetchListData,
  } = useListPage({ listType: LIST_TYPE });

  return (
    <S.Section>
      <SearchInput
        label="검색창"
        id="search"
        name="search"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      <PageFilter
        options={OPTIONS}
        onSelectSort={handleSelectSort}
        onSubmitPlatform={handleSelectPlatform}
      />
      {list?.data && (
        <CreatorList
          data={list.data}
          isNextPage={isNextPage}
          onFectData={fetchListData}
        />
      )}
    </S.Section>
  );
}
