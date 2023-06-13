import { useEffect, useState } from "react";

import { useImmer } from "use-immer";

import { hasKey } from "@/utils/form";
import { useUploadImage } from "../useUploadImage";
import useGoPath from "../useGoPath";
import { creatorCreateApi } from "@/utils/api/creator";
import useAddInput from "../input/useAddInput";

type Steps = "base" | "platform" | "addition" | "success";
type CreatorRegisterForm = {
  profileImage: File | null;
  nickname: string;
  description: string;
  activityPlatforms: string[];
  platformHeadType: string;
  platformHeadTheme: string;
  tags: string[];
  platformUrl: string;
};

const INITIAL_STATE: CreatorRegisterForm = {
  profileImage: null,
  nickname: "",
  description: "",
  activityPlatforms: [],
  platformHeadType: "",
  platformHeadTheme: "",
  tags: [],
  platformUrl: "",
};

export default function useCreatorRegister() {
  const [form, setForm] = useImmer<CreatorRegisterForm>(INITIAL_STATE);
  const [step, setStep] = useState<Steps>("base");
  const {
    profileImage,
    nickname,
    description,
    activityPlatforms,
    platformHeadType,
    platformHeadTheme,
    tags,
    platformUrl,
  } = form;

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();
  const { handleGoMainPage } = useGoPath();

  const {
    inputValues: inputTags,
    handleAddInput,
    handleRemoveInput,
    handleChangeInput,
  } = useAddInput();

  const isDisabledBase = !(nickname && description && profileImage);
  const isDisabledPlatform = !activityPlatforms.length;
  const isDisabledAddition = !(
    platformHeadType &&
    platformHeadTheme &&
    tags.length &&
    platformUrl
  );

  useEffect(() => {
    if (selectedImage !== null) {
      setForm((draft) => {
        draft.profileImage = selectedImage;
      });
    }
  }, [selectedImage]);

  useEffect(() => {
    if (step === "platform" && isDisabledBase) {
      setStep("base");
    } else if (step === "addition" && isDisabledPlatform) {
      setStep("platform");
    }
  }, [step]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const another = ["activityPlatforms", "tags", "profileImage"];
    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (
      name !== "activityPlatforms" &&
      name !== "tags" &&
      name !== "profileImage"
    ) {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const checkedList = checked
      ? [...form.activityPlatforms, value]
      : form.activityPlatforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.activityPlatforms = checkedList;
    });
  };

  const handleAddTag = () => {
    handleAddInput();
    handleSetTag();
  };

  const handleRemoveTag = (id: string) => {
    handleRemoveInput(id);
    handleSetTag();
  };

  const handleChangeTag = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChangeInput(id, e);
    handleSetTag();
  };

  const handleSetTag = () => {
    setForm((draft) => {
      draft.tags = inputTags.map((v) => v.value);
    });
  };

  const handleSubmitBase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("platform");
  };

  const handleSubmitPlatform = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("addition");
  };

  const handleSubmitAddition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form", form);
    try {
      const formData = new FormData();

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
        setStep("success");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const getBaseStepProps = ({ ...otherProps } = {}) => ({
    isDisabledSubmit: isDisabledBase,
    nickname,
    description,
    previewImage,
    fileInputRef,
    handleFileChange,
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
  const getAdditionStepProps = ({ ...otherProps } = {}) => ({
    isDisabledSubmit: isDisabledAddition,
    activityPlatforms,
    platformHeadTheme,
    platformHeadType,
    platformUrl,
    inputTags,
    handlePrevStep: () => setStep("platform"),
    handleAddTag,
    handleRemoveTag,
    handleChangeTag,
    handleChangeForm,
    handleSubmit: handleSubmitAddition,
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
    getAdditionStepProps,
    getSuccessStepProps,
  };
}
