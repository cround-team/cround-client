import type { Platforms } from "@/types/service";
import { apiInstance, multiPartInstance } from "./server";
import {
  CreatorRegister,
  CreatorRegisterBody,
  CustomCreators,
} from "@/types/creator";

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

export const creatorShortsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get(
    `/api/creators/${params.creatorId}/shorts`,
    { params }
  );

  return response;
};

export const creatorContentsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get(
    `api/creators/${params.creatorId}/boards`,
    { params }
  );

  return response;
};

export const creatorReviewsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get(
    `api/creators/${params.creatorId}/reviews`,
    { params }
  );

  return response;
};

export const creatorsCustomApi = async (params: Record<string, any>) => {
  const { data } = await apiInstance.get<CustomCreators>("/api/creators/home", {
    params,
  });

  return data;
};

export const creatorsDetailApi = async (creatorId: number) => {
  const response = await apiInstance.get(`/api/creators/${creatorId}`);

  return response;
};

export const creatorFollowApi = async (id: number) => {
  const response = await apiInstance.post(`/api/creators/${id}/following`);
  return response;
};

export const creatorUnFollowApi = async (id: number) => {
  const response = await apiInstance.delete(`/api/creators/${id}/following`);

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

export const creatorCreateApi = async (body: FormData) => {
  const { data } = await multiPartInstance.post<CreatorRegister>(
    "/api/creators",
    body
  );

  return data;
};

export const creatorWriteReivewApi = async (body: any) => {
  const response = await apiInstance.post(
    `/api/creators/${body.creatorId}/reviews`,
    body
  );

  return response;
};
