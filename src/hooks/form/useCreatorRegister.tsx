import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { useCreatorRegisterContext } from "@/context/CreatorRegisterContext";
import { PATH } from "@/constants";
import { creatorCreateApi, creatorNicknameCheckApi } from "@/utils/api/creator";
import { useUploadImage } from "../useUploadImage";
import useAddInput from "../input/useAddInput";

export default function useCreatorRegister() {
  const router = useRouter();
  const {
    formData: {
      nickname,
      description,
      platformHeadType,
      platformHeadTheme,
      platformUrl,
      profileImage,
    },
    activityPlatforms,
    tags,
    handleSetActivityPlatforms,
    handleSetTags,
    handleSetFile,
  } = useCreatorRegisterContext();

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  const {
    inputValues: inputTags,
    handleAddInput: handleAddTag,
    handleRemoveInput: handleRemoveTag,
    handleChangeInput: handleChangeTag,
  } = useAddInput();

  useEffect(() => {
    if (!nickname || !description || !profileImage) {
      router.push(PATH.CREATORS.REGISTER.BASE);
    } else if (!activityPlatforms.length) {
      router.push(PATH.CREATORS.REGISTER.PLATFORM);
    }
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      handleSetFile(selectedImage);
    }
  }, [selectedImage]);

  useEffect(() => {
    if (inputTags.length > 0) {
      const tags = inputTags.map((tag) => tag.value);
      handleSetTags(tags);
    }
  }, [inputTags]);

  const isBaseDisabled = !(nickname && description && profileImage);
  const isAdditionDisabled = !(
    platformHeadType &&
    platformHeadTheme &&
    tags.length &&
    platformUrl
  );

  const handleSubmitBase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { nickname };
      const res = await creatorNicknameCheckApi(body);
      if (res.status === 200) {
        console.log("res", res);
        router.push(PATH.CREATORS.REGISTER.PLATFORM);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleSubmitPlatform = (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => {
    e.preventDefault();
    handleSetActivityPlatforms(selected);
    router.push(PATH.CREATORS.REGISTER.ADDITION);
  };

  const handleSubmitApi = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      console.log(
        nickname,
        description,
        platformHeadType,
        platformHeadTheme,
        platformUrl,
        profileImage,
        tags,
        activityPlatforms
      );

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const creatorSaveRequest = {
        nickname,
        description,
        platformHeadType,
        platformHeadTheme,
        platformUrl,
        tags,
        activityPlatforms,
      };
      formData.append(
        "creatorSaveRequest",
        new Blob([JSON.stringify(creatorSaveRequest)], {
          type: "application/json",
        })
      );
      const res = await creatorCreateApi(formData);
      console.log("res", res);
      if (res.status === 201) {
        console.log("201", res);
        router.push(PATH.CREATORS.REGISTER.SUCCESS);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handlePrevStep = () => router.back();

  return {
    isBaseDisabled,
    isAdditionDisabled,
    //
    previewImage,
    fileInputRef,
    inputTags,
    //
    handleFileChange,
    handleAddTag,
    handleChangeTag,
    handleRemoveTag,
    //
    handlePrevStep,
    //
    handleSubmitBase,
    handleSubmitPlatform,
    handleSubmitApi,
  };
}
