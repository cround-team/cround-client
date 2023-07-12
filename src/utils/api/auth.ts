import { LocalStorage, SessionStorage } from "@/constants";
import { apiInstance } from "./server";

type SignupBody = {
  username: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  interestPlatforms: string[];
};

type EmailDupCheckBody = {
  email: string;
};

type NicknameDupCheckBody = {
  nickname: string;
};

type LoginBody = {
  email: string;
  password: string;
};

export const signupApi = async (body: SignupBody) => {
  const response = await apiInstance.post("/api/members", body);

  return response;
};

export const emailDupCheckApi = async (body: EmailDupCheckBody) => {
  const response = await apiInstance.post(
    "/api/members/validations/email",
    body
  );

  return response;
};

export const nicknameDupCheckApi = async (body: NicknameDupCheckBody) => {
  const response = await apiInstance.post(
    "/api/members/validations/nickname",
    body
  );

  return response;
};

export const loginApi = async (body: LoginBody) => {
  const response = await apiInstance.post("/auth/login", body);

  return response;
};

export const logoutApi = () => {
  LocalStorage.removeItem("accessToken");
  SessionStorage.initUser();
  window.location.replace("/auth");
};

export const kakaoSocialApi = async (params?: Record<string, any>) => {
  const response = await apiInstance.get(
    "https://kauth.kakao.com/oauth/authorize",
    { params }
  );

  return response;
};
