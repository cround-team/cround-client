import Image from "next/image";

import * as S from "./styled";
import { media } from "@/styles/themes/foundations";
import Heart from "./heart/Heart";
import Bookmark from "./bookmark/Bookmark";

type CreatorInfoBoxProps = {
  data: {
    id: number;
    profileImage: string;
    author: string;
    liked: boolean;
    likesCount: number;
    bookmarked: boolean;
    bookmarksCount: number;
  };
  onBookmark: () => void;
  onCancelBookmark: () => void;
  onLike: () => void;
  onCancelLike: () => void;
};

export default function CreatorInfoBox({
  data,
  onBookmark,
  onCancelBookmark,
  onLike,
  onCancelLike,
}: CreatorInfoBoxProps) {
  const {
    id,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  } = data;
  return (
    <S.Container>
      <S.ImageNameGroup>
        <S.Figure>
          <Image
            src={profileImage}
            alt="Creator Profile Image"
            sizes={media.images.sizes}
            fill
          />
        </S.Figure>
        <S.Name>{author}</S.Name>
      </S.ImageNameGroup>
      <S.LikeBookmarkGroup>
        <Heart
          isLiked={liked}
          count={likesCount}
          onClick={liked ? onCancelLike : onLike}
        />
        <Bookmark
          isBookmarked={bookmarked}
          count={bookmarksCount}
          onClick={bookmarked ? onCancelBookmark : onBookmark}
        />
      </S.LikeBookmarkGroup>
    </S.Container>
  );
}
