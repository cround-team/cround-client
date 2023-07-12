import { usePathname } from "next/navigation";
import React, { useLayoutEffect } from "react";

interface ScrollToTopProps {
  children: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <> {children}</>;
};

export default ScrollToTop;
