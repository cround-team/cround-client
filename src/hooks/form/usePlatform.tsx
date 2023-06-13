import { PATH } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function usePlatform() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (platform: string) => {
    setSelected((prev) => [...prev, platform]);
  };

  const handleUnSelect = (platform: string) => {
    setSelected((prev) => prev.filter((el) => el !== platform));
  };

  const handlePrevStep = () => {
    router.back();
  };

  const handleNextStep = () => {
    let nextPath = "";
    switch (pathname) {
      case PATH.CREATORS.REGISTER.PLATFORM:
        nextPath = PATH.CREATORS.REGISTER.ADDITION;
        break;

      case PATH.SHORTS.REGISTER.PLATFORM:
        nextPath = PATH.SHORTS.REGISTER.UPLOAD;
        break;

      case PATH.CONTENTS.REGISTER.PLATFORM:
        nextPath = PATH.CONTENTS.REGISTER.SUCCESS;
        break;

      default:
        return null;
    }
    router.push(nextPath);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  };

  return {
    isDisabled,
    selected,
    handleSelect,
    handleUnSelect,
    handlePrevStep,
    handleNextStep,
    handleSubmit,
  };
}
