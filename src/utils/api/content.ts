import { apiInstance } from "./server";

export const contentsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/boards", { params });

  return response;
};
