import { Sorts } from "./service";
import { CreatorCardData } from "@/types/card";

export type CreatorListParams = {
  sort?: Sorts;
  filter?: string;
  size?: number;
  cursorId?: number;
  keyword?: string;
};

export type CreatorRegisterBody = {
  profileImage: File | null;
  nickname: string;
  description: string;
  activityPlatforms: string[];
  platformHeadType: string;
  platformHeadTheme: string;
  tags: string[];
  platformUrl: string;
};

export type CreatorRegister = {
  profileImage: string;
  creatorId: number;
};

export type CustomCreators = {
  latestCreators: CreatorCardData[];
  interestCreators: CreatorCardData[];
};
