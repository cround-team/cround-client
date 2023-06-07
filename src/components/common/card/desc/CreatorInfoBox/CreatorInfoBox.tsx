import Image from "next/image";
import { BookmarkIcon, HeartIcon } from "@/assets/icons";

import * as S from "./styled";
import type { CreatorInfo } from "@/types/card";
import { media } from "@/styles/themes/foundations";

export default function CreatorInfoBox({
  profileImage,
  author,
  liked,
  likesCount,
  bookmarked,
  bookmarksCount,
}: CreatorInfo) {
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
        <div>
          <HeartIcon />
          <span>{likesCount}</span>
        </div>
        <div>
          <BookmarkIcon />
          <span>{bookmarksCount}</span>
        </div>
      </S.LikeBookmarkGroup>
    </S.Container>
  );
}
