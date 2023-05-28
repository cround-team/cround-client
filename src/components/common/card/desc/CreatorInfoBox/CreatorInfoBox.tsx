import Image from "next/image";
import { BookmarkIcon, HeartIcon } from "@/assets/icons";

import * as S from "./styled";
import type { CreatorInfo } from "@/types/card";
import { media } from "@/styles/themes/foundations";

export default function CreatorInfoBox({
  profileImg,
  name,
  like,
  bookmark,
}: CreatorInfo) {
  return (
    <S.Container>
      <S.ImageNameGroup>
        <S.Figure>
          <Image
            src={profileImg}
            alt="Creator Profile Image"
            sizes={media.images.sizes}
            fill
          />
        </S.Figure>
        <S.Name>{name}</S.Name>
      </S.ImageNameGroup>
      <S.LikeBookmarkGroup>
        <div>
          <HeartIcon />
          <span>{like}</span>
        </div>
        <div>
          <BookmarkIcon />
          <span>{bookmark}</span>
        </div>
      </S.LikeBookmarkGroup>
    </S.Container>
  );
}
