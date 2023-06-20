import type { ShortCardData } from "@/types";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import { useBookmark, useLike, useListFilter, useSearchKeyword } from "@/hooks";
import { shortsApi, shortsPopularApi } from "@/utils/api";

type PopularShorts = {
  visit: ShortCardData[];
  like: ShortCardData[];
  bookmark: ShortCardData[];
};

const INITIAL_SHORTS = [
  {
    shortsId: 0,
    title: "",
    thumbnailUrl: "",
    platformType: "",
    profileImage: "",
    author: "",
    likesCount: 0,
    bookmarksCount: 0,
    liked: false,
    bookmarked: false,
  },
];

const INITIAL_POPULAR_SHORTS = {
  visit: INITIAL_SHORTS,
  like: INITIAL_SHORTS,
  bookmark: INITIAL_SHORTS,
};
export default function useShortList() {
  const [shorts, setShorts] = useImmer<ShortCardData[]>(INITIAL_SHORTS);
  const [popularShorts, setPopularShorts] = useImmer<PopularShorts>(
    INITIAL_POPULAR_SHORTS
  );
  const [isNextPage, setIsNextPage] = useState(false);

  const { handleLikeShort, handleCancelLikeShort } = useLike();
  const { handleBookmarkShort, handleCancelBookmarkShort } = useBookmark();
  const {
    isDisabledPlatform,
    shortOptions,
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
    fetchShortList();
    fetchPopularsShortList();
  }, [filter.sort]);

  const fetchShortList = async (id?: number) => {
    console.log(filter.sort);
    try {
      const params = {
        sort: filter.sort,
        filter: filter.platforms.join(","),
        size: 12,
        cursorId: id,
        keyword: searchKeyword,
      };
      const response = await shortsApi(params);

      if (id) {
        setShorts([...shorts, ...response.data.pages]);
      } else {
        setShorts(response.data.pages);
      }
      setIsNextPage(response.data.hasNext);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const fetchPopularsShortList = async () => {
    try {
      const params = { size: 3 };
      const response = await shortsPopularApi(params);
      setPopularShorts((draft) => {
        draft.visit = response.data.popularVisitShortForms;
        draft.like = response.data.popularLikeShortForms;
        draft.bookmark = response.data.popularBookmarkShortForms;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmark = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await handleBookmarkShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleCancelBookmark = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await handleLikeShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleCancelLike = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await handleCancelLikeShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchShortList();
  };

  const getPopluarListProps = ({ ...otherProps } = {}) => ({
    visitShorts: popularShorts.visit,
    likeShorts: popularShorts.like,
    bookmarkShorts: popularShorts.bookmark,
    onLike: handleLike,
    onCancelLike: handleCancelLike,
    onBookmark: handleBookmark,
    onCancelBookmark: handleCancelBookmark,
    ...otherProps,
  });

  const getListProps = ({ ...otherProps } = {}) => ({
    data: shorts,
    isNextPage,
    onFetchData: fetchShortList,
    onLike: handleLike,
    onCancelLike: handleCancelLike,
    onBookmark: handleBookmark,
    onCancelBookmark: handleCancelBookmark,
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
    options: shortOptions,
    onSelectSort: handleChangeSort,
    onChangePlatform: handleChangePlatform,
    onFetchData: fetchShortList,
    ...otherProps,
  });

  return {
    searched,
    getPopluarListProps,
    getListProps,
    getSearchProps,
    getFilterProps,
  };
}
