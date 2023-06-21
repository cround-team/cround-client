"use client";

import { useFollowList } from "@/hooks";
import CreatorList from "@/components/domain/creators/list/CreatorList";
import * as S from "./styled";

export default function MyFollowPage() {
  const { data, isNextPage, fetchData } = useFollowList();

  return (
    <S.Section>
      <CreatorList
        data={data}
        isNextPage={isNextPage}
        onFetchData={fetchData}
      />
    </S.Section>
  );
}
