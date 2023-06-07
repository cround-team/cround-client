import apiInstance from "./server";

type CreatorsParams = {
  params: {
    sort: "latest" | "follow" | "review";
    filters: "youtube" | "tiktok" | "instagram" | "podcast";
  };
};

type CreatorNicknameBody = {
  nickname: string;
};

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
