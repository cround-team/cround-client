"use client";

import SearchInput from "@/components/common/input/search/SearchInput";
import SelectPlatform from "@/components/domain/home/container/platform/PlatformList";

import CreatorList from "./creator/CreatorList";
import ShortList from "./short/ShortList";
import ContentList from "./content/ContentList";
import * as S from "./styled";

export default function HomePageContainer() {
  return (
    <S.Section>
      <SelectPlatform />
      <SearchInput
        label="검색창"
        id="search"
        name="search"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      <S.Wrapper>
        <CreatorList creatorType="a" />
        <CreatorList creatorType="b" />
        <CreatorList creatorType="c" />
        {/* <ShortList />
        <ContentList /> */}
      </S.Wrapper>
    </S.Section>
  );
}
