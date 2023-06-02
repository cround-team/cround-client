"use client";

import type { Options } from "@/components/common/dropdown/sort/SortDropdown";
import SearchInput from "@/components/common/input/search/SearchInput";

import * as S from "./styled";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "./list/CreatorList";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import { creatorsApi } from "@/utils/api/auth/creator";

const OPTIONS: Options[] = ["신규순", "리뷰순", "팔로워순"];

export default function CreatorsContainer() {
  const [creators, setCreators] = useImmer({
    data: [],
  });

  useEffect(() => {
    const fetchCreatorsData = () => {
      console.log("fetch");
      const getResponse = async () => {
        try {
          const params = {
            sort: "latest",
            // filter: "youtube",
            // keyword: "",
          };

          const response = await creatorsApi();
          setCreators((draft) => {
            draft.data = response.data.pages;
          });
        } catch (error) {
          console.error(error);
        }
      };
      getResponse();
    };
    fetchCreatorsData();
  }, []);

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
      {creators?.data && <CreatorList data={creators.data} />}
    </S.Section>
  );
}
