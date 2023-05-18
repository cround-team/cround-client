import { usePathname } from "next/navigation";

const usePathMatch = (path: string): boolean => {
  const pathname = usePathname();
  return pathname === path;
};

export default usePathMatch;
