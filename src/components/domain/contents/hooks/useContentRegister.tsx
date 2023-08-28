import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useImmer } from "use-immer";

import { hasKey } from "@/utils/form";

import querystring from "querystring";
import { PATH } from "@/constants";
import { contentRegisterApi } from "@/utils/api";

type Steps = "base" | "platform" | "success";
type ContentRegisterForm = {
  title: string;
  description: string;
  platform: string;
};

const INITIAL_STATE: ContentRegisterForm = {
  title: "",
  description: "",
  platform: "",
};

export default function useContentRegister() {
  const [form, setForm] = useImmer<ContentRegisterForm>(INITIAL_STATE);
  const [step, setStep] = useState<Steps>("base");
  const { title, description, platform } = form;
  const router = useRouter();
  const searchParams = useSearchParams();

  const isDisabledBase = !(title && description);
  const isDisabledPlatform = !platform;

  useEffect(() => {
    if (step === "platform" && isDisabledBase) {
      setStep("base");
    }
    const query = { step };
    const queryString = querystring.stringify(query);
    const url = `${PATH.CONTENTS.REGISTER}?${queryString}`;
    router.push(url);
  }, [step]);

  useEffect(() => {
    const query = searchParams.get("step");
    if (query) {
      setStep(query as Steps);
    }
  }, [searchParams]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "platform") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    checked &&
      setForm((draft) => {
        draft.platform = value;
      });
  };

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("platform");
  };

  const handleSubmitPlatform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = {
        platformType: platform,
        title,
        content: description,
      };
      const res = await contentRegisterApi(body);
      if (res.status === 201) {
        setStep("success");
      }
    } catch (error: any) {
      console.error(error);
    }
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
    selectedPlatform: platform,
    handlePrevStep: () => setStep("base"),
    handleChange: handleChangePlatform,
    handleSubmit: handleSubmitPlatform,
    ...otherProps,
  });

  const getSuccessStepProps = ({ ...otherProps } = {}) => ({
    handleGoMainPage: () => router.push(PATH.ROOT),
    ...otherProps,
  });

  return {
    step,
    getBaseStepProps,
    getPlatformStepProps,
    getSuccessStepProps,
  };
}
