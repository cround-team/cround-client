"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PATH, PATH_TITLE } from "@/constants";

const STEP_HEADER = [
  PATH.CREATORS.DETAIL,
  PATH.CREATORS.REGISTER,
  PATH.CREATORS.EDIT,
  PATH.CONTENTS.DETAIL,
  PATH.CONTENTS.REGISTER,
  PATH.CONTENTS.EDIT,
  PATH.SHORTS.DETAIL,
  PATH.SHORTS.REGISTER,
  PATH.SHORTS.EDIT,
  PATH.MYPAGE.BOOKMARK,
  PATH.MYPAGE.FOLLOW,
  PATH.MYPAGE.EDIT,
  PATH.MYPAGE.NOTICE,
];

const NAV_HEADER = [
  PATH.CREATORS.LIST,
  PATH.SHORTS.LIST,
  PATH.CONTENTS.LIST,
  PATH.SEARCH,
];

export type HeaderType = "default" | "step" | "navigate";

const useChangeHeader = () => {
  const [headerType, setHeaderType] = useState<HeaderType>("default");
  const [stepName, setStepName] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === PATH.ROOT) {
      setHeaderType("navigate");
    } else if (NAV_HEADER.find((path) => pathname === path)) {
      setHeaderType("navigate");
    } else if (STEP_HEADER.some((path) => pathname.includes(path))) {
      setHeaderType("step");
      // setStepName(PATH_TITLE[pathname.substring(0, pathname.lastIndexOf("/"))]);
      setStepName(
        PATH_TITLE[pathname] ||
          PATH_TITLE[pathname.substring(0, pathname.lastIndexOf("/"))]
      );
    } else {
      setHeaderType("default");
    }
  }, [pathname]);

  return { headerType, stepName };
};

export default useChangeHeader;
