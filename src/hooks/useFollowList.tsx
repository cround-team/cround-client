import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { CreatorCardData } from "@/types";
import { INITIAL_CREATORS } from "@/constants/initial";
import { creatorsFollowListApi } from "@/utils/api/creator";
import useFollow from "./useFollow";

export default function useFollowList() {
  const [creators, setCreators] = useImmer<CreatorCardData[]>(INITIAL_CREATORS);
  const [isNextPage, setIsNextPage] = useState(false);

  const { handleFollow, handleUnFollow } = useFollow();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (id?: number) => {
    try {
      const params = {
        size: 12,
        cursorId: id,
      };
      const response = await creatorsFollowListApi(params);
      id
        ? setCreators([...creators, ...response.data.pages])
        : setCreators(response.data.pages);
      setIsNextPage(response.data.hasNext);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    data: creators,
    isNextPage,
    fetchData,
  };
}
