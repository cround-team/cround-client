import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import { INITIAL_CONTENTS, INITIAL_SHORTS } from "@/constants/initial";
import { ContentCardData, ShortCardData } from "@/types/card";
import { contentsBookmarkListApi } from "@/utils/api/content";
import { shortsBookmarkListApi } from "@/utils/api/short";
import useLike from "./useLike";
import useBookmark from "./useBookmark";

export default function useBookmarkList() {
  const [contents, setContents] = useImmer<ContentCardData[]>(INITIAL_CONTENTS);
  const [shorts, setShorts] = useImmer<ShortCardData[]>(INITIAL_SHORTS);
  const [isNextPage, setIsNextPage] = useImmer({
    content: false,
    short: false,
  });

  const {
    handleBookmarkShort: bookmarkShort,
    handleCancelBookmarkShort: cancelBookmarkShort,
    handleBookmarkContent: bookmarkContent,
    handleCancelBookmarkContent: cancelBookmarkContent,
  } = useBookmark();

  const {
    handleLikeShort: likeShort,
    handleCancelLikeShort: cancelLikeShort,
    handleLikeContent: likeContent,
    handleCancelLikeContent: cancelLikeContent,
  } = useLike();

  useEffect(() => {
    fetchShortListData();
    fetchContentListData();
  }, []);

  const fetchContentListData = async (id?: number) => {
    try {
      const params = {
        size: 12,
        cursorId: id,
      };
      const response = await contentsBookmarkListApi(params);
      id
        ? setContents([...contents, ...response.data.pages])
        : setContents(response.data.pages);
      setIsNextPage((draft) => {
        draft.content = response.data.hasNext;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchShortListData = async (id?: number) => {
    try {
      const params = {
        size: 12,
        cursorId: id,
      };
      const response = await shortsBookmarkListApi(params);
      id
        ? setShorts([...shorts, ...response.data.pages])
        : setShorts(response.data.pages);
      setIsNextPage((draft) => {
        draft.short = response.data.hasNext;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmarkContent = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await bookmarkContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleCancelBookmarkContent = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await cancelBookmarkContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleBookmarkShort = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await bookmarkShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleCancelBookmarkShort = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { bookmarked, bookmarksCount } = await cancelBookmarkShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, bookmarked, bookmarksCount };
        }
        return item;
      });
    });
  };

  const handleLikeContent = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await likeContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleCancelLikeContent = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await cancelLikeContent(id);
    setContents((draft) => {
      return draft.map((item) => {
        if (item.boardId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleLikeShort = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await likeShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const handleCancelLikeShort = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    const { liked, likesCount } = await cancelLikeShort(id);
    setShorts((draft) => {
      return draft.map((item) => {
        if (item.shortsId === id) {
          return { ...item, liked, likesCount };
        }
        return item;
      });
    });
  };

  const getContentsProps = ({ ...otherProps } = {}) => ({
    data: contents,
    isNextPage: isNextPage.content,
    onFetchData: fetchContentListData,
    onBookmark: handleBookmarkContent,
    onCancelBookmark: handleCancelBookmarkContent,
    onLike: handleLikeContent,
    onCancelLike: handleCancelLikeContent,
    ...otherProps,
  });

  const getShortsProps = ({ ...otherProps } = {}) => ({
    data: shorts,
    isNextPage: isNextPage.short,
    onFetchData: fetchShortListData,
    onBookmark: handleBookmarkShort,
    onCancelBookmark: handleCancelBookmarkShort,
    onLike: handleLikeShort,
    onCancelLike: handleCancelLikeShort,
    ...otherProps,
  });

  return {
    getContentsProps,
    getShortsProps,
  };
}
