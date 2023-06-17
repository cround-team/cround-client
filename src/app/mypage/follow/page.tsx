"use client";

import * as S from "./styled";
import useCreatorFollowList from "@/hooks/list/useCreatorFollowList";
import CreatorList from "@/components/domain/creators/list/CreatorList";

export default function MyFollowPage() {
  const { list, isNextPage, fetchListData } = useCreatorFollowList();

  return (
    <S.Section>
      {list?.data && (
        <CreatorList
          data={list.data}
          isNextPage={isNextPage}
          onFetchData={fetchListData}
        />
      )}
    </S.Section>
  );
}
