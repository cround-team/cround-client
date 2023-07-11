import Image from "next/image";

import type { ShortCardData } from "@/types/card";
import { media } from "@/styles/themes/foundations";
import { CreatorInfoBox } from "../../etc";
import { PATH } from "@/constants";
import * as S from "./styled";

type ShortCardProps = {
  short: ShortCardData;
  isShowCreatorInfo?: boolean;
  onLike?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelLike?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onBookmark?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelBookmark?: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export default function ShortCard({
  short,
  isShowCreatorInfo,
  onLike,
  onCancelLike,
  onBookmark,
  onCancelBookmark,
}: ShortCardProps) {
  const {
    shortsId,
    title,
    thumbnailUrl = "",
    platformType,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  } = short;

  const creatorInfo = {
    id: shortsId,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  };

  return (
    <S.LinkCard href={`${PATH.SHORTS.DETAIL}/${shortsId}`}>
      <S.Article>
        {thumbnailUrl && (
          <S.Figure>
            <Image
              src={thumbnailUrl}
              fill={true}
              alt="profile"
              sizes={media.images.sizes}
              style={{ objectFit: "cover" }}
              priority
              // "fill" | Globals | "contain" | "cover" | "none" | "scale-down"
            />
          </S.Figure>
        )}
        <S.InfoGroup>
          <S.TitleGroup>
            <span>{platformType}</span>
            <h3>{title}</h3>
          </S.TitleGroup>
          {isShowCreatorInfo && (
            <CreatorInfoBox
              data={creatorInfo}
              onBookmark={onBookmark}
              onCancelBookmark={onCancelBookmark}
              onLike={onLike}
              onCancelLike={onCancelLike}
            />
          )}
        </S.InfoGroup>
      </S.Article>
    </S.LinkCard>
  );
}
