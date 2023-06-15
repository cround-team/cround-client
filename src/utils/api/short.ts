import { apiInstance } from "./server";

export const shortsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/shorts", { params });

  return response;
};

export const shortsBookmarkListApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/members/me/shorts/bookmarks", {
    params,
  });

  return response;
};
