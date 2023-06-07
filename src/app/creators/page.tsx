"use client";

import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { Filter, Sorts } from "@/types/service";
import SearchInput from "@/components/common/input/search/SearchInput";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import CreatorList from "@/components/domain/creators/list/CreatorList";
import { creatorsApi } from "@/utils/api/creator";
import * as S from "./styled";

const OPTIONS: Sorts[] = ["신규순", "팔로워순", "리뷰순"];
const INITIAL_SORT = "latest";

export default function CreatorsPage() {
  const [creators, setCreators] = useImmer({
    data: [],
  });
  const [filter, setFilter] = useImmer<Filter>({
    platforms: [],
    sort: INITIAL_SORT,
  });
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchCreatorsData();
  }, []);

  const fetchCreatorsData = (id?: number) => {
    const getResponse = async () => {
      try {
        const params = {
          sort: filter.sort,
          filter: filter.platforms.join(","),
          size: 12,
          cursorId: id,
          // 키워드 추가해야함
          keyword: "",
        };
        const response = await creatorsApi(params);

        if (id) {
          setCreators((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
          });
        } else {
          setCreators((draft: any) => {
            draft.data = response.data.pages;
          });
        }

        setIsNextPage(response.data.hasNext);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  const fetchFilterData = (
    sort = filter.sort,
    platforms = filter.platforms
  ) => {
    const getResponse = async () => {
      try {
        const params = {
          sort,
          size: 12,
          cursorId: undefined,
          filter: platforms.join(","),
          // 키워드 추가해야함
          keyword: "",
        };
        const response = await creatorsApi(params);
        setCreators((draft: any) => {
          draft.data = response.data.pages;
        });

        setIsNextPage(response.data.hasNext);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  const handleSelectPlatform = (selected: string[]) => {
    setFilter((draft) => {
      draft.platforms = selected;
    });
    fetchFilterData(filter.sort, selected);
  };

  const handleSelectSort = (sorted: string) => {
    setFilter((draft) => {
      draft.sort = sorted;
    });
    fetchFilterData(sorted, filter.platforms);
  };

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
      {creators?.data && (
        <CreatorList
          data={creators.data}
          isNextPage={isNextPage}
          onFetchCreatorsData={fetchCreatorsData}
        />
      )}
    </S.Section>
  );
}
