import apiInstance from "../server";

type creatorsBody = {
  params: {
    sort: "latest" | "follow" | "review";
    filters: "youtube" | "tiktok" | "instagram" | "podcast";
  };
};

export const creatorsApi = async (params: Record<string, any>) => {
  try {
    const response = await apiInstance.get("/api/creators", { params });

    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
