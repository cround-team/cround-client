export type BaseCardData = {
  name: string;
  platform: string;
  img: string;
};

export type CreatorCardData = BaseCardData & {
  theme: string;
  desc: string;
};

export type ShortCardData = {
  title: string;
  platform: string;
  img: string;
};

export type ContentCardData = {
  id: string;
  title: string;
  platform: string;
  desc: string;
};

// export type ShortCardData = BaseCardData & {
//   title: string;
//   profileImg: string;
//   like: number;
//   bookmark: number;
// };
