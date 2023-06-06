"use client";

import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { Options } from "@/components/common/dropdown/sort/SortDropdown";
import SearchInput from "@/components/common/input/search/SearchInput";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "@/components/domain/creators/list/CreatorList";
import { creatorsApi } from "@/utils/api/creator";
import * as S from "./styled";

const OPTIONS: Options[] = ["신규순", "리뷰순", "팔로워순"];

export default function CreatorsPage() {
  const [creators, setCreators] = useImmer({
    data: [],
  });
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchCreatorsData();
  }, []);

  const fetchCreatorsData = (id?: number) => {
    console.log("fetch");
    const getResponse = async () => {
      try {
        const params = {
          sort: "latest",
          cursorId: id,
        };
        console.log("params", params);
        const response = await creatorsApi(params);
        console.log("response, data", response.data);
        setCreators((draft: any) => {
          draft.data = [...draft.data, ...response.data.pages];
        });
        setIsNextPage(response.data.hasNext);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

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
      {creators?.data && (
        <CreatorList
          data={creators.data}
          isNextPage={isNextPage}
          fetchCreatorsData={fetchCreatorsData}
        />
      )}
    </S.Section>
  );
}
