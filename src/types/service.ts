export type Platforms =
  | "youtube"
  | "instagram"
  | "tiktok"
  | "twitch"
  | "afreecatv"
  | "blog"
  | "podcast"
  | "spoon"
  | "zepetto"
  | "emoticon"
  | "ntf";

export type Sorts = "신규순" | "팔로워순" | "좋아요순" | "북마크순" | "리뷰순";

export type Filter = {
  platforms: string[];
  sort: string;
};
