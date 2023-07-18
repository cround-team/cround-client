import axios, { AxiosError, AxiosInstance } from "axios";

import { LocalStorage, SessionStorage } from "@/constants";

export const apiInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const multiPartInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

export const mockInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-type": "application/json",
  },
});

// Axios 요청시 인터셉트
apiInstance.interceptors.request.use((req) => {
  const accessToken = LocalStorage.getItem("accessToken");
  if (accessToken) {
    req.headers["authorization"] = `Bearer ${accessToken}`;
  }

  return req;
});

multiPartInstance.interceptors.request.use((req) => {
  const accessToken = LocalStorage.getItem("accessToken");
  if (accessToken) {
    req.headers["authorization"] = `Bearer ${accessToken}`;
  }

  return req;
});

// Axios 응답시 인터셉트
apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // 401 에러 처리 로직
      // window.location.href = "/auth";
      LocalStorage.removeItem("accessToken");
      SessionStorage.initUser();
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
