import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { useImmer } from "use-immer";

import { hasKey } from "@/utils/form";
import useAddInput from "@/hooks/input/useAddInput";

type FormData = {
  nickname: string;
  description: string;
  platformHeadType: string;
  platformHeadTheme: string;
  platformUrl: string;
  profileImage: File | null;
};

type FormContextProps = {
  formData: FormData;
  tags: string[];
  activityPlatforms: string[];
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSetFile: (file: File) => void;
  handleSetTags: (tag: string[]) => void;
  handleSetActivityPlatforms: (platforms: string[]) => void;
  handleSetPlatformHeadType: (selected: string) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const CreatorRegisterProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useImmer<FormData>({
    nickname: "",
    description: "",
    platformHeadType: "",
    platformHeadTheme: "",
    platformUrl: "",
    profileImage: null,
  });
  const [tags, setTags] = useState([""]);
  const [activityPlatforms, setActivityPlatforms] = useState([""]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(formData, name)) {
      throw new Error("is not valid name");
    }

    if (name !== "profileImage") {
      setFormData((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleSetFile = (file: File) => {
    setFormData((draft) => {
      draft.profileImage = file;
    });
  };

  const handleSetTags = (tag: string[]) => setTags(tag);

  const handleSetActivityPlatforms = (platforms: string[]) => {
    setActivityPlatforms(platforms);
  };

  const handleSetPlatformHeadType = (selected: string) => {
    setFormData((draft) => {
      draft.platformHeadType = selected;
    });
  };

  const contextValue = {
    formData,
    tags,
    activityPlatforms,
    handleChangeForm,
    handleSetTags,
    handleSetFile,
    handleSetActivityPlatforms,
    handleSetPlatformHeadType,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useCreatorRegisterContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useCreatorRegisterContext CreatorRegisterProvider 내에서 사용되어야 합니다."
    );
  }
  return context;
};
