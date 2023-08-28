import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type UseIndicatorProps = {
  label: string;
};

export default function useIndicator({ label }: UseIndicatorProps) {
  const [steps, setSteps] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setCurrent(searchParams.get("step"));
    switch (label) {
      case "크리에이터 등록":
        setSteps(["base", "platform", "addition", "success"]);
        break;

      case "숏클래스 등록":
        setSteps(["base", "platform", "upload", "success"]);
        break;

      case "콘텐츠 등록":
        setSteps(["base", "platform", "success"]);
        break;

      default:
        return setSteps([]);
    }
  }, [searchParams, label]);

  return {
    steps,
    current,
  };
}
