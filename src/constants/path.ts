export const PATH = {
  ROOT: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  MYPAGE: "/mypage",

  CREATORS: {
    LIST: "/creators",
    DETAIL: "/creators/detail",
    REGISTER: {
      BASE: "/creators/register/base",
      PLATFORM: "/creators/register/platform",
      ADDITION: "/creators/register/addition",
      SUCCESS: "/creators/register/success",
    },
  },
  SHORTS: {
    LIST: "/shorts",
    DETAIL: "/shorts/detail",
    REGISTER: {
      BASE: "/shorts/register/base",
      PLATFORM: "/shorts/register/platform",
      UPLOAD: "/shorts/register/upload",
      SUCCESS: "/shorts/register/success",
    },
  },
  CONTENTS: {
    LIST: "/contents",
    DETAIL: "/contents/detail",
    REGISTER: {
      BASE: "/contents/register/base",
      PLATFORM: "/contents/register/platform",
      SUCCESS: "/contents/register/success",
    },
  },
  PASSWORD: {
    SEND: "/password/send",
    FIND: "/password/find",
    NEW: "/password/new",
  },
};

export const PATH_TITLE: Record<string, string> = {
  "/creators/detail": "크리에이터 소개",
  "/creators/register": "크리에이터 등록",
};
