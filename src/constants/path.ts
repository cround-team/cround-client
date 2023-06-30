export const PATH = {
  ROOT: "/",
  AUTH: "/auth",
  SEARCH: "/search",
  PASSWORD: {
    SEND: "/password/send",
    FIND: "/password/find",
    NEW: "/password/new",
  },
  MYPAGE: {
    EDIT: "/mypage/edit",
    FOLLOW: "/mypage/follow",
    BOOKMARK: "/mypage/bookmark",
    ASKED: "/mypage/asked",
  },

  CREATORS: {
    LIST: "/creators",
    DETAIL: "/creators/detail",
    REGISTER: "/creators/register",
    EDIT: "/creators/edit",
  },
  SHORTS: {
    LIST: "/shorts",
    DETAIL: "/shorts/detail",
    REGISTER: "/shorts/register",
    EDIT: "/shorts/edit",
  },
  CONTENTS: {
    LIST: "/contents",
    DETAIL: "/contents/detail",
    REGISTER: "/contents/register",
    EDIT: "/contents/edit",
  },
};

export const PATH_TITLE: Record<string, string> = {
  "/creators/detail": "크리에이터 소개",
  "/creators/register": "크리에이터 등록",
  "/creators/edit": "개인정보 변경",
  "/shorts/detail": "숏클래스",
  "/shorts/register": "숏클래스 등록",
  "/shorts/edit": "숏클래스 수정",
  "/contents/detail": "콘텐츠",
  "/contents/register": "콘텐츠 등록",
  "/contents/edit": "콘텐츠 수정",
  "/mypage/bookmark": "나의 북마크",
  "/mypage/follow": "나의 팔로우",
  "/mypage/edit": "멘티 개인정보 변경",
};
