import { useEffect, useMemo, useState } from "react";
import { useImmer } from "use-immer";
import querystring from "querystring";
import { v4 as uuidv4 } from "uuid";

import { hasKey } from "@/utils/form";

import { creatorCreateApi } from "@/utils/api/creator";
import useAddInput from "./useAddInput";
import { useRouter, useSearchParams } from "next/navigation";
import { PATH, SessionStorage } from "@/constants";
import { useUploadImage } from "@/hooks";
import { useAuthContext } from "@/context/AuthContext";

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

  const { onSetUserInfo } = useAuthContext();
  const {
    isLoading,
    selectedImage,
    previewImage,
    fileInputRef,
    handleFileChange,
  } = useUploadImage();

  const router = useRouter();
  const searchParams = useSearchParams();

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
    const query = { step };
    const queryString = querystring.stringify(query);
    const url = `${PATH.CREATORS.REGISTER}?${queryString}`;
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
    setForm((draft) => {
      draft.platformHeadType = activityPlatforms[0];
    });
    setStep("addition");
  };

  const handleSubmitAddition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      if (res.status === 201) {
        SessionStorage.setItem("roleName", "creator");
        SessionStorage.setItem("nickname", nickname);
        SessionStorage.setItem("profileImage", res.data.profileImage);
        SessionStorage.setItem("creatorId", res.data.creatorId);

        const userInfo = {
          nickname,
          roleName: "creator",
          profileImage: res.data.profileImage,
          creatorId: res.data.creatorId,
        };
        onSetUserInfo(userInfo);
        setStep("success");
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const getBaseStepProps = ({ ...otherProps } = {}) => ({
    isLoading,
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
    activityPlatforms,
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
    handleGoMainPage: () => router.push(PATH.ROOT),
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
