"use client";

import type { Sorts } from "@/types/service";
import SearchInput from "@/components/common/input/search/SearchInput";
import * as S from "./styled";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";

import useListPage from "@/hooks/useListPage";
import ContentList from "@/components/domain/contents/ContentList";

const OPTIONS: Sorts[] = ["신규순", "좋아요순", "북마크순"];
const LIST_TYPE = "contents";

export default function ContentsPage() {
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
        <ContentList
          data={list.data}
          isNextPage={isNextPage}
          onFetchData={fetchListData}
        />
      )}
    </S.Section>
  );
}
