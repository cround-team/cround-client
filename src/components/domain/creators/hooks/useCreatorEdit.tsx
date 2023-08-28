import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

import { PATH } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import { useUploadImage } from "@/hooks";
import { creatorsDetailApi } from "@/utils/api";
import { creatorEditApi } from "@/utils/api/mypage";
import { hasKey } from "@/utils/form";
import { conversionEnPlatform, conversionPlatform } from "@/utils/conversion";

type EditForm = {
  imageFile?: File | null;
  profileImage: string;
  nickname: string;
  description: string;
  activityPlatforms: string[];
  platformHeadType: string;
  platformUrl: string;
  platformHeadTheme: string;
  tags: string[];
};

const INITIAL_STATE = {
  imageFile: null,
  profileImage: "",
  nickname: "",
  description: "",
  activityPlatforms: [],
  platformHeadType: "",
  platformUrl: "",
  platformHeadTheme: "",
  tags: [],
};

const INITIAL_TAGS = [
  {
    id: uuidv4(),
    value: "",
  },
];

export default function useCreatorEdit() {
  const [form, setForm] = useImmer<EditForm>(INITIAL_STATE);
  const [customTags, setCustomTags] = useState(INITIAL_TAGS);
  const [isModified, setIsModified] = useState(false);
  const {
    imageFile,
    profileImage,
    nickname,
    description,
    activityPlatforms,
    platformHeadType,
    platformUrl,
    platformHeadTheme,
    tags,
  } = form;

  const router = useRouter();
  const isDisabledSubmit = !(
    nickname &&
    description &&
    profileImage &&
    activityPlatforms &&
    platformHeadType &&
    platformUrl &&
    platformHeadTheme &&
    tags &&
    isModified
  );

  const {
    isLoading,
    selectedImage,
    previewImage,
    fileInputRef,
    handleFileChange,
  } = useUploadImage();
  const { user, onSetUserInfo } = useAuthContext();

  useEffect(() => {
    fetchDetailData();
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      setForm((draft) => {
        draft.imageFile = selectedImage;
      });
      if (!isModified) setIsModified(true);
    }

    if (previewImage !== null) {
      setForm((draft) => {
        draft.profileImage = previewImage;
      });
      if (!isModified) setIsModified(true);
    }
  }, [selectedImage]);

  const fetchDetailData = async () => {
    try {
      const response = await creatorsDetailApi(user.creatorId as number);
      setForm((draft) => {
        draft.profileImage = response.data.profileImage;
        draft.nickname = response.data.creatorNickname;
        draft.activityPlatforms = response.data.activityPlatforms;
        draft.platformHeadType = response.data.platformHeadType;
        draft.platformUrl = response.data.platformUrl;
        draft.platformHeadTheme = response.data.platformHeadTheme;
        draft.tags = response.data.tags;
        draft.description = response.data.description;
      });
      const tt = response.data.tags.map((tag: string) => ({
        id: uuidv4(),
        value: tag,
      }));
      setCustomTags(tt);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!isModified) setIsModified(true);
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name === "platformHeadType") {
      setForm((draft) => {
        draft.platformHeadType = conversionPlatform(value) as string;
      });
    } else if (
      name !== "activityPlatforms" &&
      name !== "imageFile" &&
      name !== "tags"
    ) {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isModified) setIsModified(true);
    const { value, checked } = e.target;

    if (!checked && activityPlatforms.length <= 1) return;

    const checkedList = checked
      ? [...form.activityPlatforms, value]
      : form.activityPlatforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.activityPlatforms = checkedList;
      draft.platformHeadType = conversionPlatform(checkedList[0]) as string;
    });
  };

  const handleAddTag = () => {
    setCustomTags((prev) => [
      ...prev,
      {
        id: uuidv4(),
        value: "",
      },
    ]);
    setForm((draft) => {
      draft.tags = customTags.map((v) => v.value);
    });
  };

  const handleRemoveTag = (id: string) => {
    setCustomTags((prev) => prev.filter((item) => item.id !== id));
    setForm((draft) => {
      draft.tags = customTags.map((v) => v.value);
    });
  };

  const handleChangeTag = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!isModified) setIsModified(true);
    const { value } = e.target;

    const updatedValues = customTags.map((item) => {
      return item.id === id ? { ...item, value } : item;
    });

    setCustomTags(updatedValues);
    // setCustomTags((prev) => {
    //   const updatedValues = prev.map((item) =>
    //     item.id === id ? { ...item, value } : item
    //   );

    //   return updatedValues;
    // });
    setForm((draft) => {
      draft.tags = updatedValues.map((v) => v.value);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const creatorUpdateRequest = {
      nickname,
      description,
      platformHeadType: conversionEnPlatform(platformHeadType),
      platformHeadTheme,
      platformUrl,
      tags,
      activityPlatforms,
    };
    try {
      const formData = new FormData();

      imageFile && formData.append("profileImage", profileImage);
      formData.append(
        "creatorUpdateRequest",
        new Blob([JSON.stringify(creatorUpdateRequest)], {
          type: "application/json",
        })
      );
      const res = await creatorEditApi(formData);

      if (res.status === 200) {
        const userInfo = {
          nickname,
          profileImage: res.data.profileImage,
        };
        onSetUserInfo(userInfo);
        router.push(PATH.ROOT);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return {
    isLoading,
    isDisabledSubmit,
    customTags,
    handleAddTag,
    handleRemoveTag,
    handleChangeTag,
    previewImage,
    form,
    fileInputRef,
    handleChangeForm,
    handleChangePlatform,
    handleFileChange,
    handleSubmit,
  };
}
