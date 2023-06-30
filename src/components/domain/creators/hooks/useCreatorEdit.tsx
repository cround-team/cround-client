import { v4 as uuidv4 } from "uuid";

import avatarImg from "public/images/avatar.png";
import { PATH } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import { useUploadImage } from "@/hooks";
import { creatorsDetailApi } from "@/utils/api";
import { creatorEditApi } from "@/utils/api/mypage";
import { hasKey } from "@/utils/form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import useAddInput from "./useAddInput";

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

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();
  const { user, onSetUserInfo } = useAuthContext();

  useEffect(() => {
    // fetchDetailData();
    testDetailData();
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
      const body = {};

      const response = await creatorsDetailApi(user.creatorId);
      setForm((draft) => {
        draft.profileImage = response.data.profileImage;
        draft.nickname = response.data.nickname;
        draft.activityPlatforms = response.data.activityPlatforms;
        draft.platformHeadType = response.data.platformHeadType;
        draft.platformUrl = response.data.platformUrl;
        draft.platformHeadTheme = response.data.platformHeadTheme;
        draft.tags = response.data.tags;
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

  const testDetailData = async () => {
    const response = {
      profileImage: "/images/profile.png",
      nickname: "코코",
      description: "ddddddddddddddddddd",
      activityPlatforms: ["PODCAST", "YOUTUBE"],
      platformHeadType: "YOUTUBE",
      platformUrl: "https://www.youtube.com",
      platformHeadTheme: "ASMR",
      tags: ["test1", "test2"],
    };
    setForm(response);
    const tt = response.tags.map((tag: string) => ({
      id: uuidv4(),
      value: tag,
    }));
    setCustomTags(tt);
  };

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!isModified) setIsModified(true);
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
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

    const checkedList = checked
      ? [...form.activityPlatforms, value]
      : form.activityPlatforms.filter((v) => v !== value);

    setForm((draft) => {
      draft.activityPlatforms = checkedList;
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

    setCustomTags((prev) => {
      const updatedValues = prev.map((item) =>
        item.id === id ? { ...item, value } : item
      );

      return updatedValues;
    });
    setForm((draft) => {
      draft.tags = customTags.map((v) => v.value);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const formData = new FormData();

    //   if (imageFile) {
    //     formData.append("profileImage", profileImage);
    //   }

    //   const creatorSaveRequest = {
    //     nickname,
    //     description,
    //     platformHeadType,
    //     platformHeadTheme,
    //     platformUrl,
    //     tags,
    //     activityPlatforms,
    //   };
    //   formData.append(
    //     "creatorSaveRequest",
    //     new Blob([JSON.stringify(creatorSaveRequest)], {
    //       type: "application/json",
    //     })
    //   );
    //   const res = await creatorEditApi(formData);
    //   console.log("res", "res");
    //   if (res.status === 200) {
    // const userInfo = {
    //   name: nickname,
    //   type: "creator",
    //   profileImage: "",
    //   connectType: "",
    //   creatorId: 0,
    // };
    // onSetUserInfo(userInfo);
    //     router.push(PATH.ROOT);
    //   }
    // } catch (error: any) {
    //   console.log(error);
    // }

    try {
      const body = {
        nickname,
        description,
        platformHeadType,
        platformHeadTheme,
        platformUrl,
        tags,
        activityPlatforms,
      };
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  };

  return {
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
