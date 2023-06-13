import { useRouter } from "next/navigation";

import { PATH } from "@/constants";

export default function useGoPath() {
  const router = useRouter();

  const handleGoMainPage = () => router.push(PATH.ROOT);

  return {
    handleGoMainPage,
  };
}
