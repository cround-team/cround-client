"use client";

import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import SearchInput from "@/components/common/input/search/SearchInput";
import ShortsList from "@/components/domain/shorts/list/ShortsList";
import type { Filter, Sorts } from "@/types/service";
import useListPage from "@/hooks/useListPage";
import * as S from "./styled";

const OPTIONS: Sorts[] = ["신규순", "북마크순", "좋아요순"];
const LIST_TYPE = "shorts";

export default function ShortsPage() {
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
        <ShortsList
          data={list.data}
          isNextPage={isNextPage}
          onFetchData={fetchListData}
        />
      )}
    </S.Section>
  );
}
