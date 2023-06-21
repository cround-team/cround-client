import { creatorFollowApi, creatorUnFollowApi } from "@/utils/api";

export default function useFollow() {
  const handleFollow = async (id: number) => {
    let followed = false;
    try {
      const response = await creatorFollowApi(id);
      followed = response.data.followed;
    } catch (error) {
      console.error(error);
    } finally {
      return { followed };
    }
  };

  const handleUnFollow = async (id: number) => {
    let followed = false;
    try {
      const response = await creatorUnFollowApi(id);
      followed = response.data.followed;
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
