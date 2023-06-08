import type { Platforms } from "@/types/service";
import { hasKey } from "@/utils/form";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { useImmer } from "use-immer";

type TitleDesc = {
  title: string;
  desc: string;
};

type PlatformsData = {
  platforms: string[];
};

type Video = {
  thumbnail: any;
  url: string;
};

type FormData = TitleDesc & PlatformsData & Video;

type InputContextProps = {
  formData: FormData;
  handleSetValues: (name: string, value: string | string[]) => void;
  handleSetTitleDesc: (inputValues: TitleDesc) => void;
  handleSetVideo: (video: Video) => void;
  handleSetPlatforms: (platforms: string[]) => void;
};

type SetFormData = (
  recipeUpdater: (draft: FormData) => void | FormData
) => void;

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const ShortRegisterProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useImmer<FormData>({
    title: "",
    desc: "",
    platforms: [""],
    thumbnail: "",
    url: "",
  });

  const handleSetTitleDesc = (inputValues: TitleDesc) => {
    setFormData((draft) => {
      draft.title = inputValues.title;
      draft.desc = inputValues.desc;
    });
  };

  const handleSetVideo = (video: Video) => {
    setFormData((draft) => {
      draft.thumbnail = video.thumbnail;
      draft.url = video.url;
    });
  };

  const handleSetPlatforms = (platforms: string[]) => {
    setFormData((draft) => {
      draft.platforms = platforms;
    });
  };

  const handleSetValues = (name: string, value: string | string[]) => {
    if (!hasKey(formData, name)) {
      throw new Error("is not valid name");
    }
    setFormData((draft) => {
      draft[name] = value;
    });
  };

  return (
    <InputContext.Provider
      value={{
        formData,
        handleSetValues,
        handleSetTitleDesc,
        handleSetPlatforms,
        handleSetVideo,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useShortRegisterContext = (): InputContextProps => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error(
      "useShortRegisterContext은 ShortRegisterProvider 내에서 사용되어야 합니다."
    );
  }
  return context;
};
