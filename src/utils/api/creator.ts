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

type CreatorFollowBody = {
  sourceId: string;
  targetId: number;
};

export const creatorsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/creators", { params });

  return response;
};

export const creatorsCustomApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/creators/home", { params });

  return response;
};

export const creatorFollowApi = async (body: CreatorFollowBody) => {
  const response = await apiInstance.post("/api/members/following", body);

  return response;
};

export const creatorUnFollowApi = async (params: Record<string, any>) => {
  const response = await apiInstance.delete("/api/members/following", {
    params,
  });

  return response;
};

export const creatorsFollowListApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get(
    "/api/members/me/creators/followings",
    { params }
  );

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
