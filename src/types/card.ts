export type CreatorCardData = {
  creatorId: number;
  description: string;
  platformActivityName: string;
  platformType: string;
  profileImage: string;
  platformTheme: string;
};
export type ShortCardData = {
  shortsId: number;
  content?: string;
  title: string;
  thumbnailUrl?: string;
  shortFormUrl?: string;
  platformType: string;
  profileImage: string;
  author: string;
  liked?: boolean;
  likesCount?: number;
  bookmarked?: boolean;
  bookmarksCount?: number;
};

export type ContentCardData = {
  boardId: number;
  title: string;
  content: string;
  platformType: string;
  profileImage: string;
  author: string;
  likesCount?: number;
  bookmarksCount?: number;
  liked?: boolean;
  bookmarked?: boolean;
};

export type ReviewCardData = {
  memberId: number;
  nickname: string;
  rating: number;
  content: string;
  createdAt: string;
};
