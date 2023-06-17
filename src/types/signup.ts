export type SignupForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  platforms: string[];
};

export type SignupValid = {
  name: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  nickname: boolean;
};

export type SignupMessage = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};
export type SignupStep = "base" | "nickname" | "platform" | "success";
