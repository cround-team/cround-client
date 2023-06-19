import {
  contentBookmarkApi,
  contentCancelBookmarkApi,
  shortBookmarkApi,
  shortCancelBookmarkApi,
} from "@/utils/api";

export default function useBookmark() {
  const handleBookmarkShort = async (id: number) => {
    let bookmarked = false;
    let bookmarksCount = 0;

    try {
      const response = await shortBookmarkApi(id);
      bookmarked = response.data.bookmarked;
      bookmarksCount = response.data.bookmarksCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        bookmarked,
        bookmarksCount,
      };
    }
  };

  const handleCancelBookmarkShort = async (id: number) => {
    let bookmarked = false;
    let bookmarksCount = 0;

    try {
      const response = await shortCancelBookmarkApi(id);
      bookmarked = response.data.bookmarked;
      bookmarksCount = response.data.bookmarksCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        bookmarked,
        bookmarksCount,
      };
    }
  };

  const handleBookmarkContent = async (id: number) => {
    let bookmarked = false;
    let bookmarksCount = 0;

    try {
      const response = await contentBookmarkApi(id);
      bookmarked = response.data.bookmarked;
      bookmarksCount = response.data.bookmarksCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        bookmarked,
        bookmarksCount,
      };
    }
  };

  const handleCancelBookmarkContent = async (id: number) => {
    let bookmarked = false;
    let bookmarksCount = 0;

    try {
      const response = await contentCancelBookmarkApi(id);
      bookmarked = response.data.bookmarked;
      bookmarksCount = response.data.bookmarksCount;
    } catch (error) {
      console.error(error);
    } finally {
      return {
        bookmarked,
        bookmarksCount,
      };
    }
  };

  return {
    handleBookmarkShort,
    handleCancelBookmarkShort,
    handleBookmarkContent,
    handleCancelBookmarkContent,
  };
}
