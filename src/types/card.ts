export type CreatorCardData = {
  creatorId: number;
  description: string;
  platformActivityName: string;
  platformType: string;
  profileImage: string;
  platformTheme: string;

  id?: number;
  name?: string;
  img?: string;
  theme?: string;
  desc?: string;
};
export type ShortCardData = {
  shortsId: number;
  title: string;
  thumbnailUrl: string;
  platformType: string;
  profileImage: string;
  author: string;
  liked: boolean;
  likesCount: number;
  bookmarked: boolean;
  bookmarksCount: number;
};

export type ContentCardData = CreatorInfo & {
  id: number;
  title: string;
  platform: string;
  desc: string;
};

export type ReviewCardData = {
  id: number;
  name: string;
  rating: number;
  content: string;
};

export type CreatorInfo = {
  profileImage: string;
  author: string;
  liked: boolean;
  likesCount: number;
  bookmarked: boolean;
  bookmarksCount: number;
};
