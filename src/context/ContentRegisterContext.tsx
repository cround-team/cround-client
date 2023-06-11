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
};

type FormContextProps = {
  formData: FormData;
  platforms: string[];
  handleChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSetPlatforms: (platforms: string[]) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const ContentRegisterProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useImmer<FormData>({
    title: "",
    description: "",
  });
  const [platforms, setPlatforms] = useState([""]);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(formData, name)) {
      throw new Error("is not valid name");
    }
    setFormData((draft) => {
      draft[name] = value;
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
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useContentRegisterContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useContentRegisterContext는 ContentRegisterProvider 내에서 사용되어야 합니다."
    );
  }
  return context;
};
