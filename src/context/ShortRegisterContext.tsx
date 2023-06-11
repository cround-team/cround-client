import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { useImmer } from "use-immer";

import { hasKey } from "@/utils/form";

type FormData = {
  title: string;
  description: string;
  thumbnail: File | null;
  url: string;
};

type FormContextProps = {
  formData: FormData;
  platforms: string[];
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSetPlatforms: (platforms: string[]) => void;
  handleSetFile: (file: File) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const ShortRegisterProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useImmer<FormData>({
    title: "",
    description: "",
    thumbnail: null,
    url: "",
  });
  const [platforms, setPlatforms] = useState([""]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(formData, name)) {
      throw new Error("is not valid name");
    }

    if (name !== "thumbnail") {
      setFormData((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleSetFile = (file: File) => {
    setFormData((draft) => {
      draft.thumbnail = file;
    });
  };

  const handleSetPlatforms = (platforms: string[]) => {
    setPlatforms(platforms);
  };

  const contextValue = {
    formData,
    platforms,
    handleChangeForm,
    handleSetPlatforms,
    handleSetFile,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useShortRegisterContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useShortRegisterContext은 ShortRegisterProvider 내에서 사용되어야 합니다."
    );
  }
  return context;
};
