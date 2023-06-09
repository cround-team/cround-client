import {
  ContentCardData,
  CreatorCardData,
  ReviewCardData,
  ShortCardData,
} from "@/types/card";

export async function getMainCreators(): Promise<CreatorCardData[]> {
  const filePath = "/data/card/creator.json"; // 파일 경로를 수정해야 할 수 있습니다.

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getListCreators(): Promise<CreatorCardData[]> {
  const filePath = "/data/card/creatorList.json";

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDetailCreators(): Promise<any[]> {
  const filePath = "/data/user/creator.json";

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMainShorts(): Promise<ShortCardData[]> {
  const filePath = "/data/card/short.json"; // 파일 경로를 수정해야 할 수 있습니다.

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMainContents(): Promise<ContentCardData[]> {
  const filePath = "/data/card/content.json"; // 파일 경로를 수정해야 할 수 있습니다.

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getReviews(): Promise<ReviewCardData[]> {
  const filePath = "/data/card/review.json";

  try {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
