import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useImmer } from "use-immer";

import { PATH } from "@/constants";
import { hasKey } from "@/utils/form";
import { useUploadImage } from "../useUploadImage";
import useGoPath from "../useGoPath";

type Steps = "base" | "platform" | "upload" | "success";
type ShortRegisterForm = {
  title: string;
  description: string;
  platforms: string[];
  thumbnail: File | null;
  url: string;
};

const INITIAL_STATE: ShortRegisterForm = {
  title: "",
  description: "",
  platforms: [],
  thumbnail: null,
  url: "",
};

export default function useShortRegister() {
  const [form, setForm] = useImmer<ShortRegisterForm>(INITIAL_STATE);
  const [step, setStep] = useState<Steps>("base");
  const { title, description, platforms, thumbnail, url } = form;

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();
  const { handleGoMainPage } = useGoPath();

  const isDisabledBase = !(title && description);
  const isDisabledPlatform = !platforms.length;
  const isDisabledUpload = !(thumbnail && url);

  useEffect(() => {
    if (step === "platform" && isDisabledBase) {
      setStep("base");
    } else if (step === "upload" && isDisabledPlatform) {
      setStep("platform");
    }
  }, [step]);

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
    } else if (name !== "platforms" && name !== "thumbnail") {
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
    setStep("upload");
  };

  const handleSubmitUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", form);
    //API 호출..
    // 성공시
    // setStep("success");
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
    handleGoMainPage,
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
