import { conversionUserType } from "@/utils/conversion";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { useImmer } from "use-immer";

type User = {
  creatorId: number;
  name: string;
  connectType: string;
  profileImage: string;
  type: string;
};

type AuthContextProps = {
  user: User;
  onSetUserType: (roleName: string) => void;
  onSetUserInfo: (userInfo: User) => void;
};

const INITIAL_USER = {
  name: "",
  connectType: "",
  profileImage: "",
  type: sessionStorage.getItem("roleName") ?? "nonMember",
  creatorId: 0,
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useImmer<User>(INITIAL_USER);

  const handleSetUserInfo = (userInfo: User) => {
    const { name, connectType, profileImage, type, creatorId } = userInfo;

    setUser((draft) => {
      draft.name = name || user.name;
      draft.connectType = connectType || user.connectType;
      draft.profileImage = profileImage || user.profileImage;
      draft.type = type || user.type;
      draft.creatorId = creatorId || user.creatorId;
    });
  };

  const handleSetUserType = (roleName: string) => {
    setUser((draft) => {
      draft.type = roleName;
    });
  };

  const contextValue = {
    user,
    onSetUserType: handleSetUserType,
    onSetUserInfo: handleSetUserInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext는 AuthContextProvider 내에서 사용되어야 합니다."
    );
  }
  return context;
};
