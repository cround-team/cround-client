import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useImmer } from "use-immer";

import { hasKey } from "@/utils/form";
import useGoPath from "../useGoPath";
import querystring from "querystring";

type Steps = "base" | "platform" | "success";
type ContentRegisterForm = {
  title: string;
  description: string;
  platforms: string[];
};

const INITIAL_STATE: ContentRegisterForm = {
  title: "",
  description: "",
  platforms: [],
};

export default function useContentRegister() {
  const [form, setForm] = useImmer<ContentRegisterForm>(INITIAL_STATE);
  const [step, setStep] = useState<Steps>("base");
  const { title, description, platforms } = form;
  const router = useRouter();

  const isDisabledBase = !(title && description);
  const isDisabledPlatform = !platforms.length;

  const { handleGoMainPage } = useGoPath();

  useEffect(() => {
    if (step === "platform" && isDisabledBase) {
      setStep("base");
    }

    const query = { step };
    const queryString = querystring.stringify(query);
    const url = `/creators/register?${queryString}`;
    router.push(url);
  }, [step]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "platforms") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const checkedList = checked
      ? [...form.platforms, value]
      : form.platforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.platforms = checkedList;
    });
  };

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("platform");
  };

  const handleSubmitPlatform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("success");
    // Api 통신 =>
    console.log("form", form);
  };

  const getBaseStepProps = ({ ...otherProps } = {}) => ({
    isDisabledSubmit: isDisabledBase,
    title,
    description,
    handleChangeForm,
    handleSubmit: handleSubmitBase,
    ...otherProps,
  });

  const getPlatformStepProps = ({ ...otherProps } = {}) => ({
    isDisabledSubmit: isDisabledPlatform,
    handlePrevStep: () => setStep("base"),
    handleChange: handleChangePlatform,
    handleSubmit: handleSubmitPlatform,
    ...otherProps,
  });

  const getSuccessStepProps = ({ ...otherProps } = {}) => ({
    handleGoMainPage,
    ...otherProps,
  });

  return {
    step,
    getBaseStepProps,
    getPlatformStepProps,
    getSuccessStepProps,
  };
}
