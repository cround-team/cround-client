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
    if (label === "크리에이터 등록") {
      setSteps(["base", "platform", "addition", "success"]);
      const lastPath = pathname.split("/");
      setCurrent(lastPath[lastPath.length - 1]);
    } else {
      setSteps([]);
    }
  }, [pathname, label]);

  return {
    steps,
    current,
  };
}
