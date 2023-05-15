"use client";

import { useMediaQuery } from "react-responsive";

const useDeviceType = () => {
  const isMobile = useMediaQuery({ minWidth: 360 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useDeviceType;
