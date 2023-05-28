"use client";

import type { Options } from "@/components/common/dropdown/sort/SortDropdown";
import SearchInput from "@/components/common/input/search/SearchInput";

import * as S from "./styled";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "./list/CreatorList";

const OPTIONS: Options[] = ["신규순", "리뷰순", "팔로워순"];

export default function CreatorsContainer() {
  return (
    <S.Section>
      <S.InputWrapper>
        <SearchInput
          label="검색창"
          id="search"
          name="search"
          placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
        />
      </S.InputWrapper>
      <PageFilter options={OPTIONS} />
      <CreatorList />
    </S.Section>
  );
}
