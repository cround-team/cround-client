import { apiInstance } from "./server";

export const contentsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/boards", { params });

  return response;
};

export const contentRegisterApi = async (body: any) => {
  const response = await apiInstance.post("/api/boards", body);

  return response;
};

export const contentDetailApi = async (boardId: number) => {
  const response = await apiInstance.get(`/api/boards/${boardId}`);

  return response;
};

export const contentsBookmarkListApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/members/me/boards/bookmarks", {
    params,
  });

  return response;
};

export const contentLikeApi = async (id: number) => {
  const response = await apiInstance.post(`/api/boards/${id}/likes`);

  return response;
};

export const contentCancelLikeApi = async (id: number) => {
  const response = await apiInstance.delete(`/api/boards/${id}/likes`);

  return response;
};

export const contentBookmarkApi = async (id: number) => {
  const response = await apiInstance.post(`/api/boards/${id}/bookmarks`);

  return response;
};

export const contentCancelBookmarkApi = async (id: number) => {
  const response = await apiInstance.delete(`/api/boards/${id}/bookmarks`);

  return response;
};
