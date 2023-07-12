import { useEffect } from "react";

export default function useHiddenScroll(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
}
