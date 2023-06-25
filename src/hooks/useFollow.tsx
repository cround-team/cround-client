import { creatorFollowApi, creatorUnFollowApi } from "@/utils/api";

export default function useFollow() {
  const handleFollow = async (id: number) => {
    let followed = false;
    try {
      const response = await creatorFollowApi(id);
      console.log("response", response);
      if (response?.data.hasOwnProperty("followed")) {
        followed = response.data.followed;
      }
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
      console.log("response", response);
      if (response?.data.hasOwnProperty("followed")) {
        followed = response.data.followed;
      }
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
