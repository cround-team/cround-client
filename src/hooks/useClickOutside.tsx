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
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClose]);
}
