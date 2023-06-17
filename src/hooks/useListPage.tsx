import type { Filter } from "@/types/service";
import { contentsApi } from "@/utils/api/content";
import { creatorsApi, creatorsFollowApi } from "@/utils/api/creator";
import { shortsApi } from "@/utils/api/short";
import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";

const INITIAL_SORT = "latest";

type useListPageProps = {
  listType: "creators" | "shorts" | "contents";
};

export default function useListPage({ listType }: useListPageProps) {
  const [list, setList] = useImmer({
    data: [],
  });
  const [filter, setFilter] = useImmer<Filter>({
    platforms: [],
    sort: INITIAL_SORT,
  });
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = (id?: number) => {
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
        let response: any;
        if (listType === "creators") {
          response = await creatorsApi(params);
        } else if (listType === "shorts") {
          response = await shortsApi(params);
        } else if (listType === "contents") {
          response = await contentsApi(params);
        }

        if (id) {
          setList((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
          });
        } else {
          setList((draft: any) => {
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
        let response: any;
        if (listType === "creators") {
          response = await creatorsApi(params);
        } else if (listType === "shorts") {
          response = await shortsApi(params);
        } else if (listType === "contents") {
          response = await contentsApi(params);
        }
        setList((draft: any) => {
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

  return {
    list,
    isNextPage,
    fetchListData,
    handleSelectPlatform,
    handleSelectSort,
  };
}
