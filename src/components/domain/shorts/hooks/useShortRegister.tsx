import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useImmer } from "use-immer";

import querystring from "querystring";
import { PATH } from "@/constants";
import { hasKey } from "@/utils/form";
import { useUploadImage } from "@/hooks";
import { shortRegisterApi } from "@/utils/api";

type Steps = "base" | "platform" | "upload" | "success";
type ShortRegisterForm = {
  title: string;
  description: string;
  platform: string;
  thumbnail: File | null;
  url: string;
};

const INITIAL_STATE: ShortRegisterForm = {
  title: "",
  description: "",
  platform: "",
  thumbnail: null,
  url: "",
};

export default function useShortRegister() {
  const [form, setForm] = useImmer<ShortRegisterForm>(INITIAL_STATE);
  const [step, setStep] = useState<Steps>("base");
  const { title, description, platform, thumbnail, url } = form;

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  const router = useRouter();
  const searchParams = useSearchParams();

  const isDisabledBase = !(title && description);
  const isDisabledPlatform = !platform;
  const isDisabledUpload = !(thumbnail && url);

  useEffect(() => {
    if (step === "platform" && isDisabledBase) {
      setStep("base");
    } else if (step === "upload" && isDisabledPlatform) {
      setStep("platform");
    }
    const query = { step };
    const queryString = querystring.stringify(query);
    const url = `${PATH.SHORTS.REGISTER}?${queryString}`;
    router.push(url);
  }, [step]);

  useEffect(() => {
    const query = searchParams.get("step");
    if (query) {
      setStep(query as Steps);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedImage !== null) {
      setForm((draft) => {
        draft.thumbnail = selectedImage;
      });
    }
  }, [selectedImage]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "platform" && name !== "thumbnail") {
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

  const handleSubmitPlatform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("upload");
  };

  const handleSubmitUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", form);

    try {
      const formData = new FormData();

      if (thumbnail) {
        formData.append("thumbnailImage", thumbnail);
      }
      const shortFormSaveRequest = {
        title,
        content: description,
        platformType: platform,
        shortFormUrl: url,
      };
      formData.append(
        "shortFormSaveRequest",
        new Blob([JSON.stringify(shortFormSaveRequest)], {
          type: "application/json",
        })
      );
      const res = await shortRegisterApi(formData);
      console.log("res", "res");
      if (res.status === 201) {
        console.log("201", res);
        setStep("success");
      }
    } catch (error: any) {
      console.log(error);
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
    handleChange: handleChangePlatform,
    handlePrevStep: () => setStep("base"),
    handleSubmit: handleSubmitPlatform,
    ...otherProps,
  });

  const getUploadStepProps = ({ ...otherProps } = {}) => ({
    isDisabledSubmit: isDisabledUpload,
    url,
    fileInputRef,
    previewImage,
    handlePrevStep: () => setStep("platform"),
    handleFileChange,
    handleChangeForm,
    handleSubmit: handleSubmitUpload,
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
    getUploadStepProps,
    getSuccessStepProps,
  };
}
