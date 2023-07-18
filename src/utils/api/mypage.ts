import { apiInstance, multiPartInstance } from "./server";

export const creatorEditApi = async (body: any) => {
  const response = await multiPartInstance.patch("/api/creators/me", body);

  return response;
};

export const menTeeInfoApi = async () => {
  const response = await apiInstance.get("/api/members/me");

  return response;
};

export const menteeEditApi = async (body: any) => {
  const response = await apiInstance.patch("/api/members/me", body);

  return response;
};

export const sendMessageApi = async (body: any) => {
  const response = await apiInstance.post("/api/messages", body);

  return response;
};

export const messageListApi = async () => {
  const response = await apiInstance.get("/api/messages");

  return response;
};
