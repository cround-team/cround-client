import { CreatorCardData } from "@/types/card";

export async function getAllCreator(): Promise<CreatorCardData[]> {
  const filePath = "/data/card/creator.json"; // 파일 경로를 수정해야 할 수 있습니다.

  try {
    const response = await fetch(filePath);
    console.log("response", response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
