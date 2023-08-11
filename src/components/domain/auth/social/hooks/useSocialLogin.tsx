import { LocalStorage, PATH, SessionStorage } from "@/constants";
import { useAuthContext } from "@/context/AuthContext";
import { kakaoLoginApi } from "@/utils/api";
import { conversionUserType } from "@/utils/conversion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useSocialLogin() {
  const [code, setCode] = useState("");
  const { onSetUserInfo } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code") as string;
    setCode(code);
    code && login(code);
  }, [code]);

  const login = async (code: string) => {
    try {
      const params = {
        code,
      };
      const res = await kakaoLoginApi(params);

      if (res.status === 200) {
        const accessToken = res.data.accessToken;
        const roleName = conversionUserType(res.data.roleName);
        LocalStorage.setItem("accessToken", accessToken);
        SessionStorage.setItem("roleName", roleName);
        SessionStorage.setItem("creatorId", res.data.creatorId);
        SessionStorage.setItem("memberId", res.data.memberId);
        SessionStorage.setItem("profileImage", res.data.profileImage);
        SessionStorage.setItem(
          "socialLogin",
          res.data.socialLogin ? "true" : "false"
        );
        SessionStorage.setItem("nickname", res.data.nickname);

        const userInfo = {
          nickname: res.data.nickname,
          roleName: roleName,
          profileImage: res.data.profileImage,
          socialLogin: res.data.socialLogin,
          creatorId: res.data.creatorId,
          memberId: res.data.memberId,
        };
        onSetUserInfo(userInfo);
        router.push(PATH.ROOT);
      }
    } catch (error: any) {
      console.error(error);
    }
  };
}
