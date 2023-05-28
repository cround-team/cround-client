"use client";

import { PATH } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const REGISTER_PAGES = [
  PATH.CONTENTS.REGISTER,
  PATH.SHORTS.REGISTER,
  PATH.CREATORS.REGISTER,
];

const useNavHeader = () => {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsRegisterPage(REGISTER_PAGES.includes(pathname));
  }, [pathname]);

  return isRegisterPage;
};

export default useNavHeader;
