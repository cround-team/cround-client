import { useRouter } from "next/navigation";

import { PATH } from "@/constants";
import { useShortRegisterContext } from "@/context/ShortRegisterContext";
import { useEffect } from "react";
import { useUploadImage } from "../useUploadImage";

export default function useShortRegister() {
  const router = useRouter();
  const {
    formData: { title, description, thumbnail, url },
    platforms,
    handleSetPlatforms,
    handleSetFile,
  } = useShortRegisterContext();

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  useEffect(() => {
    if (!title || !description) {
      router.push(PATH.SHORTS.REGISTER.BASE);
    } else if (!platforms.length) {
      router.push(PATH.SHORTS.REGISTER.PLATFORM);
    }
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      handleSetFile(selectedImage);
    }
  }, [selectedImage]);

  const isBaseDisabled = !(title && description);
  const isUploadDisabled = !(thumbnail && url);

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(PATH.SHORTS.REGISTER.PLATFORM);
  };

  const handleSubmitPlatform = (
    e: React.FormEvent<HTMLFormElement>,
    selected: string[]
  ) => {
    e.preventDefault();
    handleSetPlatforms(selected);
    router.push(PATH.SHORTS.REGISTER.UPLOAD);
  };

  const handleSubmitApi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("title", title);
    console.log("description", description);
    console.log("platforms", platforms);
    console.log("thumbnail", thumbnail);
    console.log("url", url);

    // API 성공시
    // router.push(PATH.SHORTS.REGISTER.SUCCESS);
  };

  const handlePrevStep = () => router.back();

  return {
    isBaseDisabled,
    isUploadDisabled,
    //
    previewImage,
    fileInputRef,
    //
    handleFileChange,
    handlePrevStep,
    handleSubmitBase,
    handleSubmitPlatform,
    handleSubmitApi,
  };
}
