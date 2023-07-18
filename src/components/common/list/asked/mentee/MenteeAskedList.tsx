import Link from "next/link";
import Image from "next/image";

import { PATH } from "@/constants";
import { media } from "@/styles/themes/foundations";
import * as S from "./styled";

type MenteeAskedListProps = {
  data: {
    id: number;
    sender: number;
    receiver: number;
    text: string;
    updatedDate: string;
    creatorNickname: string;
    platformHeadType: string | null;
    platformHeadTheme: string | null;
    profileImage: string | null;
  };
};

export default function MenteeAskedList({ data }: MenteeAskedListProps) {
  const {
    id,
    sender,
    receiver,
    text,
    updatedDate,
    creatorNickname,
    platformHeadType,
    platformHeadTheme,
    profileImage,
  } = data;
  return (
    <S.Container>
      {profileImage && (
        <S.Figure>
          <Image
            src={profileImage}
            alt="creator profile image"
            sizes={media.images.sizes}
            fill
            priority
          />
        </S.Figure>
      )}
      <S.TextWrapper>
        <S.CreatorInfo>
          <h3>{creatorNickname}</h3>
          {platformHeadType && (
            <span>
              {platformHeadType} / {platformHeadTheme}
            </span>
          )}
        </S.CreatorInfo>
        <S.Text>{text}</S.Text>
        <S.Time>{updatedDate}</S.Time>
      </S.TextWrapper>
    </S.Container>
  );
}
