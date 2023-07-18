import { media } from "@/styles/themes/foundations";
import * as S from "./styled";
import Image from "next/image";

type MessageProps = {
  type: "mentee" | "creator";
  text: string;
  time: string;
  profileImage?: string;
};

export default function Message({
  type,
  text,
  time,
  profileImage,
}: MessageProps) {
  return (
    <>
      {type === "mentee" && (
        <S.MenteeContainer>
          <S.Time>{time}</S.Time>
          <S.MenteeText>{text}</S.MenteeText>
        </S.MenteeContainer>
      )}
      {type === "creator" && profileImage && (
        <S.CreatorContainer>
          <S.Figure>
            <Image
              src={profileImage}
              alt="creator profileImage"
              sizes={media.images.sizes}
              fill
              priority
            />
          </S.Figure>
          <S.TextTimeGroup>
            <S.CreatorText>{text}</S.CreatorText>
            <S.Time>{time}</S.Time>
          </S.TextTimeGroup>
        </S.CreatorContainer>
      )}
    </>
  );
}
