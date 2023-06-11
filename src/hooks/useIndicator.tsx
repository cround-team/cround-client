import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type UseIndicatorProps = {
  label: string;
};

export default function useIndicator({ label }: UseIndicatorProps) {
  const [steps, setSteps] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    let lastPath = pathname.split("/");
    switch (label) {
      case "크리에이터 등록":
        setSteps(["base", "platform", "addition", "success"]);
        lastPath = pathname.split("/");
        setCurrent(lastPath[lastPath.length - 1]);
        break;

      case "숏클래스 등록":
        setSteps(["base", "platform", "upload", "success"]);
        lastPath = pathname.split("/");
        setCurrent(lastPath[lastPath.length - 1]);
        break;

      case "콘텐츠 등록":
        setSteps(["base", "platform", "success"]);
        lastPath = pathname.split("/");
        setCurrent(lastPath[lastPath.length - 1]);
        break;

      default:
        return setSteps([]);
    }
  }, [pathname, label]);

  return {
    steps,
    current,
  };
}
