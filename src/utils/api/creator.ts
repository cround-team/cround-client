import type { Platforms } from "@/types/service";
import { apiInstance, multiPartInstance } from "./server";

type CreatorsParams = {
  params: {
    sort: "latest" | "follow" | "review";
    filters: Platforms[];
    size: number;
    id: number;
  };
};

type CreatorNicknameBody = {
  nickname: string;
};

// type CreatorCreateBody = {
//   nickname: formData.get('nickname') as string,
//       description: formData.get('description') as string,
//       platformHeadType: formData.get('platformHeadType') as string,
//       platformHeadTheme: formData.get('platformHeadTheme') as string,
//   nickname: string;
//   description: string;
//   platformHeadType: string;
//   platformHeadTheme: string;
//   platformUrl: string;
//   tags: string[];
//   activityPlatforms: string[];
// };

export const creatorsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/creators", { params });

  return response;
};

export const creatorNicknameCheckApi = async (body: CreatorNicknameBody) => {
  const response = await apiInstance.post(
    "/api/creators/validations/nickname",
    body
  );

  return response;
};

export const creatorCreateApi = async (body: any) => {
  console.log("body", body);
  const response = await multiPartInstance.post("/api/creators", body);

  return response;
};
