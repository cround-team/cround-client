import { apiInstance, multiPartInstance } from "./server";

export const creatorEditApi = async (body: any) => {
  const response = await multiPartInstance.patch("/api/creators/me", body);

  return response;
};

export const menteeEditApi = async (body: any) => {
  const response = await apiInstance.patch("api/members/me", body);

  return response;
};
