import { useShortRegisterContext } from "@/context/ShortRegisterContext";
import { hasKey } from "@/utils/form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useImmer } from "use-immer";

type Inputs = {
  title: string;
  desc: string;
  platforms: string[];
  thumbnail: string;
  url: string;
};

export default function useShortRegister() {
  const [inputValues, setInputValues] = useImmer<Inputs>({
    title: "",
    desc: "",
    platforms: [""],
    thumbnail: "",
    url: "",
  });
  const {
    formData,
    handleSetValues,
    handleSetTitleDesc,
    handleSetPlatforms,
    handleSetVideo,
  } = useShortRegisterContext();
  const router = useRouter();

  const isBaseDisabled = !(inputValues.title && inputValues.desc);
  const isUploadDisabled = !(formData.thumbnail && inputValues.url);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    if (!hasKey(inputValues, name)) {
      throw new Error("is not valid name");
    }

    if (name === "title") {
      setInputValues((draft) => {
        draft.title = value;
      });
    } else if (name === "desc") {
      setInputValues((draft) => {
        draft.desc = value;
      });
    } else if (name === "url") {
      setInputValues((draft) => {
        draft.url = value;
      });
    }
  };

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetTitleDesc({
      title: inputValues.title,
      desc: inputValues.desc,
    });
    router.push("/shorts/register/platform");
  };

  const handleSubmitPlatform = (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => {
    e.preventDefault();
    handleSetPlatforms(selected);
    router.push("/shorts/register/upload");
  };

  const handleSubmitVideo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetVideo({
      thumbnail: inputValues.thumbnail,
      url: inputValues.desc,
    });
    router.push("/shorts/register/video");
  };

  return {
    inputValues,
    //
    isBaseDisabled,
    isUploadDisabled,
    //
    handleChangeForm,
    //
    handleSubmitBase,
    handleSubmitPlatform,
    handleSubmitVideo,
  };
}
