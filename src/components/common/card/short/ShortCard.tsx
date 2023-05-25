import Image from "next/image";

import type { ShortCardData } from "@/types/card";
import TextBox from "../desc/textBox/TextBox";
import { media } from "@/styles/themes/foundations";
import CreatorInfoBox from "../desc/CreatorInfoBox/CreatorInfoBox";
import * as S from "./styled";

type ShortCardProps = {
  short: ShortCardData;
  isShowCreatorInfo?: boolean;
};

export default function ShortCard({
  short,
  isShowCreatorInfo,
}: ShortCardProps) {
  const { platform, img, title, profileImg, name, like, bookmark } = short;
  return (
    <S.Article>
      <S.Figure>
        <Image
          src={img}
          fill={true}
          alt="profile"
          sizes={media.images.sizes}
          style={{ objectFit: "cover" }}
        />
      </S.Figure>
      <S.InfoGroup>
        <TextBox platform={platform} title={title} />
        {isShowCreatorInfo && (
          <CreatorInfoBox
            profileImg={profileImg}
            name={name}
            like={like}
            bookmark={bookmark}
          />
        )}
      </S.InfoGroup>
    </S.Article>
  );
}
