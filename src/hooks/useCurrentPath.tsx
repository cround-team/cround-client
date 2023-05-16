"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return currentPath;
};

export default useCurrentPath;
