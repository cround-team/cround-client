export const PATH = {
  ROOT: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  MYPAGE: "/mypage",

  CREATORS: {
    LIST: "/creators",
    DETAIL: "/creators/detail",
    REGISTER: "/creators/register/step1",
  },
  SHORTS: {
    LIST: "/shorts",
    DETAIL: "/shorts/detail",
    REGISTER: "/shorts/register",
  },
  CONTENTS: {
    LIST: "/contents",
    DETAIL: "/contents/detail",
    REGISTER: "/shorts/register/step1",
  },
  PASSWORD: {
    SEND: "/password/send",
    FIND: "/password/find",
    NEW: "/password/new",
  },
};

type PathTitleType = {
  [key: string]: string;
};

export const PATH_TITLE: PathTitleType = {
  "/creators/detail": "크리에이터 소개",
  "/creators/register": "크리에이터 등록",
};
