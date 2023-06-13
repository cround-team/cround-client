import { apiInstance } from "./server";

export const shortsApi = async (params: Record<string, any>) => {
  const response = await apiInstance.get("/api/shorts", { params });

  return response;
};
