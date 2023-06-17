import { creatorsFollowListApi } from "@/utils/api/creator";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function useCreatorFollowList() {
  const [list, setList] = useImmer({
    data: [],
  });

  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = (id?: number) => {
    const getResponse = async () => {
      try {
        const params = {
          size: 12,
          cursorId: id,
        };
        const response = await creatorsFollowListApi(params);

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

  return {
    list,
    isNextPage,
    fetchListData,
  };
}
