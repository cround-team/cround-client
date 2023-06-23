import { LocalStorage } from "@/constants";
import axios, { AxiosInstance } from "axios";

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
// apiInstance.interceptors.response.use(
//   (res) => {
//     const accessToken = res.data?.data?.accessToken;
//     accessToken && localStorage.setItem("accessToken", accessToken);

//     return res;
//   },
//   (err) => {
//     if (
//       err.response?.status === 401 &&
//       err.response?.data?.message === "Authorization dont exist"
//     ) {
//       localStorage.removeItem("accessToken");
//     }

//     return err.response;
//   }
// );
