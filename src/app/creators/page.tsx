"use client";

import SearchInput from "@/components/common/input/search/SearchInput";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "@/components/domain/creators/list/CreatorList";
import useCreatorList from "@/components/domain/creators/hooks/useCreatorList";
import NotList from "@/components/common/etc/notList/NotList";
import * as S from "./styled";

export default function CreatorsPage() {
  const { searched, getListProps, getSearchProps, getFilterProps } =
    useCreatorList();
  return (
    <S.Section>
      <SearchInput
        {...getSearchProps()}
        label="검색창"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      <PageFilter {...getFilterProps()} />
      {!!getListProps().data.length && <CreatorList {...getListProps()} />}
      {!getListProps().data.length && (
        <NotList label="크리에이터" searched={searched} />
      )}
    </S.Section>
  );
}
