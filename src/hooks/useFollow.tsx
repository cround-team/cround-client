import { creatorFollowApi, creatorUnFollowApi } from "@/utils/api";

export default function useFollow() {
  const handleFollow = async (targetId: number) => {
    try {
      const body = {
        sourceId: "",
        targetId,
      };
      return await creatorFollowApi(body);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnFollow = async (targetId: number) => {
    try {
      const params = {
        sourceId: "",
        targetId,
      };
      return await creatorUnFollowApi(params);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleFollow,
    handleUnFollow,
  };
}
