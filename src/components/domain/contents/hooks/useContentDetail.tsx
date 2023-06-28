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
  isOwned: true,
};

export default function useContentDetail({ id }: UseContentDetailProps) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [data, setData] = useImmer<ContentCardData>(INITIAL_STATE);
  const {
    isOwned,
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
    // fetchDetailData();
    testDetailData();
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

  const testDetailData = async () => {
    const response = {
      boardId: 1,
      title: "제목한개sdfdfafdadafsdafsdafs",
      content: `유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다.\n저 또한 시작할 때 가장 궁금했던 부분이기도 했구요. 유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요. 유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요. 유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요.\n유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요.유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요.유튜브 채널을 운영하면서 주변 사람들에게 가장 많이 받았던 질문 중 하나는, 당연 수익에 관한 것이었습니다. 저 또한 시작할 때 가장 궁금했던 부분이기도 했구요.`,
      author: "한개개개",
      profileImage:
        "https://cround-bucket.s3.ap-northeast-2.amazonaws.com/zzanggu.jpg",
      platformType: "NFT",
      likesCount: 0,
      bookmarksCount: 0,
      authored: false,
      liked: false,
      bookmarked: false,
      isOwned: true,
    };
    setData(response);
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
    // 페이지 이동
  };

  const handleDeleteContent = async () => {
    try {
      return await contentDeleteApi(id);
    } catch (error) {
      console.error(error);
    }
  };

  const getBaseInfoProps = ({ ...otherProps } = {}) => ({
    isOwned,
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
