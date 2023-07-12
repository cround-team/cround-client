import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { ShortCardData } from "@/types/card";
import { shortDeleteApi, shortDetailApi } from "@/utils/api/short";
import { useBookmark, useLike } from "@/hooks";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";
import { getVideoId } from "@/utils/video";

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
  authored: true,
};

export default function useShortDetail({ id }: UseShortDetailProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [data, setData] = useImmer<ShortCardData>(INITIAL_STATE);
  const {
    authored,
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

  const { handleLikeShort, handleCancelLikeShort } = useLike();
  const { handleBookmarkShort, handleCancelBookmarkShort } = useBookmark();
  const router = useRouter();

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    try {
      const response = await shortDetailApi(id);

      setData(response.data);
      setData((draft) => {
        draft.shortFormUrl = getVideoId(response.data.shortFormUrl);
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const testDetailData = async () => {
    const response = {
      shortsId: 1,
      title: "ASMR에 최적인 사운드를 설정하는 방법과 장비 추천",
      content: `ASMR에 도전하고 싶은데 방음부터 장비 설정까지 막막하지 않으신가요?\n 그런 분들을 위해 제 경험을 담은 꿀팁을 준비했습니다!`,
      author: "코코",
      platformType: "유튜브",
      profileImage:
        "https://cround-bucket.s3.ap-northeast-2.amazonaws.com/zzanggu.jpg",
      shortFormUrl: getVideoId("https://www.youtube.com/watch?v=eqqhuFA949k"),
      likesCount: 200,
      bookmarksCount: 200,
      liked: false,
      bookmarked: false,
      authored: true,
    };
    setData(response);
  };

  const handleLike = async () => {
    const { liked, likesCount } = await handleLikeShort(id);
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleCancelLike = async () => {
    const { liked, likesCount } = await handleCancelLikeShort(id);
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleBookmarkShort(id);
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  const handleCancelBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkShort(id);
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  const handleToggleDropdown = () => setIsOpenDropdown((prev) => !prev);

  const handleOpenDeleteModal = () => {
    setIsOpenDropdown(false);
    setIsOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const handleGoEditPage = () => {
    setIsOpenDropdown(false);
    router.push(`${PATH.SHORTS.EDIT}/${id}`);
    // 페이지 이동
  };

  const handleDeleteShort = async () => {
    try {
      return await shortDeleteApi(id);
    } catch (error) {
      console.error(error);
    }
  };

  const getBaseInfoProps = ({ ...otherProps } = {}) => ({
    isOwned: authored,
    platformType,
    title,
    content,
    shortFormUrl,
    ...otherProps,
  });

  const getCreatorInfoProps = ({ ...otherProps } = {}) => ({
    data: {
      id: shortsId,
      profileImage,
      author,
      liked,
      likesCount,
      bookmarked,
      bookmarksCount,
    },
    onBookmark: handleBookmark,
    onCancelBookmark: handleCancelBookmark,
    onLike: handleLike,
    onCancelLike: handleCancelLike,
    ...otherProps,
  });

  const getDropdownProps = ({ ...otherProps } = {}) => ({
    onGoEditPage: handleGoEditPage,
    onOpenDeleteModal: handleOpenDeleteModal,
    ...otherProps,
  });

  const getDeleteModalProps = ({ ...otherProps } = {}) => ({
    isMounted: isOpenDeleteModal,
    onClose: handleCloseDeleteModal,
    onDelete: handleDeleteShort,
    ...otherProps,
  });

  return {
    isOpenDropdown,
    isOpenDeleteModal,
    handleToggleDropdown,
    getBaseInfoProps,
    getCreatorInfoProps,
    getDropdownProps,
    getDeleteModalProps,
  };
}
