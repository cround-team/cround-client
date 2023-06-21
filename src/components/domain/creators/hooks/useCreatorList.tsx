import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { CreatorCardData } from "@/types";
import { useListFilter, useSearchKeyword } from "@/hooks";
import { creatorsApi, shortsApi } from "@/utils/api";
import { INITIAL_CREATORS } from "@/constants/initial";

export default function useCreatorList() {
  const [creators, setCreators] = useImmer<CreatorCardData[]>(INITIAL_CREATORS);
  const [isNextPage, setIsNextPage] = useState(false);
  const {
    isDisabledPlatform,
    creatorOptions,
    filter,
    handleChangePlatform,
    handleChangeSort,
  } = useListFilter();
  const {
    isDisabledSearch,
    searched,
    searchKeyword,
    handleSearched,
    handleChangeKeyword,
  } = useSearchKeyword();

  useEffect(() => {
    fetchCreatorList();
  }, [filter.sort]);

  const fetchCreatorList = async (id?: number) => {
    try {
      const params = {
        sort: filter.sort,
        filter: filter.platforms.join(","),
        size: 12,
        cursorId: id,
        keyword: searchKeyword,
      };
      const response = await creatorsApi(params);

      if (id) {
        setCreators([...creators, ...response.data.pages]);
      } else {
        setCreators(response.data.pages);
      }
      setIsNextPage(response.data.hasNext);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const handleSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCreatorList();
  };

  const getListProps = ({ ...otherProps } = {}) => ({
    data: creators,
    isNextPage,
    onFetchData: fetchCreatorList,
    ...otherProps,
  });

  const getSearchProps = ({ ...otherProps } = {}) => ({
    isDisabled: isDisabledSearch,
    searchKeyword,
    onChange: handleChangeKeyword,
    onSubmit: handleSubmitKeyword,
    ...otherProps,
  });

  const getFilterProps = ({ ...otherProps } = {}) => ({
    isDisabledPlatform,
    platforms: filter.platforms,
    options: creatorOptions,
    onSelectSort: handleChangeSort,
    onChangePlatform: handleChangePlatform,
    onFetchData: fetchCreatorList,
    ...otherProps,
  });

  return {
    searched,
    getListProps,
    getSearchProps,
    getFilterProps,
  };
}
