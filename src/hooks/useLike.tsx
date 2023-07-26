import {
  contentCancelLikeApi,
  contentLikeApi,
  shortCancelLikeApi,
  shortLikeApi,
} from "@/utils/api";

export default function useLike() {
  const handleLikeShort = async (id: number) => {
    let liked = false;
    let likesCount = 0;

    try {
      const response = await shortLikeApi(id);
      liked = response.data.liked;
      likesCount = response.data.likesCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        liked,
        likesCount,
      };
    }
  };

  const handleCancelLikeShort = async (id: number) => {
    let liked = false;
    let likesCount = 0;

    try {
      const response = await shortCancelLikeApi(id);
      liked = response.data.liked;
      likesCount = response.data.likesCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        liked,
        likesCount,
      };
    }
  };

  const handleLikeContent = async (id: number) => {
    let liked = false;
    let likesCount = 0;

    try {
      const response = await contentLikeApi(id);
      liked = response.data.liked;
      likesCount = response.data.likesCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        liked,
        likesCount,
      };
    }
  };

  const handleCancelLikeContent = async (id: number) => {
    let liked = false;
    let likesCount = 0;

    try {
      const response = await contentCancelLikeApi(id);
      liked = response.data.liked;
      likesCount = response.data.likesCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        liked,
        likesCount,
      };
    }
  };

  return {
    handleLikeShort,
    handleCancelLikeShort,
    handleLikeContent,
    handleCancelLikeContent,
  };
}
