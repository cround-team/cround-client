import type { ContentCardData } from "@/types/card";
import { contentDetailApi } from "@/utils/api/content";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import useLike from "./useLike";
import useBookmark from "./useBookmark";

type UseContentDetailProps = {
  id: number;
};

const INITIAL_STATE = {
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
};

export default function useContentDetail({ id }: UseContentDetailProps) {
  const [data, setData] = useImmer<ContentCardData>(INITIAL_STATE);
  const {
    author,
    boardId,
    content,
    platformType,
    profileImage,
    title,
    likesCount,
    liked,
    bookmarksCount,
    bookmarked,
  } = data;

  const { handleLikeContent, handleCancelLikeContent } = useLike(id);
  const { handleBookmarkContent, handleCancelBookmarkContent } =
    useBookmark(id);

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    try {
      const response = await contentDetailApi(id);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    const { liked, likesCount } = await handleLikeContent();
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleCancelLike = async () => {
    const { liked, likesCount } = await handleCancelLikeContent();
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleBookmarkContent();
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  const handleCancelBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkContent();
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  return {
    baseInfo: {
      platformType,
      title,
      content,
    },
    creatorInfo: {
      id: boardId,
      profileImage,
      author,
      liked,
      likesCount,
      bookmarked,
      bookmarksCount,
    },
    handleBookmark,
    handleCancelBookmark,
    handleLike,
    handleCancelLike,
  };
}
