import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import type { ContentCardData } from "@/types/card";
import { contentDeleteApi, contentDetailApi } from "@/utils/api/content";
import { useBookmark, useLike } from "@/hooks";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";

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
  authored: true,
};

export default function useContentDetail({ id }: UseContentDetailProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [data, setData] = useImmer<ContentCardData>(INITIAL_STATE);
  const {
    authored,
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

  const { handleLikeContent, handleCancelLikeContent } = useLike();
  const { handleBookmarkContent, handleCancelBookmarkContent } = useBookmark();
  const router = useRouter();

  useEffect(() => {
    fetchDetailData();
  }, []);

  const fetchDetailData = async () => {
    try {
      const response = await contentDetailApi(id);
      setData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    const { liked, likesCount } = await handleLikeContent(id);
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleCancelLike = async () => {
    const { liked, likesCount } = await handleCancelLikeContent(id);
    setData((draft) => {
      draft.liked = liked;
      draft.likesCount = likesCount;
    });
  };

  const handleBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleBookmarkContent(id);
    setData((draft) => {
      draft.bookmarked = bookmarked;
      draft.bookmarksCount = bookmarksCount;
    });
  };

  const handleCancelBookmark = async () => {
    const { bookmarked, bookmarksCount } = await handleCancelBookmarkContent(
      id
    );
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
    router.push(`${PATH.CONTENTS.EDIT}/${id}`);
  };

  const handleDeleteContent = async () => {
    try {
      await contentDeleteApi(id);
      setIsOpenDeleteModal(false);
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getBaseInfoProps = ({ ...otherProps } = {}) => ({
    isOwned: authored,
    platformType,
    title,
    content,
    ...otherProps,
  });

  const getCreatorInfoProps = ({ ...otherProps } = {}) => ({
    data: {
      id: boardId,
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
    onToggleDropdown: handleToggleDropdown,
    ...otherProps,
  });

  const getDeleteModalProps = ({ ...otherProps } = {}) => ({
    isMounted: isOpenDeleteModal,
    onClose: handleCloseDeleteModal,
    onDelete: handleDeleteContent,
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
