import { useEffect } from "react";

export default function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  onClose: () => void
) {
  useEffect(() => {
    const handleClickOutside: EventListener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [ref, onClose]);
}
