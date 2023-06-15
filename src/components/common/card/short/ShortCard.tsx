import Image from "next/image";

import type { ShortCardData } from "@/types/card";

import { media } from "@/styles/themes/foundations";
import CreatorInfoBox from "../../etc/CreatorInfoBox/CreatorInfoBox";
import * as S from "./styled";
import { PATH } from "@/constants";
import { TextBox } from "../../etc";

type ShortCardProps = {
  short: ShortCardData;
  isShowCreatorInfo?: boolean;
};

export default function ShortCard({
  short,
  isShowCreatorInfo,
}: ShortCardProps) {
  const {
    shortsId,
    title,
    thumbnailUrl,
    platformType,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  } = short;

  return (
    <S.LinkCard href={`${PATH.SHORTS.DETAIL}/${shortsId}`}>
      <S.Article>
        <S.Figure>
          <Image
            src={thumbnailUrl}
            fill={true}
            alt="profile"
            sizes={media.images.sizes}
            style={{ objectFit: "cover" }}
            // "fill" | Globals | "contain" | "cover" | "none" | "scale-down"
          />
        </S.Figure>
        <S.InfoGroup>
          <TextBox platform={platformType} title={title} />
          {isShowCreatorInfo && (
            <CreatorInfoBox
              profileImage={profileImage}
              author={author}
              liked={liked}
              likesCount={likesCount}
              bookmarked={bookmarked}
              bookmarksCount={bookmarksCount}
            />
          )}
        </S.InfoGroup>
      </S.Article>
    </S.LinkCard>
  );
}
