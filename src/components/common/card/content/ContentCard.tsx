import type { ContentCardData } from "@/types/card";
import { PATH } from "@/constants";
import { CreatorInfoBox } from "../../etc";
import * as S from "./styled";

type ContentCardProps = {
  content: ContentCardData;
  isShowCreatorInfo?: boolean;
  onLike?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelLike?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onBookmark?: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelBookmark?: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export default function ContentCard({
  content,
  isShowCreatorInfo,
  onLike,
  onCancelLike,
  onBookmark,
  onCancelBookmark,
}: ContentCardProps) {
  const {
    boardId,
    title,
    content: desc,
    platformType,
    profileImage,
    author,
    likesCount,
    bookmarksCount,
    liked,
    bookmarked,
  } = content;

  const creatorInfo = {
    id: boardId,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  };

  return (
    <S.LinkCard href={`${PATH.CONTENTS.DETAIL}/${boardId}`}>
      <S.Article>
        <S.InfoGroup>
          <S.TitleGroup>
            <span>{platformType}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
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
