import {
  creatorContentsApi,
  creatorReviewsApi,
  creatorShortsApi,
  creatorsDetailApi,
} from "@/utils/api";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import {
  INITIAL_CONTENTS,
  INITIAL_CREATOR_INFO,
  INITIAL_REVIEWS,
  INITIAL_SHORTS,
} from "@/constants";
import { useBookmark, useFollow, useLike } from "@/hooks";
import { ContentCardData, ReviewCardData, ShortCardData } from "@/types";
import { useAuthContext } from "@/context/AuthContext";

type CreatorInfo = {
  owned: boolean;
  activityPlatforms: string[];
  avgRating: string;
  creatorNickname: string;
  memberId: number;
  description: string;
  followed: boolean;
  followersCount: number;
  platformHeadTheme: string;
  platformHeadType: string;
  platformUrl: string;
  profileImage: string;
  tags: string[];
};

const INITIAL_IS_NEXT_PAGE = {
  shorts: false,
  contents: false,
  reviews: false,
};

export default function useCreatorDetail(creatorId: number) {
  const [data, setData] = useImmer<CreatorInfo>(INITIAL_CREATOR_INFO);
  const [shorts, setShorts] = useImmer<ShortCardData[]>(INITIAL_SHORTS);
  const [contents, setContents] = useImmer<ContentCardData[]>(INITIAL_CONTENTS);
  const [reviews, setReviews] = useImmer<ReviewCardData[]>(INITIAL_REVIEWS);
  const [isNextPage, setIsNextPage] = useImmer(INITIAL_IS_NEXT_PAGE);
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const { user } = useAuthContext();
  const {
    owned: isOwned,
    activityPlatforms,
    avgRating,
    creatorNickname,
    memberId,
    description,
    followed,
    followersCount,
    platformHeadTheme,
    platformHeadType,
    platformUrl,
    profileImage,
    tags,
  } = data;

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

  const { handleFollow, handleUnFollow } = useFollow();

  useEffect(() => {
    fetchData();
    fetchShortList();
    fetchContentList();
    fetchReviewList();
  }, []);

  const fetchData = async () => {
    try {
      const response = await creatorsDetailApi(creatorId);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchShortList = async (id?: number) => {
    try {
      const params = {
        creatorId,
        size: 5,
        cursorId: id,
      };
      const response = await creatorShortsApi(params);

      if (id) {
        setShorts([...shorts, ...response.data.pages]);
      } else {
        setShorts(response.data.pages);
      }
      setIsNextPage((draft) => {
        draft.shorts = response.data.hasNext;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContentList = async (id?: number) => {
    try {
      const params = {
        creatorId,
        size: 5,
        cursorId: id,
      };
      const response = await creatorContentsApi(params);

      if (id) {
        setContents([...contents, ...response.data.pages]);
      } else {
        setContents(response.data.pages);
      }
      setIsNextPage((draft) => {
        draft.contents = response.data.hasNext;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReviewList = async (id?: number) => {
    try {
      const params = {
        creatorId,
        size: 5,
        cursorId: id,
      };
      const response = await creatorReviewsApi(params);

      if (id) {
        setReviews([...reviews, ...response.data.reviews]);
      } else {
        setReviews(response.data.reviews);
      }
      setIsNextPage((draft) => {
        draft.reviews = response.data.hasNext;
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

  const handleCreatorFollow = async () => {
    const { followed } = await handleFollow(creatorId);
    setData((draft) => {
      draft.followed = followed;
      draft.followersCount = followersCount + 1;
    });
  };

  const handleCreatorUnFollow = async () => {
    const { followed } = await handleUnFollow(creatorId);
    setData((draft) => {
      draft.followed = followed;
    });
  };

  const handleOpenAskModal = () => {
    if (user.roleName === "creator") {
      return alert("현재 크리에이터끼리의 대화는 불가능합니다");
    }

    setIsAskModalOpen(true);
  };

  const handleCloseAskModal = () => {
    setIsAskModalOpen(false);
  };

  const getProfileProps = ({ ...otherProps } = {}) => ({
    isOwned,
    isAskModalOpen,
    profileImage,
    creatorNickname,
    memberId,
    description,
    tags,
    activityPlatforms,
    platformHeadTheme,
    avgRating,
    followersCount,
    platformHeadType,
    platformUrl,
    followed,
    onFollow: handleCreatorFollow,
    onUnFollow: handleCreatorUnFollow,
    onOpenAskModal: handleOpenAskModal,
    onCloseAskModal: handleCloseAskModal,
    ...otherProps,
  });

  const getShortListProps = ({ ...otherProps } = {}) => ({
    data: shorts,
    isNextPage: isNextPage.shorts,
    onFetchData: fetchShortList,
    onLike: handleLikeShort,
    onCancelLike: handleCancelLikeShort,
    onBookmark: handleBookmarkShort,
    onCancelBookmark: handleCancelBookmarkShort,
    ...otherProps,
  });

  const getContentListProps = ({ ...otherProps } = {}) => ({
    data: contents,
    isNextPage: isNextPage.contents,
    onFetchData: fetchContentList,
    onLike: handleLikeContent,
    onCancelLike: handleCancelLikeContent,
    onBookmark: handleBookmarkContent,
    onCancelBookmark: handleCancelBookmarkContent,
    ...otherProps,
  });

  const getReviewListProps = ({ ...otherProps } = {}) => ({
    data: reviews,
    isOwned,
    isNextPage: isNextPage.reviews,
    creatorNickname,
    onFetchData: fetchReviewList,
    ...otherProps,
  });

  const getBubblesProps = ({ ...otherProps } = {}) => ({
    creatorNickname,
    platformUrl,
    ...otherProps,
  });

  return {
    getProfileProps,
    getShortListProps,
    getContentListProps,
    getReviewListProps,
    getBubblesProps,
  };
}
