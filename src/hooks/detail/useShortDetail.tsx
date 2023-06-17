import type { ShortCardData } from "@/types/card";
import { shortDetailApi } from "@/utils/api/short";
import { useEffect } from "react";
import { useImmer } from "use-immer";
import useLike from "./useLike";
import useBookmark from "./useBookmark";

type UseShortDetailProps = {
  id: number;
};

const INITIAL_STATE = {
  shortsId: 0,
  title: "",
  content: "",
  author: "",
  platformType: "",
  profileImage: "",
  shortFormUrl: "",
  likesCount: 0,
  bookmarksCount: 0,
  liked: false,
  bookmarked: false,
};

export default function useShortDetail({ id }: UseShortDetailProps) {
  const [data, setData] = useImmer<ShortCardData>(INITIAL_STATE);
  const {
    shortsId,
    title,
    content,
    author,
    platformType,
    profileImage,
    shortFormUrl,
    likesCount,
    bookmarksCount,
    liked,
    bookmarked,
  } = data;

  const { handleLikeShort, handleCancelLikeShort } = useLike(id);
  const { handleBookmarkShort, handleCancelBookmarkShort } = useBookmark(id);

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    try {
      const response = await shortDetailApi(id);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    const { liked, likesCount } = await handleLikeShort();
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleCancelLike = async () => {
    const { liked, likesCount } = await handleCancelLikeShort();
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleBookmarkShort();
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  const handleCancelBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkShort();
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
      shortFormUrl,
    },
    creatorInfo: {
      id: shortsId,
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
