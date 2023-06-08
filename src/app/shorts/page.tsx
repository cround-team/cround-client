"use client";

import { Options } from "@/components/common/dropdown/sort/SortDropdown";
import PageFilter from "@/components/common/filter/pageFilter/PageFilter";
import SearchInput from "@/components/common/input/search/SearchInput";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import * as S from "./styled";
import ShortsList from "@/components/domain/shorts/list/ShortsList";
import { shortsApi } from "@/utils/api/short";
import type { Filter, Sorts } from "@/types/service";

const OPTIONS: Sorts[] = ["신규순", "북마크순", "좋아요순"];
const INITIAL_SORT = "latest";

export default function ShortsPage() {
  const [shorts, setShorts] = useImmer({
    data: [],
  });
  const [filter, setFilter] = useImmer<Filter>({
    platforms: [],
    sort: INITIAL_SORT,
  });
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchShortsData();
  }, []);

  const fetchShortsData = (id?: number) => {
    const getResponse = async () => {
      try {
        const params = {
          sort: filter.sort,
          filter: filter.platforms.join(","),
          size: 6,
          cursorId: id,
          // 키워드 추가해야함
          keyword: "",
        };
        const response = await shortsApi(params);

        if (id) {
          setShorts((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
          });
        } else {
          setShorts((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
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
          size: 6,
          cursorId: undefined,
          filter: platforms.join(","),
          // 키워드 추가해야함
          keyword: "",
        };
        const response = await shortsApi(params);
        setShorts((draft: any) => {
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
      {shorts?.data && (
        <ShortsList
          data={shorts.data}
          isNextPage={isNextPage}
          onFetchShortsData={fetchShortsData}
        />
      )}
    </S.Section>
  );
}
