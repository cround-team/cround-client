"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PATH, PATH_TITLE } from "@/constants";

const STEP_HEADER = [
  PATH.CREATORS.DETAIL,
  PATH.CREATORS.REGISTER,
  PATH.SHORTS.DETAIL,
  PATH.SHORTS.REGISTER,
  PATH.CONTENTS.DETAIL,
  PATH.CREATORS.REGISTER,
];

const NAV_HEADER = [PATH.CREATORS.LIST, PATH.SHORTS.LIST, PATH.CONTENTS.LIST];

const useChangeHeader = () => {
  const [isStepHeader, setIsStepHeader] = useState(false);
  const [isNavHeader, setIsNavHeader] = useState(false);
  const [stepTitle, setStepTitle] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === PATH.ROOT) {
      setIsNavHeader(true);
      setIsStepHeader(false);
      setStepTitle("");
    } else if (STEP_HEADER.some((path) => pathname.includes(path))) {
      setIsStepHeader(true);
      setIsNavHeader(false);
      setStepTitle(PATH_TITLE[pathname]);
    } else if (NAV_HEADER.some((path) => pathname.includes(path))) {
      setIsNavHeader(true);
      setIsStepHeader(false);
      setStepTitle("");
    } else {
      setIsNavHeader(false);
      setIsStepHeader(false);
      setStepTitle("");
    }
  }, [pathname]);

  return { isStepHeader, isNavHeader, stepTitle };
};

export default useChangeHeader;
