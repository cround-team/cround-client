"use client";

import useShortList from "@/components/domain/shorts/hooks/useShortList";
import { PageFilter, SearchInput } from "@/components/common";
import PopularShortsList from "@/components/domain/shorts/popularList/PopularShortsList";
import ShortsList from "@/components/domain/shorts/list/ShortsList";
import NotList from "@/components/common/etc/notList/NotList";
import * as S from "./styled";

export default function ShortsPage() {
  const {
    searched,
    getPopluarListProps,
    getListProps,
    getSearchProps,
    getFilterProps,
  } = useShortList();

  return (
    <S.Section>
      <SearchInput
        {...getSearchProps()}
        label="검색창"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      {!searched && (
        <S.PopularContainer>
          <PopularShortsList
            {...getPopluarListProps()}
            data={getPopluarListProps().visitShorts}
            label="이번 주 조회수가 급증한 숏클래스"
          />
          <PopularShortsList
            {...getPopluarListProps()}
            data={getPopluarListProps().likeShorts}
            label="많은 사랑을 받은 숏클래스"
          />
          <PopularShortsList
            {...getPopluarListProps()}
            data={getPopluarListProps().bookmarkShorts}
            label="사람들이 많이 찜해둔 숏클래스"
          />
        </S.PopularContainer>
      )}

      <S.BaseContainer>
        <PageFilter {...getFilterProps()} />
        {!!getListProps().data.length && <ShortsList {...getListProps()} />}
        {!getListProps().data.length && (
          <NotList label="숏클래스" searched={searched} />
        )}
      </S.BaseContainer>
    </S.Section>
  );
}
