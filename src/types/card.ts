export type CreatorCardData = {
  id: number;
  name: string;
  platform: string;
  img: string;
  theme: string;
  desc: string;
};

export type ShortCardData = CreatorInfo & {
  id: number;
  title: string;
  platform: string;
  img: string;
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
  profileImg: string;
  name: string;
  like: number;
  bookmark: number;
};
