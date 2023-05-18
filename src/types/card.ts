export type BaseCardData = {
  name: string;
  platform: string;
  img: string;
};

export type CreatorCardData = BaseCardData & {
  theme: string;
  desc: string;
};

export type ShortCardData = BaseCardData & {
  title: string;
  profileImg: string;
  like: number;
  bookmark: number;
};

export type ContentCardData = BaseCardData & {
  title: string;
  profileImg: string;
  desc: string;
  like: number;
  bookmark: number;
};
