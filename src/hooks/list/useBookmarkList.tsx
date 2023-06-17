import { ContentCardData, ShortCardData } from "@/types/card";
import { contentsBookmarkListApi } from "@/utils/api/content";
import { shortsBookmarkListApi } from "@/utils/api/short";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

type Contents = {
  data: ContentCardData[];
};

type Shorts = {
  data: ShortCardData[];
};

export default function useBookmarkList() {
  const [contents, setContents] = useImmer<Contents>({
    data: [],
  });
  const [shorts, setShorts] = useImmer<Shorts>({
    data: [],
  });

  const [isContentNextPage, setIsContentNextPage] = useState(false);
  const [isShortNextPage, setIsShortNextPage] = useState(false);

  useEffect(() => {
    fetchShortListData();
    fetchContentListData();
  }, []);

  const fetchContentListData = (id?: number) => {
    const getResponse = async () => {
      try {
        const params = {
          size: 12,
          cursorId: id,
        };
        const response = await contentsBookmarkListApi(params);

        if (id) {
          setContents((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
          });
        } else {
          setContents((draft: any) => {
            draft.data = response.data.pages;
          });
        }

        setIsContentNextPage(response.data.hasNext);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  const fetchShortListData = (id?: number) => {
    const getResponse = async () => {
      try {
        const params = {
          size: 12,
          cursorId: id,
        };
        const response = await shortsBookmarkListApi(params);

        if (id) {
          setShorts((draft: any) => {
            draft.data = [...draft.data, ...response.data.pages];
          });
        } else {
          setShorts((draft: any) => {
            draft.data = response.data.pages;
          });
        }

        setIsShortNextPage(response.data.hasNext);
      } catch (error) {
        console.error(error);
      }
    };
    getResponse();
  };

  return {
    contents: contents.data,
    shorts: shorts.data,
    isContentNextPage,
    isShortNextPage,
    fetchShortListData,
    fetchContentListData,
  };
}
