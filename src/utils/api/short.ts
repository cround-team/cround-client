import { apiInstance, multiPartInstance } from "./server";

export const shortsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/shorts", { params });

  return response;
};

export const shortRegisterApi = async (body: any) => {
  const response = await multiPartInstance.post("/api/shorts", body);

  return response;
};

export const shortsPopularApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/shorts/populars", { params });

  return response;
};

export const shortDetailApi = async (shortsId: number) => {
  const response = await apiInstance.get(`/api/shorts/${shortsId}`);

  return response;
};

export const shortEditApi = async (shortsId: number, body: any) => {
  const response = await multiPartInstance.patch(
    `/api/shorts/${shortsId}`,
    body
  );

  return response;
};

export const shortsBookmarkListApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/members/me/shorts/bookmarks", {
    params,
  });

  return response;
};

export const shortLikeApi = async (id: number) => {
  const response = await apiInstance.post(`/api/shorts/${id}/likes`);

  return response;
};

export const shortCancelLikeApi = async (id: number) => {
  const response = await apiInstance.delete(`/api/shorts/${id}/likes`);

  return response;
};

export const shortBookmarkApi = async (id: number) => {
  const response = await apiInstance.post(`/api/shorts/${id}/bookmarks`);

  return response;
};

export const shortCancelBookmarkApi = async (id: number) => {
  const response = await apiInstance.delete(`/api/shorts/${id}/bookmarks`);

  return response;
};

export const shortDeleteApi = async (id: number) => {
  const response = await apiInstance.delete(`api/shorts/${id}`);

  return response;
};
