import { conversionUserType } from "@/utils/conversion";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { useImmer } from "use-immer";

type User = {
  type: string;
};

type AuthContextProps = {
  user: User;
  onSetUserType: (roleName: string) => void;
};

const INITIAL_USER = {
  type: sessionStorage.getItem("roleName") ?? "nonMember",
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useImmer<User>(INITIAL_USER);

  const handleSetUserType = (roleName: string) => {
    setUser((draft) => {
      draft.type = roleName;
    });
  };

  const contextValue = {
    user,
    onSetUserType: handleSetUserType,
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
