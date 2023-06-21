import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { ContentCardData } from "@/types";
import { useBookmark, useLike, useListFilter, useSearchKeyword } from "@/hooks";
import { contentsApi } from "@/utils/api";

const INITIAL_CONTENTS = [
  {
    author: "",
    boardId: 0,
    content: "",
    platformType: "",
    profileImage: "",
    title: "",
    likesCount: 0,
    bookmarksCount: 0,
    liked: false,
    bookmarked: false,
  },
];

export default function useContentList() {
  const [contents, setContents] = useImmer<ContentCardData[]>(INITIAL_CONTENTS);
  const [isNextPage, setIsNextPage] = useState(false);

  const { handleLikeContent, handleCancelLikeContent } = useLike();
  const { handleBookmarkContent, handleCancelBookmarkContent } = useBookmark();
  const {
    isDisabledPlatform,
    contentOptions,
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
    fetchContentList();
  }, [filter.sort]);

  const fetchContentList = async (id?: number) => {
    try {
      const params = {
        sort: filter.sort,
        filter: filter.platforms.join(","),
        size: 12,
        cursorId: id,
        keyword: searchKeyword,
      };
      const response = await contentsApi(params);

      if (id) {
        setContents([...contents, ...response.data.pages]);
      } else {
        setContents(response.data.pages);
      }
      setIsNextPage(response.data.hasNext);
    } catch (error) {
      console.error(error);
    } finally {
      handleSearched();
    }
  };

  const handleBookmark = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await handleBookmarkContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
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
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkContent(
      id
    );
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
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
    const { liked, likesCount } = await handleLikeContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
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
    const { liked, likesCount } = await handleCancelLikeContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleSubmitKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchContentList();
  };

  const getListProps = ({ ...otherProps } = {}) => ({
    data: contents,
    isNextPage,
    onFetchData: fetchContentList,
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
    platforms: filter.platforms,
    options: contentOptions,
    onSelectSort: handleChangeSort,
    onChangePlatform: handleChangePlatform,
    onFetchData: fetchContentList,
    ...otherProps,
  });

  return {
    searched,
    getListProps,
    getSearchProps,
    getFilterProps,
  };
}
