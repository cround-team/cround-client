import { usePathname } from "next/navigation";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { useImmer } from "use-immer";

import { SessionStorage } from "@/constants";

type User = {
  socialLogin?: boolean;
  creatorId?: number | null;
  memberId?: number | null;
  nickname?: string;
  profileImage?: string | null;
  roleName?: string;
};

type AuthContextProps = {
  user: User;
  onSetUserRoleName: (roleName: string) => void;
  onSetUserInfo: (userInfo: User) => void;
};

const INITIAL_USER: User = {
  socialLogin: SessionStorage.getItem("socialLogin") === "true",
  creatorId: Number(SessionStorage.getItem("creatorId")) ?? null,
  memberId: Number(SessionStorage.getItem("memberId")) ?? null,
  nickname: SessionStorage.getItem("nickname") ?? "",
  profileImage: SessionStorage.getItem("profileImage") ?? null,
  roleName: SessionStorage.getItem("roleName") ?? "",
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useImmer<User>(INITIAL_USER);
  const pathname = usePathname();

  const handleSetUserInfo = (userInfo: User) => {
    const {
      socialLogin,
      creatorId,
      memberId,
      nickname,
      profileImage,
      roleName,
    } = userInfo;

    setUser((draft) => {
      draft.nickname = nickname || user.nickname;
      draft.socialLogin = socialLogin || user.socialLogin;
      draft.profileImage = profileImage || user.profileImage;
      draft.roleName = roleName || user.roleName;
      draft.creatorId = creatorId || user.creatorId;
      draft.memberId = memberId || user.memberId;
    });
  };

  const handleSetUserRoleName = (roleName: string) => {
    setUser((draft) => {
      draft.roleName = roleName;
    });
  };

  const contextValue = {
    user,
    onSetUserRoleName: handleSetUserRoleName,
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
