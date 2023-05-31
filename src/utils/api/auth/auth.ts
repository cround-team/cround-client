import apiInstance from "../server";

type SignupBody = {
  username: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  interestPlatform: any;
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
  try {
    const response = await apiInstance.post("/api/members", body);

    return response;
  } catch (error) {
    throw error;
  }
};

export const emailDupCheckApi = async (body: EmailDupCheckBody) => {
  try {
    const response = await apiInstance.post(
      "/api/members/validations/email",
      body
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const nicknameDupCheckApi = async (body: NicknameDupCheckBody) => {
  try {
    const response = await apiInstance.post(
      "/api/members/validations/nickname",
      body
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginApi = async (body: LoginBody) => {
  try {
    const response = await apiInstance.post("/auth/login", body);

    return response;
  } catch (error) {
    throw error;
  }
};

// export const signupApi = async (params?: Record<string, any>, body?: any) => {
//   try {
//     const response = await apiInstance.post("/api/members", body);

//     return response;
//   } catch (error) {
//     throw new Error("API 호출에 실패했습니다.");
//   }
// };
