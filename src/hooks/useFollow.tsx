import { creatorFollowApi, creatorUnFollowApi } from "@/utils/api";

export default function useFollow() {
  const handleFollow = async (id: number) => {
    let followed = false;
    try {
      const response = await creatorFollowApi(id);
      followed = response.status === 200 && true;
    } catch (error) {
      console.error(error);
    } finally {
      return { followed };
    }
  };

  const handleUnFollow = async (id: number) => {
    let followed = true;
    try {
      const response = await creatorUnFollowApi(id);
      followed = response.status === 200 && false;
    } catch (error) {
      console.error(error);
    } finally {
      return { followed };
    }
  };

  return {
    handleFollow,
    handleUnFollow,
  };
}
